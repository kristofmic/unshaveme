const { createStore: createReduxStore } = require('redux');

const initialState = {
  loading: false,
  whoAmI: 'Groot',
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'IAM':
      return Object.assign({}, state, {
        loading: false,
        whoAmI: payload,
      });
    default:
      return state;
  }
}

function createStore() {
  return createReduxStore(reducer);
}

module.exports = {
  createStore,
};
