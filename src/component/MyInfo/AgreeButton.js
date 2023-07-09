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
