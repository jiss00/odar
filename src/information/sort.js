import styled from 'styled-components';
import { useEffect, useState } from "react";

function Sort(props){
  const { active, onClick, text } = props;

  const Div = styled.div`
  box-sizing: border-box;
  padding-top : 4px;
  width : 85px;
  height : 28px;
  color: ${active ? '#5B8E31' : 'black'}; // 클릭된 경우 색 변경, 아닌 경우 일반 색상
  font-weight: ${active ? '800' : '400'};
  font-size: 15px;
  border-radius : 20px;
  border : solid #5B8E31 1px;
  cursor: pointer;
  padding-left:10px;
  @media screen and (min-width: 1024px){
    font-size:18px;
    padding-top:5px;
    width : 104px;
    height : 40px; 
  } 
  `  
  const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-top: 15px solid #A2C08A;
  border-left: 7.5px solid transparent;
  border-right: 7.5px solid transparent;
  box-sizing: border-box;
  margin-top:7px;
  margin-left:4px;
  @media screen and (min-width: 1024px){
    border-top: 16px solid #A2C08A;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    margin-top:12px;
    margin-left:10px;
  } 
  `
  return(
    <div onClick={onClick} className='sort_1'>
      <Div>{props.text}</Div>
      <Triangle></Triangle>
    </div>
  )
}
export default Sort;
