import styled from 'styled-components';
import '../css/join.css';
import { useState, useEffect } from 'react';

const Div = styled.div`
color : black;
display: grid;
grid-template-columns: 20px 20px 20px 20px 20px 20px 20px ;
width : 231px;
height : 20px;
margin-left : 170px;
margin-top : 90px;
font-weight: 550;
font-size: 15px;
@media screen and (min-width: 1024px){
  font-size:18px;
  padding-left:250px;
  }
`
function Footer() {
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const element = document.getElementById('1');
    setCurrent(element);
  }, []);

  useEffect(() => {
    if (current) {
      if (window.innerWidth < 1024) {
        current.style.color = "#5B8E31";
        current.style.fontSize = "18px";
      }
      else {
        current.style.color = "#5B8E31";
        current.style.fontSize = "24px";
      }
    }
  }, [current]);
  const onclick = (event) => {
    if (current !== null) {
      if (window.innerWidth < 1024) {
        current.style.color = "black";
        current.style.fontSize = "15px";
      }
      else {
        current.style.color = "black";
        current.style.fontSize = "21px";
      }
    }
    const newCurrent = event.target;
    if (window.innerWidth < 1024) {
      newCurrent.style.color = "#5B8E31";
      newCurrent.style.fontSize = "18px";
    }
    else {
      newCurrent.style.color = "#5B8E31";
      newCurrent.style.fontSize = "24px";
    }
    setCurrent(newCurrent);
  };

  return (
    <div>
      <Div>
        <div className='footer_1'>{'<'}</div>
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