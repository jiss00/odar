import React, { useState } from "react";
import styled,{css}  from "styled-components";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  position:relative;
  top:-255px;
`;

const Containerv2 = styled.div`
  display: flex;
  margin: 0 auto;
  position:relative;
  top:-200px;
`;

const StyledButton = styled.button`
  display:flex;
  box-sizing: border-box;
  position: relative;
  width:310px;
  height: 66px;
  top: 0px;
  gap: 8px;
  padding: 25px 110px;
  border-radius: 10px;
  font-size: 24px;
  line-height: 20px;
  border: 1px solid lightgray;
  background: #5B8E31;
  color: #000000 ;
  text-decoration: none;
  font-family: "Pretendard";
  font-weight: 800;
  text-align: center;
  margin-right:auto;
  margin-left:auto;
  margin-bottom:30px;
  
  @media all and (min-width: 1024px){	
    position: relative; 
    width: 1008px;
    height: 66px;
    margin-right:auto;
    margin-left:auto;
    margin-bottom: 50px;
    top:10px;
   
    }
`;


  const ButtonText = styled.span`
    width:83px;
    height: 20px;
    font-weight: 800;
    line-height: 20px;
    @media all and (min-width: 1024px){	
      position: relative; 
      margin: 0 auto;
      top:0px;
      left:0px;
      }
  `;
  function LongButton({ children, to, onClick}) {
    return (
      <StyledButton as={Link} to={to} onClick={onClick}>
        <ButtonText>{children}</ButtonText>
      </StyledButton>
    );
  }

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
    top:-163px;
    left: 8px;

    font-family: 'Pretendard'; /* 폰트를 Pretendard로 설정 */
    font-weight: 400;
    line-height: 16.8px;
    color: #000000;
    white-space:nowrap;
    font-size:16px;
 
  @media all and (min-width: 1024px){	
  position: relative; 
  width: 100%;
  max-width:70px;
  height: 20px;
  margin-left:auto;
  margin-right:10px;
  top:-190px;
  left:0px;
  font-size:20px;
  }

        
`;

// Time 컴포넌트 
const Styledtime = styled.div`
  display: flex;
  box-sizing: border-box;
  position: relative; 
  align-items: center;
  width: 70px;
  height: 30px;
  border-radius: 20px;
  border: 0.8px solid #5B8E31;
  background-color: #FFFFFF;
  top:10px;
  left:2px;


  input{
    -moz-appearance: textfield;
    appearance: textfield;

    left:2px;
    font-family: 'Pretendard';
    position: absolute;
    width: 70%;
    height: 70%;
    border: none;
    outline: none;
    border-radius: 20px;
    font-size: 17px;
    text-indent: 1em;
    color: #5B8E31;
  }

    @media all and (min-width: 1024px) {
      position: relative;
      width: 150px;
      height:40px; 
      top: -165px;
      ${props =>
        props.left &&
        css`
        left: ${props.left*0.33+85}px;
        `}

      input {
        font-size: 20px;
        text-indent: 4em;
      }
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

//물결 컴퍼넌트
const StyledTilde = styled.span`
  display: flex;
  box-sizing: border-box;
  position: relative;
  width: 16px;
  height: 20px;
  font-size: 25px;
  line-height: 20px;
  font-weight: 400;
  color: #5B8E31;
  top:15px;
  left:2px;
  margin-left:17px;
  margin-right:17px;
  text-align: center;
  @media all and (min-width: 1024px) {
    position: relative;
    font-size: 40px;
    width: 26px; 
    top: -160px;
    margin-left:0px;
    margin-right:0px;
    left: 155px;
  }  
`;

const TimeWrapper = styled.div`
    position: relative;
    width: 200px; 
    height: 40px;
    top: -180px;
    margin-left:15px;
    margin-right:auto;
    display: flex; 

  @media all and (min-width: 1024px) {
    position: relative;
    width: 358px; 
    height: 40px;
    top: -37px;
    left: -140px;
    margin-left:50px;
    margin-right:auto;
    display: flex; 
  }`

const TimeInput = styled.input`
    width: 80%; 
    height: 80%;

    -moz-appearance: textfield; /* Firefox */
    appearance: textfield; /* Other browsers */
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
    }

    @media all and (min-width: 1024px) {

    }
`

  // 희망시간

  function Texts({children}) {
    return (
        <StyledTexts>
            {children}
        </StyledTexts>
    );
}


function Time({ left, onChange }) {
  function handleOnInputChange(event) {
    const maxlength = 2;
    const inputValue = event.target.value;

    // 입력된 값이 숫자가 아니거나 24 이하가 아닌 경우 빈 문자열로 변경
    if (!/^\d*$/.test(inputValue) || parseInt(inputValue) > 24) {
      event.target.value = '';
      return;
    }

    // maxlength 이상 입력된 경우 maxlength로 제한
    if (inputValue.length > maxlength) {
      event.target.value = inputValue.substr(0, maxlength);
    }

    // 콜백 함수 호출하여 값을 부모 컴포넌트로 전달
    onChange(inputValue);
  }

  return (
    <Styledtime left={left}>
      <TimeInput type="number" onChange={handleOnInputChange} />
      <ClockText>시</ClockText>
    </Styledtime>
  );
}

function Tilde() {
  return (
    <StyledTilde>~</StyledTilde>
  );
}

let Start = 0;
let End = 0;

const sendStartTimes = (startTime) => {
  Start = startTime;
};

const sendEndTimes = (endTime) => {
  End = endTime;
};


  let ValueData = null;
  let DaysData = [];
  let NotificationData = null;
  let LocationData = null;
  let RegionsData1 = null;
  let RegionsData2 = null;
  let RegionsData3 = null;
  let ProfileImg = null;
  
  // 직군 정보 1
  export function handleSelectedValue(selectedValue) {
    console.log('사용자가 선택한 직군 번호:', selectedValue);
    ValueData = selectedValue;
  }
  
  // 요일 정보 2
  export function sendSelectedDaysToAPI(selectedDays) {
    console.log('선택한 요일 리스트:', selectedDays);
    DaysData = selectedDays;
  }
  
  // 알림 정보 4
  export function sendNotificationStatusToAPI(status) {
    if (status === 1) {
      console.log('알림 권한 허용');
    } else if (status === 0) {
      console.log('알림 권한 거부');
    } else {
      console.log('알 수 없는 결과');
    }
    NotificationData = status;
  }
  
  // 위치 정보 5
  export function sendLocationStatusToAPI(status) {
    if (status === 1) {
      console.log('위치 정보 가져오기 성공');
    } else if (status === 0) {
      console.log('위치 정보 가져오기 실패');
    } else {
      console.log('알 수 없는 상태');
    }
    LocationData = status;
  }
  
  // 지역 정보 6
  export function sendRegionsToAPI(region1, region2, region3) {
    console.log('받은 지역 정보:', region1, region2, region3);
    RegionsData1 = region1;
    RegionsData2 = region2;
    RegionsData3 = region3;
  }

  // 이미지 URL을 받는다.
  export function SendprofileImg(imageUrl) {
    console.log('이미지 url :', imageUrl);
    // let으로 선언한 전역변수에 이미지 url을 넘긴다.
    ProfileImg = imageUrl;
  }

function SendUserInfo() {

  const userToken = localStorage.getItem('accessToken');

  const data = {
    profile_img: ProfileImg,
    want_days: DaysData,
    desire_start_time: Start,
    desire_end_time: End,
    job_notice: NotificationData,
    place_notice: 0,
    place_provide: LocationData,
    region_info: {
      province: RegionsData1,
      city: RegionsData2,
      region: RegionsData3
    },
    job_id: ValueData,
  };

  console.log(data);

  axios.patch('https://arthurcha.shop/app/users/edit', data, {
    headers: {
      Authorization: `Bearer ${userToken}`
    }
  })
  .then(response => {
    console.log('API 응답:', response.data);
  })
  .catch(error => {
    console.error('API 오류:', error);
  });
}

function ModifyLongButton() {

  const navigate = useNavigate();

  const handleApplyClick = () => {
    SendUserInfo();
    goToMyPage();
    
  };

  const goToMyPage = () => {
    navigate(-1);
    console.log('라우팅');
  };

  return (
    <>
    <Container>
    <Texts>희망시간</Texts>
    <TimeWrapper>
      <Time left={175} onChange={sendStartTimes} />
      <Tilde />
      <Time left={257} onChange={sendEndTimes} />
    </TimeWrapper>
    </Container>
    <Containerv2>
        <LongButton onClick={handleApplyClick}>
          적 용
       </LongButton>
    </Containerv2>
    </>    
  );
}

export default ModifyLongButton;