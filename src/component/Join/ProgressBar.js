import React from "react";
import styled from "styled-components";

const Shape = styled.div`
  width: 193px;
  height: 15px;
  top: 83px;
  left: 99px;
  border-radius: 10px;
  background-color: #ABABAB80;
  position: absolute;
  @media all and (min-width: 1024px){	
    position: relative; 
    margin-right:auto;
    margin-left:auto;
    top:72px;
    left:0px;
    width:915px;
    }
`;

function ProgressBar() {
  return <Shape />;
}

export default  ProgressBar;
