import React from "react";
import styled,{css}  from "styled-components";

const Container = styled.div`
display: flex;
margin: 0 auto;
`;

// Texts 컴포넌트 
const StyledTexts = styled.span`
    display: flex;
    box-sizing: border-box;
    position: absolute; 
    font-family: 'Pretendard'; /* 폰트를 Pretendard로 설정 */
    font-weight: 400;
    line-height: 16.8px;
    color: #000000;
    white-space: pre-line;
    ${props =>
        props.fontsize &&
        css`
          font-size: ${props.fontsize}px;
        `}
    ${props =>
        props.width &&
        css`
          width: ${props.width}px;
        `}
     ${props =>
        props.height &&
        css`
        height: ${props.height}px;
        `}
     ${props =>
        props.top &&
        css`
        top: ${props.top}px;
        `}
     ${props =>
        props.left &&
        css`
        left: ${props.left}px;
        `}
 
  @media all and (min-width: 1024px){	
  position: relative; 
  width: 100%;
  max-width:70px;
  height: 20px;
  margin-left:auto;
  margin-right:10px;
  top:-310px;
  left:0px;
  font-size:20px;
  }

        
`;

function Texts({fontsize,width, height, top, left, children}) {
    return (
        <StyledTexts fontsize={fontsize} width={width} height={height} top={top} left={left}>
            {children}
        </StyledTexts>
    );
}

// Selectbar 컴포넌트
const MenuBar = styled.select`
  display: flex;
  box-sizing: border-box;
  position: absolute;
  width: 188px;
  height: 30px;
  top: 349px;
  left: 139px;
  background-color: #FFFFFF;
  border-radius: 20px;
  border: 1px solid #5B8E31;
  font-size: 14px;
  color: #000000;
  @media all and (min-width: 1024px){	
    position: relative; 

    width: 358px;
    height: 40px;
 
    top: 0px;
    left:0px;
   
    }
    
  /*react-select 나중에 시도해보자*/
`;
const MenuBarWrapper = styled.div`
  @media all and (min-width: 1024px) {
    position: relative;
    width: 358px; 
    height: 40px;
    top: -320px;
    left: 0;
    margin-left:50px;
    margin-right:auto;

  }
`;
const MenuItem = styled.option`
  font-weight: 400;
`;

function Selectbar() {
  return (
    <MenuBarWrapper>
    <MenuBar>
      <MenuItem value=""></MenuItem>
      <MenuItem value="1">Option 1</MenuItem>
      <MenuItem value="2">Option 2</MenuItem>
      <MenuItem value="3">Option 3</MenuItem>
      <MenuItem value="4">Option 4</MenuItem>
    </MenuBar>
    </MenuBarWrapper>
  );
}

function Container1() {
  return (
    <Container>
      <Texts fontsize={16} width={56} height={20} top={354} left={63}>
        희망직종
      </Texts>
      <Selectbar />
    </Container>
  );
}

export default Container1;
