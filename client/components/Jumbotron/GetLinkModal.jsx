import React from 'react';
import cx from 'classnames';

import TextLinkForm from './TextLinkForm';
import withAnimateIn from '../../connectors/withAnimateIn';

function GetLinkModal({ enter, nodeRef, onDismiss, show, result, number }) {
  return (
    <>
      <div
        className={cx('modal fade', { 'd-block': enter, show })}
        tabIndex="-1"
        role="dialog">
        <div className="modal-dialog" role="document" ref={nodeRef}>
          <div className="modal-content">
            <div className="modal-header py-2 border-bottom-0">
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={onDismiss}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center pb-5">
              {result && (
                <div className="d-flex flex-column align-items-center py-3">
                  <i className="fas fa-check-circle text-success fs-5r my-3" />
                  <p className="h3 font-weight-bold">Link sent!</p>
                  <p>{`We sent a download link to ${number}`}</p>
                </div>
              )}
              {!result && (
                <>
                  <p className="h3 font-weight-bold">Get the link</p>
                  <p className="text-center mb-3">
                    See yourself with facial hair before you grow it out.
                    <br />
                    Be warned: it's freakishly real.
                  </p>
                  <TextLinkForm block />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {enter && (
        <div
          className={cx('modal-backdrop fade', {
            show,
          })}
        />
      )}
    </>
  );
}

export { GetLinkModal };
const WrappedModal = withAnimateIn(GetLinkModal, {
  transitionDuration: 200,
});

WrappedModal.displayName = 'GetLinkModal';

export default WrappedModal;
