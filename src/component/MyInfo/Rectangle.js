import React from "react";
import styled,{ css }  from "styled-components";
import { Link } from "react-router-dom";

const Rectanglediv = styled.div`
  display: flex;
  box-sizing: border-box;
  position: relative; 
  top: 90px;
  width: 310px;
  height: 530px;
  border-radius: 15px;
  background-color: #EDF1D5;
  margin: 0px auto;
  z-index:0;
  
  @media all and (min-width: 1024px){	
  position: relative; 
  width: 1008px;
  height: 608px;
  margin: 0px auto;
  top: 200px;
  left:0px;
  }
`;
const StyledTextBox = styled.textarea`
${props =>
  props.active
    ? css`
        /* 활성화되었을 때의 스타일 설정 */
        display: flex;
        position:relative;
        top:157px;
        box-sizing: border-box;
        position: relative;
        font-family: 'Pretendard';
        font-weight:600;
      
        width: 290px;
        height: 362px;
        radius: 10px;
        border-radius: 10px;
        border: 3px solid #A2C08A;
        margin: 0px auto;
        justify-content: center; 
        resize:none;
        text-indent: 0.5em;
      
        z-index:100;
      
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
      `
    : css`
        /* 비활성화되었을 때의 스타일 설정 */
        display:none;
      `}

`;
function Rectangle({ placeholder, active, ...props }) {
  return (
    <Rectanglediv>
       <StyledTextBox placeholder={placeholder} active={active} {...props} />
    </Rectanglediv>
  );
}

export default Rectangle;
