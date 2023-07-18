import React from 'react';
import styled from 'styled-components';
import profileImage from './back.png'; // 상대 경로로 이미지 파일을 import

const StyledBack = styled.img`
  box-sizing: border-box;
  display:flex;	

  position: relative;
  width: 25px;
  height: 25px;
  top: 67px;
  left:-135px;
  margin: 0px auto;

  @media all and (min-width: 1024px){
    display:flex;	
    position: relative; 
    width: 40px;
    height: 30px;
    left:-480px;
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