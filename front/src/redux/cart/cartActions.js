import * as actions from './cartActionTypes';

export const addItemToCart = (cartItem) => {
  return { type: actions.ADD_ITEM, payload: cartItem };
};

export const removeItemFromCart = (itemId) => {
  return { type: actions.REMOVE_ITEM, payload: itemId };
};

export const setNewQuantity = (itemId, quantity) => {
  return {
    type: actions.UPDATE_QUANTITY,
    payload: {
      id: itemId,
      quantity,
    },
  };
};

export const clearCart = () => {
  return { type: actions.CLEAR_CART };
};
