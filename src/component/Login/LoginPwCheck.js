import React, { useState } from "react";
import styled from "styled-components";
import { PiEyeClosed,PiEye } from "react-icons/pi"; 

const StyledInput = styled.input`
    display: flex;
    box-sizing: border-box;
    position: relative;
    font-family: "Pretendard";
    top:0px;
    width: 335px;
    height:50px;
    outline: none;
    border: none;
    font-size: 24px;
    font-weight: 800;
    line-height: 20px;
    letter-spacing: 0px;
    background-color: transparent;
    text-indent: 0.5em;
    margin:0 auto;
    
    &&&::placeholder {
        font-family: "Pretendard";
        font-size: 20px;
        font-weight: 700;
        line-height: 20px;
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
    position: absolute; 
    width: 24px;
    height: 24px;
    top: 13px;
    left:270px;
    cursor: pointer;
    margin-right:15px;
    margin-left:auto;
    @media all and (min-width: 1024px){	
        position: absolute; 
        left: 400px;
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
