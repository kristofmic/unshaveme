import React from 'react';
import ReactDOM from 'react-dom';

import Main from './main';
import { createStore } from './store';

const store = createStore();

ReactDOM.render(<Main store={store} />, document.getElementById('main'));
