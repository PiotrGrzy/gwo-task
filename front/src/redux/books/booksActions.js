import api from '../../api';
import * as actions from './booksActionTypes';

export const fetchAllBooks = () => {
  return (dispatch) => {
    dispatch(fetchAllBooksRequest());
    api
      .get('/book')
      .then((response) => {
        const books = response.data.data;
        dispatch(fetchAllBooksSuccess(books));
      })
      .catch((error) => {
        dispatch(fetchAllBooksFail(error.message));
      });
  };
};

export const fetchAllBooksRequest = () => {
  return {
    type: actions.FETCH_ALL_BOOKS_REQUEST,
  };
};

export const fetchAllBooksSuccess = (users) => {
  return {
    type: actions.FETCH_ALL_BOOKS_SUCCESS,
    payload: users,
  };
};

export const fetchAllBooksFail = (error) => {
  return {
    type: actions.FETCH_ALL_BOOKS_FAIL,
    payload: error,
  };
};
