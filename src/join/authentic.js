import styled from 'styled-components';
import { useState } from 'react';
function Auth({usrName,year,month,day,phone,...props}){
  const Auth =styled.button`
  box-sizing: border-box;
  width: 70px;
  height: 50px;
  cursor: pointer;
  font-size: 22px;
  font-weight: 800;
  background-color: #A2C08A;
  border-radius: 15px;
  text-align: center;
  padding-top: 2px;
  border : none;
  @media screen and (min-width: 1024px) {
    top : ${props.w_top};    
    left : ${props.w_left};
  }
  `    
  const isButtonDisabled = !(usrName && year && month && day && phone );


  return(
    <Auth disabled={isButtonDisabled} onClick = {props.func}>{props.text}</Auth>
  )
}
export default Auth