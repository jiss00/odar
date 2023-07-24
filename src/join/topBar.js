  import React from "react";
  import styled from "styled-components";

  const Shape = styled.div`
    position:relative;
    margin-top:83px;
    margin-right:auto;
    margin-left:auto;

    width: 193px;
    height: 15px;
    left:0px;

    border-radius: 10px;
    background-color: #ABABAB80;
    
    @media all and (min-width: 1024px){	
      position: relative; 
      margin-right:auto;
      margin-left:auto;
      left:0px;
      width:915px;
      }
  `;
  const InnerShape = styled.div`
    position:relative;
    margin-right:auto;
    width: ${({ count }) => {
      if (count === 4) return "100px";
      if (count === 3) return "75px";
      if (count === 2) return "50px";
      return count === 1 ? "25px" : "0px";
    }};
    height: 15px;
    left:0px;
    transition: width 0.3s ease;

    border-radius: 10px;
    background: rgba(162, 192, 138, 1);
    
    @media all and (min-width: 1024px){	
      position: relative; 
      margin-right:auto;
      top:0;
      left:0px;
      width: ${({ count }) => {
        if (count === 4) return "100%";
        if (count === 3) return "75%";
        if (count === 2) return "50%";
        return count === 1 ? "25%" : "0px";
      }};
    }
  `;

  function TopBar({ name,birth,verification,complete}) {
    const count = [name,birth,verification,complete].filter(Boolean).length;

    return( <Shape>
        <InnerShape count={count}/>
          </Shape>
    );
  }
  export default TopBar;