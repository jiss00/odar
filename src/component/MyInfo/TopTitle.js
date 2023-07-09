import React from "react";
import styled,{css} from "styled-components";

const StyledTopTitle = styled.span`
    display: flex;
    box-sizing: border-box;
    position: absolute;
    width: 153px;
    height: 20px;
    top: 88px;
    ${props =>
      props.left &&
      css`
      left: ${props.left}px;
      `}
    
    z-index: 1;
  
    font-family: Pretendard;
    font-size: 32px;
    font-weight: 800;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
    color: rgba(162, 192, 138, 1);
`;

function TopTitle({...props}) {
  return (
      <StyledTopTitle{...props}></StyledTopTitle>
  );
}

export default TopTitle;
