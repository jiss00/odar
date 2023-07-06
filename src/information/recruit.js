import { useEffect, useState } from "react";
import Recruiting from './recruiting';
import Complete from './complete';
import Text from './text';
import Sort from './sort';
import Search from './search';
import Footer from './footerBar';
import Top from './Top';




function Recruit(){
  return(
    <div>
      <Top text ='채용정보'></Top>
      <Sort left1 ='106px' padding ='6px' left='31px' text='마감날짜' ></Sort>
      <Sort left1 ='206px'padding ='18px' left='134px' text='거리순' ></Sort>
      <Search></Search>
      <Recruiting top = '195px' text ='진주시 요양원 조리원 모집'></Recruiting>
      <Recruiting top = '241px' text ='경상대 주차요원 모집'></Recruiting>
      <Recruiting top = '287px' text ='사대부고 주차도우미'></Recruiting>
      <Recruiting top = '333px' text ='기숙사 급식 도우미'></Recruiting>
      <Recruiting top = '379px' text ='어린이집 구연강사'></Recruiting>
      <Recruiting top = '425px' text ='진주시 요양원 조리원 모집'></Recruiting>
      <Complete top = '471px' text ='경상대 주차요원 모집'></Complete>
      <Complete top = '517px' text ='사대부고 주차도우미'></Complete>
      <Complete top = '563px' text ='기숙사 급식 도우미'></Complete>
      <Complete top = '609px' text ='어린이집 구연 강사'></Complete>
      <Complete top = '655px' text ='진주시 요양원 조리원 모집'></Complete>
      <Footer></Footer>
    </div>
  )
}
export default Recruit;