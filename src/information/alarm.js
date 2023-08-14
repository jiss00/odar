import styled from "styled-components";
import AlarmBar from './alarm_bar';
import Text from './text';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

const Div = styled.div`
  margin-top:88px;
  display : grid;
  grid-template-columns: 200px 60px;
  @media screen and (min-width: 1024px){
    grid-template-columns: 520px 180px;

    }  
`
function Alarm() {
  const navigate = useNavigate();
  const onclick = () => {
    navigate('/');
  }
  const [alarmList, setAlarmList] = useState([]);
  useEffect(() => {
    const search_information = async () => {
      const userToken = localStorage.getItem('accessToken');
      try {
        const response = await axios.get('https://arthurcha.shop/app/notice', {
          headers: {
            Authorization: `Bearer ${userToken}`, // Authorization 헤더에 토큰 추가
          },

        }
        );
        setAlarmList(response.data.result)
      }
      catch (error) {
        // 오류 처리
      }
    };
    search_information();
  }, []);
  console.log(alarmList);
  return (
    <div className='main_detail'>
      <Div>
        <Text text='알림함'></Text>
        <svg className='img_alarm' onClick={onclick} viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 30V19.4118H21V30H29.75V15.8824H35L17.5 0L0 15.8824H5.25V30H14Z" fill="#5B8E31" /></svg>
      </Div>
      {
        alarmList.length === 0 ? <></> :
          alarmList.map((data, index) => (<AlarmBar text={data.notice_title} text1={data.notice_content}></AlarmBar>))}

     
    </div>
  )
}
export default Alarm;