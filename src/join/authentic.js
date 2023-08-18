import styled from 'styled-components';
import { useState } from 'react';
function Auth({disabled,phone,year,month,day,...props}){
  const Auth =styled.button`
  box-sizing: border-box;
  width: 80px;
  height: 50px;
  cursor: pointer;
  color:black;
  font-size: 21px;
  font-weight: 1000;
  color:black;
  background-color: #A2C08A;
  border-radius: 15px;
  text-align: center;
  padding-top: 2px;
  border : none;
  ${({ disabled }) =>
    disabled &&
    `
    background:#A2C08A;
    color: #5C5C5C;
    pointer-events: none;
    cursor: not-allowed;
  `}
  @media screen and (min-width: 1024px) {
    top : ${props.w_top};    
    left : ${props.w_left};
  }
  `    
  const isButtonDisabled = !(phone && day && month && year );


  return(
    <Auth disabled={isButtonDisabled} onClick = {props.func}>{props.text}</Auth>
  )
}
export default Auth