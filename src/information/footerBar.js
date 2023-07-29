import styled from 'styled-components';
import '../css/join.css';
import { useState, useEffect } from 'react';

const Div = styled.div`
color : black;
display: grid;
grid-template-columns: 25px 25px 25px 25px 25px 25px 25px;
width : 270px;
height : 20px;
margin-left : 100px;
margin-top : 90px;
font-weight: 550;
font-size: 22px;
grid-gap:1px;
cursor : pointer;
@media screen and (min-width: 1024px){
  padding-left:280px;
  }
`
function Footer() {
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const element = document.getElementById('1');
    setCurrent(element);
  }, []);
  const onclick = (event) => {
    if (current !== null) {
      if (window.innerWidth < 1024) {
        current.style.color = "black";
        current.style.fontSize = "22px";
      }
      else {
        current.style.color = "black";
        current.style.fontSize = "22px";
      }
    }
    const newCurrent = event.target;
    if (window.innerWidth < 1024) {
      newCurrent.style.color = "#5B8E31";
      newCurrent.style.fontSize = "22px";
    }
    else {
      newCurrent.style.color = "#5B8E31";
      newCurrent.style.fontSize = "22px";
    }
    setCurrent(newCurrent);
  };


  return (
    <div>
      <Div>
        <div>{'<'}</div>
        <div id='1' onClick={onclick}>1</div>
        <div id='2' onClick={onclick}>2</div>
        <div id='3' onClick={onclick}>3</div>
        <div id='4' onClick={onclick}>4</div>
        <div id='5' onClick={onclick}>5</div>
        <div>{'>'}</div>
      </Div>
    </div>
  )
}
export default Footer;