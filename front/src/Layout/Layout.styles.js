import styled from 'styled-components';

export const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  main {
    padding: 2rem 0;
    background-color: var(--secondary-light);
  }
`;
