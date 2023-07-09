import React, { useState } from "react";
import styled from "styled-components";
import { PiEyeClosed, PiEye } from "react-icons/pi";

const StyledInput = styled.input`
  display: flex;
  box-sizing: border-box;
  position: absolute;
  border-radius: 15px;
  font-size: 24px;
  border: 1.5px solid #5B8E31;
  width: 335px;
  height: 50px;
  top: 417px;
  left: 33px;
  ::placeholder {
    font-family: "Pretendard";
    font-size: 24px;
    color: #D9D9D9;
    font-weight: 800;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 432px;
  left: 324px;
  cursor: pointer;
`;

const Circlediv = styled.div`
  display: flex;
  box-sizing: border-box;
  position: absolute;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: ${({ valid }) => (valid ? "#A2C08A" : "#FF0000")};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
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
  const [isPasswordVisible, setPasswordVisible] = useState(false); // 비밀번호 숨김/보임 상태
  const [validUpperCase, setValidUpperCase] = useState(false); // 대소문자 유효성 검사 결과
  const [validNumber, setValidNumber] = useState(false); // 숫자 유효성 검사 결과
  const [validSpecialCharacter, setValidSpecialCharacter] = useState(false); // 특수문자 유효성 검사 결과

  const handleClick = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleInputChange = (event) => {
    const password = event.target.value;
    setValidUpperCase(validateUpperCase(password));
    setValidNumber(validateNumber(password));
    setValidSpecialCharacter(validateSpecialCharacter(password));
  };

  return (
    <div style={{ position: "relative" }}>
      <StyledInput {...props} type={isPasswordVisible ? "text" : "password"} onChange={handleInputChange} />
      <IconWrapper onClick={handleClick}>
        {isPasswordVisible ? <PiEye size={24}/> : <PiEyeClosed size={24}/>}
      </IconWrapper>
      <Circlediv valid={validUpperCase} top="491px" left="138px" />
      <Circlediv valid={validNumber} top="491px" left="217px" />
      <Circlediv valid={validSpecialCharacter} top="491px" left="324px" />
    </div>
  );
}

export default Input_pw;
