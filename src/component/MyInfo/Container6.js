import React, { useState } from "react";
import styled,{css}  from "styled-components";

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
    max-width:56px;
    height: 20px;
    margin-left:auto;
    margin-right:40px;
    top:-185px;
    left:3px;

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

function Texts({children}) {
    return (
        <StyledTexts>
            {children}
        </StyledTexts>
    );
}

 


// Texts 컴포넌트 
const StyledTexts2 = styled.span`
    display: flex;
    box-sizing: border-box;
    position: relative; 
    font-family: 'Pretendard'; /* 폰트를 Pretendard로 설정 */
    font-weight: 400;
    line-height: 16.8px;
    color: #000000;
    white-space: pre-line;
    top:-185px;
    margin-left:50px;
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


function Texts2({children}) {
  return (
      <StyledTexts2>
          {children}
      </StyledTexts2>
  );
}

function Container6() {
  return (
    <Container>        
      <Texts>내 위치</Texts>
      <Texts2>창원시 마산회원구</Texts2>
    </Container>
  );
}

export default Container6;
