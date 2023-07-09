import React from "react";
import styled,{css} from "styled-components";

const CircleWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  position: absolute; 
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0.8px solid #5B8E31;
  background-color: #FFFFFF;
  top:394px;
 ${props =>
    props.left &&
    css`
    left: ${props.left}px;
    `}
`;

const CircleText = styled.span`
  width: 11px;
  height: 20px;
  font-size: 12px;
  font-weight: 800;
  color: #5B8E31;
`;

function Day({ left, text }) {
  return (
    <CircleWrapper left={left}>
      <CircleText>{text}</CircleText>
    </CircleWrapper>
  );
}

export default Day;
