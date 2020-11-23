import styled from 'styled-components';

export const StyledInput = styled.div`
  position: relative;
  background-color: var(--white);
  padding: 1rem 4rem;

  label {
    font-weight: 700;
    color: var(--primary);
    display: block;
    margin-bottom: 0.5rem;
  }
  input {
    outline: none;
    padding: 0.5rem;
    font-size: 1.6rem;
    border: 2px solid #a0a0a0;
    border-radius: 5px;
  }
  input:active,
  input:focus {
    border: 2px solid var(--primary-light);
  }

  .validation-error {
    color: var(--error);
    margin-top: 0.5rem;
  }
`;
