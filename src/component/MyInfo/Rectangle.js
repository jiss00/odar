import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Rectanglediv = styled.div`
  display: flex;
  box-sizing: border-box;
  position: absolute; 
  top: 155px;
  left: 40px;
  width: 310px;
  height: 530px;
  border-radius: 15px;
  background-color: #EDF1D5;

  @media all and (min-width: 1024px){	
  position: relative; 
  width: 1008px;
  height: 608px;
  margin: 0px auto;
  top: 200px;
  left:0px;
  }
`;

function Rectangle() {
  return (
    <Rectanglediv></Rectanglediv>
  );
}

export default Rectangle;
