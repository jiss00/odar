import React from "react";
import styled from "styled-components";

const Shape = styled.div`
  position:relative;
  margin-top:90px;
  margin-right:auto;
  margin-left:auto;

  width: 193px;
  height: 15px;
  left:0px;

  border-radius: 10px;
  background-color: #ABABAB80;
  
  @media all and (min-width: 1024px){	
    position: relative; 
    margin-top:72px;
    margin-right:auto;
    margin-left:auto;
    left:0px;
    width:915px;
    }
`;
const InnerShape = styled.div`
  position:relative;
  margin-right:auto;
  width: ${({ count }) => {
    if (count === 3) return "192px";
    if (count === 2) return "128px";
    return count === 1 ? "64px" : "0px";
  }};
  height: 15px;
  left:0px;
  transition: width 0.3s ease;

  border-radius: 10px;
  background: rgba(162, 192, 138, 1);
  
  @media all and (min-width: 1024px){	
    position: relative; 
    margin-right:auto;
    top:0;
    left:0px;
    width: ${({ count }) => {
      if (count === 3) return "915px";
      if (count === 2) return "610px";
      return count === 1 ? "305px" : "0px";
    }};
  }
`;

function ProgressBar({ validEmail, validPassword, validPasswordCheck }) {
  const count = [validEmail, validPassword, validPasswordCheck].filter(Boolean).length;

  return( <Shape>
      <InnerShape count={count}/>
        </Shape>
  );
}

export default  ProgressBar;
