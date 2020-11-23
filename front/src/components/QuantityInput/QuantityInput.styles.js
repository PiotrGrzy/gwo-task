import styled from 'styled-components';

export const StyledQuantityInput = styled.div`
  display: flex;

  input {
    text-align: center;
    font-size: inherit;
    width: 5rem;
    background-color: var(--secondary-light);
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.disabled ? '#dbdada' : 'var(--primary-light)'};
  padding: 1rem;
  border-radius: 5px 0 0 5px;
  cursor: ${(props) => (props.disabled ? 'no-drop' : 'pointer')};
  :last-child {
    border-radius: 0 5px 5px 0;
  }
`;
