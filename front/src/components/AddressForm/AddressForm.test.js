import React from 'react';
import AddressForm from './index';
import {
  render,
  screen,
  cleanup,
  act,
  fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const mockedAddressFormValues = {
  firstName: 'Jonathan',
  lastName: 'Doyle',
  city: 'Warsaw',
  postalCode: '90-666',
};

describe('AddressForm component', () => {
  afterEach(() => {
    cleanup();
  });

  test('show validation error on invalid data', async () => {
    const onSubmit = jest.fn();
    render(<AddressForm onSubmit={onSubmit} />);
    const firstNameField = screen.getByRole('textbox', { name: /imię/i });
    const lastNameField = screen.getByRole('textbox', {
      name: /nazwisko/i,
    });
    userEvent.type(firstNameField, 'a');
    fireEvent.focus(lastNameField);

    await act(async () => fireEvent.blur(lastNameField));
    await act(async () => fireEvent.blur(firstNameField));

    expect(screen.getByText(/musi zawierać min 4 znaki/i)).toBeInTheDocument();
    expect(screen.getByText(/nazwisko jest wymagane/i)).toBeInTheDocument();
  });

  test('submitting the form calls onSubmit with address form values', async () => {
    const onSubmit = jest.fn();
    render(<AddressForm onSubmit={onSubmit} />);
    const firstNameField = screen.getByRole('textbox', { name: /imię/i });
    const lastNameField = screen.getByRole('textbox', {
      name: /nazwisko/i,
    });
    const cityField = screen.getByRole('textbox', { name: /miasto/i });
    const postalCodeField = screen.getByRole('textbox', {
      name: /kod pocztowy/i,
    });
    const submitButton = screen.getByRole('button', {
      name: /zamawiam i płacę/i,
    });

    const { firstName, lastName, city, postalCode } = mockedAddressFormValues;

    userEvent.type(firstNameField, firstName);
    userEvent.type(lastNameField, lastName);
    userEvent.type(cityField, city);
    userEvent.type(postalCodeField, postalCode);

    await act(async () => userEvent.click(submitButton));

    expect(onSubmit).toHaveBeenCalled();
  });
});
