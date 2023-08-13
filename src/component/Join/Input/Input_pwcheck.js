import React, { useState } from "react";
import styled from "styled-components";
import { PiEyeClosed, PiEye } from "react-icons/pi";

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
  top: 280px;
  margin: 0 auto;
  text-indent: 0.5em;

  ::placeholder {
    font-family: "Pretendard";
    font-size: 24px;
    color: #D9D9D9;
    font-weight: 800;
  }
  @media all and (min-width: 1024px) {	
    position: relative; 
    margin-right: auto;
    margin-left: auto;
    top: 390px;
    left: 0px;
    width: 440px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  position: relative;
  width: 24px;
  height: 24px;
  top: 245px;
  left: 140px;
  cursor: pointer;
  margin-right: auto;
  margin-left: auto;

  @media all and (min-width: 1024px) {	
    position: relative; 
    margin-right: auto;
    margin-left: auto;
    top: 355px;
    left: 200px;
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

function Input_pwcheck(props) {
  const { onChange, ...otherProps } = props; // props에서 onChange를 추출하여 나머지 props를 otherProps로 받음

  const [isPasswordVisible, setPasswordVisible] = useState(false); // 비밀번호 숨김/보임 상태

  const handleClick = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleInputChange = (event) => {
    const passwordcheck = event.target.value;
    const isValid1 =validateUpperCase(passwordcheck);
    const isValid2 =validateNumber(passwordcheck);
    const isValid3 =validateSpecialCharacter(passwordcheck);
    
    const isValidPasswordCheck = isValid1 && isValid2 && isValid3;

     // 비밀번호와 유효성 검사 결과를 객체로 묶어서 한 번에 전달
     onChange({ passwordcheck, isValidPasswordCheck });

  };

  return (
    <div style={{ position: "relative" }}>
      <StyledInput
        {...otherProps} type={isPasswordVisible ? "text" : "password"}
        onChange={handleInputChange}
      />
      <IconWrapper onClick={handleClick}>
        {isPasswordVisible ? <PiEye size={24}/> : <PiEyeClosed size={24}/>} 
      </IconWrapper>
    </div>
  );
}

export default Input_pwcheck;

