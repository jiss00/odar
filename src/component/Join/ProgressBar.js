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
`;

function ProgressBar() {
  return <Shape />;
}

export default  ProgressBar;
