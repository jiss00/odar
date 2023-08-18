import styled from 'styled-components';
import { useState, useEffect } from 'react';


function Bar({ e_status, setEdit, ...props }) {
  const Div = styled.div`
box-sizing: border-box;
text-align: center;  
padding-top : 6px;
color: black;
font-weight: 550;
font-size: 17px;
@media screen and (min-width: 1024px){
  font-weight: 450;
  font-size: 20px;  
  padding-top : 6px;
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
box-sizing: border-box;
margin-left:7px;
@media screen and (min-width: 1024px){
border-left: 12px solid transparent;
border-right: 12px solid transparent;
margin-left:570px;
margin-top : 12px;
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
grid-template-columns: 300px 30px;
margin-left: 20px;
margin-top: 25px;
width : 330px;
height : 31px;
box-sizing: border-box;
border-radius : 10px;
cursor: pointer;
background-color:${(props) => props.color};
@media screen and (min-width: 1024px){
  grid-template-columns: 400px 40px;
  width : 1004px;
  height : 40px; 
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
font-size: 15px;
font-weight: 600;
color:#5C5C5C;
overflow:overlay;
@media screen and (min-width: 1024px){
  font-size:20px; 
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
box-sizing: border-box;
padding-top:3px;
@media screen and (min-width: 1024px){
  width:75px;
  height: 34px;
  font-size : 20px;
  box-sizing: border-box;
  padding-top:2px;
} `

  const Child2 = styled.div`
font-size: 17px;
font-weight: 800;
color: black;
padding-top : 3px;
@media screen and (min-width: 1024px){
  font-size : 22px;
} 
`
  /* 채용지원이 연한 초록색으로*/

  const [visible, setVisible] = useState(false);
  const [top, setTop] = useState('15px');
  const [bottom, setBottom] = useState('0px');

  const updateDimensions = () => {
    if (window.innerWidth <= 1024) {
      setTop('15px');
      setBottom('0px');
    } else {
      setTop('20px');
      setBottom('0px');
    }
  };

  useEffect(() => {
    updateDimensions(); // Initial dimensions check

    const handleResize = () => {
      updateDimensions();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const func = () => {
    setVisible(!visible)
    if (visible) {
      if (window.innerWidth <= 1024) {
        setTop('15px');
        setBottom('0px');
      }
      else {
        setTop('20px');
        setBottom('0px');
      }
    }
    else {
      if (window.innerWidth > 1024) {
        setTop('0px');
        setBottom('20px');
      }
      else {
        setTop('0px');
        setBottom('15px');
      }
    }

  }

return (
  <div style={{ marginLeft: '5px', marginRight: '15px' }}>
    <StyledDiv {...props}>
      <Div>{props.text}</Div>
      {e_status === true ? <><svg onClick={props.onClick} className='x' viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6418 12.2907C16.8699 12.4784 16.998 12.7331 16.998 12.9987C16.998 13.2643 16.8699 13.5189 16.6418 13.7067C16.4138 13.8945 16.1045 14 15.782 14C15.4595 14 15.1503 13.8945 14.9222 13.7067L8.5 8.41648L2.07575 13.7051C1.84772 13.8928 1.53843 13.9983 1.21595 13.9983C0.893457 13.9983 0.584177 13.8928 0.356142 13.7051C0.128108 13.5173 3.39797e-09 13.2626 0 12.997C-3.39797e-09 12.7315 0.128108 12.4768 0.356142 12.289L6.78039 7.00042L0.358165 1.71017C0.130131 1.52239 0.00202311 1.2677 0.00202311 1.00214C0.00202312 0.736577 0.130131 0.481891 0.358165 0.294109C0.586199 0.106328 0.89548 0.000832841 1.21797 0.000832838C1.54046 0.000832836 1.84974 0.106328 2.07777 0.294109L8.5 5.58435L14.9242 0.293276C15.1523 0.105494 15.4616 -4.42429e-09 15.7841 0C16.1065 4.42429e-09 16.4158 0.105494 16.6439 0.293276C16.8719 0.481058 17 0.735744 17 1.00131C17 1.26687 16.8719 1.52156 16.6439 1.70934L10.2196 7.00042L16.6418 12.2907Z" fill="#5B8E31"/></svg></> 
      : <Triangle onClick={func} top={top} bottom={bottom}></Triangle>}
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
        <div className='scroll-container'>
        <div className='detail_text'>{props.text4}</div></div>
      </Sub_div2>
      <Sub_div2>
        <div>
          <svg className='img_detail' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10 0.22876C4.5 0.22876 0 4.67454 0 10.1083C0 15.542 4.5 19.9878 10 19.9878C15.5 19.9878 20 15.542 20 10.1083C20 4.67454 15.5 0.22876 10 0.22876ZM10 18.0119C5.59 18.0119 2 14.4651 2 10.1083C2 5.75141 5.59 2.20466 10 2.20466C14.41 2.20466 18 5.75141 18 10.1083C18 14.4651 14.41 18.0119 10 18.0119ZM10.5 5.16852H9V11.0962L14.2 14.2577L15 12.9733L10.5 10.3059V5.16852Z" fill="#5B8E31" /></svg>
        </div>
        <div>{props.text5}</div>
        <div className='scroll-container'>
        <div className='detail_text'>{props.text6}</div></div>
      </Sub_div2>
    </SubDiv>}
  </div>
)
    }
export default Bar;