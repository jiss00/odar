import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  display:flex;
  box-sizing: border-box;
  position: absolute;
  width: 150px;
  height: 66px;
  top: 701px;
  left: 199px;
  gap: 8px;
  border-radius: 10px;
  font-size: 24px;
  line-height: 20px;
  border: 1px solid lightgray;
  background: #A2C08A;
  color: #000000;
  text-decoration: none;
  font-family: "Pretendard";
  font-weight: 800;
  text-align: center;
  
  @media all and (min-width: 1024px){	
    width: 100%; /* 너비를 100%로 설정 */
    max-width: 495px; /* 최대 너비를 495px로 제한 */
    height: 100%;
    max-height: 66px;
    top:867px;  
    left: 650px;
    margin-right: auto; 
    }
`;


const ButtonText = styled.span`
  width: 100%;
  height: 66px;
  line-height: 66px; 
  font-weight: 800;
  font-size: 24px;
  text-align: center;

  @media all and (min-width: 1024px){	
    position: relative; 
    margin: 0px auto;
    }
`;

function XButton({children}) {
  return (
    <StyledButton>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
}

export default XButton;

