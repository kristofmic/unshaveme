import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Main from '../client/main';
import { createStore } from '../client/store';

function reactServer() {
  const store = createStore();

  return ReactDOMServer.renderToString(<Main store={store} />);
}

export default reactServer;
