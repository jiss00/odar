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

function Withdrawal_Input_Id(props) {
  return (
    <>
      <StyledInput {...props}/>
    </>
  );
}

export default Withdrawal_Input_Id;
