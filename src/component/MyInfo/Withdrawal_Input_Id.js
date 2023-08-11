import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    display: flex;
    box-sizing: border-box;
    position: relative; 
    border-radius: 15px;
    font-family: "Pretendard";
    font-size: 21px;
    border: 1.5px solid #5B8E31;
    width: 290px;
    height: 50px;
    top: -300px;
    margin: 0px auto;

    ::placeholder {
      font-family: "Pretendard";
      font-size: 21px; 
      color: #D9D9D9; 
      font-weight: 800;
    }

    @media all and (min-width: 1024px){	
      position: relative; 
      width: 360px;
      height: 50px;
      margin: 0px auto;
      top: -161px;
      left:0px;
      }
    
`;
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function Withdrawal_Input_Id(props) {
  
  const { onChange, ...otherProps } = props; // props에서 onChange를 추출하여 나머지 props를 otherProps로 받음
  const [validEmail, setValidEmail] = useState(false);
  const [email, setEmail] = useState(""); // email 상태 추가

  const handleInputChange = (event) => {
    const email = event.target.value;
    const isValid = validateEmail(email);
    setValidEmail(isValid);
    setEmail(email); // email 상태 업데이트
    onChange(isValid, email);
  };
  return (
    <>
      <StyledInput onChange={handleInputChange}  {...otherProps}/>
    </>
  );
}

export default Withdrawal_Input_Id;
