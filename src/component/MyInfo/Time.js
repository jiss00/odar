import React from "react";
import styled,{css} from "styled-components";

const Styledtime = styled.div`
  display: flex;
  box-sizing: border-box;
  position: absolute; 
  align-items: center;
  width: 70px;
  height: 30px;
  border-radius: 20px;
  border: 0.8px solid #5B8E31;
  background-color: #FFFFFF;
  top:439px;
 ${props =>
    props.left &&
    css`
    left: ${props.left}px;
    `}
`;

const ClockText = styled.span`
  display: flex;
  box-sizing: border-box;
  position: relative;
  width: 13px;
  height: 20px;
  font-size: 15PX;
  font-weight: 800;
  color: #5B8E31;
  left:45px;  
`;

function Time({ left }) {
  return (
    <Styledtime left={left}>
      <ClockText>시</ClockText>
    </Styledtime>
  );
}

export default Time;
