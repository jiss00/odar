import React, { useEffect, useState } from 'react';
import styled,{css}  from "styled-components";
import axios from 'axios';
import { sendRegionsToAPI } from './ModifyLongButton';

const Containerfor6 = styled.div`
display: flex;
margin: 0 auto;
position:relative;
top:60px;
left:-300px;
@media all and (min-width: 1024px){	
  top:85px;
}
`;

// Texts 컴포넌트 
const Texts2 = styled.span`
    display: flex;
    position: relative; 
    width: 100%;
    max-width:56px;
    height: 20px;
    margin-left:auto;
    margin-right:5px;
    top: 6px;
    left:97px;
    white-space:nowrap;

    font-family: 'Pretendard'; /* 폰트를 Pretendard로 설정 */
    font-weight: 400;
    line-height: 16.8px;
    color: #000000;
    font-size:16px;

  @media all and (min-width: 1024px){	
    position: relative; 
    width: 100%;
    max-width:150px;
    height: 20px;
    margin-left:auto;
    margin-right:10px;
    top: 0px;
    left:-125px;
    font-size:20px;
    }
  
              
`;

// Texts 컴포넌트 
const Texts3 = styled.span`

    display: flex;
    box-sizing: border-box;
    position: relative; 
    font-family: 'Pretendard'; /* 폰트를 Pretendard로 설정 */
    font-weight: 400;
    line-height: 16.8px;
    color: #000000;
    top: 6px;
    left:170px;
    margin-right:auto;
    white-space:nowrap;
    overflow-x: auto;
    white-space: nowrap;
    overflow-y: scroll;
    #test::-webkit-scrollbar {
      display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
  
  @media all and (min-width: 1024px){	
  position: relative; 
  width: 500px;
  height: 20px;
  margin-left:10px;
  margin-right:auto;
  top:3px;
  left:30px;
  font-size:20px;
  color: #5C5C5C;

  }
        
`;


const Container6 = (props) => {

  return (
    <Containerfor6>
      <Texts2>내 위치</Texts2>
        <Texts3>{props.address}</Texts3>
    </Containerfor6>
  );

}

export default Container6;