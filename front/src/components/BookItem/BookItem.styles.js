import styled from 'styled-components';

export const StyledBookCard = styled.li`
  .wrapper {
    height: 100%;
    display: flex;
    box-shadow: var(--box-shadow);
    border-radius: 5px;
    background-color: var(--white);
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.05);
    }
  }

  img {
    display: block;
    flex: 1;
    object-fit: contain;
    border-radius: 5px 0 0 5px;
    width: 50%;
  }

  .info {
    padding: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .title {
    font-size: 2.2rem;
  }
  .author {
    font-size: 1.8rem;
    color: var(--secondary-dark);
  }
  .pages,
  .price {
    font-size: 1.8rem;
    text-align: end;
  }

  /* .price {
    color: var(--primary);
  } */
`;
