import '../css/join.css';
import styled from 'styled-components';
import Text from './text'
import Text1 from './text1';
import Input from './input';
import Auth from './authentic';
import Button from './button';
import TopBar from './topBar';
import Timer from './timer';

function Join(){
  const StyledDiv = styled.div`
  background-color: #EDF1D5;
  border-radius: 20px;
  position: fixed;
  top: 659px;
  left :17px;
  width : 355px;
  height: 39px;
  font-size: 20px;
  font-weight: 800;
  box-sizing: border-box;
  padding-top: 5px;
  color : black;
  text-align: center;
  `;

  return(
    <div className="main">
      
      <TopBar></TopBar>
      <Text text ='회원가입'/>
      <Text1 top ='198px'left ='31px' text ='이름'/>
      <Input placeholder="이름을 입력해주세요." top ='242px' left ='28px' width='335px'/>
      <Text1 top ='342px'left ='31px' text ='생년월일'/>
      <Input placeholder="1900" top ='386px' left ='28px' width='96px'/>
      <Text1 top ='395px'left ='132px' text ='년'/>
      <Input placeholder="01" top ='386px' left ='163px' width='65px'/>
      <Text1 top ='395px'left ='236px' text ='월'/>
      <Input placeholder="01" top ='386px' left ='267px' width='65px'/>
      <Text1 top ='395px'left ='340px' text ='일'/>
      <Text1 top ='486px'left ='31px' text ='휴대폰번호'/>
      <Input placeholder="010-0000-0000" top ='527px' left ='28px' width='250px'/>
      <Auth top ='527px'left ='293px' text ='인증'/>
      <Input placeholder="000000" top ='591px' left ='28px' width='250px'/>
      <Auth top ='591px'left ='293px' text ='완료'/>
      <StyledDiv className='auth'>휴대폰 인증이 완료되었습니다.</StyledDiv>
      <Button top ='707px' left ='27px' text ='가입'/>
      <Timer/>
    </div>
  )
}

export default Join;