import '../css/join.css';
import styled from 'styled-components';
import Text from './text'
import Text1 from './text1';
import Input from './input';
import Auth from './authentic';
import Button from './button';
import TopBar from './topBar';
import Timer from './timer';
import { useState } from 'react';
import timer from './timer';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';


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
  margin-left : 237px;
}
`;

function Join() {
  const [modal, setModal] = useState(false); // 상태를 만듬.
  /* 정규식 관련 */
  const [name, setName] = useState('');
  const [birth1, setBirth1] = useState('');
  const [birth2, setBirth2] = useState('');
  const [birth3, setBirth3] = useState('');
  const [verification, setVerification] = useState('');
  const [complete, setComplete] = useState('');
  const handleNameChange = (isValid, inputValue) => {
    setName(isValid);
    setUsrName(inputValue);
  };

  const handleBirthChange1 = (isValid, inputValue) => {
    setBirth1(isValid);
    setYear(inputValue);
  };

  const handleBirthChange2 = (isValid, inputValue) => {
    setBirth2(isValid);
    setMonth(inputValue);
  };

  const handleBirthChange3 = (isValid, inputValue) => {
    setBirth3(isValid);
    setDay(inputValue);
  };

  const handleVerificationChange = (isValid, inputValue) => {
    setVerification(isValid);
    setPhone(inputValue);
  };

  const handleCompleteChange = (isValid, inputValue) => {
    setComplete(isValid);
    setAuth(inputValue);
  };

  /* 사용자 정보 저장하기*/
  const [usrName, setUsrName] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [phone, setPhone] = useState('');
  const [auth, setAuth] = useState(''); /*input에 사용자가 적은 인증번호 */
  const [auth_number,setAuth_number] = useState(''); /*백엔드에서 주는 인증번호 */

  /*join 페이지의 데이터*/
  const location = useLocation();
  const userInfo = { ...location.state };
  const nagivate = useNavigate();

  console.log(usrName);
  console.log(year);
  console.log(month);
  console.log(day);
  console.log(phone);
  console.log(auth);

  /* 회원정보 백으로 전달하기 */
  const user_join = () => {
    const url = `http://arthurcha.shop:3000/app/users`
    axios(
      {
        url: url,
        method: 'post',
        data: {
          "email": userInfo.id,
          "password": userInfo.passWd,
          "name": usrName,
          "phone": phone,
          "year": year,
          "month": month,
          "day": day
        }
      }
    ).then(function (response) {
      if (response.data.isSuccess) {
        nagivate('/');
      }
      else{
        alert(response.data.message);
      }
    });
  }
  
  /* 전화번호 백으로 넘기고 인증번호 받아오기 */
  const onclick = () => {
    setModal(true); /* modal이 true 일땐 타이머 시작 */
    axios(
      {
        url: `http://arthurcha.shop:3000/app/auth/phone-send`,
        method: 'post',
        data: {
          "phone": phone
        }
      }
    ).then(function (response) {
      setAuth_number(response.data.result.code);
    });
  }
  console.log(auth_number);
  /*인증번호 맞는지 검사*/
  const [visible, setVisible] = useState(false);
  const confirm = () => {
    if(auth === auth_number){
      setModal(false);
      setVisible(true);
    }else{
      alert('인증번호가 맞지 않습니다. 다시 시도해주세요');
    }
  }



  return (
    <div className='main'>
      <TopBar name={name} birth1={birth1} birth2={birth2} birth3={birth3} verification={verification} complete={complete} />
      <div className='sub'>
        <Text text='회원가입' />
        <Text1 text='이름' />
        <div className='name'>
          <Input placeholder="이름을 입력해주세요." w_width='440px' width='335px' type="handleNameChange" onChange={handleNameChange} />
        </div>
        <Text1 top='342px' left='31px' text='생년월일' />
        <div className='date'>
          <Input placeholder="1900" w_width='140px' width='96px' type="handleBirthChange1" onChange={handleBirthChange1} />
          <div className='text'>년</div>
          <Input placeholder="01" w_width='77px' width='65px' type="handleBirthChange2" onChange={handleBirthChange2} />
          <div className='text'>월</div>
          <Input placeholder="01" w_width='77px' width='65px' type="handleBirthChange3" onChange={handleBirthChange3} />
          <div className='text'>일</div>
        </div>
        <Text1 text='휴대폰번호' />
        <div className='phone_number'>
          <Input placeholder="010-0000-0000" w_width='350px' width='250px' type="handleVerificationChange" onChange={handleVerificationChange} />
          <Auth func={onclick} text='인증' />
        </div>
        <div className='phone_number'>
          <Input placeholder="000000" w_width='350px' width='250px' type="handleCompleteChange" onChange={handleCompleteChange} />
          {modal === true ? <Timer modal={modal} setModal={setModal}></Timer> : <></>}

          <Auth func={confirm} text='완료' />
        </div>
        <div style={{ height: '50px' }}>
          {visible &&<StyledDiv>휴대폰 인증이 완료되었습니다.</StyledDiv>}
        </div>
        <Button onClick={user_join} birth1={birth1} birth2={birth2} birth3={birth3} verification={verification} complete={complete} />
      </div>
    </div>
  )
}

export default Join;