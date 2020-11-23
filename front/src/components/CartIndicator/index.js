import React from 'react';
import { useSelector } from 'react-redux';
import CartIcon from '../../assets/svgs/Cart';
import { StyledCounter, StyledCartIndicator } from './CartIndicator.styles';

const CartIndicator = () => {
  const { items } = useSelector((state) => state.cart);

  return (
    <StyledCartIndicator>
      <CartIcon />
      {items.length > 0 && (
        <StyledCounter data-testid="cart-items-count">
          {items.length}
        </StyledCounter>
      )}
    </StyledCartIndicator>
  );
};

export default CartIndicator;
