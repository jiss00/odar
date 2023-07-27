import styled from 'styled-components';
import React, { useState } from "react";

const StyledInput = styled.input`
  width: ${({ width }) => width};
  box-sizing: border-box;
  border-radius: 15px;
  border: solid #5B8E31 2px;
  height: 50px;
  padding-top : 5px;
  padding-left: 10px;
  font-size: 20px;
  font-weight: 400;
  outline: none;
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

{/* 정규식 검사 함수들 */}

{/*이름이 가~힣까지 1~10글자여야함. */}
function validateName(name) {
  const regex = /^[가-힣]{1,10}$/;
  return regex.test(name);
}

{/*년도는 숫자로만 이루어져있으며 4글자여야함. */}
function validateBirth1(birth) {
  const regex = /^[0-9]{4}$/;
  return regex.test(birth);
}

{/*월과 일은 숫자로만 이루어져있으며 2글자여야함. */}
function validateBirth(birth) {
  const regex = /^[0-9]{2}$/;
  return regex.test(birth);
}

{/*전화번호는 010-****-**** 형식이어야하고 각 ****은 4글자여야함. */}
function validatePhoneNumber(phoneNumber) {
  const regex = /^010-\d{4}-\d{4}$/;
  return regex.test(phoneNumber);
}

{/*인증코드는 숫자로만 이루어져있으며 6글자여야함. */}
function validateVerificationCode(code) {
  const regex = /^[0-9]{6}$/;
  return regex.test(code);
}

function Input(props) {
  const { onChange, ...otherProps } = props;
  const [isValid, setIsValid] = useState(false);


  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    let isValid =false;

    switch (props.type) {
      case "handleNameChange":
        isValid = validateName(inputValue);
        setIsValid(isValid);
        onChange(isValid,inputValue);

        break;
      case "handleBirthChange1":
        isValid = validateBirth1(inputValue);
        setIsValid(isValid);
        onChange(isValid,inputValue);
        break;
      case "handleBirthChange2":
        isValid = validateBirth(inputValue);
        setIsValid(isValid);
        onChange(isValid,inputValue);
        break;
      case "handleBirthChange3":
        isValid = validateBirth(inputValue);
        setIsValid(isValid);
        onChange(isValid,inputValue);
        break;
      case "handleVerificationChange":
        isValid = validatePhoneNumber(inputValue);
        setIsValid(isValid);
        onChange(isValid,inputValue);
        break;
      case "handleCompleteChange":
        isValid = validateVerificationCode(inputValue);
        setIsValid(isValid);
        onChange(isValid,inputValue);
        break;
      default:
        break;
    }

  };

  return (
    <StyledInput onChange={handleInputChange} {...otherProps} />
  );
}

export default Input;