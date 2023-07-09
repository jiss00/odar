import React from "react";
import styled ,{ css }from "styled-components";

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
        `}
     ${(props) =>
        props.대소문자 &&
        css`
        Width: 96px;
        top: 491px;
        left: 30px;
        `} 
    ${(props) =>
        props.숫자 &&
        css`
        Width: 28px;
        top: 491px;
        left: 177px;
        `}
     ${(props) =>
        props.특수문자 &&
        css`
        Width: 56px;
        top: 491px;
        left: 256px;
        `}        
`;

function Text_small({ children, ...props } ) {
  return (
    <>
      <StyledText {...props}>{children}</StyledText>
    </>
  );
}

export default Text_small;
