import React, { useState } from "react";
import styled from "styled-components";
import Text_small from "../Text_small";
import ProgressBar from "../ProgressBar";

const JoinContainer1 = styled.div`
display: flex;
margin: 0 auto;
width: 300px;
`;

const StyledInput = styled.input`
    display: flex;
    box-sizing: border-box;
    position: relative; 
    border-radius: 15px;
    font-size: 24px;
    font-weight: 800;
    border: 2px solid #5B8E31;
    width: 335px;
    height: 50px;
    top: 130px;
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
      top:205px;
      left:0px;
      width:440px;
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
  margin-left:10px;
  margin-right:auto;
  top:154px;
  left:-10px;
  
  @media all and (min-width: 1024px){	
    position: relative; 
    margin-left:10px;
    margin-right:auto;
    top:224px;
    left:-170px;
    }
`;
function validateEmail(email) {
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return regex.test(email);
}

function Input_id(props) {
  const { onChange, ...otherProps } = props; // props에서 onChange를 추출하여 나머지 props를 otherProps로 받음
  const [validEmail, setValidEmail] = useState(false);

  const handleInputChange = (event) => {
    const email = event.target.value;
    const isValid = validateEmail(email);
    setValidEmail(isValid);
     // 부모 컴포넌트로 변경된 값을 전달하는 부분
    onChange(isValid,email); 
  };
  return (
    <>
      <StyledInput onChange={handleInputChange}  {...otherProps} />
      <JoinContainer1>
        <Text_small 이메일형식>이메일 형식</Text_small>
        <Circlediv valid={validEmail} />
      </JoinContainer1>
    </>
  );
}

export default Input_id;
