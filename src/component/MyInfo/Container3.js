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
  top:-290px;
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


// Time 컴포넌트 

const Styledtime = styled.div`
  display: flex;
  box-sizing: border-box;
  position: absolute; 
  align-items: center;
  width: 70px;
  height: 30px;
  border-radius: 20px;
  border: 0.8px solid #5B8E31;
  background-color: #FFFFFF;
  top:439px;
 ${props =>
    props.left &&
    css`
    left: ${props.left}px;
    `}
    
    @media all and (min-width: 1024px) {
      position: relative;
      width: 150px;
      height:40px; 
      top: -50px;
      ${props =>
        props.left &&
        css`
        left: ${props.left*0.33+90}px;
        `}
    }
`;

const ClockText = styled.span`
  display: flex;
  box-sizing: border-box;
  position: relative;
  width: 13px;
  height: 20px;
  font-size: 15px;
  font-weight: 800;
  color: #5B8E31;
  left:45px; 
  @media all and (min-width: 1024px) {
    position: relative;
    font-size: 18px;
    width: 150px; 
    top: -3px;
    left: 110px;
  } 
`;

function Time({ left }) {
  return (
    <Styledtime left={left}>
      <ClockText>시</ClockText>
    </Styledtime>
  );
}


//Tilde 컴퍼넌트

const StyledTilde = styled.span`
  display: flex;
  box-sizing: border-box;
  position: absolute;
  width: 16px;
  height: 20px;
  font-size: 25px;
  line-height: 20px;
  font-weight: 400;
  color: #5B8E31;
  top:441px;
  left:225px;  
  text-align: center;
  @media all and (min-width: 1024px) {
    position: relative;
    font-size: 40px;
    width: 26px; 
    top: -45px;
    left: 150px;
  }  
`;

const TimeWrapper = styled.div`
    
  @media all and (min-width: 1024px) {
    position: relative;
    width: 358px; 
    height: 40px;
    top: -250px;
    left: -140px;
    margin-left:50px;
    margin-right:auto;
    display: flex; 
  }`

function Tilde() {
  return (
    <StyledTilde>~</StyledTilde>
  );
}

function Container3() {
  return (
    <Container>
      <Texts fontsize={16} width={56} height={20} top={444} left={63} >
      희망시간</Texts>
      <TimeWrapper>
      <Time left={139}></Time>
      <Tilde></Tilde>
      <Time left={257}></Time>      
      </TimeWrapper>
    </Container>
  );
}

export default Container3;
