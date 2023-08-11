import React, { useEffect, useState } from 'react';
import styled,{css}  from "styled-components";
import axios from 'axios';
import { sendRegionsToAPI } from './ModifyLongButton';

const Container = styled.div`
display: flex;
margin: 0 auto;
`;

// Texts 컴포넌트 
const Texts = styled.span`
    display: flex;
    box-sizing: border-box;
    position: relative; 
    width: 100%;
    max-width:56px;
    height: 20px;
    margin-left:auto;
    margin-right:40px;
    top:-185px;
    left:-45px;

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
    top:-180px;
    left:-85px;
    font-size:20px;
    }
  
              
`;

// Texts 컴포넌트 
const Texts2 = styled.span`
    display: flex;
    box-sizing: border-box;
    position: relative; 
    font-family: 'Pretendard'; /* 폰트를 Pretendard로 설정 */
    font-weight: 400;
    line-height: 16.8px;
    color: #000000;
    white-space: pre-line;
    top:-185px;
    margin-right:auto;
  
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

// Container6으로 전달한 전역 변수 let으로 생성
let latitude = null;
let longitude = null;

// 위도 경도 전달받은 함수, 전역 변수로 값 옮김
export function Region(latitudeData, longitudeData) {
  latitude = latitudeData;
  longitude = longitudeData;
}

export function Container6() {

  const [isLoading, setIsLoading] = useState(true);
  const [address, setAddress] = useState('');
  const [region1, setRegion1] = useState('');
  const [region2, setRegion2] = useState('');
  const [region3, setRegion3] = useState('');

  const userToken = localStorage.getItem('accessToken');

  useEffect(() => {
    const REST_API_KEY = 'fc2cb1fdd5ecbf98c49c7b6541e05f74';

    if (latitude !== null && longitude !== null) {
      axios
        .get(`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}&input_coord=WGS84`, {
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
          
          setAddress(region1 + space + region2 + space + region3);
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
    }
  }, [latitude, longitude]);

  return (
    <Container>
      <Texts>내 위치</Texts>
      {isLoading ? ( // isLoading 상태를 확인하여 렌더링
        <Texts2>Loading...</Texts2>
      ) : (
        <Texts2>{address}</Texts2>
      )}
    </Container>
  );

}

export default Container6;