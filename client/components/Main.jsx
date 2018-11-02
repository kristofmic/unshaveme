import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import Nav from './Nav';
import Jumbotron from './Jumbotron';
import About from './About';
import Footer from './Footer';

import withToggleComponent from '../connectors/withToggleComponent';

function Main({ isModalVisible, hideModal, nodeRef, showModal, store }) {
  return (
    <ReduxProvider store={store}>
      <>
        <Nav showModal={showModal} />
        <Jumbotron
          isModalVisible={isModalVisible}
          hideModal={hideModal}
          nodeRef={nodeRef}
        />
        <About />
        <Footer />
      </>
    </ReduxProvider>
  );
}

export { Main };
export default withToggleComponent({
  autoDismiss: true,
  name: 'Modal',
  scrollLock: true,
})(Main);
