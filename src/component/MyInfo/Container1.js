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
  font-family: 'Pretendard';
  text-indent: 0.3em;

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

    font-size: 15px;
    text-indent: 1em;
   
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
  font-family: 'Pretendard';
  font-weight: 400;
`;

const Writeinput = styled.input`
  position: relative;
  border: 1px solid #5B8E31;
  border-radius: 20px;
  
  width: 188px; 
  height: 25px;
  top: -18.5em;
  left: -8em;

  @media all and (min-width: 1024px) {

}
`;

function Selectbar() {
  return (
    <MenuBarWrapper>
    <MenuBar>
      <MenuItem value="1">----</MenuItem>
      <MenuItem value="2">직접입력</MenuItem>
      <MenuItem value="3">경영/사무/금융/보험직</MenuItem>
      <MenuItem value="4">연구직 및 공학기술직</MenuItem>
      <MenuItem value="5">교육/법률/사회복지/경찰/소방직 및 군인</MenuItem>
      <MenuItem value="6">보건/의료직</MenuItem>
      <MenuItem value="7">예술/디자인/방송/스포츠직</MenuItem>
      <MenuItem value="8">미용/여행/숙박/음식/경비/청소직</MenuItem>
      <MenuItem value="9">영업/판매/운전/운송직</MenuItem>
      <MenuItem value="10">건설/채굴직</MenuItem>
      <MenuItem value="11">설치/정비/생산직</MenuItem>
      <MenuItem value="12">농림어업직 </MenuItem>
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
      <Writeinput />
    </Container>
  );
}

export default Container1;
