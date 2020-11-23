import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlusIcon from '../../assets/svgs/Plus';
import MinusIcon from '../../assets/svgs/Minus';
import { StyledQuantityInput, StyledButton } from './QuantityInput.styles';

const isValid = (value) => value !== '' && value !== '-' && value !== '0';

const QuantityInput = ({ quantity, onChange }) => {
  const regexp = new RegExp(`^[0-9]*$`);
  const [internalValue, setInternalValue] = useState(quantity);

  useEffect(() => {
    setInternalValue(quantity);
  }, [quantity]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (regexp.test(newValue)) {
      setInternalValue(newValue);
      let newValid = isValid(newValue);
      if (newValid) {
        onChange(newValue);
      }
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      onChange(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    onChange(quantity + 1);
  };

  return (
    <StyledQuantityInput>
      <StyledButton disabled={quantity < 2} onClick={decrementQuantity}>
        <MinusIcon />
      </StyledButton>
      <input
        type="text"
        value={internalValue}
        onChange={handleChange}
        onBlur={() => {
          setInternalValue(quantity);
        }}
      />
      <StyledButton onClick={incrementQuantity}>
        <PlusIcon />
      </StyledButton>
    </StyledQuantityInput>
  );
};

QuantityInput.propTypes = {
  quantity: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default QuantityInput;
