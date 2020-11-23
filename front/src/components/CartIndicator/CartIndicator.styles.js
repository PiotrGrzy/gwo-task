import styled from 'styled-components';

export const StyledCartIndicator = styled.div`
  position: relative;
  margin: 2rem;
  color: var(--secondary-dark);
  transition: color 0.2s;
  &:hover {
    color: var(--primary);
  }
  .icon {
    width: 5rem;
  }
`;

export const StyledCounter = styled.span`
  display: block;
  position: absolute;
  padding: 5px;
  border-radius: 5px;
  font-size: 1.4rem;
  top: 0;
  right: 0;
  transform: translate(50%, -70%);
  background-color: var(--primary);
  color: var(--white);
`;
