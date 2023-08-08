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
  const [status, setStatus] = useState('employment');
  const [current, setCurrent] = useState(1);
  const navigate = useNavigate();
  const [dataList, setDataList] = useState([]); // API 결과값들을 저장할 배열
  const [page, setPage] = useState('1');
  const [searchPage, setSearchPage] = useState(1); //검색결과 footbar의 페이지
  const [chageValue,setChangeValue] = useState('');
  const [totalpage,setTotalPage] = useState();

  /*정보 불러오기*/
  const renderCount = 11; // 렌더링할 최대 항목 수
  const renderDataList = dataList.slice(0, renderCount);

  /* 검색기능*/
  const input = document.getElementsByClassName('search_input');
  const [searchData, setSearchData] = useState([]); // API 결과값들을 저장할 배열
  const renderSearchData = searchData.length > 0 ? searchData.slice(0, renderCount) : [];
  const [inputValue, setInputValue] = useState('');
  const [totalSearchPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'http://arthurcha.shop:3000/app/jobEdu';
        const response = await axios.get(url, {
          params: { page: page }, // 동적으로 변경되는 검색어
        });
        setDataList(response.data.result.jobEduListResult); // 데이터를 업데이트하여 다시 렌더링
        setStatus('employment');
        console.log('api결과값',response.data.result.jobEduListResult);
        setTotalPage(response.data.result.totalPage);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [page]); // 빈 배열을 넣어 마운트될 때 한 번만 호출하도록 설정

  const handleRecruitingClick = (job_edu_id) => {
    navigate(`/jobDetail/${job_edu_id}`);
  };


  //검색 결과 api
  useEffect(() => {
    const search_infromation = async () => {
      try {
        const response = await axios.get('http://arthurcha.shop:3000/app/jobEdu/search', {
          params: {
            keyword: inputValue,
            page: searchPage
          },
        });
        setSearchData(response.data.result.data);
        setTotalPages(response.data.result.totalCount < 11 ? 1 : Math.ceil(response.data.result.totalCount / 11)); // 검색 결과에 따라 totalPages 업데이트

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    search_infromation();
  }, [inputValue, searchPage]); // 빈 배열을 넣어 마운트될 때 한 번만 호출하도록 설정

  //검색한 정보들 가져오기
  useEffect(() => {
    const renderSearchData = searchData.length > 0 ? searchData.slice(0, renderCount) : [];
    setStatus('search'); // 검색 결과가 있을 때 검색 결과를 보여주도록 상태를 변경합니다.
  }, [searchPage]);
  console.log(dataList);

  const onChange = (e) => {
    setChangeValue(e.target.value);
  }

  const onclick = (e) => {
    if (input[0].style.display === 'block') {
      if (chageValue === '') {
        input[0].style.display = 'none';
        setCurrent(1);
        setStatus('employment');
      }
      else {
        setCurrent(1);
        setInputValue(chageValue);
        setStatus('search');
      }
    }
    else {
      input[0].style.display = 'block';
    }
  }

  return (
    <div>
      <Top text='취업지원'></Top>
      {dataList.length === 0 ? (
        <></>) :
        (<div>
          <div className="margin"></div>
          <div className="sort">
            <Sort text='마감날짜' ></Sort>
            <Sort text='거리순' ></Sort>
            <Sort text='모집현황' ></Sort>
            <div></div>
            <Search onChange={onChange} onClick={onclick}></Search>
          </div>
          <div className="margin1"></div>
          <div className="main1">
          {status === 'search' ? ( // 검색 결과가 있을 경우
            renderSearchData.map((data, index) => (
              data.active_status === 1 ? (
                <Recruiting onClick={() => handleRecruitingClick(data.job_edu_id)} key={index} text={data.title}></Recruiting>
              ) : (
                <Complete onClick={() => handleRecruitingClick(data.job_edu_id)} key={index} text={data.title}></Complete>
              )
            ))
          ) : ( // 검색 결과가 없을 경우 또는 검색되지 않은 초기 상태일 경우
            renderDataList.map((data, index) => (
              data.active_status === 1 ? (
                <Recruiting onClick={() => handleRecruitingClick(data.job_edu_id)} key={index} text={data.title} />
              ) : (
                <Complete onClick={() => handleRecruitingClick(data.job_edu_id)} key={index} text={data.title} />
              )
            ))
          )}</div>
        </div>)
      }
      <Footer totalpage={totalpage} setCurrent={setCurrent} current={current} totalSearchPages={totalSearchPages} status={status} page={page} setSearchPage={setSearchPage} setPage={setPage}></Footer>

    </div >
  )
}
export default Employment;