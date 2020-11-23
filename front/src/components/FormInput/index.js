import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './FormInput.styles';

const FormInput = ({ register, name, errors, validation, label, ...rest }) => {
  return (
    <StyledInput>
      <label htmlFor={name}>{label}</label>
      <input
        aria-label={label}
        name={name}
        ref={register(validation)}
        {...rest}
      />
      {errors[name] && (
        <p className="validation-error">{errors[name].message}</p>
      )}
    </StyledInput>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  errors: PropTypes.object,
  validation: PropTypes.object,
  label: PropTypes.string.isRequired,
};

export default FormInput;
