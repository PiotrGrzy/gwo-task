import styled from 'styled-components';

export const StyledSummary = styled.div`
  display: flex;
  justify-content: space-evenly;
  box-shadow: var(--box-shadow);
  background-color: var(--white);
  padding: 1rem;

  span {
    display: block;
    font-size: 1.8rem;
  }

  span:last-child {
    font-size: 2.4rem;
  }

  div {
    height: 12rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid #c8bebe;
  }

  div:last-child {
    border-right: ${(props) => (props.withLink ? '1px solid #c8bebe' : 'none')};
  }
`;
