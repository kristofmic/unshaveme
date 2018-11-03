import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';

import httpsRedirect from './lib/https_redirect';
import * as controllers from './controllers';
import * as error from './lib/error';

// Create Express server
const server = express();
server.set('trust proxy', true);

// Setup security
server.use(helmet());

// Setup logging
server.use(morgan('dev'));

// Setup JSON parsing
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// Setup compression
server.use(compression());

// Public assets
server.use('/public', express.static(path.join(__dirname, 'public')));

// View setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

// Routes and controllers
server.use('*', httpsRedirect);
server.use('/api', controllers.api);
server.use('/health', controllers.health);
server.use('/', controllers.main);
server.use(error.notFound);
server.use(error.handleError);

export default server;
