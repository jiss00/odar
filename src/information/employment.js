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
import axios from 'axios';



function Employment() {
  const status = 'employment';
  const back = () => {
    window.location.href = 'http://localhost:3000'
  }
  const navigate = useNavigate();
  const [dataList, setDataList] = useState([]); // API 결과값들을 저장할 배열
  const [page, setPage] = useState('1');
  console.log(page);

  /*정보 불러오기*/
  const renderCount = 11; // 렌더링할 최대 항목 수
  const renderDataList = dataList.slice(0, renderCount);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'http://arthurcha.shop:3000/app/jobEdu';
        const response = await axios.get(url, {
          params: { page: page }, // 동적으로 변경되는 검색어
        });
        setDataList(response.data.result);
        console.log(dataList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [page]); // 빈 배열을 넣어 마운트될 때 한 번만 호출하도록 설정
  const handleRecruitingClick = (job_edu_id) => {
    navigate(`/jobDetail/${job_edu_id}`);
  };
  console.log(dataList);

  return (
    <div>
      <Top route={back} text='취업지원'></Top>
      {dataList.length === 0 ? (
        <></>) :
        (<div className="main1">
          <div className="margin"></div>
          <div className="sort">
            <Sort text='마감날짜' ></Sort>
            <Sort text='거리순' ></Sort>
            <div></div>
            <Search></Search>
          </div>
          {renderDataList.map((data, index) => (
            data.active_status === 1 ? (
              <Recruiting onClick={() => handleRecruitingClick(data.job_edu_id)} key={index} text={data.title}></Recruiting>
            ) : (
              <Complete onClick={() => handleRecruitingClick(data.job_edu_id)} key={index} text={data.title}></Complete>
            )
          ))}
          <Footer status={status} page={page} setPage={setPage}></Footer>
        </div>)}
    </div>
  )
}
export default Employment;