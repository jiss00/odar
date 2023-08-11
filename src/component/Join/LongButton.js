import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  display:flex;
  box-sizing: border-box;
  position: relative;
  width: 310px;
  height: 66px;
  top: -300px;
  gap: 8px;
  padding: 23px 100px;
  border-radius: 10px;
  font-size: 24px;
  line-height: 20px;
  border: 1px solid lightgray;
  background: ${(props) => (props.문의하기 === "true" ? "#5B8E31" : "#A2C08A")};
  color: ${(props) => (props.문의하기 === "true" ? "#000000" : "#5C5C5C")};
  text-decoration: none;
  font-family: "Pretendard";
  font-weight: 800;
  text-align: center;
  margin: 0px auto;
  justify-content: center; 

  @media all and (min-width: 1024px){	
    position: relative; 
    width: 1008px;
    height: 66px;
    margin-right:auto;
    margin-left:auto;
    margin-bottom: 100px;
    top:-250px;
    left:0px;
   
    }
`;


  const ButtonText = styled.span`
    width: 83px;
    height:20px;
    font-weight: 800;
    line-height: 20px;
    font-size: 24px;
    
    @media all and (min-width: 1024px){	
      position: relative; 
      margin-right:auto;
      margin-left:auto;
      top:0px;
      left:0px;
      }
  `;
  function LongButton({ children, to, 문의하기 }) {
    const is문의하기 = 문의하기 ? "true" : undefined;
    return (
      <StyledButton as={Link} to={to} 문의하기={is문의하기}>
        <ButtonText 문의하기={is문의하기} >{children}</ButtonText>
      </StyledButton>
    );
  }

export default LongButton;
