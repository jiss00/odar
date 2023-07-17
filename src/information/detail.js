import styled from 'styled-components';
import { useState } from 'react';
import Bar from './bar';
import Text from './text';
import backImage from './back.png';
function Detail() {
  function onclick() {
    window.location.href = 'http://localhost:3000/myPage';
  }

  return (
    <div className='main_detail'>
      <img className='img_detail_1' onClick={onclick} alt="back" src={backImage} />
      <Text text='지원내역'></Text>
        <Bar
          text='진주시 요양원 조리원 모집'
          text1='모집중'
          text2='시니어 바리스타 자격증 과정'
          text3='월급'
          text4='600,000원/월'
          text5='근무시간'
          text6='주 5일, 10시~12시30분'
        ></Bar>
        <Bar text='사대부고 주차 도우미'></Bar>
        <Bar text='기숙사 급식 도우미'></Bar>
        <Bar text='어린이집 구연 강사'></Bar>
        <Bar text='진주시 요양원 조리원 모집'></Bar>
        <Bar text='사대부고 주차도우미'></Bar>
    </div>
  )
}
export default Detail;