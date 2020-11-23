import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { StyledEmptyCart } from './EmptyCart.styles';

const EmptyCart = () => {
  return (
    <StyledEmptyCart>
      <h2>Twój koszyk jest pusty...</h2>
      <Link to="/">
        <Button>Przejdź do katologu naszych podręczników</Button>
      </Link>
    </StyledEmptyCart>
  );
};

export default EmptyCart;
