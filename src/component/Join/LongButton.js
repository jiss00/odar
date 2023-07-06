import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  box-sizing: border-box;
  position: absolute;
  width: ${(props) => (props.문의하기 === "true" ? "310px" : "335px")};
  height: ${(props) => (props.문의하기 === "true" ? "66px" : "75px")};
  top: ${(props) => (props.문의하기 === "true" ? "704px" : "707px")};
  left: ${(props) => (props.문의하기 === "true" ? "40px" : "27px")};
  gap: 8px;
  padding: 23px 100px;
  border-radius: 10px;
  font-size: 24px;
  line-height: 20px;
  border: 1px solid lightgray;
  background: ${(props) => (props.문의하기 === "true" ? "#5B8E31" : "#A2C08A")};
  color: ${(props) => (props.문의하기 === "true" ? "#000000" : "#5C5C5C")};
  text-decoration: none;
  font-family: "Pretendard";
  font-weight: 800;
  text-align: center;
`;


  const ButtonText = styled.span`
    width: ${(props) => (props.문의하기 === "true"  ? "83px" : "67px")};
    height: ${(props) => (props.문의하기 === "true"  ? "20px" : "29px")};
    font-weight: ${(props) => (props.문의하기 === "true"  ? "800" : "700")};
    line-height: ${(props) => (props.문의하기 === "true"  ? "20px" : "29.05px")};
    font-size: 24px;
  `;
  function LongButton({ children, to, 문의하기 }) {
    const is문의하기 = 문의하기 ? "true" : undefined;
    return (
      <StyledButton as={Link} to={to} 문의하기={is문의하기}>
        <ButtonText 문의하기={is문의하기}>{children}</ButtonText>
      </StyledButton>
    );
  }

export default LongButton;
