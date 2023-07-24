import styled from 'styled-components';
import React, { useState } from "react";

const StyledInput = styled.input`
  width: ${({ width }) => width};
  box-sizing: border-box;
  border-radius: 15px;
  border: solid #5B8E31 2px;
  height: 50px;
  font-size: 24px;
  padding-left: 10px;
  font-weight: 600;
  ::placeholder {
    font-family: "Pretendard";
    color: #D9D9D9;
    font-size: 24px;
    font-weight: 600;
    line-height: 20px;
  }    
  @media screen and (min-width: 1024px) {
    width: ${({ w_width }) => w_width};
  }
`;

function validateName(name) {
  const regex = /^[가-힣]{1,10}$/;
  return regex.test(name);
}

function validateBirth(birth) {
  const regex = /^[0-9]*$/;
  return regex.test(birth);
}

function validatePhoneNumber(phoneNumber) {
  const regex = /^010-\d{4}-\d{4}$/;
  return regex.test(phoneNumber);
}

function validateVerificationCode(code) {
  const regex = /^[0-9]{6}$/;
  return regex.test(code);
}

function Input(props) {
  const { onChange, ...otherProps } = props; // props에서 onChange를 추출하여 나머지 props를 otherProps로 받음
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    let isValid = false;

    switch (props.type) {
      case "handleNameChange":
        isValid = validateName(inputValue);
        break;
      case "handleBirthChange":
        isValid = validateBirth(inputValue);
        break;
      case "handleVerificationChange":
        isValid = validatePhoneNumber(inputValue);
        break;
      case "handleCompleteChange":
        isValid = validateVerificationCode(inputValue);
        break;
      default:
        break;
    }

    setIsValid(isValid);
    onChange(isValid); // 부모 컴포넌트로 변경된 값을 전달하는 부분
  };

  return (
    <StyledInput onChange={handleInputChange} {...otherProps} />
  );
}

export default Input;
