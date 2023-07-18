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
    position: relative; 
    width: 100%;
    max-width:56px;
    height: 20px;
    margin-left:auto;
    margin-right:5px;
    top:-275px;
    left:3px;

    font-family: 'Pretendard'; /* 폰트를 Pretendard로 설정 */
    font-weight: 400;
    line-height: 16.8px;
    color: #000000;
    white-space: pre-line;
    font-size:16px;
 
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

function Texts({children}) {
    return (
        <StyledTexts>
            {children}
        </StyledTexts>
    );
}

// Circle 컴포넌트 

const CircleWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  position: relative; 
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 30px;
  border-radius: 50%;
  border: 0.8px solid #5B8E31;
  background-color: #FFFFFF;
  top:0px;
 ${props =>
    props.left &&
    css`
    left: ${props.left}px;
    `}

    @media all and (min-width: 1024px) {
    position: relative;
    width: 40px; 
    height: 40px;
    top: -10px;
    ${props =>
      props.left &&
      css`
      left: ${props.left*1.5+130}px;
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
   position: relative;
    width: 200px; 
    height: 40px;
    top: -280px;
    margin-left:5px;
    margin-right:auto;
    display: flex; 

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
      <Texts >
        희망요일
      </Texts>
      <DayWrapper>
      <Day left={8} text="월"></Day>
      <Day left={16} text="화"></Day>
      <Day left={24} text="수"></Day>
      <Day left={32} text="목"></Day>
      <Day left={40} text="금"></Day>
      <Day left={48} text="토"></Day>
      <Day left={56} text="일"></Day>
      </DayWrapper>        
    </Container>
  );
}

export default Container2;
