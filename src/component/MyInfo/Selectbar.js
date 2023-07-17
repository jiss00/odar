import React from "react";
import styled from "styled-components";

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
    margin: 0px auto; 
    top: 0px;
    left:0px;
    margin-left: 22%; 
    margin-right: 12%; 
    }
    
  /*react-select 나중에 시도해보자*/
`;
const MenuBarWrapper = styled.div`
  @media all and (min-width: 1024px) {
    position: relative;
    width: 60%; /* 너비를 60%로 설정 */
    max-width: 358px; /* 최대 너비를 358px로 제한 */
    height: 100%;
    max-height: 40px;
    top: -360px;
    left: 0;
    margin: 0 auto;

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

export default Selectbar;

