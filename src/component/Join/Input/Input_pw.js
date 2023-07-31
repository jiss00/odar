import React, { useState } from "react";
import styled from "styled-components";
import { PiEyeClosed, PiEye } from "react-icons/pi";
import Text_small from "../Text_small";

const JoinContainer1 = styled.div`
display: flex;
position: relative; 
margin: 0 auto;
width: 300px;
@media all and (min-width: 1024px){	
  margin-right:auto;
  margin-left:auto;
  width:440px;
  }
`;
const StyledInput = styled.input`
  display: flex;
  box-sizing: border-box;
  position: relative;
  border-radius: 15px;
  font-size: 24px;
  border: 2px solid #5B8E31;
  width: 335px;
  height: 50px;
  top: 190px;
  margin:0 auto;
  z-index:1;
  text-indent: 0.5em;

  ::placeholder {
    font-family: "Pretendard";
    font-size: 24px;
    color: #D9D9D9;
    font-weight: 800;
  }
  @media all and (min-width: 1024px){	
    position: relative; 
    margin-right:auto;
    margin-left:auto;
    top:310px;
    left:0px;
    width:440px;
    }
`;

const IconWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    position: relative; 
    width: 24px;
    height: 24px;
    top: 155px;
    left: 140px;
    cursor: pointer;
    margin-right:auto;
    margin-left:auto;
    z-index:1;
    
  @media all and (min-width: 1024px){	
    position: relative; 
    margin-right:auto;
    margin-left:auto;
    top:275px;
    left:200px;
    }
`;

const Circlediv = styled.div`
  display: flex;
  box-sizing: border-box;
  position: relative;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: ${({ valid }) => (valid ? "#A2C08A" : "#FF0000")};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  @media all and (min-width: 1024px){	
    position: relative; 
    top:304px;
    left:-4px;
    margin: 0 10px;
  }
  
`;

// 대소문자 유효성 검사 함수
function validateUpperCase(str) {
  return /[A-Z]/.test(str);
}

// 숫자 유효성 검사 함수
function validateNumber(str) {
  return /[0-9]/.test(str);
}

// 특수문자 유효성 검사 함수
function validateSpecialCharacter(str) {
  return /[!@#$%^&*(),.?":{}|<>]/.test(str);
}

function Input_pw(props) {
  const { onChange, ...otherProps } = props; // props에서 onChange를 추출하여 나머지 props를 otherProps로 받음

  const [isPasswordVisible, setPasswordVisible] = useState(false); // 비밀번호 숨김/보임 상태

  const [validUpperCase, setValidUpperCase] = useState(false); // 대소문자 유효성 검사 결과
  const [validNumber, setValidNumber] = useState(false); // 숫자 유효성 검사 결과
  const [validSpecialCharacter, setValidSpecialCharacter] = useState(false); // 특수문자 유효성 검사 결과

  const handleClick = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleInputChange = (event) => {
    const password = event.target.value;
    const isValid1 =validateUpperCase(password);
    const isValid2 =validateNumber(password);
    const isValid3 =validateSpecialCharacter(password);

    const isValidPassword = isValid1 && isValid2 && isValid3;

    setValidUpperCase(isValid1);
    setValidNumber(isValid2);
    setValidSpecialCharacter(isValid3);

    // 비밀번호와 유효성 검사 결과를 객체로 묶어서 한 번에 전달
    onChange({ password, isValidPassword });

  };
  
  return (
    <div style={{ position: "relative" }}>
      
      <StyledInput {...otherProps} type={isPasswordVisible ? "text" : "password"} onChange={handleInputChange} />
      <IconWrapper onClick={handleClick}>
        {isPasswordVisible ? <PiEye size={24}/> : <PiEyeClosed size={24}/>}
      </IconWrapper>

      <JoinContainer1>
        <Text_small 대소문자>대문자 · 소문자</Text_small>
        <Circlediv valid={validUpperCase} top="190px" left="0px" />
        <Text_small 숫자>숫자</Text_small>
        <Circlediv valid={validNumber} top="190px" left="23px" />
        <Text_small 특수문자>특수문자</Text_small>   
        <Circlediv valid={validSpecialCharacter} top="190px" left="50px" />
      </JoinContainer1>

    </div>
  );
}

export default Input_pw;
