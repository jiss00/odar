import React from "react";
import styled,{css} from "styled-components";

const Circlediv = styled.div`
display: flex;
box-sizing: border-box;
position: absolute; 
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: #FF0000;
  ;
 ${(props) =>
        props.이메일형식 &&
        css`
        top: 316px;
        left: 116px;
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
        top: 491px;
        left: 138px;
        `}
 ${(props) =>
        props.숫자 &&
        css`
        top: 491px;
        left: 217px;
        `}
 ${(props) =>
        props.특수문자 &&
        css`
        top: 491px;
        left: 324px;
        `}
            
`

function Circle({ children, ...props } ) {
    return (
      <>
        <Circlediv {...props}>{children}</Circlediv>
      </>
    );
  }
export default Circle;
