import React, { useState } from "react";
import styled,{css}  from "styled-components";
import sendStartTimesToAPI from "./ModifyLongButton";
import sendEndTimesToAPI from "./ModifyLongButton";

const Container = styled.div`
display: flex;
margin: 0 auto;
`;

const TimeWrapper = styled.div`
    position: relative;
    width: 200px; 
    height: 40px;
    top: -280px;
    margin-left:15px;
    margin-right:auto;
    display: flex; 

  @media all and (min-width: 1024px) {
    position: relative;
    width: 358px; 
    height: 40px;
    top: -250px;
    left: -140px;
    margin-left:50px;
    margin-right:auto;
    display: flex; 
  }`



function Container3() {

  return (
    <Container>
      <TimeWrapper>
        
      </TimeWrapper>
    </Container>
  );
}

export default Container3;