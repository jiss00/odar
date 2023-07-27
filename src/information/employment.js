import { useEffect, useState } from "react";
import Recruiting from './recruiting';
import Complete from './complete';
import Text from './text';
import Sort from './sort';
import Search from './search';
import { useNavigate } from 'react-router-dom'
import Footer from './footerBar';
import Top from './Top';
import '../css/information.css';



function Employment() {
  const back = () => {
    window.location.href = 'http://localhost:3000'
  }
  const navigate = useNavigate();

  return (
    <div>
      <Top route={back} text='취업지원'></Top>
      <div className="main1">
        <div className="margin"></div>
        <div className="sort">
          <Sort text='마감날짜' ></Sort>
          <Sort text='거리순' ></Sort>
          <div></div>
          <Search></Search>
        </div>
        <Recruiting onClick={() => navigate(`/Jopdetail_1`)} text='시니어 바리스타 자격증 과정'></Recruiting>
        <Recruiting text='플라워리스트 자격증 과정'></Recruiting>
        <Recruiting text='요양도우미 자격증 과정'></Recruiting>
        <Recruiting text='키오스크 사용법 교육'></Recruiting>
        <Recruiting text='인터넷 사용 교육'></Recruiting>
        <Recruiting text='휴대폰 사용 교육'></Recruiting>
        <Complete text='시니어 바리스타 자격증 과정'></Complete>
        <Complete text='플라워리스트 자격증 과정'></Complete>
        <Complete text='요양도우미 자격증 과정'></Complete>
        <Complete text='인터넷 사용 교육'></Complete>
        <Complete text='휴대폰 사용 교육'></Complete>
        <Footer></Footer>
      </div>
    </div>
  )
}
export default Employment;