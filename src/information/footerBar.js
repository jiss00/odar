import styled from 'styled-components';
import '../css/join.css';
import { useState, useEffect } from 'react';

const Div = styled.div`
color : black;
display: grid;
grid-template-columns: 20px 20px 20px 20px 20px 20px 20px ;
width : 231px;
height : 20px;
position: fixed;
top : 716px;
left : 120px;
font-weight: 550;
font-size: 15px;`
function Footer() {
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const element = document.getElementById('1');
    setCurrent(element);
  }, []);

  useEffect(() => {
    if (current) {
      current.style.color = "#5B8E31";
      current.style.fontSize = "18px";
    }
  }, [current]);
  const onclick = (event) => {
    if (current !== null) {
      current.style.color = "black";
      current.style.fontSize = "15px";
    }
    const newCurrent = event.target;
    newCurrent.style.color = "#5B8E31";
    newCurrent.style.fontSize = "18px";
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