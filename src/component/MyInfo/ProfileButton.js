import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  box-sizing: border-box;
  position: absolute;
  width: 76px;
  height: 26px;
  top: 283px;
  left: 157px;
  border-radius: 5px;
  line-height: 20px;
  border: 1px solid lightgray;
  background: #5B8E31;
  color: #FFFFFF;
  text-decoration: none;
  font-family: "Pretendard";
  font-weight: 400;
  text-align: center;  
`;


 const ButtonText = styled.span`
    font-family: "Pretendard";
    width: 55px; 
    height: 14px;
    font-weight: 400
    line-height: 14.4px;
    font-size: 12px;
`;

function ProfileButton() {
    return (
      <StyledButton>
        <ButtonText >프로필 변경</ButtonText>
      </StyledButton>
    );
  }

export default ProfileButton;
