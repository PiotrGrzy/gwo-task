import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: var(--white);
  box-shadow: var(--box-shadow);
  .container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .link {
    font-size: 2.4rem;
    text-transform: uppercase;
    font-weight: 300;
    display: block;
    transition: color 0.2s;
    &:hover {
      color: var(--primary-light);
    }
  }
`;

export const Logo = styled.img`
  width: 15rem;
`;
