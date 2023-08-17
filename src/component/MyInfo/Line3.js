import '../../App';
import React from 'react';
import styled, { css }  from 'styled-components';

const StyledLine = styled.div`
 display: flex;
  box-sizing: border-box;
  position: relative; 
  width: 300px;
  height: 1px;
  border: 1px solid #D9D9D9;
  top: -260px;
  margin: 0px auto;

    @media all and (min-width: 1024px){	
      position: relative;
      width: 980px;
      margin: 0px auto;
       left: 0;
      } 
`;

function Line3({top}) {
  return (
      <StyledLine top={top}/>
   );
};

export default Line3;
