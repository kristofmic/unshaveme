import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import App from './components/App';

function Main(props) {
  return (
    <ReduxProvider store={props.store}>
      <App />
    </ReduxProvider>
  );
}

export default Main;
