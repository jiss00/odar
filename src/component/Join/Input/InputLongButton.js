import React from "react";
import styled,{css}  from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
position: relative;
display: flex;
z-index:-1;
`;

const StyledButton = styled.button`
  display:flex;
  box-sizing: border-box;
  position: relative;
  width:335px;
  height: 75px;
  top: 200px;
  margin: 0 auto;
  margin-bottom:100px;
  gap: 8px;
  padding: 25px 130px;
  border-radius: 10px;
  font-size: 24px;
  line-height: 20px;
  border: 1px solid lightgray;
  background: #5B8E31;
  color: #000000;
  text-decoration: none;
  font-family: "Pretendard";
  font-weight: 800;
  text-align: center;
  align-items: center;
  cursor: pointer;
  
  /* 버튼이 비활성화된 상태에 대한 스타일 */
  ${({ disabled }) =>
    disabled &&
    `
    background:#A2C08A;
    color: #5C5C5C;
    pointer-events: none;
    cursor: not-allowed;
  `}
  
  @media all and (min-width: 1024px){	
    position: relative; 
    top: 315px;
    left:0;
    width: 440px;
    height: 66px;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:350px;
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
      top:0px;
      left:0px;
      font-size: 36px;
      font-weight: 800;
      }
  `;
  function LongButton({children, disabled,onClick}) {
    return (
      <StyledButton onClick={onClick} disabled={disabled}>
        <ButtonText >{children}</ButtonText>
      </StyledButton>
    );
  }

  function InputLongButton({validEmail, validPassword, validPasswordCheck,onClick}) {
    const isButtonDisabled = !(validEmail && validPassword && validPasswordCheck);

    return (
        
      <LongButton onClick={onClick} disabled={isButtonDisabled}>다 음</LongButton>
  );
}

export default InputLongButton;