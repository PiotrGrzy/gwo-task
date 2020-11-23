import styled from 'styled-components';

export const StyledButton = styled.button`
  position: relative;
  z-index: 2;
  display: block;
  margin: 2rem auto;
  padding: ${props => (props.large ? '2rem 4rem' : '1rem 2rem')};
  background: linear-gradient(to bottom, var(--primary-light), var(--primary));
  color: var(--black);
  font-size: ${props => (props.large ? '2rem' : '1.6rem')};
  border-radius: 1rem;
  text-transform: capitalize;
  transition: all 0.3s;
  box-shadow: var(--box-shadow);
  font-family: inherit;

  ::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 1rem;
    background: linear-gradient(
      to bottom,
      var(--primary),
      var(--primary-light)
    );
    z-index: -1;
    transition: opacity 0.2s linear;
    opacity: 0;
  }

  :hover::before {
    opacity: 1;
  }
`;
