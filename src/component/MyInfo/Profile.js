import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import profileImage from './할아버지 1.png'; // 상대 경로로 이미지 파일을 import
import SendprofileImg from './ModifyLongButton';


const ImageWrapper = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  top: -350px;
  background-color: rgba(204, 204, 204, 0.3);
  border-radius: 1000px;
  margin: 0 auto; /* 가로 중앙 정렬 */

  @media all and (min-width: 1024px) {
    position: relative;
    margin: 0 auto; /* 가로 중앙 정렬 */
    width: 100%; /* 너비를 100%로 설정 */
    max-width: 110px; /* 최대 너비를 110px로 제한 */
    height: 100%;
    max-height: 110px;
    top: -375px;
    left: 0;
  }
`;

const StyledImage = styled.img`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 1000px;
`;


const StyledButton = styled.button`
  box-sizing: border-box;
  position: relative;
  width: 76px;
  height: 26px;
  top: 283px;
  border-radius: 5px;
  line-height: 20px;
  border: 1px solid lightgray;
  background: #5B8E31;
  color: #FFFFFF;
  text-decoration: none;
  font-family: "Pretendard";
  font-weight: 400;
  text-align: center;  

  @media all and (min-width: 1024px){	
    position: relative;
    width:  106px; 
    height: 31px;
    top:0;
    left:0;
    }
  
`;

const ButtonWrapper = styled.div`
  display:flex;
  box-sizing: border-box;
  position: relative;
  margin: 0 auto; /* 가로 중앙 정렬 */
  width: 100%; /* 너비를 100%로 설정 */
  max-width: 76px; /* 최대 너비를 110px로 제한 */
  height: 100%;
  max-height: 26px;
  top:-610px; 

  @media all and (min-width: 1024px) {
    position: relative;
    margin: 0 auto; /* 가로 중앙 정렬 */
    width: 100%; /* 너비를 100%로 설정 */
    max-width: 106px; /* 최대 너비를 110px로 제한 */
    height: 100%;
    max-height: 31px;
    top: -350px;
    left: 0;
  }
`;
 const ButtonText = styled.span`
    font-family: "Pretendard";
    width: 55px; 
    height: 14px;
    font-weight: 400
    line-height: 14.4px;
    font-size: 12px;
`;

function ProfileImage() {
  const inputRef = useRef(null);
  // 백엔드에서 받아올 imgurl을 담을 변수
  const [imageUrl, setImageUrl] = useState(profileImage);

  const twitSubmit = (e) => {
    e.preventDefault();
    const formDataForSubmit = new FormData();
    formDataForSubmit.append("img", inputRef.current.files[0]);

    const userToken = localStorage.getItem('accessToken');

    axios.post('http://arthurcha.shop:3000/app/image', formDataForSubmit, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${userToken}`,
      }
    })
    // 만약 백엔드로 이미지를 보내는 것을 성공하면
    .then((response) => {
      console.log(response.data);

      if (response.data.isSuccess) {
        const imageUrl = response.data.result.img_url;
        // useState로 이미지 url을 받는다
        setImageUrl(imageUrl);
        SendprofileImg(imageUrl);
        console.log(imageUrl);
        
      } else {
        console.error("서버 응답 에러:", response.data.message);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const onUploadImageButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div>
      <ImageWrapper>
        <StyledImage id="profile-image" src={imageUrl} alt="프로필 이미지" />
      </ImageWrapper>

      <ButtonWrapper>
        <StyledButton onClick={onUploadImageButtonClick}>
          <ButtonText>프로필 변경</ButtonText>
        </StyledButton>

        <input type="file" accept="image/*" ref={inputRef} onChange={twitSubmit} style={{ display: 'none' }} />
      </ButtonWrapper>
    </div>
  );
}

export default ProfileImage;