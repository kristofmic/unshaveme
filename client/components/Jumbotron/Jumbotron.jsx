import React from 'react';

import GetLinkModal from './GetLinkModal';
import PlaceholderImage from '../PlaceholderImage';
import TextLinkForm from './TextLinkForm';

import withTextLink from '../../connectors/withTextLink';

function Jumbotron({ isModalVisible, hideModal, nodeRef, result, number }) {
  return (
    <div className="container" id="jumbotron">
      <div className="jumbotron bg-transparent d-flex flex-column justify-content-center align-items-center">
        <div className="row justify-content-center">
          <div className="col-md-9 col-12 px-0">
            <img
              className="mb-3 mb-md-4 mw-100"
              src="https://d30am0anjtu1dn.cloudfront.net/images/illustration@2x.jpg"
              alt="Man selecting beard through unshave me app"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-9 col-12">
            <h1 className="display-4 text-center mb-3">
              This November, see yourself with facial hair before you grow it
              out.
            </h1>
            <div className="d-none d-md-block">
              <p className="text-center mb-3 mb-md-4">
                See yourself with facial hair before you grow it out. Be warned:
                it's freakishly real.
              </p>
              {result && (
                <div className="d-flex justify-content-center align-items-center pt-2 pb-4">
                  <i className="fas fa-check-circle text-success fs-h4 mb-0 mr-2" />
                  <p className="mb-0">
                    <strong className="mr-2">Link sent!</strong>
                    <span>{`We sent a download link to ${number}`}</span>
                  </p>
                </div>
              )}
              {!result && <TextLinkForm />}
            </div>
            <div className="d-block d-md-none d-flex flex-column align-items-center">
              <p className="text-center text-muted mb-5 mb-md-4">
                Be warned: it's freakishly real.
              </p>
              <a href="https://bit.ly/unshave">
                <img src="https://d30am0anjtu1dn.cloudfront.net/images/download_app_store.svg" height="90" />
              </a>
              <a href="https://bit.ly/unshaveandroid">
                <img src="https://d30am0anjtu1dn.cloudfront.net/images/google-play-badge.png" height="120" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <GetLinkModal
        onDismiss={hideModal}
        show={isModalVisible}
        nodeRef={nodeRef}
        result={result}
        number={number}
      />
    </div>
  );
}

export default withTextLink(Jumbotron);
