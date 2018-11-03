import conf from 'nconf';

const FORCE_HTTPS = conf.get('forceHTTPS');

export default function httpsRedirect(req, res, next) {
  if (FORCE_HTTPS && req.get('x-forwarded-proto') !== 'https') {
    return res.redirect(
      301,
      `https://www.${conf.get('host')}${req.originalUrl}`
    );
  }

  next();
}
