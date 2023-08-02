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
  const status = 'recruit';
  const [dataList, setDataList] = useState([]); // API 결과값들을 저장할 배열
  const [page,setPage] = useState('1');
  console.log(page);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const url = 'http://arthurcha.shop:3000/app/jobPosting';
          const response = await axios.get(url,{
            params: { page: page }, // 동적으로 변경되는 검색어
          });
          setDataList(response.data.result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
      fetchData();
    }, [page]); // 빈 배열을 넣어 마운트될 때 한 번만 호출하도록 설정
    console.log(dataList);

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
          <Search></Search>
        </div>
        {/*<Recruiting onClick={() => navigate(`/requitmentDetail`)} text='진주시 요양원 조리원 모집'></Recruiting>*/}
        {dataList[0].active_status === 2 ? <Recruiting text= {dataList[0].title}></Recruiting> : <Complete text= {dataList[0].title}></Complete>}
        {dataList[1].active_status === 2 ? <Recruiting text= {dataList[1].title}></Recruiting> : <Complete text= {dataList[1].title}></Complete>}
        {dataList[2].active_status === 2 ? <Recruiting text= {dataList[2].title}></Recruiting> : <Complete text= {dataList[2].title}></Complete>}
        {dataList[3].active_status === 2 ? <Recruiting text= {dataList[3].title}></Recruiting> : <Complete text= {dataList[3].title}></Complete>}
        {dataList[4].active_status === 2 ? <Recruiting text= {dataList[4].title}></Recruiting> : <Complete text= {dataList[4].title}></Complete>}
        {dataList[5].active_status === 2 ? <Recruiting text= {dataList[5].title}></Recruiting> : <Complete text= {dataList[5].title}></Complete>}
        {dataList[6].active_status === 2 ? <Recruiting text= {dataList[6].title}></Recruiting> : <Complete text= {dataList[6].title}></Complete>}
        {dataList[7].active_status === 2 ? <Recruiting text= {dataList[7].title}></Recruiting> : <Complete text= {dataList[7].title}></Complete>}
        {dataList[8].active_status === 2 ? <Recruiting text= {dataList[8].title}></Recruiting> : <Complete text= {dataList[8].title}></Complete>}
        {dataList[9].active_status === 2 ? <Recruiting text= {dataList[9].title}></Recruiting> : <Complete text= {dataList[9].title}></Complete>}
        {/*dataList[10].active_status === 2 ? <Recruiting text= {dataList[10].title}></Recruiting> : <Complete text= {dataList[10].title}></Complete>*/}
        <Footer status = {status} page={page} setPage = {setPage}></Footer>
      </div>)}
    </div>
  )
}
export default Recruit;