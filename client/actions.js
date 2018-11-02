import * as api from './api';

export function setNumber(number) {
  return {
    type: 'SET_NUMBER',
    payload: number,
  };
}

export function setNumberError(error) {
  return {
    type: 'SET_NUMBER_ERROR',
    payload: error,
  };
}

export function textLink(number) {
  return dispatch => {
    dispatch({
      type: 'TEXT_LINK',
      payload: number,
    });

    return api
      .textLink(number)
      .then(res =>
        dispatch({
          type: 'TEXT_LINK_SENT',
          payload: res,
        })
      )
      .catch(err =>
        dispatch({
          type: 'TEXT_LINK_ERROR',
          payload: err,
        })
      );
  };
}
