import { Router } from 'express';

const router = new Router();

router.get('/', getExample);

function getExample(req, res, next) {
  setTimeout(() => {
    if (req.query.err) {
      next(new Error('Oops! Something went wrong :('));
    } else {
      res.status(200).json({
        message: 'I am groot',
      });
    }
  }, 1000);
}

export default router;
