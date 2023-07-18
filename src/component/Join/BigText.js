import React from "react";
import styled from "styled-components";

const StyledText = styled.span`
    display: flex;
    box-sizing: border-box;
    position: relative; 
    font-family: 'Pretendard'; /* 폰트를 Pretendard로 설정 */
    font-size: ${(props) => props.fontSize || "24px"};
    font-weight: 800;
    line-height: 20px;
    text-align: center;
    justify-content: center;
    color: #5C5C5C;
    width: ${(props) => props.width || "111px"};
    height: 20px;
    margin-right:auto;
    margin-left:auto;
    top:0px;

    @media all and (min-width: 1024px){	
      position: relative; 
      margin-right:auto;
      margin-left:auto;
      top:0px;
      left:0px;
      font-size: 52px;
      width:200px;
      }
`;

function BigText({ children, fontSize, width } ) {
  return (
    <>
      <StyledText fontSize={fontSize} width={width}>{children}</StyledText>
    </>
  );
}

export default BigText;
