import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Form from '../Form';
import FormInput from '../FormInput';

const AddressForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <FormInput
        type="text"
        name="first_name"
        validation={{
          required: 'Imię jest wymagane',
          minLength: {
            value: 4,
            message: 'Musi zawierać min 4 znaki',
          },
          maxLength: {
            value: 50,
            message: 'Maksymalnie 50 znaków',
          },
        }}
        label="Imię"
      />
      <FormInput
        type="text"
        name="last_name"
        validation={{
          required: 'Nazwisko jest wymagane',
          minLength: {
            value: 5,
            message: 'Musi zawierać min 5 znaków',
          },
          maxLength: {
            value: 50,
            message: 'Maksymalnie 50 znaków',
          },
        }}
        label="Nazwisko"
      />
      <FormInput
        type="text"
        name="city"
        validation={{
          required: 'Miasto jest wymagane',
          minLength: {
            value: 3,
            message: 'Musi zawierać min 3 znaki',
          },
          maxLength: {
            value: 50,
            message: 'Maksymalnie 50 znaków',
          },
        }}
        label="Miasto"
      />
      <FormInput
        type="text"
        name="zip_code"
        validation={{
          required: 'Kod pocztowy jest wymagany',
          pattern: {
            value: /\d{2}-\d{3}/,
            message: 'Poprawny format to 00-000',
          },
        }}
        label="Kod pocztowy"
      />

      <Button type="submit" large>
        Zamawiam i płacę
      </Button>
    </Form>
  );
};

AddressForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddressForm;
