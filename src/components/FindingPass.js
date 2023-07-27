import '../css/FindingPass.css';
import {useState} from 'react';
import { useEffect } from 'react';
import FindingPass_Input_pw from './FindingPass_Input_pw';
import FindingPass_Input_pwcheck from './FindingPass_Input_pwcheck';
import Text from '../component/Join/Text';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

// 띄우는거 : 대문자
// 그냥 실행시키는 함수 : 소문자동사+대문자
// props : 부모가 자식에게 state 물려주기.

function FindingPass(props){
  const [modal, setModal] = useState(false); // 상태를 만듬.
    // 모달창 내용
  const [modal_text, set_modal_text] = useState('아이디 인증이 완료되었습니다!');
  // const [time, setTime] = useState(180); // 남은 시간 (단위: 초)

  const [validPassword, setValidPassword] = useState(false);
  const [validPasswordCheck, setValidPasswordCheck] = useState(false);


  // 정규식 확인 ---------------------------------
  // const { onChange, ...otherProps } = props; // props에서 onChange를 추출하여 나머지 props를 otherProps로 받음

  const [validEmail, setValidEmail] = useState(false);
    
  // 아이디 이메일 정규식 확인
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // id 입력받는거 얻는거
  const handleInputChange = (event) => {
    const email = event.target.value;
    const isValid = validateEmail(email);
    // 이메일 유효성 검사 결과 : true, false
    setValidEmail(isValid);
    // console.log(isValid);
    
  }

  // ---------------------------------------
  

  const [password, setPassword] = useState("");
  const [passwordcheck, setPasswordCheck] = useState("");

  const handlePasswordChange = ({ password, isValidPassword }) => {
    setValidPassword(isValidPassword);
    setPassword(password);
  };

  const handlePasswordCheckChange = ({ passwordcheck, isValidPasswordCheck }) => {
    setPasswordCheck(passwordcheck);

    // 비밀번호와 비밀번호 확인 값이 같을 경우에만 setValidPasswordCheck 호출
    if (passwordcheck === password) {
      setValidPasswordCheck(isValidPasswordCheck);
    }
    else
     setValidPasswordCheck(false);

  };

  // 모달-------------------------------------------//
  
  const Modal = function(){
    return(
      <div id = "modal_success_pass">
        {modal_text}
      </div>
    );
  }


  // 인증 버튼 클릭 시, 유효한 아이디인지 확인 
  
  // id 유효성 검사 상태
  const [id_available, set_id_available] = useState(false);
  const checkModal = () =>{
    setModal(true);
    
    if (id_available === true){
      setValidEmail(true);//인증완료시 버튼 33%채워짐.
      set_modal_text('아이디 인증이 완료되었습니다!');
    } 
    else if(id_available === false){
      setValidEmail(false);//인증완료시 버튼 33%채워짐.
      set_modal_text('아이디를 다시 확인해주세요.');
    }
    // if ({modal}){
    //   console.log("인증버튼 클릭");
    // }
  }

   // 모달-------------------------------------------//
  

  const getSeconds = (time) => {
    const seconds = Number(time % 60);
    if(seconds < 10) {
        return "0" + String(seconds);
    } else {
        return String(seconds);
    }
  }

  const Timer = () => {
    const [time, setTime] = useState(180); // 남은 시간 (단위: 초)
    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);
        if (time === 0) {
          clearInterval(timer);
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

  // 제일 밑 완료 버튼 클릭시, 로그인 화면으로 이동, 서버에 업데이트된 비밀번호 전송
  let navigate = useNavigate(); //라우팅 객체 만들기
  const goLogin = () => {
    navigate('/login');
  }
  const goLogin_pushToPass = () =>{
    goLogin(); //로그인 화면으로 이동
    // 서버에 업데이트된 비밀번호 전송 기능 만들기
    
  }


  return(
    
    <div className='screen_pass'>
      <div className='state_bar_pass'>
        <span className='statebar_inner' style={{ width: validEmail && validPassword && validPasswordCheck ? '100%' 
        : validEmail && validPassword || validPasswordCheck ? '66%' 
        : validEmail || validPassword || validPasswordCheck ? '33%' 
        : '0' }}>
        </span>      
      </div>
      <h2 className="pass_find">비밀번호 찾기</h2>
      <div className='body_id_pass'>
        <h3 className="id_pass">아이디</h3>
        <section className='input_section1_pass'>
          <input className="id_input_pass" onChange={handleInputChange} type="text" id="" placeholder="oooo@oooo" ></input>
          <button className= {validEmail === false ? "btn_all_pass" : "btn_all_pass_yes"} disabled ={!validEmail} type="submit"  onClick={() => { checkModal(); }} >인증</button>
        </section>
        {modal === true ? <Modal></Modal> : <></>}
        {/* {}를 쓰면 js 코드 쓸 수 있다. */}
      </div>

       {/*<div className = "body_pass_pass">
          새비밀번호 비밀번호확인
        </div> */}

      <div className="findingpass__pw__box"><Text width="110px">새 비밀번호</Text></div>
        <FindingPass_Input_pw type="password" placeholder=" 비밀번호를 입력해주세요." onChange={handlePasswordChange} />

      <div className="findingpass__pwcheck__box"><Text width="156px">새 비밀번호 확인</Text></div>
        <FindingPass_Input_pwcheck type="password" placeholder=" 비밀번호를 확인해주세요." onChange={handlePasswordCheckChange}  />


      <button
          disabled={validEmail && validPassword && validPasswordCheck ? false : true}
          className="btn_all_pass"
          id="btn_success_pass"
          style={{
            background: validEmail && validPassword && validPasswordCheck ? '#5B8E31' : '#A2C08A',
            color: validEmail && validPassword && validPasswordCheck ? 'black' : '#5C5C5C'
          }}
          onClick={goLogin_pushToPass}
        >
          완료
      </button>


    </div>  
  );
}


export default FindingPass;
