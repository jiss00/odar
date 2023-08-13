import React, { useState } from "react";
import styled,{css}  from "styled-components";
import { sendLocationStatusToAPI } from './ModifyLongButton';
import { sendRegionsToAPI } from './ModifyLongButton';
import axios from 'axios';
import Container6 from './Container6';

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
    top:-218px;
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
      top:-225px;
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
  top: -228px;
  margin-left:30px;
  margin-right:auto;
  @media all and (min-width: 1024px) {
    position: relative;
    max-width: 67px;
    max-height: 33px;
    top: -235px;
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
  const [isLoading, setIsLoading] = useState(true);
  const [addressData, setAddressData] = useState(null);
  const [region1, setRegion1] = useState('');
  const [region2, setRegion2] = useState('');
  const [region3, setRegion3] = useState('');

  const handleClick = () => {
    setClicked(!clicked);
    if (!clicked) {
      // 사용자에게 위치 정보 권한 요청
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log("사용자 위치 정보:", position.coords.latitude, position.coords.longitude);
            sendLocationStatusToAPI(1);

            const REST_API_KEY = 'fc2cb1fdd5ecbf98c49c7b6541e05f74';
              axios
                // 위도 경도를 주면 주소를 받을 수 있는 API
                .get(`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${position.coords.longitude}&y=${position.coords.latitude}&input_coord=WGS84`, {
                  headers: {
                    Authorization: `KakaoAK ${REST_API_KEY}`,
                  },
                })
                .then((response) => {
                  const result = response.data.documents[0];
                  const region1 = `${result.address.region_1depth_name}`;
                  const region2 = `${result.address.region_2depth_name}`;
                  const region3 = `${result.address.region_3depth_name}`;
                  const space = ' '
                  
                  setAddressData(region1 + space + region2 + space + region3);
                  setRegion1(region1);
                  setRegion2(region2);
                  setRegion3(region3);
                  sendRegionsToAPI(region1, region2, region3);
                  setIsLoading(false); // 로딩 상태 업데이트
                  
                })
                .catch((error) => {
                  console.error('주소를 불러오는 중 오류 발생:', error);
                  setIsLoading(false); // 로딩 상태 업데이트
                });
            },
          
          // 에러
          (error) => {
            console.error("위치 정보를 가져오는데 실패했습니다:", error.message);
            sendLocationStatusToAPI(0);
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
      <Container6 address={addressData} />
    </ButtonContainer>
  );
}


function Container5() {

  return (
    <Container>
      <Texts fontsize={16} width={91} height={20} top={569} left={64}>
        위치 알림 동의
      </Texts>
      <AgreeButton top={571}/>
    </Container>
  );
}

export default Container5;