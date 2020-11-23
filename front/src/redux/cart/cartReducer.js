import * as actions from './cartActionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_ITEM: {
      const itemIndex = state.items.findIndex(
        (item) => item.data.id === action.payload.data.id
      );
      if (itemIndex < 0) {
        return { ...state, items: [...state.items, action.payload] };
      } else {
        const newCount =
          state.items[itemIndex].quantity + action.payload.quantity;
        const newItems = state.items.map((item) => {
          return item.data.id === action.payload.data.id
            ? { ...item, quantity: newCount }
            : item;
        });

        return { ...state, items: newItems };
      }
    }
    case actions.UPDATE_QUANTITY:
      const itemIndex = state.items.findIndex(
        (item) => item.data.id === action.payload.id
      );
      if (itemIndex < 0) return state;
      const newItems = state.items.map((item) => {
        return item.data.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item;
      });
      return {
        ...state,
        items: newItems,
      };

    case actions.REMOVE_ITEM: {
      const newItems = state.items.filter(
        (item) => item.data.id !== action.payload
      );
      return { ...state, items: newItems };
    }
    case actions.CLEAR_CART:
      return { ...state, items: [] };
    default:
      return state;
  }
};
export default cartReducer;
