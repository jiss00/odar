import React from "react";
import styled,{css} from "styled-components";
const StyledTexts = styled.span`
    display: flex;
    box-sizing: border-box;
    position: absolute; 
    font-family: 'Pretendard'; /* 폰트를 Pretendard로 설정 */
    font-weight: 400;
    line-height: 16.8px;
    color: #000000;
    white-space: pre-line;
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
     ${props =>
        props.left &&
        css`
        left: ${props.left}px;
        `}
`;

function Texts({fontsize,width, height, top, left, children}) {
    return (
        <StyledTexts fontsize={fontsize} width={width} height={height} top={top} left={left}>
            {children}
        </StyledTexts>
    );
}

export default Texts;