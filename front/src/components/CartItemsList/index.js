import React from 'react';
import PropTypes from 'prop-types';
import { StyledItemsList } from './CartItemsList.styles';
import CartItem from './CartItem';

const CartItemsList = ({ items }) => {
  return (
    <StyledItemsList>
      {items.map((item) => (
        <CartItem key={item.data.id} item={item} />
      ))}
    </StyledItemsList>
  );
};

CartItemsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CartItemsList;
