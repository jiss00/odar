import React from "react";
import styled from "styled-components";

const StyledTitle = styled.input`
    display: flex;
    box-sizing: border-box;
    position: absolute; 
    font-family: 'Pretendard'; /* 폰트를 Pretendard로 설정 */
    width: 290px;
    height: 40px;
    top: 272px;
    left: 50px;
    radius: 10px;
    border-radius: 10px;
    border: 3px solid #A2C08A;
    ::placeholder {
        font-family: "Pretendard";
        font-size: 15px;
        color: #D9D9D9;
        font-weight: 400;
      }
`;

function Title({...props}) {
  return (
      <StyledTitle{...props}></StyledTitle>
  );
}

export default Title;
