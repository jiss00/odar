import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const ButtonContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

const StyledButton = styled.button`
  display: flex;
  box-sizing: border-box;
  position: relative;
  width: 150px;
  height: 66px;
  top: -101px;
  left: ${props => (props.primary ? "40px" : "199px")};
  gap: 8px;
  border-radius: 10px;
  font-size: 24px;
  line-height: 20px;
  border: 1px solid lightgray;
  background: ${props => (props.primary === "true" ? "#5B8E31" : "#A2C08A")};
  color: #000000;
  text-decoration: none;
  font-family: "Pretendard";
  font-weight: 800;
  text-align: center;
  left:${props => (props.primary ? "-10px" : "10px")};
  margin-left:${props => (props.primary ? "auto" : "0")};
  margin-right:${props => (props.primary ? "0" : "auto")};
  margin-bottom: 100px;
  ${({ disabled }) =>
  disabled &&
  `
  background:#A2C08A;
  color: #5C5C5C;
  pointer-events: none;
  cursor: not-allowed;
`}

  @media all and (min-width: 1024px) {
    position: relative;
    width: 100%;
    max-width: 495px;
    height: 66px;
    top: 50px;
    left:${props => (props.primary ? "-10px" : "10px")};
    margin-left:${props => (props.primary ? "auto" : "0")};
    margin-right:${props => (props.primary ? "0" : "auto")};
    margin-bottom: 100px;
  }
`;

const ButtonText = styled.span`
  width: 100%;
  height: 66px;
  line-height: 66px; 
  font-weight: 800;
  font-size: 24px;
  text-align: center;
`;

function OButton({ children, to, disabled, onClick  }) {
  return (
    <StyledButton primary="true" as={Link} to={to} disabled={disabled} onClick={onClick}>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
}

function XButton({ children }) {

  const Navigate = useNavigate();

  const goToMypage = () => {
      Navigate(-1);
  };

  return (
    <StyledButton onClick={goToMypage}>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
}

function ButtonGroup({ validEmail, validPassword }) {
  const isButtonDisabled = !(validEmail && validPassword);

  const handleConfirm = () => {
    if (!isButtonDisabled) {
      // 여기에 확인 버튼을 눌렀을 때 유효한 회원 체크 로직을 작성.
    
      if (validEmail  && validPassword) {
        console.log("유효한 회원입니다. 탈퇴 요청을 처리합니다.");
      } else {
        console.log("유효하지 않은 회원입니다.");
      }
    }
  };
  return (
    <ButtonContainer>
      <OButton  disabled={isButtonDisabled} onClick={handleConfirm}>확인</OButton>
      <XButton>취소</XButton>
    </ButtonContainer>
  );
}

export default ButtonGroup;
