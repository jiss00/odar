import React from "react";
import styled,{css}  from "styled-components";

const Container = styled.div`
display: flex;
margin: 0 auto;
width: 440px;
`;

// Text_small 컴포넌트 
const StyledText = styled.span`
    display: flex;
    box-sizing: border-box;
    position: absolute; 
    font-family: 'Pretendard'; /* 폰트를 Pretendard로 설정 */
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    color: #8E8B8B;
    height: 20px;
   
    ${(props) =>
        props.이메일형식 &&
        css`
        Width: 74px;
        top: 316px;
        left: 30px;
        @media all and (min-width: 1024px){	
          position: relative; 
          margin-right:auto;
          margin-left:auto;
          top:372px;
          left:0px;
          width:440px;
          }
        `}
     ${(props) =>
        props.대소문자 &&
        css`
        Width: 96px;
        top: 491px;
        left: 30px;
        @media all and (min-width: 1024px){	
          position: relative; 
          margin-right:auto;
          margin-left:auto;
          top:547px;
          left:0px;
          }
        `} 
    ${(props) =>
        props.숫자 &&
        css`
        Width: 28px;
        top: 491px;
        left: 177px;
        @media all and (min-width: 1024px){	
          position: relative; 
          margin-right:auto;
          margin-left:auto;
          top:547px;
          left:0px;
          }
        `}
     ${(props) =>
        props.특수문자 &&
        css`
        Width: 56px;
        top: 491px;
        left: 256px;
        @media all and (min-width: 1024px){	
          position: relative; 
          margin-right:auto;
          margin-left:auto;
          top:547px;
          left:0px;
          }
        `}        
`;

function Text_small({ children, ...props } ) {
  return (
    <>
      <StyledText {...props}>{children}</StyledText>
    </>
  );
}

function JoinContainer() {
  return (
    <Container>  
        <Text_small 대소문자>대문자 · 소문자</Text_small>
        <Text_small 숫자>숫자</Text_small>
        <Text_small 특수문자>특수문자</Text_small>   
    </Container>
  );
}

export default JoinContainer;
