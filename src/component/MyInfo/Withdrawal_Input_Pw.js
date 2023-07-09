import React, { useState } from "react";
import styled from "styled-components";
import { PiEyeClosed, PiEye } from "react-icons/pi"; 

const StyledInput = styled.input`
    display: flex;
    box-sizing: border-box;
    position: absolute; 
    border-radius: 15px;
    font-family: "Pretendard";
    font-size: 21px;
    border: 1.5px solid #5B8E31;
    width: 290px;
    height: 50px;
    top: 459px;
    left: 50px;
    ::placeholder {
        font-family: "Pretendard";
        font-size: 21px; 
        color: #D9D9D9; 
        font-weight: 800;
    }
`;

const IconWrapper = styled.div`
    position: absolute; 
    width: 24px;
    height: 24px;
    top: 469px;
    left: 301px;
    cursor: pointer;
`;

const Icon = styled.div`
    width: 24px;
    height: 24px;
`;

function Withdrawal_Input_Pw(props) {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const handleClick = () => {
        setPasswordVisible(!isPasswordVisible);
    };
      
    return (
        <div style={{ position: "relative" }}>
            <StyledInput {...props} type={isPasswordVisible ? "text" : "password"} />
            <IconWrapper onClick={handleClick}>
                <Icon>{isPasswordVisible ? <PiEye size={24} /> : <PiEyeClosed size={24} />}</Icon>
            </IconWrapper>
        </div>
    );
}

export default Withdrawal_Input_Pw;
