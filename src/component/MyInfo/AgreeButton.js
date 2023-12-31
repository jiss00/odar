import React, { useState } from "react";
import styled,{css} from "styled-components";

const ButtonContainer = styled.div`
  display: inline-block;
  position: absolute;
  width: 50.42px;
  height: 25px;
  left: 265px;
  border: 5px solid #A2C08A;
  border-radius: 50px;
  background-color: transparent;
  cursor: pointer;
  ${props =>
    props.top &&
    css`
    top: ${props.top}px;
    `}

  @media all and (min-width: 1024px) {
    position: relative;
    max-width: 67px;
    max-height: 33px;
    ${props =>
      props.top &&
      css`
      top: ${props.top*0.01-500}px;
      `}
      left:0px;
      margin: 0 auto;
      margin-left: 22%; 
      margin-right: 12%; 

  }
`;

const Button = styled.div`
  position: absolute;
  top: 50%;
  left: ${props => props.clicked ? "35px" : "15px"};
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #A2C08A;
  transition: left 0.3s ease-in-out;
`;

function AgreeButton({top}) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <ButtonContainer top={top} onClick={handleClick}>
      <Button clicked={clicked} />
    </ButtonContainer>
  );
}

export default AgreeButton;
