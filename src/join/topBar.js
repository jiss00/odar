  import React from "react";
  import styled from "styled-components";

  const Shape = styled.div`
    position:relative;
    margin-top:83px;
    margin-right:auto;
    margin-left:auto;
    margin-bottom: 70px;
    width: 193px;
    height: 15px;
    left:0px;
    top: 50px;
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
      if (count === 6) return "100%";
      if (count === 5) return "83%";
      if (count === 4) return "67%";
      if (count === 3) return "50%";
      if (count === 2) return "33%";
      return count === 1 ? "17%" : "0px";
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

    }
  `;

  function TopBar({ name,birth1,birth2,birth3,verification,complete }) {
    const count = [name,birth1,birth2,birth3,verification,complete].filter(Boolean).length;

    return( <Shape>
        <InnerShape count={count}/>
          </Shape>
    );
  }
  export default TopBar;