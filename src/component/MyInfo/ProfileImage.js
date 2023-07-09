import React from 'react';
import styled from 'styled-components';
import profileImage from './할아버지 1.png'; // 상대 경로로 이미지 파일을 import

const StyledImage = styled.img`
  box-sizing: border-box;
  position: absolute; 
  width: 90px;
  height: 90px;
  border-radius: 1000px;
  top: 178px;
  left: 149px;
  background-color: rgba(204, 204, 204, 0.3);
`;

function ProfileImage() {
  return (
    <div>
      <StyledImage src={profileImage} alt="Profile Image" />
    </div>
  );
}

export default ProfileImage;
