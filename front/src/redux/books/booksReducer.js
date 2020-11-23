import * as actions from './booksActionTypes';

const initialState = {
  books: [],
  loading: false,
  error: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_ALL_BOOKS_SUCCESS:
      return {
        books: action.payload,
        loading: false,
        error: null,
      };
    case actions.FETCH_ALL_BOOKS_FAIL:
      return {
        books: [],
        loading: false,
        error: action.payload,
      };
    case actions.FETCH_ALL_BOOKS_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case 'RESET_ERRORS':
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export default bookReducer;
