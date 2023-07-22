import React, { useState } from "react";
import styled,{css}  from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
position: relative;
display: flex;
margin-bottom: 30px;
`;

const StyledButton = styled.button`
  display:flex;
  box-sizing: border-box;
  position: relative;
  width:335px;
  height: 75px;
  top: 310px;
  margin: 0 auto;
  gap: 8px;
  padding: 25px 130px;
  border-radius: 10px;
  font-size: 24px;
  line-height: 20px;
  border: 1px solid lightgray;
  background:#A2C08A;
  color: #5C5C5C;
  text-decoration: none;
  font-family: "Pretendard";
  font-weight: 800;
  text-align: center;
  margin-bottom: 30px;

  @media all and (min-width: 1024px){	
    position: relative; 
    top: 550px;
    left:0;
    width: 440px;
    height: 66px;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:30px;
    }
`;


  const ButtonText = styled.span`
    width:67px;
    height: 29px;
    font-weight: 700;
    line-height: 29.05px;
    font-size: 24px;
    @media all and (min-width: 1024px){	
      width:100px;
      position: relative; 
      margin: 0 auto;
      top:px;
      left:0px;
      font-size: 36px;
      font-weight: 800;
      }
  `;
  function LongButton({ children, to }) {
    return (
      <StyledButton as={Link} to={to} >
        <ButtonText >{children}</ButtonText>
      </StyledButton>
    );
  }

function InputLongButton() {
  return (
    <Container>        
      <LongButton>다 음</LongButton>
    </Container>
  );
}

export default InputLongButton;