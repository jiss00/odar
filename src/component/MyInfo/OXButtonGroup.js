import React from "react";
import styled from "styled-components";

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
  background: ${props => (props.primary ? "#5B8E31" : "#A2C08A")};
  color: #000000;
  text-decoration: none;
  font-family: "Pretendard";
  font-weight: 800;
  text-align: center;
  left:${props => (props.primary ? "-10px" : "10px")};
  margin-left:${props => (props.primary ? "auto" : "0")};
  margin-right:${props => (props.primary ? "0" : "auto")};
  margin-bottom: 100px;
  
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

function OButton({ children }) {
  return (
    <StyledButton primary>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
}

function XButton({ children }) {
  return (
    <StyledButton>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
}

function ButtonGroup() {
  return (
    <ButtonContainer>
      <OButton>확인</OButton>
      <XButton>취소</XButton>
    </ButtonContainer>
  );
}

export default ButtonGroup;
