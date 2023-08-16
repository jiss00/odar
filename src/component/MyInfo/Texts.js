import React from "react";
import styled,{css} from "styled-components";
const StyledTexts = styled.span`
    display: flex;
    box-sizing: border-box;
    position: relative; 
    font-family: 'Pretendard'; /* 폰트를 Pretendard로 설정 */
    font-weight: 600;
    line-height: 16.8px;
    color: #000000;
    white-space: pre-line;
    margin: 0px auto;

    ${props =>
        props.fontsize &&
        css`
          font-size: ${props.fontsize}px;
        `}
    ${props =>
        props.width &&
        css`
          width: ${props.width}px;
        `}
     ${props =>
        props.height &&
        css`
        height: ${props.height}px;
        `}
     ${props =>
        props.top &&
        css`
        top: ${props.top}px;
        `}
   
 
  @media all and (min-width: 1024px){	
  position: relative; 
  width: 800px;
  height: 57px;
  margin-right:auto;
  margin-left:auto;
  top:-410px;
  left:0px;
  font-size:16px;
  }

        
`;

function Texts({fontsize,width, height, top, left, children}) {
    return (
        <StyledTexts fontsize={fontsize} width={width} height={height} top={top} left={left}>
            {children}
        </StyledTexts>
    );
}

export default Texts;