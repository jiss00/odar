import { useEffect, useState } from "react";
import Recruiting from './recruiting';
import Complete from './complete';
import Text from './text';
import Sort from './sort';
import Search from './search';
import Footer from './footerBar';
import Top from './Top';




function Recruit() {
  const detail_1 = () => {
    window.location.href = 'http://localhost:3000/requirement';
  }
  return (
      <div className="main">
      <Top text='채용정보'></Top>
        <div className="sort">
          <Sort text='마감날짜' ></Sort>
          <Sort text='거리순' ></Sort>
          <Search></Search>
        </div>
        <Recruiting func={detail_1} top='195px' text='진주시 요양원 조리원 모집'></Recruiting>
        <Recruiting text='경상대 주차요원 모집'></Recruiting>
        <Recruiting text='사대부고 주차도우미'></Recruiting>
        <Recruiting text='기숙사 급식 도우미'></Recruiting>
        <Recruiting text='어린이집 구연강사'></Recruiting>
        <Recruiting text='진주시 요양원 조리원 모집'></Recruiting>
        <Complete text='경상대 주차요원 모집'></Complete>
        <Complete text='사대부고 주차도우미'></Complete>
        <Complete text='기숙사 급식 도우미'></Complete>
        <Complete text='어린이집 구연 강사'></Complete>
        <Complete text='진주시 요양원 조리원 모집'></Complete>
        <Footer></Footer>
      </div>
  )
}
export default Recruit;