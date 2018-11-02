import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { AsYouType, parsePhoneNumber } from 'libphonenumber-js';

import { textLink, setNumber, setNumberError } from '../actions';

const withRedux = connect(
  state => state,
  dispatch => ({
    textLink: (...args) => textLink(...args)(dispatch),
    setNumber: (...args) => dispatch(setNumber(...args)),
    setNumberError: (...args) => dispatch(setNumberError(...args)),
  })
);

function withTextLink(Component) {
  class WithTextLink extends PureComponent {
    handleChange = e => {
      let { value } = e.target;

      if (
        value.length < this.props.number.length &&
        value.charAt(value.length - 1).match(/\d/)
      ) {
        value = value.slice(0, value.length - 1);
      }

      gtag('event', 'enterNumber', {
        value,
      });

      this.props.setNumber(new AsYouType('US').input(value));
    };

    handleSubmit = e => {
      e.preventDefault();

      gtag('event', 'textLink', {
        value: this.props.number,
      });

      try {
        const numberInput = this.props.number.startsWith('+')
          ? this.props.number
          : `+1 ${this.props.number}`;
        const phoneNumber = parsePhoneNumber(numberInput);
        if (!phoneNumber.isValid()) {
          throw new Error('Invalid phone number');
        }
        this.props.textLink(phoneNumber.number);
      } catch (error) {
        this.props.setNumberError(error);
      }
    };

    render() {
      return (
        <Component
          {...this.props}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      );
    }
  }

  return withRedux(WithTextLink);
}

export default withTextLink;
