import styled from "styled-components";
import AlarmBar from './alarm_bar';
import Text from './text';
const Div = styled.div`
  margin-top:88px;
  display : grid;
  grid-template-columns: 100px 25px;
  @media screen and (min-width: 1024px){
    grid-template-columns: 180px 30px;

    }  
`
function alarm() {
  const onclick = () => {
    window.location.href = 'http://localhost:3000/'
  }
  return (
    <div className='main_detail'>
      <Div>
        <Text text='알림함'></Text>
        <svg className='img_alarm' onClick={onclick} viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 30V19.4118H21V30H29.75V15.8824H35L17.5 0L0 15.8824H5.25V30H14Z" fill="#5B8E31" /></svg>
      </Div>
      <AlarmBar
        text='진주시 요양원 조리원 모집 마감'
        text1='진주시 요양원 조리원 모집이 마감되었습니다.
     지원해주셔서 감사합니다.'></AlarmBar>
      <AlarmBar
        text='진주시 요양원 조리원 모집 마감'
        text1='진주시 요양원 조리원 모집이 마감되었습니다.
     지원해주셔서 감사합니다.'></AlarmBar>
      <AlarmBar
        text='진주시 요양원 조리원 모집 마감'
        text1='진주시 요양원 조리원 모집이 마감되었습니다.
      지원해주셔서 감사합니다.'></AlarmBar>
      <AlarmBar
        text='진주시 요양원 조리원 모집 마감'
        text1='진주시 요양원 조리원 모집이 마감되었습니다.
     지원해주셔서 감사합니다.'></AlarmBar>
      <AlarmBar
        text='진주시 요양원 조리원 모집 마감'
        text1='진주시 요양원 조리원 모집이 마감되었습니다.
     지원해주셔서 감사합니다.'></AlarmBar>
      <AlarmBar
        text='진주시 요양원 조리원 모집 마감'
        text1='진주시 요양원 조리원 모집이 마감되었습니다.
     지원해주셔서 감사합니다.'></AlarmBar>
    </div>
  )
}
export default alarm;