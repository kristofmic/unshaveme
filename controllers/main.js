import { Router } from 'express';
import conf from 'nconf';

import reactServer from '../lib/react_server';

import { notFound } from '../lib/error';

const manifest = require('../public/manifest.json');

const PUBLIC_PATH = '/public';
const SERVER_RENDER = conf.get('serverRender');

const router = new Router();

router.use('/', defaultRoute);

function defaultRoute(req, res, next) {
  if (req.path.indexOf(PUBLIC_PATH) === 0) {
    return notFound(req, res, next);
  }

  if (SERVER_RENDER) {
    const body = reactServer();
    return renderDefaultRoute(res, { body });
  }

  renderDefaultRoute(res);
}

function renderDefaultRoute(res, locals) {
  res.status(200).render(
    'main.ejs',
    Object.assign({}, locals, {
      // css: [manifest['main.css']],
      css: [],
      js: [
        manifest['runtime~main.js'],
        manifest['vendors.js'],
        manifest['main.js'],
      ],
    })
  );
}

export default router;
