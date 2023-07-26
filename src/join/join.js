import '../css/join.css';
import styled from 'styled-components';
import Text from './text'
import Text1 from './text1';
import Input from './input';
import Auth from './authentic';
import Button from './button';
import TopBar from './topBar';
import Timer from './timer';
import { useEffect, useState } from 'react';
import axios from 'axios';



const StyledDiv = styled.div`
background-color: #EDF1D5;
border-radius: 20px;
width : 355px;
height: 39px;
font-size: 20px;
font-weight: 800;
box-sizing: border-box;
padding-top: 5px;
color : black;
text-align: center;
margin-top :10px;
@media screen and (min-width: 1024px) {
  width : 440px;
  position:absolute
}
`;
const auth = document.getElementsByClassName("auth");
const complete = () => {
  auth[0].style.display = 'block';
}
const auth_number = '000000'; /*임시 인증번호*/ 

function Join() {

  const [name,setName] = useState('');
  const [year,setYear] = useState('');
  const [month,setMonth] = useState('');
  const [day,setDay] = useState('');
  const [phone,setPhone] = useState('');
  const [auth,setAuth] = useState('');
  const btn_state = useState(true);
  const [modal, setModal] = useState(false); // 상태를 만듬.
  const onclick = () => {
    setModal(true);
  }
  /*
  const url = `http://arthurcha.shop:3000/app/users`
  axios(
    {
      url: url,
      method: 'post',
      data: {
        "email": "test1234@gmail.com",
        "password": "test1234!",
        "name": "z",
        "phone": "010-1234-5678",
        "year": 2011,
        "month": 10,
        "day": 12      } 
    }
  ).then(function (response) {
    console.log(response.data)
  });
*/
  console.log(name);
  console.log(year);
  console.log(month);
  console.log(day);
  console.log(phone);
  console.log(auth);




  return (
    <div className='main'>
      <TopBar></TopBar>
      <div className='sub'>
        <Text text='회원가입' />
        <Text1 text='이름' />
        <input onChange={(e)=>setName(e.target.value)} placeholder="이름을 입력해주세요."className='input_1'></input>
        <Text1 top='342px' left='31px' text='생년월일' />
        <div className='date'>
          <input onChange={(e)=>setYear(e.target.value)} placeholder="1900"className='input_2'></input>
          <div className='text'>년</div>
          <input onChange={(e)=>setMonth(e.target.value)} placeholder="01"className='input_3'></input>
          <div className='text'>월</div>
          <input onChange={(e)=>setDay(e.target.value)} placeholder="01"className='input_3'></input>
          <div className='text'>일</div>
        </div>
        <Text1 text='휴대폰번호' />
        <div className='phone_number'>
          <input onChange={(e)=>setPhone(e.target.value)} placeholder="010-0000-0000"className='input_4' ></input>
          <Auth func={onclick} text='인증' />
        </div>
        <div className='phone_number'>
          <input onChange={(e)=>setAuth(e.target.value)} placeholder="000000" className='input_4' ></input>
          {modal === true ? <Timer modal={modal} setModal={setModal}></Timer> : <></>}

          <Auth text='완료' />
        </div>
        <div style={{ height: '50px' }}>
          <StyledDiv className='auth'>휴대폰 인증이 완료되었습니다.</StyledDiv>
        </div>
        <button disabled={btn_state ? false : true} className='button' onClick={complete}>가입</button>
      </div>
    </div>
  )
}

export default Join;