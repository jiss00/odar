import '../../App';
import React from 'react';
import styled, { css }  from 'styled-components';

const StyledLine = styled.div`
  display: flex;
  box-sizing: border-box;
  position: absolute; 
  width: 300px;
  height: 1px;
  border: 1px solid #D9D9D9;
  left: 45px;
  ${props =>
    props.top &&
    css`
      top: ${props.top}px;
    `}
`;

function Line({top}) {
  return (
    <div>
      <StyledLine top={top}/>
    </div>
  );
};

export default Line;
