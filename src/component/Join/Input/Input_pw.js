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
  font-weight:800;
  border: 2px solid #5B8E31;
  width: 335px;
  height: 50px;
  top: 150px;
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
    top: 114px;
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
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${({ valid }) => (valid ? "#A2C08A" : "#FF0000")};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  @media all and (min-width: 1024px){	
    position: relative; 
    top:302px;
    left:-4px;
    margin: 0 10px;
    width: 24px;
    height: 24px;
  }
  
`;

// 대소문자 유효성 검사 함수
function validateUpperCase(str) {
  return /[A-Z]/.test(str)&& !/[ㄱ-ㅎㅏ-ㅣ가-힣\uAC00-\uD7A3]/.test(str);
}

// 숫자 유효성 검사 함수
function validateNumber(str) {
  return /[0-9]/.test(str);
}

// 특수문자 유효성 검사 함수
function validateSpecialCharacter(str) {
  return /[!@#$%^&*(),.?":{}|<>]/.test(str);
}

//글자 수 유효성 검사 함수
function validateLength(str) {
  return /^[A-Za-z\uAC00-\uD7A3ㄱ-ㅎㅏ-ㅣ가-힣0-9!@#$%^&*(),.?":{}|<>]{8,12}$/.test(str);
}

function Input_pw(props) {
  const { onChange, ...otherProps } = props; // props에서 onChange를 추출하여 나머지 props를 otherProps로 받음

  const [isPasswordVisible, setPasswordVisible] = useState(false); // 비밀번호 숨김/보임 상태

  const [validUpperCase, setValidUpperCase] = useState(false); // 대소문자 유효성 검사 결과
  const [validNumber, setValidNumber] = useState(false); // 숫자 유효성 검사 결과
  const [validSpecialCharacter, setValidSpecialCharacter] = useState(false); // 특수문자 유효성 검사 결과
  const [validLength, setValidLength] = useState(false); // 특수문자 유효성 검사 결과

  const handleClick = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleInputChange = (event) => {
    const password = event.target.value;
    const isValid1 =validateUpperCase(password);
    const isValid2 =validateNumber(password);
    const isValid3 =validateSpecialCharacter(password);
    const isValid4 =validateLength(password);

    const isValidPassword = isValid1 && isValid2 && isValid3 && isValid4;

    setValidUpperCase(isValid1);
    setValidNumber(isValid2);
    setValidSpecialCharacter(isValid3);
    setValidLength(isValid4);

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
        <Circlediv valid={validUpperCase} top="141px" left="-7px" />
        <Text_small 숫자>숫자</Text_small>
        <Circlediv valid={validNumber} top="141px" left="5px" />
        <Text_small 특수문자>특수문자</Text_small>   
        <Circlediv valid={validSpecialCharacter} top="141px" left="17px" />
        <Text_small 글자수>글자수</Text_small>   
        <Circlediv valid={validLength} top="141px" left="27px" />
      </JoinContainer1>

    </div>
  );
}

export default Input_pw;
