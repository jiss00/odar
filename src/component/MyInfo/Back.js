import React from 'react';
import styled from 'styled-components';
import profileImage from './back.png'; // 상대 경로로 이미지 파일을 import

const StyledBack = styled.img`
  box-sizing: border-box;
  position: absolute;
  width: 25px;
  height: 25px;
  top: 67px;
  left: 54px;
  z-index: 1;
  @media all and (min-width: 1024px){	
    position: relative; 
    width: 40px;
    height: 30px;
    left:100px;
    margin: 0px auto;
  }
`;

function Back() {
  return (
    <div>
      <StyledBack src={profileImage} alt="Profile Image" />
    </div>
  );
}

export default Back;