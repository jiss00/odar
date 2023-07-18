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
    position: relative; 
    width: 100%;
    max-width:56px;
    height: 20px;
    margin-left:auto;
    margin-right:5px;
    top:-285px;
    left:0px;

    font-family: 'Pretendard'; /* 폰트를 Pretendard로 설정 */
    font-weight: 400;
    line-height: 16.8px;
    color: #000000;
    white-space: pre-line;
    font-size:16px;
 
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

function Texts({children}) {
    return (
        <StyledTexts>
            {children}
        </StyledTexts>
    );
}

// Selectbar 컴포넌트
const MenuBar = styled.select`
  display: flex;
  box-sizing: border-box;
  position: relative;
  width: 188px;
  height: 30px;
  top: 0px;
  left: 0px;
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
  position: relative;
    width: 188px; 
    height: 30px;
    top: -293px;
    left: 0;
  
    margin-left:10px;
    margin-right:auto;

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
      <Texts>
        희망직종
      </Texts>
      <Selectbar />
    </Container>
  );
}

export default Container1;
