import * as actions from './orderActionTypes';

const initialState = {
  loading: false,
  error: null,
  notification: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SEND_ORDER_REQUEST:
      return { ...state, loading: true, error: null };
    case actions.SEND_ORDER_SUCCESS:
      return { loading: false, error: null, notification: action.payload };
    case actions.SEND_ORDER_FAIL:
      return { loading: false, error: action.payload, notification: null };
    case actions.CLEAR_NOTIFICATION: {
      return { ...state, notification: null };
    }
    default:
      return state;
  }
};

export default orderReducer;
