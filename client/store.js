const { createStore: createReduxStore } = require('redux');

const initialState = {
  error: undefined,
  loading: false,
  number: '',
  result: undefined,
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SET_NUMBER':
      return {
        ...state,
        number: payload,
      };
    case 'TEXT_LINK':
      return {
        ...state,
        loading: true,
        error: undefined,
        result: undefined,
      };
    case 'TEXT_LINK_SENT':
      return {
        ...state,
        loading: false,
        result: payload,
      };
    case 'TEXT_LINK_ERROR':
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}

export function createStore() {
  return createReduxStore(reducer);
}
