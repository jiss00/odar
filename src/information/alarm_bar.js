import styled from 'styled-components';
import { useState } from 'react';
const Div = styled.div`
box-sizing: border-box;
text-align: center;  
padding-top : 5px;
color: black;
font-weight: 550;
font-size: 15px;
@media screen and (min-width: 1024px){
  font-size: 20px;
  } 
`
const Triangle = styled.div`
width: 0px;
height: 0px;
border-top: ${(props) => props.top} solid #5B8E31;
border-bottom : ${(props) => props.bottom} solid #5B8E31;
border-left: 7.5px solid transparent;
border-right: 7.5px solid transparent;
margin-top : 8px;
cursor : pointer;
@media screen and (min-width: 1024px){
margin-left:655px;
margin-top : 12px;
} 
`
const SubDiv = styled.div`
box-sizing: border-box;
text-align: center;  
padding-top : 7px;
padding-left : 10px;
padding-right : 10px;
width : 329px;
height : 153px;
border-radius : 10px;
background-color:#EDF1D5;
margin-left: 20px;
font-size:18px;
@media screen and (min-width: 1024px){
  padding-top : 25px;
  width : 1004px;
  height : 170px;
  font-size:22px;
  font-weight : 450;  
}
`
const StyledDiv = styled.div`
display: grid;
grid-template-columns: 305px 10px;
margin-left: 20px;
margin-top: 25px;
width : 330px;
height : 31px;
border-radius : 10px;
cursor: pointer;
background-color : #A2C08A;
@media screen and (min-width: 1024px){
  grid-template-columns: 320px 10px;
  width : 1004px;
  height : 40px;

} 
`
function Bar(props) {
  const [visible, setVisible] = useState(false);
  const [top,setTop] = useState('15px');
  const [bottom,setBottom] = useState('0px');
  const func = () => {
    setVisible(!visible)
    if(visible){
      setTop('15px');
      setBottom('0px');
    }
    else{
      setTop('0px');
      setBottom('15px');
    }
  }
  return (
    <div style={{ marginLeft: '5px', marginRight: '15px' }}>
      <StyledDiv onClick={func}>
        <Div>{props.text}</Div>
        <Triangle top={top} bottom ={bottom}></Triangle>
      </StyledDiv>
      {visible && <SubDiv>
        {props.text1}
      </SubDiv>}
    </div>
  )
}
export default Bar;