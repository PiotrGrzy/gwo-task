import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { StyledError } from './ErrorMessage.styles.js';

const ErrorMessage = ({ error }) => {
  return (
    <StyledError>
      <h2>Wystąpił bląd: {error}</h2>
      <Button onClick={() => window.location.reload()}>Spróbuj ponownie</Button>
    </StyledError>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorMessage;
