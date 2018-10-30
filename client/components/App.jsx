import React from 'react';

import Separate from './Separate';

import withApp from '../connectors/withApp';

function App(props) {
  return (
    <>
      <Separate {...props} />
    </>
  );
}

export { App };
export default withApp(App);
