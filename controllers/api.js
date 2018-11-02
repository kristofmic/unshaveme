import { Router } from 'express';
import conf from 'nconf';

import { logger } from '../lib/logger';
import { sendMessage } from '../lib/twilio';

const HOST = conf.get('host');
const ORIGIN = conf.get('origin');

const router = new Router();

router.post('/text', textLink);

function textLink(req, res, next) {
  console.log('req.headers', req.headers);
  if (req.headers.origin !== ORIGIN) {
    const notAllowed = new Error(
      `Not allowed ${req.headers.host} | ${req.headers.origin}`
    );
    notAllowed.status = 401;
    return next(notAllowed);
  }

  return sendMessage('I am groot!', req.body.phoneNumber)
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
