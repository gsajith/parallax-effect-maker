import styled from "styled-components";
import Tilt from "react-parallax-tilt";

const ParallaxFrame = styled(Tilt)`
  transform-style: preserve-3d;
  width: 90vw;
  max-width: 500px;
  position: relative;
  border: 1px solid black;
  outline: ${(props) => (props.mattingWidth ? props.mattingWidth : 0)}px solid
    white;
`;

export default ParallaxFrame;
