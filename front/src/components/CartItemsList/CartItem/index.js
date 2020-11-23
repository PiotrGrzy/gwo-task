import React from 'react';
import PropTypes from 'prop-types';
import QuantityInput from '../../QuantityInput';
import TrashIcon from '../../../assets/svgs/Trash';
import { useDispatch } from 'react-redux';
import {
  removeItemFromCart,
  setNewQuantity,
} from '../../../redux/cart/cartActions';
import { StyledCartItem } from './CartItem.styles';

const CartItem = ({ item: { data, quantity } }) => {
  const { cover_url, title, price, currency, id } = data;
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleChange = (quantity) => {
    const newQuantity = parseInt(quantity);
    dispatch(setNewQuantity(id, newQuantity));
  };

  return (
    <StyledCartItem>
      <img src={cover_url} alt={title} />
      <span className="title">{title}</span>
      <span className="price">
        {price} {currency}
      </span>
      <QuantityInput quantity={quantity} onChange={handleChange} />
      <button className="remove" onClick={() => handleRemoveFromCart(id)}>
        <TrashIcon />
      </button>
    </StyledCartItem>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      cover_url: PropTypes.string.isRequired,
      pages: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }),
    quantity: PropTypes.number.isRequired,
  }),
};

export default CartItem;
