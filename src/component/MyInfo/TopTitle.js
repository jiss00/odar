import React from "react";
import styled,{css} from "styled-components";

const StyledTopTitle = styled.span`
    display: flex;
    box-sizing: border-box;
    position: relative;
    width: 153px;
    height: 20px;
    top: 40px;
    margin: 0px auto;
    font-family: Pretendard;
    font-size: 32px;
    font-weight: 800;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
    color: rgba(162, 192, 138, 1);
    justify-content: center; 
    
  @media all and (min-width: 1024px){	
    position: relative; 
    width: 250px;
    height: 20px;
    margin-right:auto;
    margin-left:auto;
    top:149px;
    left:0px;
    font-size: 52px;
    text-align: center;
    }
`;

function TopTitle({...props}) {
  return (
      <StyledTopTitle{...props}></StyledTopTitle>
  );
}

export default TopTitle;
