import React from 'react';
import Notification from './index';
import { render, screen, cleanup } from '../../test-utils';
import userEvent from '@testing-library/user-event';

describe('Notification element', () => {
  afterEach(() => {
    cleanup();
  });

  it('shows corrent message from store', () => {
    render(<Notification />, {
      initialState: { order: { notification: 'test' } },
    });
    const notificationMsg = screen.getByTestId('notification');

    expect(notificationMsg).toHaveTextContent('test');
  });
});
