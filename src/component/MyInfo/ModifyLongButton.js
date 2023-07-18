import React, { useState } from "react";
import styled,{css}  from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
display: flex;
margin: 0 auto;
`;

const StyledButton = styled.button`
  display:flex;
  box-sizing: border-box;
  position: relative;
  width:310px;
  height: 66px;
  top: -150px;
  gap: 8px;
  padding: 25px 110px;
  border-radius: 10px;
  font-size: 24px;
  line-height: 20px;
  border: 1px solid lightgray;
  background: #5B8E31;
  color: #000000 ;
  text-decoration: none;
  font-family: "Pretendard";
  font-weight: 800;
  text-align: center;
  margin-right:auto;
  margin-left:auto;
  
  @media all and (min-width: 1024px){	
    position: relative; 
    width: 1008px;
    height: 66px;
    margin-right:auto;
    margin-left:auto;
    margin-bottom: 100px;
    top:-100px;
    left:0px;
   
    }
`;


  const ButtonText = styled.span`
    width:83px;
    height: 20px;
    font-weight: 800;
    line-height: 20px;
    @media all and (min-width: 1024px){	
      position: relative; 
      margin: 0 auto;
      top:0px;
      left:0px;
      }
  `;
  function LongButton({ children, to }) {
    return (
      <StyledButton as={Link} to={to} >
        <ButtonText >{children}</ButtonText>
      </StyledButton>
    );
  }

function ModifyLongButton() {
  return (
    <Container>        
      <LongButton>적 용</LongButton>
    </Container>
  );
}

export default ModifyLongButton;
