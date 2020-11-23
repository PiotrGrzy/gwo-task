import api from '../../api';
import * as actions from './orderActionTypes';
import { clearCart } from '../cart/cartActions';

export const sendOrder = order => {
  return dispatch => {
    dispatch(sendOrderRequest());
    api
      .post('/order', order)
      .then(response => {
        dispatch(clearCart());
        dispatch(sendOrderSuccess());
      })
      .catch(error => {
        dispatch(sendOrderFail(error.message));
      });
  };
};

export const sendOrderRequest = () => {
  return {
    type: actions.SEND_ORDER_REQUEST,
  };
};

export const sendOrderSuccess = () => {
  return {
    type: actions.SEND_ORDER_SUCCESS,
    payload: 'Zamówienie pomyślnie wysłano',
  };
};

export const sendOrderFail = error => {
  return {
    type: actions.SEND_ORDER_FAIL,
    payload: error,
  };
};

export const clearNotification = () => {
  return {
    type: actions.CLEAR_NOTIFICATION,
  };
};
