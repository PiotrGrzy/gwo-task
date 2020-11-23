import React from 'react';
import CartIndicator from './index';
import { render, screen, cleanup } from '../../test-utils';

describe('Cart items counter', () => {
  afterEach(() => {
    cleanup();
  });

  it('does not show items count if cart is empty', () => {
    const items = [];
    render(<CartIndicator />, { initialState: { cart: { items } } });
    const itemsCount = screen.queryByTestId('cart-items-count');
    expect(itemsCount).toBeNull();
  });

  it('show correct number of items in cart', () => {
    const items = Array(3).fill({});
    render(<CartIndicator />, { initialState: { cart: { items } } });
    const itemsCount = screen.getByTestId('cart-items-count');
    expect(itemsCount).toHaveTextContent(items.length);
  });
});
