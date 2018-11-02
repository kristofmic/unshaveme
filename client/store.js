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
        error: undefined,
        number: payload,
      };
    case 'SET_NUMBER_ERROR':
      return {
        ...state,
        error: payload.message,
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
    case 'TEXT_LINK_ERROR': {
      const data = payload.response.data;
      const error =
        (data && data.errors && data.errors[0] && data.errors[0].detail) ||
        'Oops! Something went wrong, please try again';
      return {
        ...state,
        loading: false,
        error,
      };
    }
    default:
      return state;
  }
}

export function createStore() {
  return createReduxStore(reducer);
}
