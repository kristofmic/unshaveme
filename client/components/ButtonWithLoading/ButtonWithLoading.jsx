import React from 'react';
import Transition from 'react-transition-group/Transition';
import cx from 'classnames';

import CircularProgress from '../CircularProgress';

const duration = 100;

function ButtonWithLoading(props) {
  const { children, className, disabled, loading, ...other } = props;

  return (
    <button {...other} className={className} disabled={disabled || loading}>
      <Transition in={loading} timeout={duration}>
        {state => (
          <>
            {loading && state === 'entered' && <CircularProgress />}
            <span className={cx('btn-body', `btn-body--${state}`)}>
              {children}
            </span>
          </>
        )}
      </Transition>
    </button>
  );
}

export default ButtonWithLoading;
