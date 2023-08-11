import React, { useState } from "react";
import styled,{css}  from "styled-components";
import { sendSelectedDaysToAPI } from './ModifyLongButton';


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

  cursor: pointer; /* 요일을 클릭할 수 있도록 커서를 포인터로 변경 */
  ${(props) =>
    props.active &&
    css`
      background-color: #A2C08A; /* 클릭한 요일의 배경 색상을 변경 */
    `}
  
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

function Day({ left, text, onClick, isActive }) {
  return (
    <CircleWrapper left={left} onClick={onClick} active={isActive}>
      <CircleText>{text}</CircleText>
    </CircleWrapper>
  );
}

function Container2() {
  // 선택된 요일을 상태로 관리하기 위해 useState 훅 사용
  const [selectedDay, setSelectedDay] = useState([]);

const handleDayClick = (day) => {
    if (selectedDay.includes(day)) {
      // 이미 선택된 요일이면 선택 해제
      setSelectedDay(selectedDay.filter((d) => d !== day));
    } else {
      // 새로운 요일 선택
      setSelectedDay([...selectedDay, day]);
    }
    // 선택한 요일 리스트를 보냄
    sendSelectedDaysToAPI(selectedDay);
  };


  return (
    <Container>
      <Texts >
        희망요일
      </Texts>
      <DayWrapper>
      <Day left={8} text="월"
       onClick={() => handleDayClick("월")}
       isActive={selectedDay.includes("월")}
     ></Day>
      <Day left={16} text="화"
      onClick={() => handleDayClick("화")}
      isActive={selectedDay.includes("화")}
      ></Day>
      <Day left={24} text="수"
      onClick={() => handleDayClick("수")}
      isActive={selectedDay.includes("수")}
      ></Day>
      <Day left={32} text="목"
      onClick={() => handleDayClick("목")}
      isActive={selectedDay.includes("목")}
      ></Day>
      <Day left={40} text="금"
      onClick={() => handleDayClick("금")}
      isActive={selectedDay.includes("금")}
      ></Day>
      <Day left={48} text="토"
      onClick={() => handleDayClick("토")}
      isActive={selectedDay.includes("토")}
      ></Day>
      <Day left={56} text="일"
      onClick={() => handleDayClick("일")}
      isActive={selectedDay.includes("일")}
      ></Day>
      </DayWrapper>        
    </Container>
  );
}

export default Container2;
