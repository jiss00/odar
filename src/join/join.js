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

function Join({time}) {
  const [modal, setModal] = useState(false); // 상태를 만듬.

  const [name, setName] = useState('');
  const [birth1, setBirth1] = useState('');
  const [birth2, setBirth2] = useState('');
  const [birth3, setBirth3] = useState('');

  const [verification, setVerification] = useState('');
  const [complete, setComplete] = useState('');

  const handleNameChange = (isValid) => {
    setName(isValid);
  };


  const handleBirthChange1 = (isValid) => {
    setBirth1(isValid);
  };

  const handleBirthChange2 = (isValid) => {
    setBirth2(isValid);
  };

  const handleBirthChange3 = (isValid) => {
    setBirth3(isValid);
  };

  const handleVerificationChange = (isValid) => {
    setVerification(isValid);
  };

  const handleCompleteChange = (isValid) => {
    setComplete(isValid);
  };

  const onclick = () => {
    setModal(true);
  }

  return (
    <div className='main'>
         <TopBar name={name} birth1={birth1} birth2={birth2} birth3={birth3} verification={verification} complete={complete}/>
      <div className='sub'>
        <Text text='회원가입' />
        <Text1 text='이름' />
        <div className='name'>
          <Input placeholder="이름을 입력해주세요." w_width='440px' width='335px' type="handleNameChange" onChange={handleNameChange}/>
        </div>
        <Text1 top='342px' left='31px' text='생년월일' />
        <div className='date'>
          <Input placeholder="1900" w_width='140px' width='96px'type="handleBirthChange1" onChange={handleBirthChange1}/>
          <div className='text'>년</div>
          <Input placeholder="01" w_width='77px' width='65px' type="handleBirthChange2" onChange={handleBirthChange2}/>
          <div className='text'>월</div>
          <Input placeholder="01" w_width='77px' width='65px'type="handleBirthChange3" onChange={handleBirthChange3} />
          <div className='text'>일</div>
        </div>
        <Text1 text='휴대폰번호' />
        <div className='phone_number'>
          <Input placeholder="010-0000-0000" w_width='350px' width='250px'type="handleVerificationChange" onChange={handleVerificationChange} />
          <Auth func={onclick} text='인증' />
        </div>
        <div className='phone_number'>
          <Input placeholder="000000" w_width='350px' width='250px' type="handleCompleteChange" onChange={handleCompleteChange}/>
          {modal === true ? <Timer modal={modal} setModal={setModal}></Timer> : <></>}

          <Auth text='완료' />
        </div>
        <div style={{ height: '50px' }}>
          <StyledDiv className='auth'>휴대폰 인증이 완료되었습니다.</StyledDiv>
        </div>
        <Button birth1={birth1} birth2={birth2} birth3={birth3} verification={verification} complete={complete}/>
      </div>
    </div>
  )
}

export default Join;