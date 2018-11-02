import React, { PureComponent } from 'react';
import cx from 'classnames';

import ButtonWithLoading from '../ButtonWithLoading';

import withTextLink from '../../connectors/withTextLink';

class TextLinkForm extends PureComponent {
  render() {
    const { block = false, loading, number, onChange, onSubmit } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <div
          className={cx('justify-content-center', {
            'form-row': !block,
          })}>
          <div
            className={cx('form-group col-12', {
              'col-md-6 offset-md-0 col-lg-6': !block,
            })}>
            <label htmlFor="phoneNumber" className="sr-only">
              Phone number
            </label>
            <input
              type="tel"
              className="form-control form-control-lg"
              id="phoneNumber"
              placeholder="(336) 867-5309"
              onChange={onChange}
              value={number}
            />
          </div>
          <div
            className={cx('form-group col-12', {
              'col-md-6 offset-md-0 col-lg-4': !block,
            })}>
            <ButtonWithLoading
              type="submit"
              loading={loading}
              className="btn btn-primary text-white text-uppercase btn-block btn-lg">
              Text me the link
            </ButtonWithLoading>
          </div>
        </div>
      </form>
    );
  }
}

export default withTextLink(TextLinkForm);
