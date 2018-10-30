import { connect } from 'react-redux';

import { setWhoIAm } from '../actions';

const withRedux = connect(
  state => state,
  {
    setWhoIAm,
  }
);

export default withRedux;
