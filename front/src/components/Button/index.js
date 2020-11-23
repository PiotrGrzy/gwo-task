import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.object,
};

export default Button;
