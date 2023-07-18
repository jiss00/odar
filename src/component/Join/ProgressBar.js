import React from "react";
import styled from "styled-components";

const Shape = styled.div`
  posiotion:relative;
  margin-top:83px;
  margin-right:auto;
  margin-left:auto;

  width: 193px;
  height: 15px;
  top: 100px;
  left:0px;

  border-radius: 10px;
  background-color: #ABABAB80;
  
  @media all and (min-width: 1024px){	
    position: relative; 
    margin-right:auto;
    margin-left:auto;
    top:0;
    left:0px;
    width:915px;
    }
`;

function ProgressBar() {
  return <Shape />;
}

export default  ProgressBar;
