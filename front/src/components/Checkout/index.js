import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendOrder } from '../../redux/order/orderActions';
import ErrorMessage from '../ErrorMessage';
import AddressForm from '../AddressForm';
import Loader from '../Loader';
import { StyledCheckout } from './Checkout.styles';
import { Redirect } from 'react-router';

const Checkout = () => {
  const { loading, error } = useSelector((state) => state.order);
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const orderItems = items.map(({ data, quantity }) => {
      return { id: data.id, quantity };
    });
    const order = { order: orderItems, ...values };
    dispatch(sendOrder(order));
  };

  if (items.length < 1) {
    return <Redirect to="/" />;
  }

  if (loading) return <Loader />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <StyledCheckout>
      <h2>Proszę wypełnić adres dla przesyłki</h2>
      <AddressForm onSubmit={onSubmit} />
    </StyledCheckout>
  );
};

export default Checkout;
