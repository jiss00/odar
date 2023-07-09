import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  box-sizing: border-box;
  position: absolute;
  width: 150px;
  height: 66px;
  top: 701px;
  left: ${(props) => (props.o === "true" ? "40px" : "199px")};
  gap: 8px;
  border-radius: 10px;
  font-size: 24px;
  line-height: 20px;
  border: 1px solid lightgray;
  background: ${(props) => (props.o === "true" ? "#5B8E31" : "#A2C08A")};
  color: #000000;
  text-decoration: none;
  font-family: "Pretendard";
  font-weight: 800;
  text-align: center;
`;


const ButtonText = styled.span`
  width: 42px;
  height: 66px;
  line-height: 66px; 
  font-weight: 800;
  font-size: 24px;
`;

function OxButton({ children, to, o }) {
  const isO = o ? "true" : undefined;
  return (
    <StyledButton as={Link} to={to} o={isO}>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
}

export default OxButton;

