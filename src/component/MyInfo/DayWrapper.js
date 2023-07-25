import React from "react";
import styled from "styled-components";

const DaysWrapper = styled.div`
    
  @media all and (min-width: 1024px) {
    position: relative;
    width: 60%; /* 너비를 60%로 설정 */
    max-width: 358px; /* 최대 너비를 358px로 제한 */
    height: 100%;
    max-height: 40px;
    top: -360px;
    left: 0;
    margin: 0 auto;

  }
`

function DayWrapper() {
    return (
      <DaysWrapper>
      </DaysWrapper>
    );
  }
  
  export default DayWrapper;
  