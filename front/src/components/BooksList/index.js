import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from '../BookItem';
import Loader from '../Loader';
import { StyledBooksList } from './BooksList.styles';
import ErrorMessage from '../ErrorMessage';

const BooksList = () => {
  const { books, loading, error } = useSelector((state) => state.books);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div>
      <StyledBooksList>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </StyledBooksList>
    </div>
  );
};

export default BooksList;
