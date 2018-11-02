import { Router } from 'express';
import conf from 'nconf';

import { logger } from '../lib/logger';
import { sendMessage } from '../lib/twilio';

const ORIGIN = conf.get('origin');
const ORIGIN_WWW = conf.get('originWWW');

const MESSAGE = `
iOS: http://bit.ly/unshave

Android: http://bit.ly/unshaveandroid

Happy unshaving :)
`;

const router = new Router();

router.post('/text', textLink);

function textLink(req, res, next) {
  console.log('req.headers', req.headers);
  if (req.headers.origin !== ORIGIN && req.headers.origin !== ORIGIN_WWW) {
    const notAllowed = new Error('Not allowed :(');
    notAllowed.status = 401;
    return next(notAllowed);
  }

  return sendMessage(MESSAGE, req.body.phoneNumber)
    .then(message => {
      res.status(200).json({
        message: message.body,
      });
    })
    .catch(err => {
      logger.error(err);
      next(err);
    });
}

export default router;
