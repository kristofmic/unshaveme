import { Router } from 'express';
import conf from 'nconf';

const HEALTH_MESSAGE = conf.get('health');

const router = new Router();

router.get('/', getHealth);

function getHealth(req, res) {
  res.status(200).json({
    message: HEALTH_MESSAGE,
  });
}

export default router;
