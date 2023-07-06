import styled from 'styled-components';
import {useState} from 'react';
import Bar from './bar';
import Text from './text';
function Detail(){

  return(
    <>
      <Text text='지원내역'></Text>
      <div style={{marginTop : '180px'}}>
      <Bar 
      text='진주시 요양원 조리원 모집'
      text1='모집중'
      text2='시니어 바리스타 자격증 과정'
      text3='교육비'
      text4= '600,000원/월'
      text5='교육 요일'
      text6='주 3일'
      text7='교육시간'
      text8='9:00 ~ 18:00'
      ></Bar>
      <Bar text='사대부고 주차 도우미'></Bar>
      <Bar text='기숙사 급식 도우미'></Bar>
      <Bar text='어린이집 구연 강사'></Bar>
      <Bar text='진주시 요양원 조리원 모집'></Bar>
      <Bar text='사대부고 주차도우미'></Bar>
      </div>
    </>
  )
}
export default Detail;