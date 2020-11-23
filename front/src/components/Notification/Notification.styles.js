import styled from 'styled-components';

export const StyledNotification = styled.div`
  width: 100vw;
  height: 100vw;
  position: fixed;
  z-index: 9;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);

  .content {
    width: minmax(90%, 60rem);
    z-index: 10;
    position: fixed;
    top: 40%;
    left: 50%;
    padding: 6rem;
    transform: translate(-50%, -50%);
    background-color: var(--secondary);
  }
  h2 {
    text-align: center;
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
`;
