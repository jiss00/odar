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
  const [totalpage, setTotalPage] = useState();

  //채용정보 api
  useEffect(() => {
    if (status === 'recruit') {

      const fetchData = async () => {
        try {
          const url = 'https://arthurcha.shop/app/jobPosting';
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
    }
  }, [page, status]);


  //정렬 관련 기능들
  const [number, setNumber] = useState();
  const [recruitData, setRecruitData] = useState([]);
  const [recruitPage, setRecruitPage] = useState('1'); //채용정보 footbar 페이지
  const [distanceData,setDistanceData] = useState([]); //거리순 가까운 공고들 저장
  const renderDistance = distanceData.slice(0, renderCount);

  //모집중인 api 호출
  useEffect(() => {
    if (status === 'recruiting') {
      const fetchData = async () => {
        try {
          const url = 'https://arthurcha.shop/app/jobPosting';
          const response = await axios.get(url, {
            params: {
              page: recruitPage,
              active_status: 1
            },
            // 동적으로 변경되는 검색어
          });
          setRecruitData(response.data.result.result);
          console.log('모집중 결과 값:', response.data.result); // 데이터 확인
          setStatus('recruiting');
          setTotalPages(response.data.result.totalPage);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }
  }, [recruitPage, status]);




  //검색 결과 api
  useEffect(() => {
    if (status === 'search') {
    const search_infromation = async () => {
      try {
        const response = await axios.get('https://arthurcha.shop/app/jobPosting/search', {
          params: {
            keyword: inputValue,
            page: searchPage
          },
        });
        setSearchData(response.data.result.result);
        setTotalPages(response.data.result.totalCount < 11 ? 1 : Math.ceil(response.data.result.totalCount / 11)); // 검색 결과에 따라 totalPages 업데이트

      } catch (error) {
      }
    };
    search_infromation();}
  }, [status,inputValue, searchPage]); // 빈 배열을 넣어 마운트될 때 한 번만 호출하도록 설정

  //검색한 정보들 가져오기
  useEffect(() => {
    const renderSearchData = searchData.length > 0 ? searchData.slice(0, renderCount) : [];
    setStatus('search'); // 검색 결과가 있을 때 검색 결과를 보여주도록 상태를 변경합니다.
  }, [searchPage]);

  const onChange = (e) => {
    setChangeValue(e.target.value);
  }



  useEffect(() => {
    if (status === 'distance') {
    const search_information = async () => {
      const userToken = localStorage.getItem('accessToken');
      try {
        const response = await axios.get('https://arthurcha.shop/app/jobPosting/region', {
          headers: {
            Authorization: `Bearer ${userToken}`, // Authorization 헤더에 토큰 추가
          },
        });
        setDistanceData(response.data.result);
        console.log('거리순 결과 값:', response.data.result); // 데이터 확인
        setStatus('distance');
        setTotalPages(1);
      } catch (error) {
        // 오류 처리
      }
    };
    search_information();}
  }, [recruitPage, status]);


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
        input[0].style.display = 'none';
      }
    }
    else {
      input[0].style.display = 'block';
    }
  }
  const handleRecruitingClick = (jobpostingId) => {
    navigate(`/requitmentDetail/${jobpostingId}`);
  };
  console.log('staus: :', status);


  const [activeSort, setActiveSort] = useState(0);
  const handleSortClick = (index) => {
    setActiveSort(index);
    if (index === 2) {
      setStatus('recruiting');
      setCurrent(1);
      setRecruitPage(1);
    }
    else if(index ===1){
      setStatus('distance');
      setCurrent(1);
    }
    else if(index===0){
      setStatus('recruit');
      setCurrent(1);
      setPage(1);

    }
  };
  const sortItems = [
    { text: '최근순', index: 0 },
    { text: '거리순', index: 1 },
    { text: '모집현황', index: 2 },
  ];
  const [dataLength,setDataLength] = useState(0);
  return (
    <div>

      <Top text='채용정보'></Top>
      {dataList.length === 0 ? (
        <></>) :

        (<div>
          <div className="margin"></div>
          <div className="sort">
            {sortItems.map((item, index) => (
              <Sort
                key={index}
                text={item.text}
                active={activeSort === index}
                onClick={() => handleSortClick(index)}
              />
            ))}
            <div></div>
            <Search onChange={onChange} onClick={onclick}></Search>
          </div>
          <div className="main1">
            {(() => {
              if (status === 'search') {
                return renderSearchData.map((data, index) => (
                  data.active_status === 1 ? (
                    <Recruiting onClick={() => handleRecruitingClick(data.job_posting_id)} key={index} text={data.title} />
                  ) : (
                    <Complete onClick={() => handleRecruitingClick(data.job_posting_id)} key={index} text={data.title} />
                  )
                ));
              }
              else if(status ==='distance'){
                return renderDistance.map((data, index) => (
                  data.active_status === 1 ? (
                    <Recruiting onClick={() => handleRecruitingClick(data.job_posting_id)} key={index} text={data.title} />
                  ) : (
                    <Complete onClick={() => handleRecruitingClick(data.job_posting_id)} key={index} text={data.title} />
                  )
                ));
              }
              else if (status === 'recruiting') {
                return recruitData.map((data, index) => (<Recruiting onClick={() => handleRecruitingClick(data.job_posting_id)} key={index} text={data.title} />
                ))
              }
              else {
                return renderDataList.map((data, index) => (
                  data.active_status === 1 ? (
                    <Recruiting onClick={() => handleRecruitingClick(data.job_posting_id)} key={index} text={data.title}
                    />
                  ) : (
                    <Complete onClick={() => handleRecruitingClick(data.job_posting_id)} key={index} text={data.title} />
                  )
                ));
                }
            })()}
          </div>
        </div>)}
      <Footer setRecruitPage={setRecruitPage} totalpage={totalpage} setCurrent={setCurrent} current={current} totalSearchPages={totalSearchPages} status={status} page={page} setSearchPage={setSearchPage} setPage={setPage}></Footer>

    </div>
  )
}
export default Recruit;