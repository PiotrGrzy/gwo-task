import styled from 'styled-components';

export const StyledCartItem = styled.li`
  display: grid;
  margin-bottom: 1rem;
  grid-template-columns: 10rem 1fr repeat(4, auto);
  gap: 1rem;
  justify-items: auto;
  align-items: center;
  padding: 1rem;
  background-color: var(--white);
  box-shadow: var(--box-shadow);
  font-size: 1.6rem;
  img {
    width: 6rem;
  }
`;
