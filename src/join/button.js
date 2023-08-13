import React from "react";
import styled,{css}  from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
position: relative;
display: flex;
margin: 0 auto;
margin-bottom: 30px;
`;

const StyledButton = styled.button`
  display:flex;
  box-sizing: border-box;
  position: relative;
  width:335px;
  height: 66px;
  top: 0px;
  margin: 0 auto;
  gap: 8px;
  padding: 17px 130px;
  border-radius: 10px;
  font-size: 24px;
  line-height: 20px;
  border: 1px solid lightgray;
  background: #5B8E31;
  color: #000000;
  text-decoration: none;
  font-family: "Pretendard";
  font-weight: 800;
  text-align: center;
  margin-bottom: 30px;

  /* 버튼이 비활성화된 상태에 대한 스타일 */
  ${({ disabled }) =>
    disabled &&
    `
    background:#A2C08A;
    color: #5C5C5C;
    pointer-events: none;
    cursor: not-allowed;
  `}
  
  @media all and (min-width: 1024px){	
    position: relative; 
    left:0;
    width: 440px;
    height: 60px;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:30px;
    }
`;


  const ButtonText = styled.span`
    width:67px;
    height: 29px;
    font-weight: 700;
    line-height: 29.05px;
    font-size: 24px;
    @media all and (min-width: 1024px){	
      width:100px;
      position: relative; 
      margin: 0 auto;
      top:px;
      left:0px;
      font-size: 36px;
      font-weight: 800;
      }
  `;
  function LongButton({ children, to, disabled, onClick }) {
    return (
      <StyledButton onClick={onClick} disabled={disabled}>
        <ButtonText >{children}</ButtonText>
      </StyledButton>
    );
  }

  function Button({name, birth1, birth2, birth3, verification, complete, onClick, check }) {
    const isButtonDisabled = !(name && birth1 && birth2 && birth3 && verification && complete && check);
    return (
    <Container>        
      <LongButton onClick={onClick} disabled={isButtonDisabled}>가 입</LongButton>
    </Container>
  );
}

export default Button;


{/*import styled from 'styled-components';
function Button(props){
  const auth = document.getElementsByClassName("auth");
  const complete = () =>{
    auth[0].style.display = 'block';
  }
  const Button =styled.div`
  box-sizing: border-box;
  background-color: #A2C08A;
  border-radius: 10px;
  gap: 8px;
  cursor: pointer;
  padding-top: 20px;
  font-size: 24px;
  text-align: center;
  font-weight: 700;
  width: 335px;
  height:75px;
  @media screen and (min-width: 1024px) {
    width : 440px;
  }
  `
  return(
    <Button onClick={complete} >{props.text}</Button>
  )
}
export default Button*/}