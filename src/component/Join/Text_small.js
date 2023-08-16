import React from "react";
import styled ,{ css }from "styled-components";

const StyledText = styled.span`
    display: flex;
    box-sizing: border-box;
    position: relative; 
    font-family: 'Pretendard'; /* 폰트를 Pretendard로 설정 */
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    color: #8E8B8B;
    height: 20px;
    @media all and (min-width: 1024px){	
      font-size:16px;
      }
    ${(props) =>
        props.이메일형식 &&
        css`
        Width: 74px;
        top: 115px;
        left: -10px;
        
        @media all and (min-width: 1024px){	
          position: relative; 
          margin-right:10px;
          margin-left:auto;
          top:225px;
          left:-160px;
          width:74px;
          }
        `}
     ${(props) =>
        props.대소문자 &&
        css`
        position:relative;
        Width: 89px;
        top: 140px;
        left: -10px;
        @media all and (min-width: 1024px){	
          position: relative; 
          top:305px;
          left:0px;
          width:100px;
      }
        `} 
    ${(props) =>
        props.숫자 &&
        css`
        position:relative;
        Width: 27px;
        top: 140px;
        left: 0px;
        @media all and (min-width: 1024px){	
          position: relative; 
        
          top:305px;
          left:0px;
          width:30px;
          }
        `}
     ${(props) =>
        props.특수문자 &&
        css`
        position: relative; 
        Width: 50px;
        top: 140px;
        left: 12px;
        @media all and (min-width: 1024px){	
          position: relative; 
         
          top:305px;
          left:0px;
          width:60px;
          }
        `}  
        ${(props) =>
          props.글자수 &&
          css`
          position: relative; 
          Width: 40px;
          top: 140px;
          left: 24px;
          @media all and (min-width: 1024px){	
            position: relative; 
           
            top:305px;
            left:0px;
            width:50px;
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

export default Text_small;
