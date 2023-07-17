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
  font-weight: 600;
  font-size: 18px;  
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
margin-left:720px;
} 
`
const SubDiv = styled.div`
box-sizing: border-box;
text-align: center;  
padding-top : 5px;
width : 329px;
height : 153px;
border-radius : 10px;
background-color:#EDF1D5;
margin-left: 20px;
@media screen and (min-width: 1024px){
  width : 1004px;
  height : 170px;  
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
  grid-template-columns: 255px 10px;
  width : 1004px;
  height : 35px; 
} 
`
const Sub_div1 = styled.div`
padding-left: 15px;
padding-top: 5px;
padding-bottom: 10px;
display: grid;
grid-template-columns: 0.3fr 1.2fr;
margin-bottom:12px;
border-bottom: solid 1px #D9D9D9;
@media screen and (min-width: 1024px){
  grid-template-columns: 0.3fr 5fr;
} `

const Sub_div2 = styled.div`
padding-top: 10px;
display: grid;
grid-template-columns: 0.5fr 0.5fr 1fr;
font-size: 12px;
font-weight: 800;
@media screen and (min-width: 1024px){
  font-size:18px; 
} 
`

const Child1 = styled.div`
background-color: #5B8E31;
border-radius: 10px;
color: white;
font-size: 16px;
font-weight: 400;
width:60px;
height: 27px;
@media screen and (min-width: 1024px){
  width:75px;
  height: 34px;
  font-size : 20px;
} `

const Child2 = styled.div`
font-size: 17px;
font-weight: 800;
color: black;
padding-top : 1px;
@media screen and (min-width: 1024px){
  font-size : 22px;
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
        <Sub_div1>
          <Child1>{props.text1}</Child1>
          <Child2>{props.text2}</Child2>
        </Sub_div1>
        <Sub_div2>
          <div>
            <svg className='img_detail' viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6364 14.1727C14.6364 13.133 11.7873 12.2909 8.27273 12.2909M14.6364 14.1727C14.6364 15.2124 11.7873 16.0545 8.27273 16.0545C4.75818 16.0545 1.90909 15.2124 1.90909 14.1727M14.6364 14.1727V18.8179C14.6364 19.8896 11.7873 20.759 8.27273 20.759C4.75818 20.759 1.90909 19.8906 1.90909 18.8179V14.1727M14.6364 14.1727C18.1127 14.1727 21 13.244 21 12.2909V2.88181M8.27273 12.2909C4.75818 12.2909 1.90909 13.133 1.90909 14.1727M8.27273 12.2909C4.25636 12.2909 1 11.3622 1 10.4091V5.70453M8.27273 3.82272C4.25636 3.82272 1 4.66483 1 5.70453M1 5.70453C1 6.74423 4.25636 7.58635 8.27273 7.58635C8.27273 8.53948 11.23 9.46816 14.7064 9.46816C18.1818 9.46816 21 8.53948 21 7.58635M21 2.88181C21 1.84211 18.1818 1 14.7064 1C11.23 1 8.41273 1.84211 8.41273 2.88181M21 2.88181C21 3.92151 18.1818 4.76363 14.7064 4.76363C11.2309 4.76363 8.41273 3.92151 8.41273 2.88181M8.41273 2.88181V12.4471" stroke="#5B8E31" stroke-width="2" /></svg>
          </div>
          <div>{props.text3}</div>
          <div>{props.text4}</div>
        </Sub_div2>
        <Sub_div2>
          <div>
            <svg className='img_detail' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10 0.22876C4.5 0.22876 0 4.67454 0 10.1083C0 15.542 4.5 19.9878 10 19.9878C15.5 19.9878 20 15.542 20 10.1083C20 4.67454 15.5 0.22876 10 0.22876ZM10 18.0119C5.59 18.0119 2 14.4651 2 10.1083C2 5.75141 5.59 2.20466 10 2.20466C14.41 2.20466 18 5.75141 18 10.1083C18 14.4651 14.41 18.0119 10 18.0119ZM10.5 5.16852H9V11.0962L14.2 14.2577L15 12.9733L10.5 10.3059V5.16852Z" fill="#5B8E31" /></svg>
          </div>
          <div>{props.text5}</div>
          <div>{props.text6}</div>
        </Sub_div2>
      </SubDiv>}
    </div>
  )
}
export default Bar;