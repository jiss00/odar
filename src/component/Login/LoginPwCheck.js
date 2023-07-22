import React, { useState } from "react";
import styled from "styled-components";
import { PiEyeClosed,PiEye } from "react-icons/pi"; 

const StyledInput = styled.input`
    width: 100%;
    margin-top: 0.6em;
    outline: none;
    border: none;
    font-size: 20px;
    font-weight: 400;
    background-color: transparent;
    text-indent: 0.5em;

    &&&::placeholder {
        font-family: "Pretendard";
        font-size: 20px;
        font-weight: 700;
        color: rgba(217, 217, 217, 1);
        text-indent: 0.5em;
    }

    @media all and (min-width: 1024px){	
        position: relative; 
        margin-right:auto;
        margin-left:auto;
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
    left: 150px;
    bottom: 1.5em;
    cursor: pointer;
    margin-right:auto;
    margin-left:auto;

    @media all and (min-width: 1024px){	
        position: relative; 
        left: 185px;
        }
`;
function Input_pwcheck(props) {
  const [isPasswordVisible, setPasswordVisible] = useState(false); // 비밀번호 숨김/보임 상태

  const handleClick = () => {
      setPasswordVisible(!isPasswordVisible); };

return (
    <div style={{ position: "relative" }}>
        <StyledInput {...props} type={isPasswordVisible ? "text" : "password"} />
        <IconWrapper onClick={handleClick}>
            {isPasswordVisible ? <PiEye size={24}/> : <PiEyeClosed size={24}/>} 
        </IconWrapper>
    </div>
);
}

export default Input_pwcheck;
