import React from 'react';
import { useSelector } from 'react-redux';
import CartItemsList from '../components/CartItemsList';
import CartSummary from '../components/CartSummary';
import Layout from '../Layout';
import EmptyCart from '../components/EmptyCart';

const Cart = () => {
  const { items } = useSelector((state) => state.cart);

  return (
    <Layout>
      <div className="container">
        {items.length > 0 ? (
          <>
            <CartItemsList items={items} />
            <CartSummary withLink />
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </Layout>
  );
};

export default Cart;
