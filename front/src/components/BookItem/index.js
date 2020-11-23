import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cartActions';
import Button from '../Button';
import { StyledBookCard } from './BookItem.styles';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  const { title, author, cover_url, pages, price, currency } = book;

  const handleAddToCart = () => {
    const newItem = { data: book, quantity: 1 };
    dispatch(addItemToCart(newItem));
  };

  return (
    <StyledBookCard>
      <div className="wrapper">
        <img src={cover_url} alt={title} />
        <div className="info">
          <h2 className="title">{title}</h2>
          <p className="author">{author}</p>
          <p className="pages">Liczba stron: {pages}</p>
          <p className="price">
            Cena: {price} <span>{currency}</span>
          </p>
          <Button onClick={handleAddToCart}>Dodaj do koszyka</Button>
        </div>
      </div>
    </StyledBookCard>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    cover_url: PropTypes.string.isRequired,
    pages: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default BookItem;
