import React from "react";
import styled from "styled-components";

const StyledTextBox = styled.textarea`
  display: flex;
  box-sizing: border-box;
  position: absolute;
  font-family: 'Pretendard';
  width: 290px;
  height: 362px;
  top: 315px;
  left: 50px;
  radius: 10px;
  border-radius: 10px;
  border: 3px solid #A2C08A;
  ::placeholder {
    font-family: "Pretendard";
    font-size: 15px;
    color: #D9D9D9;
    font-weight: 400;
  }
`;

function TextBox({ placeholder, ...props }) {
    return <StyledTextBox placeholder={placeholder} {...props} />;
  }
  

export default TextBox;
