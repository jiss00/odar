import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Rectanglediv = styled.div`
  display: flex;
  box-sizing: border-box;
  position: absolute; 
  width: 310px;
  height: 530px;
  top: 155px;
  left: 40px;
  border-radius: 15px;
  background-color: #EDF1D5;
`;

function Rectangle() {
  return (
    <Rectanglediv></Rectanglediv>
  );
}

export default Rectangle;
