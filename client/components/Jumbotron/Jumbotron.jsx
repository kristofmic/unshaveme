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
              src="http://d30am0anjtu1dn.cloudfront.net/images/illustration@2x.svg"
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
            <p className="text-center mb-3 mb-md-4">
              <span className="d-none d-md-block">
                See yourself with facial hair before you grow it out.
              </span>
              Be warned: it's freakishly real.
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
