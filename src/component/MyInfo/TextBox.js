import React from "react";
import styled from "styled-components";

const StyledTextBox = styled.textarea`
  display: flex;
  box-sizing: border-box;
  position: relative;
  font-family: 'Pretendard';
  width: 290px;
  height: 362px;
  top: -325px;
  radius: 10px;
  border-radius: 10px;
  border: 3px solid #A2C08A;
  margin: 0px auto;
  justify-content: center; 

  ::placeholder {
    font-family: "Pretendard";
    font-size: 15px;
    color: #D9D9D9;
    font-weight: 400;
  }

  @media all and (min-width: 1024px){	
    position: relative; 
    width: 800px;
    height: 360px;
    margin-right:auto;
    margin-left:auto;
    top:-320px;
    left:0px;
    ::placeholder {
      font-size: 18px;
    }
    }
`;

function TextBox({ placeholder, ...props }) {
    return <StyledTextBox placeholder={placeholder} {...props} />;
  }
  

export default TextBox;
