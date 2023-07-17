import React, { useState } from "react";
import styled from "styled-components";
import Text_small from "../Text_small";

const JoinContainer1 = styled.div`
display: flex;
margin: 0 auto;
width: 440px;
`;

const StyledInput = styled.input`
    display: flex;
    box-sizing: border-box;
    position: absolute; 
    border-radius: 15px;
    font-size: 24px;
    border: 1.5px solid #5B8E31;
    width: 335px;
    height: 50px;
    top: 242px;
    left: 33px;
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
      top:280px;
      left:0px;
      width:440px;
      }
`;
const Circlediv = styled.div`
  display: flex;
  box-sizing: border-box;
  position: absolute;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: ${({ valid }) => (valid ? "#A2C08A" : "#FF0000")};
  left: 116px;
  top: 316px;
  @media all and (min-width: 1024px){	
    position: relative; 
    margin-left:10px;
    margin-right:auto;
    top:300px;
    left:-160px;
    }
`;
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
function Input_id(props) {
  const [validEmail, setValidEmail] = useState(false);

  const handleInputChange = (event) => {
    const email = event.target.value;
    const isValid = validateEmail(email);
    setValidEmail(isValid);
  };
  return (
    <>
      <StyledInput onChange={handleInputChange} {...props} />
      <JoinContainer1>
      <Text_small 이메일형식>이메일 형식</Text_small>
      <Circlediv valid={validEmail} />
      </JoinContainer1>
    </>
  );
}

export default Input_id;
