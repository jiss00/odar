import { useEffect, useState } from "react";
import Recruiting from './recruiting';
import Complete from './complete';
import Text from './text';
import Sort from './sort';
import Search from './search';
import Footer from './footerBar';
import Top from './Top';



function Employment(){
  return(
    <div>
      <Top text='취업지원'></Top>
      <Sort left1 ='106px' padding ='6px' left='31px' text='마감날짜' ></Sort>
      <Sort left1 ='206px'padding ='18px' left='134px' text='거리순' ></Sort>
      <Search></Search>
      <Recruiting top = '195px' text ='시니어 바리스타 자격증 과정'></Recruiting>
      <Recruiting top = '241px' text ='플라워리스트 자격증 과정'></Recruiting>
      <Recruiting top = '287px' text ='요양도우미 자격증 과정'></Recruiting>
      <Recruiting top = '333px' text ='키오스크 사용법 교육'></Recruiting>
      <Recruiting top = '379px' text ='인터넷 사용 교육'></Recruiting>
      <Recruiting top = '425px' text ='휴대폰 사용 교육'></Recruiting>
      <Complete top = '471px' text ='시니어 바리스타 자격증 과정'></Complete>
      <Complete top = '517px' text ='플라워리스트 자격증 과정'></Complete>
      <Complete top = '563px' text ='요양도우미 자격증 과정'></Complete>
      <Complete top = '609px' text ='인터넷 사용 교육'></Complete>
      <Complete top = '655px' text ='휴대폰 사용 교육'></Complete>
      <Footer></Footer>
    </div>
  )
}
export default Employment;