import React, { useState } from "react";
import styled from "styled-components";

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
    top: 392px;
    left: 50px;
    ::placeholder {
      font-family: "Pretendard";
      font-size: 21px; 
      color: #D9D9D9; 
      font-weight: 800;
    }
`;

function Withdrawal_Input_Id(props) {
  return (
    <>
      <StyledInput {...props}/>
    </>
  );
}

export default Withdrawal_Input_Id;
