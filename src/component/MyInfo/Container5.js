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
    position: relative; 
    width: 100%;
    max-width:120px;
    height: 20px;
    margin-left:auto;
    margin-right:48px;
    top:-210px;
    left:0px;

    font-family: 'Pretendard'; /* 폰트를 Pretendard로 설정 */
    font-weight: 400;
    line-height: 16.8px;
    color: #000000;
    white-space: pre-line;
    font-size:16px;
 
    @media all and (min-width: 1024px){	
      position: relative; 
      width: 100%;
      max-width:150px;
      height: 20px;
      margin-left:auto;
      margin-right:10px;
      top:-215px;
      left:-130px;
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


//AgreeButton 컴퍼넌트

const ButtonContainer = styled.div`
  display: flex;
  position: relative;
  width: 50.42px;
  height: 25px;
  left: 0px;
  border: 5px solid #A2C08A;
  border-radius: 50px;
  background-color: transparent;
  cursor: pointer;
  top: -220px;
  margin-left:30px;
  margin-right:auto;
  @media all and (min-width: 1024px) {
    position: relative;
    max-width: 67px;
    max-height: 33px;
    top: -225px;
    left:120px;
    margin-left:10px;
    margin-right:auto;
  }
`;


const Button = styled.div`
  position: absolute;
  top: 50%;
  left: ${props => props.clicked ? "35px" : "15px"};
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #A2C08A;
  transition: left 0.3s ease-in-out;
`;

function AgreeButton({ top }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    if (!clicked) {
      // 사용자에게 위치 정보 권한 요청
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log("사용자 위치 정보:", position.coords.latitude, position.coords.longitude);
          },
          (error) => {
            console.error("위치 정보를 가져오는데 실패했습니다:", error.message);
          }
        );
      } else {
        console.error("Geolocation API를 지원하지 않는 브라우저입니다.");
      }
    }
  };

  return (
    <ButtonContainer top={top} onClick={handleClick}>
      <Button clicked={clicked} />
    </ButtonContainer>
  );
}

function Container5() {
  return (
    <Container>
      <Texts fontsize={16} width={91} height={20} top={569} left={64}>
        위치 알림 동의
      </Texts>
      <AgreeButton top={571} />
    </Container>
  );
}

export default Container5;