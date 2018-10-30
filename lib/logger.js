import bunyan from 'bunyan';
import conf from 'nconf';

export function createLogger(name) {
  return bunyan.createLogger({
    name,
    level: conf.get('LOG_LEVEL') || 'debug',
    serializers: bunyan.stdSerializers,
  });
}

export const logger = createLogger('server');
