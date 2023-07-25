import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  box-sizing: border-box;
  position: relative;
  width: 76px;
  height: 26px;
  top: 283px;
  border-radius: 5px;
  line-height: 20px;
  border: 1px solid lightgray;
  background: #5B8E31;
  color: #FFFFFF;
  text-decoration: none;
  font-family: "Pretendard";
  font-weight: 400;
  text-align: center;  

  @media all and (min-width: 1024px){	
    position: relative;
    width:  106px; 
    height: 31px;
    top:0;
    left:0;
    }
  
`;

const ButtonWrapper = styled.div`
  display:flex;
  box-sizing: border-box;
  position: relative;
  margin: 0 auto; /* 가로 중앙 정렬 */
  width: 100%; /* 너비를 100%로 설정 */
  max-width: 76px; /* 최대 너비를 110px로 제한 */
  height: 100%;
  max-height: 26px;
  top:-610px; 

  @media all and (min-width: 1024px) {
    position: relative;
    margin: 0 auto; /* 가로 중앙 정렬 */
    width: 100%; /* 너비를 100%로 설정 */
    max-width: 106px; /* 최대 너비를 110px로 제한 */
    height: 100%;
    max-height: 31px;
    top: -350px;
    left: 0;
  }
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
      <ButtonWrapper>
      <StyledButton>
        <ButtonText >프로필 변경</ButtonText>
      </StyledButton>
      </ButtonWrapper>
    );
  }

export default ProfileButton;
