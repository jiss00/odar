import React from "react";
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
  max-width:70px;
  height: 20px;
  margin-left:auto;
  margin-right:10px;
  top:-300px;
  left:0px;
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


// Circle 컴포넌트 

const CircleWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  position: absolute; 
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0.8px solid #5B8E31;
  background-color: #FFFFFF;
  top:394px;
 ${props =>
    props.left &&
    css`
    left: ${props.left}px;
    `}
    @media all and (min-width: 1024px) {
    position: relative;
    width: 40px; 
    height: 36.36px;
    top: -10px;
    ${props =>
      props.left &&
      css`
      left: ${props.left}px;
      `};
  }
  
`;

const CircleText = styled.span`
  width: 11px;
  height: 20px;
  font-size: 12px;
  font-weight: 800;
  color: #5B8E31;
`;

const DayWrapper = styled.div`
    
  @media all and (min-width: 1024px) {
    position: relative;
    width: 358px; 
    height: 40px;
    top: -300px;
    left: -140px;
    margin-left:50px;
    margin-right:auto;
    display: flex; 
  }`

function Day({ left, text }) {
  return (
    <CircleWrapper left={left}>
      <CircleText>{text}</CircleText>
    </CircleWrapper>
  );
}

function Container2() {
  return (
    <Container>
      <Texts fontsize={16} width={56} height={20} top={399} left={63} >
        희망요일
      </Texts>
      <DayWrapper>
      <Day left={139} text="월"></Day>
      <Day left={178.5} text="화"></Day>
      <Day left={218} text="수"></Day>
      <Day left={257.5} text="목"></Day>
      <Day left={297} text="금"></Day>
      </DayWrapper>        
    </Container>
  );
}

export default Container2;
