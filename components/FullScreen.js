import styled from "styled-components";

const FullScreen = styled.div`
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default FullScreen;
