import React, { useState } from "react";
import styled,{css}  from "styled-components";

const Container = styled.div`
display: flex;
margin: 0 auto;
`;

// Texts 컴포넌트 
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
 
  @media all and (min-width: 1024px){	
  position: relative; 
  width: 100%;
  max-width:150px;
  height: 20px;
  margin-left:auto;
  margin-right:10px;
  top:-180px;
  left:-85px;
  font-size:20px;
  }

        
`;

function Texts({fontsize,width, height, top, left, children}) {
    return (
        <StyledTexts fontsize={fontsize} width={width} height={height} top={top} left={left}>
            {children}
        </StyledTexts>
    );
}


// Texts 컴포넌트 
const StyledTexts2 = styled.span`
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
 
  @media all and (min-width: 1024px){	
  position: relative; 
  width: 100%;
  max-width:150px;
  height: 20px;
  margin-left:10px;
  margin-right:auto;
  top:-180px;
  left:100px;
  font-size:20px;
  color: #5C5C5C;

  }

        
`;

function Texts2({fontsize,width, height, top, left, children}) {
    return (
        <StyledTexts2 fontsize={fontsize} width={width} height={height} top={top} left={left}>
            {children}
        </StyledTexts2>
    );
}

function Container6() {
  return (
    <Container>        
     <Texts fontsize={16} width={56} height={20} top={645} left={66} >내 위치</Texts>
     <Texts2 fontsize={16} width={132} height={20} top={645} left={200} >창원시 마산회원구</Texts2>
    </Container>
  );
}

export default Container6;
