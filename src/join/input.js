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
  font-family: "Pretendard";
  font-size: 24px;
  font-weight: 800;
  text-indent: 0.5em;

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
function validateBirthYear(birth) {
  const regex = /^[0-9]{4}$/;
  return regex.test(birth);
}

{/*월은 1~12여야함. */}
function validateBirthMonth(birth) {
  const regex =  /^(0?[1-9]|1[0-2])$/; 
  return regex.test(birth);
}

{/*일은 1~31여야함. */}
function validateBirthDay(birth) {
  const regex = /^(0?[1-9]|[12][0-9]|3[01])$/;
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
        if(inputValue.length>4){
          event.target.value = inputValue.substr(0,4);
        }
        isValid = validateBirthYear(inputValue);
        setIsValid(isValid);
        onChange(isValid,inputValue);
        break;
      case "handleBirthChange2":
        if(inputValue.length>2){
          event.target.value = inputValue.substr(0,2);
        }
        isValid = validateBirthMonth(inputValue);
        setIsValid(isValid);
        onChange(isValid,inputValue);
        break;
      case "handleBirthChange3":
        if(inputValue.length>2){
          event.target.value = inputValue.substr(0,2);
        }
        isValid = validateBirthDay(inputValue);
        setIsValid(isValid);
        onChange(isValid,inputValue);
        break;
      case "handleVerificationChange":
        if(inputValue.length>13){
          event.target.value = inputValue.substr(0,13);
        }
        isValid = validatePhoneNumber(inputValue);
        setIsValid(isValid);
        onChange(isValid,inputValue);
        break;
      case "handleCompleteChange":
        if(inputValue.length>6){
          event.target.value = inputValue.substr(0,6);
        }
        isValid = validateVerificationCode(inputValue);
        setIsValid(isValid);
        onChange(isValid,inputValue);
        break;
      default:
        break;
    }

  };

  return (
    <StyledInput disabled={false} onChange={handleInputChange} {...otherProps} />
  );
}

export default Input;