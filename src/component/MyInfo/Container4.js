import React, { useState } from "react";
import styled,{css}  from "styled-components";
import { sendNotificationStatusToAPI } from './ModifyLongButton';

const Container = styled.div`
display: flex;
margin: 0 auto;
position:relative;
top:-290px;
@media all and (min-width: 1024px){	
  top:-290px;
}
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
    top:10px;
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
      top:10px;
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
  top: 2px;
  margin-left:30px;
  margin-right:auto;
  @media all and (min-width: 1024px) {
    position: relative;
    max-width: 67px;
    max-height: 33px;
    top: -3px;
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

function showNotification() {
  if ("Notification" in window) {
    // 사용자에게 알림 권한을 요청
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        // 알림을 생성
        new Notification("푸시 알림 허용", {
          body: "채용정보 알림 동의가 완료되었습니다!",
        });
        sendNotificationStatusToAPI(1);
      } else {
        sendNotificationStatusToAPI(0);
      }
    });
  }
}

function AgreeButton({ top }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    if (!clicked) {
      showNotification(); // 클릭 시 알림 표시
    }
  };

  return (
    <ButtonContainer top={top} onClick={handleClick}>
      <Button clicked={clicked} />
    </ButtonContainer>
  );
}


function Container4() {
  return (
    <Container>
    <Texts>채용정보 알림 동의</Texts>
    <AgreeButton></AgreeButton>
    </Container>
  );
}

export default Container4;