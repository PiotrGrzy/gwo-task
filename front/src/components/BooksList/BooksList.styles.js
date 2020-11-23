import styled from 'styled-components';

export const StyledBooksList = styled.ul`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
  }
`;

export const StyledBookItem = styled.li`
  list-style: none;
  display: block;
  padding: 1rem;
`;
