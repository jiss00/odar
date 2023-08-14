import '../css/FindingID.css';
// styled 컴포넌트 사용
// import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import FindingID_Result from './FindingID_Result.js';
import axios from 'axios'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';


import styled from 'styled-components';

import ReactMarkdown from 'react-markdown';

// 띄우는거 : 대문자
// 그냥 실행시키는 함수 : 소문자동사+대문자
// props : 부모가 자식에게 state 물려주기.




//이건 아이디 찾기
function FindingID() {
  // ------------------------input 변수--------------------//
  // input에서 value를 담기 위한 state 생성
  // 휴대폰번호
  const [phone_number_state, set_phone_number] = useState('');
  // 인증번호
  const [certification_number_state, set_certification_number] = useState('');
  // 인증번호 코드
  const [certification_code, set_certification_code] = useState(false);

  // 버튼_인증_완료
  const [btn_all_state, set_btn_all_state] = useState(0);

  const [btn_success_state, set_btn_success_state] = useState(false);

  const [modal, setModal] = useState(false); // 상태를 만듬.
  // const [time, setTime] = useState(180); // 남은 시간 (단위: 초)

  // --------------------모달 변수 ----------------------//
    // 모달창 내용
  const [modal_text, set_modal_text] = useState('해당 번호로 인증번호가 전송되었습니다!');
  
  const [verification, setVerification] = useState('');
  const [complete, setComplete] = useState('');
  // ------------------api 변수------------------//
  const [email, setemail] = useState(''); //이메일



  // 모달 글자
  const Modal = function ({ text }) {

    return (
      <pre id="modal_success">
          {text}
      </pre>
    );
  }

  const checkModal = function () {
    setTime(180);
    setModal(true);
    set_modal_text('해당 번호로 인증번호가 전송되었습니다!');

  
    {/*인증버튼 클릭시 progressbar 50%*/}
    setVerification(true);

    if ({ modal }) {
      console.log("인증버튼 클릭");
    }
  }

  // 인증버튼 클릭시, 문자 날라오게하기
  const phone_send_api = () => {
    
    const phoneData =  { "phone" : phone_number_state  };
    const url = "https://arthurcha.shop/app/auth/phone-send"
    
    axios.post(url, phoneData)
    .then((response) => {
      // console.log("성공함");
      // console.log(response.data['result']['code']); //인증번호
      set_certification_code(response.data['result']['code']); //인증번호 설정하기 (state)
      console.log("이전 인증번호",certification_code);
    })
    .catch((error)=>{
      console.log(error.response.data); // 에러 출력
    })
  }
  // 인증번호가 변경될때마다 실행함.
  useEffect( () => {
    console.log("현재 인증번호",certification_code);
  },[certification_code]);



  const getSeconds = (time) => {
    const seconds = Number(time % 60);
    if (seconds < 10) {
      return "0" + String(seconds);
    } else {
      return String(seconds);
    }
  }
  // Timer 컴포넌트에서 사용할 상태
  const [time, setTime] = useState(180); // 남은 시간 (단위: 초)
  const Timer = ({ time }) => {

    // Timer 컴포넌트에서 사용할 함수
    const handleTimerEnd = () => {
      console.log("타이머종료");
      // 타이머가 종료되었을 때 필요한 처리를 여기서 수행하십시오.
      // 예를 들면, 인증번호 만료 처리 등
      // 시간이 종료됐을 때 실행될 로직을 추가해주세요.
    };
    useEffect(() => {
      const timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      if (time === 0) {
        clearInterval(timer);
        handleTimerEnd();
        alert('시간경과');
        setModal(false);
      }
      return () => clearInterval(timer);
    }, [time]);
    return (
      <div>
        <div className='timer'>
          <span>{parseInt(time / 60)}</span>
          <span> : </span>
          <span>{getSeconds(time)}</span>
        </div>
      </div>
    );
  }


  // -----------------input-------------------///
  // input에서 value를 담기 위한 state 생성


  // input이 입력될 때마다 state 값 변경되게 하는 함수!
  const savePhoneNumber = event => {
    set_phone_number(event.target.value);
    // console.log(phone_number_state);
  }

  const saveCertificationNumber = event => {
    set_certification_number(event.target.value);
    // console.log(longButton_state);
  }

  // 전화번호 유효성검사
  function telValidator(args) {
    // IE 브라우저에서는 당연히 var msg로 변경
    
    if (/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/.test(args)) {
        return true;
    }
    // alert(msg);
    return false;
  }
  telValidator(phone_number_state);

  const inputAllValue = () => {
    // 인증,(작은)완료 활성화
    if (telValidator(phone_number_state) && certification_number_state.length === 6) {
      // console.log("인증, 완료 활성화 /현재 state %d", btn_all_state);
      set_btn_all_state(2);
    }
    //인증 활성화
    else if (telValidator(phone_number_state)) {
      // console.log("인증 활성화, 현재 state %d", btn_all_state);
      set_btn_all_state(1);
    }
    else {
      set_btn_all_state(0);
    }

  }

  // ---------------(작은)완료버튼 클릭시 아이디 post
  const EmailIDFromBackend = () =>{
    const phoneData =  { "phone" :  phone_number_state };
    const url = `https://arthurcha.shop/app/users/email`;


    console.log('id post하자');
    console.log(phone_number_state)
    axios.post(url, phoneData )
    .then( (response) => {
        console.log(response);
        console.log(response.data.isSuccess);
        if (response.data.isSuccess === true){
          console.log('isSuccess 성공');
          if(response.data.code == 200){
            console.log('isSuccess 200 성공');
            console.log('id:'+response.data.result.email);
            setemail(response.data.result.email); //이메일 업데이트
            set_modal_text(`인증이 완료되었습니다!🎉 \n 아이디는 ${email}입니다.`);
          }
        }
        
        else{
          console.log('▶[오류] isSuccess 실패'+response.data.code+'\n'+response.data.message);
          
        }
        // setJopDetail(response.recruitment, response.title, response.money, response.time, response.introduction);
    } )
    .catch((error)=>{
      console.error('▶서버오류'+ error);
        // console.log(); // 에러 출력
    });
    // 백엔드에서 받아오기 전이므로, 가상의 데이터로 예시 작성
    
}

// 인증번호 바로바로 업데이트
useEffect(() => {
  BtnSuccess();
  }, [email]);
  // ---------------------------//




  // (작은)'완료 버튼 클릭 시'

    const BtnSuccess = () => {
        if (phone_number_state.length >= 5 && (certification_number_state.length === 6 && certification_number_state === certification_code) ){
          // console.log("제일 밑 완료활성화, 인증번호 맞음/  현재 state %d", btn_all_state);
          set_btn_success_state(true);
          setComplete(true);// 완료버튼 클릭 시 상태바 너비를 100%로 설정
          EmailIDFromBackend(); //백엔드에서 데이터 받아옴.
          
          
        }
        else{
          // console.log("아직 활성화 안됨");
          set_btn_success_state(false);
          set_modal_text('유효하지 않은 인증번호입니다.');

    }
  }

  // // phone_number_state와 certification_mumber_state 가 변경될 때마다  inputAllValue 함수를 호출
  useEffect(() => {
    telValidator(phone_number_state);
    inputAllValue();
    
  }, [phone_number_state, certification_number_state ]);
  //휴대폰 입력, 인증번호 입력, 인증번호 코드





  // 큰 완료버튼 클릭시 홈화면으로 이동
  const navigate = useNavigate();

  // 메인으로
  const goLogin = () => {
      navigate('/login');
  }


  // --------------------------------------------------//
  
  return (

    <div className='screen'>
      <div className='state_bar'>
        <span className='statebar_inner' style={{ width: verification&& complete ? '100%' : verification|| complete? '50%' : '0' }}></span>      
        </div>
      <h2 className = "id_find">아이디 찾기</h2>
      <div className='body'>
        <h3 className="phone_number_name">휴대폰 번호</h3>
        <section className='input_section1'>
          <input onChange={savePhoneNumber} className="input_all" type="text" id="phone_number" placeholder="010-0000-0000" maxLength={13}></input>
          <button disabled={btn_all_state < 1} className={btn_all_state >= 1 ? 'btn_all_yes' : 'btn_all'} type="submit" onClick={() => { checkModal(); phone_send_api();}} >인증</button>
        </section>
        <section className='input_section2'>
          <input onChange={saveCertificationNumber} className="input_all" type="text" id="certification_number" placeholder="000000" maxLength={6} ></input>
          <span></span>
          {modal === true ? <Timer time={time}></Timer> : <></>}
          <button disabled={btn_all_state < 2} onClick={() => {BtnSuccess(); } } className={btn_all_state >= 2 ? 'btn_all_yes' : 'btn_all'} type="submit">완료</button>
        </section>
        {modal === true ? <Modal text={modal_text}></Modal> : <></>}
        {/* {}를 쓰면 js 코드 쓸 수 있다. */}
      </div>

      <button disabled={btn_success_state ? false : true} className={`${btn_success_state === true ? 'btn_success_yes' : 'btn_success'}`} onClick={goLogin} >완료</button>

    </div>
  );
}

export default FindingID;
// 컴포넌트 내보내기