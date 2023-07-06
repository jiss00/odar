import styled from 'styled-components';
import { useState } from 'react';
function Auth(props){
  const Auth =styled.div`
  top : ${props.top};
  left :${props.left};
  position: fixed;
  box-sizing: border-box;
  width: 70px;
  height: 50px;
  cursor: pointer;
  font-size: 22px;
  font-weight: 600;
  background-color: #A2C08A;
  border-radius: 15px;
  text-align: center;
  padding-top: 8px;
  `

  return(
    <Auth>{props.text}</Auth>
  )
}
export default Auth