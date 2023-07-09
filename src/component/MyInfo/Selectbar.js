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

  /*react-select 나중에 시도해보자*/
`;

const MenuItem = styled.option`
  font-weight: 400;
`;

function Selectbar() {
  return (
    <MenuBar>
      <MenuItem value=""></MenuItem>
      <MenuItem value="1">Option 1</MenuItem>
      <MenuItem value="2">Option 2</MenuItem>
      <MenuItem value="3">Option 3</MenuItem>
      <MenuItem value="4">Option 4</MenuItem>
    </MenuBar>
  );
}

export default Selectbar;

