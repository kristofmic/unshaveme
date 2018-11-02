import React from 'react';
import cx from 'classnames';

export default function CircularProgress(props) {
  const { className, text, ...other } = props;

  return (
    <div className={cx(className, 'loading')} {...other}>
      <div className="loading-icon" />
    </div>
  );
}
