import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Checkout from './index';
import { render, screen, cleanup } from '../../test-utils';

const history = createMemoryHistory();

const HomePage = () => <div>Homepage</div>;

describe('Checkout component', () => {
  afterEach(() => {
    cleanup();
  });

  it('redirects to homepage when cart is empty', () => {
    render(
      <Router history={history}>
        <Route exact path="/" component={HomePage} />
        <Checkout />
      </Router>,
      { initialState: { cart: { items: [] } } }
    );
    expect(screen.getByText(/homepage/i)).toBeInTheDocument();
  });

  it('Shows loading animation while fetching', () => {
    render(<Checkout />, {
      initialState: { cart: { items: [{}] }, order: { loading: true } },
    });
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('Shows error message when occur', () => {
    render(<Checkout />, {
      initialState: { cart: { items: [{}] }, order: { error: 'test error' } },
    });
    expect(screen.getByText(/test error/i)).toBeInTheDocument();
  });
});
