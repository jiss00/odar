import React from "react";
import styled,{css}  from "styled-components";

const Container = styled.div`
display: flex;
margin: 0 auto;
`;


const Writeinput = styled.input`
  position: relative;
  border: 1px solid #5B8E31;
  border-radius: 20px;
  margin:0 auto;
  left:35px;
  width: 188px; 
  height: 25px;
  top:-270px;

  @media all and (min-width: 1024px) {
    width:358px;
    height: 35px;
    left:65px;
    top:-290px;

}
`;

function Container1_5() {
  return (
    <Container>
      <Writeinput />
    </Container>
  );
}

export default Container1_5;
