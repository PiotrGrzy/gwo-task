import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { StyledSummary } from './CartSummary.styles';

const CartSummary = ({ withLink = false }) => {
  const { items } = useSelector((state) => state.cart);
  const totalPrice = useMemo(
    () =>
      items.reduce((total, item) => {
        return (total += item.data.price * item.quantity);
      }, 0),
    [items]
  );

  const totalQuantity = useMemo(
    () =>
      items.reduce((total, item) => {
        return (total += item.quantity);
      }, 0),
    [items]
  );

  return (
    <StyledSummary withLink={withLink}>
      <div>
        <span>Łącznie książek: </span>
        <span>{totalQuantity} SZT</span>
      </div>
      <div>
        <span>Kwota łącznie: </span>
        <span>{totalPrice} PLN</span>
      </div>
      {withLink && (
        <Link to="/checkout">
          <Button large>Dalej</Button>
        </Link>
      )}
    </StyledSummary>
  );
};

CartSummary.propTypes = {
  withLink: PropTypes.bool,
};

export default CartSummary;
