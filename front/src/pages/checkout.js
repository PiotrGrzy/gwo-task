import React from 'react';
import Checkout from '../components/Checkout';
import CartSummary from '../components/CartSummary';

import Layout from '../Layout';

const CheckoutPage = () => {
  return (
    <Layout>
      <div className="container">
        <CartSummary />
        <Checkout />
      </div>
    </Layout>
  );
};

export default CheckoutPage;
