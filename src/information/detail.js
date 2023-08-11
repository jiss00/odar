import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Bar from './bar';
import Text from './text';
import backImage from './back.png';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Detail() {
  const navigate = useNavigate();
  const [delete_status,setDeleteStatus] = useState(true);
  // 채용id, 취업id 저장
  const [recruitRecord, setRecruitRecord] = useState([]);
  const [employRecord, setEmployRecord] = useState([]);

  //---------------- 상세내용 저장-----------------------
  const [d_recruit, setD_recruit] = useState([]);
  const [d_employ, setD_employ] = useState([]);


  useEffect(() => {
    const search_information = async () => {
      const userToken = localStorage.getItem('accessToken');
      try {
        const response = await axios.get('http://arthurcha.shop:3000/app/jobApply', {
          headers: {
            Authorization: `Bearer ${userToken}`, // Authorization 헤더에 토큰 추가
          },
        });
        const resultArray = response.data.result;
        const recruitRecords = resultArray.filter(item => item.job_posting_id).map(item => ({
          id: item.job_posting_id,
          applyId: item.apply_id, // apply_id도 함께 저장
        }));
        const employRecords = resultArray.filter(item => !item.job_posting_id).map(item => ({
          id: item.job_edu_id,
          applyId: item.apply_id, // apply_id도 함께 저장
        }));
        setRecruitRecord(recruitRecords);
        setEmployRecord(employRecords);
        console.log('ㅅㅂ',resultArray);

      } catch (error) {
        // 오류 처리
      }
    };
    search_information();
  }, [delete_status]);

  /*---------------------- 채용정보 상세페이지 불러오기 -----------------------*/
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const jobDetailsPromises = recruitRecord.map(async record => {
          const jobId = record.id;
          const response = await axios.get(`http://arthurcha.shop:3000/app/jobPosting/${jobId}`);
          return response.data.result; // This will contain the detailed job information
        });

        const jobDetailsData = await Promise.all(jobDetailsPromises);
        setD_recruit(jobDetailsData);
      } catch (error) {
        // Handle errors
      }
    };

    fetchJobDetails();
  }, [recruitRecord]);
  console.log('채용상세결과', d_recruit);
  /*---------------------- 취업교육 상세페이지 불러오기 -----------------------*/
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const jobDetailsPromises = employRecord.map(async record => {
          const jobEduId = record.id;
          const response = await axios.get(`http://arthurcha.shop:3000/app/jobEdu/${jobEduId}`);
          return response.data.result; // This will contain the detailed job information
        });

        const jobDetailsData = await Promise.all(jobDetailsPromises);
        setD_employ(jobDetailsData);
      } catch (error) {
        // Handle errors
      }
    };

    fetchJobDetails();
  }, [employRecord]);
  console.log('취업상세결과', d_employ);
  // 채용정보 상세페이지 `http://arthurcha.shop:3000/app/jobPosting/${jobpostingId}`
  // 취업교육 상세페이지 `http://arthurcha.shop:3000/app/jobEdu/${jobEduId}`


  const [e_status, setEdit] = useState(false);
  const edit = () => {
    setEdit(!e_status);
  }
  console.log(e_status);



  /*--------------------지원내역 삭제-----------------------*/
  const editor = document.getElementsByClassName('confirm');
  const [deleteData,setDeleteData] = useState(null);
  const corfirm = (data) => {
    if (e_status === true) {
      editor[0].style.display = 'block';
      setDeleteData(data);
    }

  }
  const confirm_yes = async (deleteData) => {
    editor[0].style.display = 'none';
    
    let matchedRecord;
    
    if (deleteData.job_posting_id) {
      matchedRecord = recruitRecord.find(item => item.id === deleteData.job_posting_id);
    } else {
      matchedRecord = employRecord.find(item => item.id === deleteData.job_edu_id);
    }
  
    const applyId = matchedRecord.applyId;
    console.log('결과', applyId);
    
    const userToken = localStorage.getItem('accessToken');
    
    const headers = {
      Authorization: `Bearer ${userToken}`
    };
    
    try {
      const response = await axios.delete(`http://arthurcha.shop:3000/app/jobApply/${applyId}`, { headers });
      console.log('DELETE 요청 성공:', response.data);
      // 요청이 성공하면 원하는 작업 수행
      setDeleteStatus(!delete_status);
    } catch (error) {
      console.error('DELETE 요청 실패:', error);
      // 요청이 실패하면 오류 처리
    }
  };
  
  const confirm_no = () => {
    editor[0].style.display = 'none';
  }
  //`http://arthurcha.shop:3000/app/jobApply/${applyId}`
  //resultArray에서 applyId 가져와야함


  return (
    <div className='main_detail'>
      <div className='top_grid'>
        <img className='img_detail_1' onClick={() => navigate(`/myPage`)} alt="back" src={backImage} />
        <Text text='지원내역'></Text>
        {e_status === true ? <><svg onClick={edit} className='pencil' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.8875 8.8002C26.375 8.3127 26.375 7.5002 25.8875 7.0377L22.9625 4.1127C22.5 3.6252 21.6875 3.6252 21.2 4.1127L18.9 6.4002L23.5875 11.0877M3.75 21.5627V26.2502H8.4375L22.2625 12.4127L17.575 7.7252L3.75 21.5627Z" fill="#5B8E31" /></svg></>
          : <div onClick={edit} className='img_detail2'>편집</div>}
      </div>
      {
        d_recruit.length === 0 ? <></> :
          d_recruit.map((data, index) => (
            <Bar
              onClick={() => corfirm(data)} // 함수 호출을 람다 함수로 감싸서 클릭 시 실행되도록 함
              e_status={e_status}
              setEdit={setEdit}
              color='#A2C08A'
              text={data.title}
              text1={data.active_status === 1 ? '모집중' : '마감'}
              text2={data.title}
              text3='월급'
              text4={data.salary}
              text5='근무시간'
              text6={data.work_day}
              key={index}
            ></Bar>)
          )
      }
      {
        d_employ.length === 0 ? <></> :
          d_employ.map((data, index) => (
            <Bar
              onClick={() => corfirm(data)} // 함수 호출을 람다 함수로 감싸서 클릭 시 실행되도록 함
              color='#EDF1D5'
              e_status={e_status}
              setEdit={setEdit}
              text={data.title}
              text1={data.active_status === 1 ? '모집중' : '마감'}
              text2={data.title}
              text3='월급'
              text4={data.salary}
              text5='근무시간' 
              text6={data.edu_time}
              key={index}
            ></Bar>)
          )
      }
      <div className='confirm'>
        <div className='confirm_text'>지원내역을 지우시겠습니까?</div>
        <div className='corfirm_grid'>
          <div onClick={()=>confirm_yes(deleteData)} className='corfirm_box1'>네</div>
          <div></div>
          <div onClick={()=>confirm_no(deleteData)} className='corfirm_box2'>아니요</div>
        </div>
      </div>
    </div >
  )
}
export default Detail;