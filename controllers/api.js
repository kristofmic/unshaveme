import { Router } from 'express';
import conf from 'nconf';

import { logger } from '../lib/logger';
import { sendMessage } from '../lib/twilio';

const HOST = conf.get('host');

const MESSAGE = `
iOS: https://bit.ly/unshave

Android: https://bit.ly/unshaveandroid

Happy unshaving :)
`;

const router = new Router();

router.post('/text', textLink);
router.get('/headers', reviewHeaders);

function textLink(req, res, next) {
  if (!req.headers.origin || !req.headers.origin.includes(HOST)) {
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

function reviewHeaders(req, res) {
  res.status(200).json({
    headers: req.headers,
  });
}

export default router;
