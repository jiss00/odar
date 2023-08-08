import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import Recruiting from './recruiting';
import Complete from './complete';
import Text from './text';
import Sort from './sort';
import Search from './search';
import Footer from './footerBar';
import Top from './Top';
import axios from 'axios';


function Recruit() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('recruit');
  const [dataList, setDataList] = useState([]); // API 결과값들을 저장할 배열
  const [page, setPage] = useState('1'); //채용정보 footbar 페이지
  const [searchPage, setSearchPage] = useState(1); //검색결과 footbar의 페이지
  const renderCount = 11; // 렌더링할 최대 항목 수
  const renderDataList = dataList.slice(0, renderCount);
  const [current, setCurrent] = useState(1);
  const [chageValue, setChangeValue] = useState('');


  /* 검색기능*/
  const input = document.getElementsByClassName('search_input');
  const [searchData, setSearchData] = useState([]); // API 결과값들을 저장할 배열
  const renderSearchData = searchData.length > 0 ? searchData.slice(0, renderCount) : [];
  const [inputValue, setInputValue] = useState('');
  const [totalSearchPages, setTotalPages] = useState(0);
  const [totalpage,setTotalPage] = useState();

  //채용정보 api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'http://arthurcha.shop:3000/app/jobPosting';
        const response = await axios.get(url, {
          params: { page: page },
          // 동적으로 변경되는 검색어
        });
        setDataList(response.data.result.result);
        console.log('dataList 결과 값:', response.data.result); // 데이터 확인
        setStatus('recruit');
        setTotalPage(response.data.result.totalPage);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [page]); // 빈 배열을 넣어 마운트될 때 한 번만 호출하도록 설정

  //검색 결과 api
  useEffect(() => {
    const search_infromation = async () => {
      try {
        const response = await axios.get('http://arthurcha.shop:3000/app/jobPosting/search', {
          params: {
            keyword: inputValue,
            page: searchPage
          },
        });
        setSearchData(response.data.result.data);
        setTotalPages(response.data.result.totalCount < 11 ? 1 : Math.ceil(response.data.result.totalCount / 11)); // 검색 결과에 따라 totalPages 업데이트

      } catch (error) {
      }
    };
    search_infromation();
  }, [inputValue, searchPage]); // 빈 배열을 넣어 마운트될 때 한 번만 호출하도록 설정

  //검색한 정보들 가져오기
  useEffect(() => {
    const renderSearchData = searchData.length > 0 ? searchData.slice(0, renderCount) : [];
    setStatus('search'); // 검색 결과가 있을 때 검색 결과를 보여주도록 상태를 변경합니다.
  }, [searchPage]);

  const onChange = (e) => {
    setChangeValue(e.target.value);
  }

  const onclick = (e) => {
    if (input[0].style.display === 'block') {
      if (chageValue === '') {
        input[0].style.display = 'none';
        setCurrent(1);
        setStatus('recruit');
      }
      else {
        setInputValue(chageValue);
        setCurrent(1);
        setStatus('search');
      }
    }
    else {
      input[0].style.display = 'block';
    }
  }
  const handleRecruitingClick = (jobpostingId) => {
    navigate(`/requitmentDetail/${jobpostingId}`);
  };
  console.log('input에 들어있는 값 :', chageValue);

  return (
    <div>
      <Top text='채용정보'></Top>
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
              data.active_status === 2 ? (
                <Recruiting onClick={() => handleRecruitingClick(data.job_posting_id)} key={index} text={data.title} />
              ) : (
                <Complete onClick={() => handleRecruitingClick(data.job_posting_id)} key={index} text={data.title} />
              )
            ))
          ) : ( // 검색 결과가 없을 경우 또는 검색되지 않은 초기 상태일 경우
            renderDataList.map((data, index) => (
              data.active_status === 2 ? (
                <Recruiting onClick={() => handleRecruitingClick(data.job_posting_id)} key={index} text={data.title} />
              ) : (
                <Complete onClick={() => handleRecruitingClick(data.job_posting_id)} key={index} text={data.title} />
              )
            ))
          )}</div>
        </div>)}
      <Footer totalpage={totalpage} setCurrent={setCurrent} current={current} totalSearchPages={totalSearchPages} status={status} page={page} setSearchPage={setSearchPage} setPage={setPage}></Footer>

    </div>
  )
}
export default Recruit;