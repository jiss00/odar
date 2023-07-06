import React from "react";
import styled from "styled-components";

const StyledText = styled.span`
    display: flex;
    box-sizing: border-box;
    position: absolute; 
    font-family: 'Pretendard'; /* 폰트를 Pretendard로 설정 */
    font-size: ${(props) => props.fontSize || "24px"};
    font-weight: 800;
    line-height: 20px;
    text-align: center;
    color: #5C5C5C;
    width: ${(props) => props.width || "111px"};
    height: 20px;
`;

function Text({ children, fontSize, width } ) {
  return (
    <>
      <StyledText fontSize={fontSize} width={width}>{children}</StyledText>
    </>
  );
}

export default Text;
