import React from "react";
import styled from "styled-components";

const StyledTilde = styled.span`
  display: flex;
  box-sizing: border-box;
  position: absolute;
  width: 16px;
  height: 20px;
  font-size: 25px;
  line-height: 20px;
  font-weight: 400;
  color: #5B8E31;
  top:441px;
  left:225px;  
  text-align: center;
    
`;

function Tilde() {
  return (
    <StyledTilde>~</StyledTilde>
  );
}

export default Tilde;
