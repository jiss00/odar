import React, { useState } from "react";
import styled,{css} from "styled-components";
import { PiEyeClosed, PiEye } from "react-icons/pi";

const JoinContainer1 = styled.div`
display: flex;
position: relative; 
margin: 0 auto;
width: 300px;
@media all and (min-width: 1024px){	
  margin-right:auto;
  margin-left:auto;
  width:440px;
  }
`;
const StyledText = styled.span`
    display: flex;
    box-sizing: border-box;
    position: relative; 
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
        top: 156px;
        left: -10px;
        
        @media all and (min-width: 1024px){	
          position: relative; 
          margin-right:10px;
          margin-left:auto;
          top:300px;
          left:-160px;
          width:74px;
          }
        `}
     ${(props) =>
        props.대소문자 &&
        css`
        position:relative;
        Width: 96px;
        top: 0px;
        left: -10px;
        @media all and (min-width: 1024px){	
          position: relative; 
          top:0px;
          left:0px;
          width:100px;
      }
        `} 
    ${(props) =>
        props.숫자 &&
        css`
        position:relative;
        Width: 28px;
        top: 0px;
        left: 15px;
        @media all and (min-width: 1024px){	
          position: relative; 
        
          top:0px;
          left:0px;
          width:30px;
          }
        `}
     ${(props) =>
        props.특수문자 &&
        css`
        position: relative; 
        Width: 56px;
        top: 0px;
        left: 40px;
        @media all and (min-width: 1024px){	
          position: relative; 
         
          top:0px;
          left:0px;
          width:60px;
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

const StyledInput = styled.input`
  display: flex;
  box-sizing: border-box;
  position: relative;
  border-radius: 15px;
  font-size: 24px;
  border: 1.5px solid #5B8E31;
  width: 335px;
  height: 50px;
  top: 0px;
  margin:0 auto;

  ::placeholder {
    font-family: "Pretendard";
    font-size: 24px;
    color: #D9D9D9;
    font-weight: 800;
  }
  @media all and (min-width: 1024px){	
    position: relative; 
    margin-right:auto;
    margin-left:auto;
    top: 20px;
    left:0px;
    width:440px;
    }
`;

const IconWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    position: relative; 
    width: 24px;
    height: 24px;
    top: -37px;
    left: 140px;
    cursor: pointer;
    margin-right:auto;
    margin-left:auto;

  @media all and (min-width: 1024px){	
    position: relative; 
    margin-right:auto;
    margin-left:auto;
    top:-16px;
    left:200px;
    }
`;

const Circlediv = styled.div`
  display: flex;
  box-sizing: border-box;
  position: relative;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: ${({ valid }) => (valid ? "#A2C08A" : "#FF0000")};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  @media all and (min-width: 1024px){	
    position: relative; 
    top:0px;
    left:0;
    margin: 0 10px;
  }
  
`;

// 대소문자 유효성 검사 함수
function validateUpperCase(str) {
  return /[A-Z]/.test(str);
}

// 숫자 유효성 검사 함수
function validateNumber(str) {
  return /[0-9]/.test(str);
}

// 특수문자 유효성 검사 함수
function validateSpecialCharacter(str) {
  return /[!@#$%^&*(),.?":{}|<>]/.test(str);
}

function  FindingPass_Input_pw(props) {
  const [isPasswordVisible, setPasswordVisible] = useState(false); // 비밀번호 숨김/보임 상태
  const [validUpperCase, setValidUpperCase] = useState(false); // 대소문자 유효성 검사 결과
  const [validNumber, setValidNumber] = useState(false); // 숫자 유효성 검사 결과
  const [validSpecialCharacter, setValidSpecialCharacter] = useState(false); // 특수문자 유효성 검사 결과

  const handleClick = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleInputChange = (event) => {
    const password = event.target.value;
    setValidUpperCase(validateUpperCase(password));
    setValidNumber(validateNumber(password));
    setValidSpecialCharacter(validateSpecialCharacter(password));
  };

  return (
    <div style={{ position: "relative" }}>
      <StyledInput {...props} type={isPasswordVisible ? "text" : "password"} onChange={handleInputChange} />
      <IconWrapper onClick={handleClick}>
        {isPasswordVisible ? <PiEye size={24}/> : <PiEyeClosed size={24}/>}
      </IconWrapper>

      <JoinContainer1>
        <Text_small 대소문자>대문자 · 소문자</Text_small>
        <Circlediv valid={validUpperCase} top="0px" left="0px" />
        <Text_small 숫자>숫자</Text_small>
        <Circlediv valid={validNumber} top="0px" left="23px" />
        <Text_small 특수문자>특수문자</Text_small>   
        <Circlediv valid={validSpecialCharacter} top="0px" left="50px" />
      </JoinContainer1>

    </div>
  );
}

export default FindingPass_Input_pw;
