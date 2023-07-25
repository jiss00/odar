import React from "react";
import styled from "styled-components";

const StyledTitle = styled.input`
    display: flex;
    box-sizing: border-box;
    position: relative; 
    font-family: 'Pretendard'; /* 폰트를 Pretendard로 설정 */
    width: 290px;
    height: 40px;
    top: -330px;
    radius: 10px;
    border-radius: 10px;
    border: 3px solid #A2C08A;
    justify-content: center; 
    margin: 0px auto;

    ::placeholder {
        font-family: "Pretendard";
        font-size: 15px;
        color: #D9D9D9;
        font-weight: 400;
      }
     
  @media all and (min-width: 1024px){	
    position: relative; 
    width: 800px;
    height: 50px;
    margin-right:auto;
    margin-left:auto;
    top:-335px;
    left:0px;
    ::placeholder {
      font-size: 18px;
    }
    }
  
`;

function Title({...props}) {
  return (
      <StyledTitle{...props}></StyledTitle>
  );
}

export default Title;
