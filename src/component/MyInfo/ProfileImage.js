import React from 'react';
import styled from 'styled-components';
import profileImage from './할아버지 1.png'; // 상대 경로로 이미지 파일을 import

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

function ProfileImage() {
  return (
    <ImageWrapper>
      <StyledImage src={profileImage} alt="Profile Image" />
    </ImageWrapper>
  );
}

export default ProfileImage;
