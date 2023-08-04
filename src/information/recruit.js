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
  const [status,setStatus] = useState('recruit');
  const [dataList, setDataList] = useState([]); // API 결과값들을 저장할 배열
  const [page, setPage] = useState('1');
  const [searchPage,setSearchPage] = useState(1);
  /*정보 불러오기*/
  const renderCount = 11; // 렌더링할 최대 항목 수
  const renderDataList = dataList.slice(0, renderCount);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'http://arthurcha.shop:3000/app/jobPosting';
        const response = await axios.get(url, {
          params: { page: page },
          // 동적으로 변경되는 검색어
        });
        setDataList(response.data.result);        
        setStatus('recruit');

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [page]); // 빈 배열을 넣어 마운트될 때 한 번만 호출하도록 설정

  /* 검색기능*/
  const input = document.getElementsByClassName('search_input');
  const [searchData, setSearchData] = useState([]); // API 결과값들을 저장할 배열
  const renderSearchData = searchData.length > 0 ? searchData.slice(0, renderCount) : [];
  
  //검색한 정보들 가져오기
  useEffect(() => {
    const renderSearchData = searchData.length > 0 ? searchData.slice(0, renderCount) : [];
    setStatus('search'); // 검색 결과가 있을 때 검색 결과를 보여주도록 상태를 변경합니다.
  }, [searchData]);

  const [inputValue, setInputValue] = useState('');
  const onChange = (e) => {
    setInputValue(e.target.value);
  }
  const fetchData1 = async () => {
    try {
      const response = await axios.get('http://arthurcha.shop:3000/app/jobPosting/search', {
        params: {
          keyword: inputValue,
          page : page
        },
      });
      setSearchData(response.data.result.data);
      setSearchPage(response.data.result.totalCount < 11 ? 1 : String(Math.ceil(response.data.result.totalCount / 11)));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    console.log('검색결과',searchData);

  };

  const onclick = (e) => {
    if (input[0].style.display === 'block') {
      if (inputValue === '') {
        input[0].style.display = 'none';
        setStatus('recruit');
      }
      else {
        fetchData1();
        setStatus('search');
      }
    }
    else {
      input[0].style.display = 'block';
    }
  }
  console.log(searchData);
  return (
    <div>
      <Top text='채용정보'></Top>
      {dataList.length === 0 ? (
        <></>) :

        (<div className="main1">
          <div className="margin"></div>
          <div className="sort">
            <Sort text='마감날짜' ></Sort>
            <Sort text='거리순' ></Sort>
            <div></div>
            <Search onChange={onChange} onClick={onclick}></Search>
          </div>
          {status ==='search' ? ( // 검색 결과가 있을 경우
            renderSearchData.map((data, index) => (
              data.active_status === 2 ? (
                <Recruiting key={index} text={data.title} />
              ) : (
                <Complete key={index} text={data.title} />
              )
            ))
          ) : ( // 검색 결과가 없을 경우 또는 검색되지 않은 초기 상태일 경우
            renderDataList.map((data, index) => (
              data.active_status === 2 ? (
                <Recruiting key={index} text={data.title} />
              ) : (
                <Complete key={index} text={data.title} />
              )
            ))
          )}
          <Footer totalpage={searchPage} status={status} page={page} setPage={setPage}></Footer>
        </div>)}
    </div>
  )
}
export default Recruit;