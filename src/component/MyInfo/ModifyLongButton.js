import React, { useState } from "react";
import styled,{css}  from "styled-components";
import { Link } from "react-router-dom";
import axios from 'axios';

const Container = styled.div`
display: flex;
margin: 0 auto;
`;

const StyledButton = styled.button`
  display:flex;
  box-sizing: border-box;
  position: relative;
  width:310px;
  height: 66px;
  top: -150px;
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
  
  @media all and (min-width: 1024px){	
    position: relative; 
    width: 1008px;
    height: 66px;
    margin-right:auto;
    margin-left:auto;
    margin-bottom: 100px;
    top:-100px;
    left:0px;
   
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
  function LongButton({ children, to, onClick }) {
    return (
      <StyledButton as={Link} to={to} onClick={onClick}>
        <ButtonText>{children}</ButtonText>
      </StyledButton>
    );
  }

  let ValueData = null;
  let DaysData = [];
  let StartData = 0;
  let EndData = 0;
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
  
  // 시간 정보 3
  export function sendStartTimesToAPI(startTime) {
    console.log('시작 시간:', startTime);
    StartData = startTime;
  }
  export function sendEndTimesToAPI(endTime) {
    console.log('종료 시간:', endTime);
    EndData = endTime;
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
    // 백엔드로 이미지 url을 보낸다.
    profile_img: ProfileImg,
    want_days: DaysData,
    desire_start_time: StartData,
    desire_end_time: EndData,
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

  axios.patch('http://arthurcha.shop:3000/app/users/edit', data, {
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

const handleApplyClick = () => {
  SendUserInfo()
};

function ModifyLongButton() {

  return (
    <Container>
      <LongButton onClick={handleApplyClick}>
        적 용
      </LongButton>
    </Container>
  );
}

export default ModifyLongButton;
