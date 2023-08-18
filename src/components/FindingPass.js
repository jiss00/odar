import '../css/FindingPass.css';
import {useState} from 'react';
import { useEffect } from 'react';
import FindingPass_Input_pw from './FindingPass_Input_pw';
import FindingPass_Input_pwcheck from './FindingPass_Input_pwcheck';
import Text from '../component/Join/Text';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';

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

  // 유효성검사
  const [validEmail, setValidEmail] = useState(false);

  // di 인증 클릭 --------------------------//
  const [isCheckModal, setIsCheckModal] = useState(false);

  // --------------인증번호 -----------------//
  // 인증번호
  const [certification_number_state, set_certification_number] = useState('');

  // 인증번호 코드 받기
  const [certification_code , set_certification_code]=useState('');

  // (작은) 인증번호 input 6자리 활성화
  const [btn_yes, set_btn_yes] = useState(false);
  // ---------------------------------------------//

  // 인증 후 비밀번호, 새 비밀번호변경부분 보이게하는 속성 //
  // 처음엔 숨긴다.
  const [body_pass_visibility, set_body_pass_visibility] = useState("hidden");


  // --------------------------인증번호--------------------------------------//

  //  //----------------------timer변수-------------------------------//
  // 타이머 보이게 안보이게
  const [timerModal, setTimerModal] = useState(false); //visible


// 인증번호 입력 받기
  const saveCertificationNumber = event => {
    set_certification_number(event.target.value);
  }
  // 인증번호 : 6자리 누르면  버튼 활성화시키기
  const isBtnYes = () =>{
    if (certification_number_state.length ===6){
      set_btn_yes(true);
    }else{
      set_btn_yes(false);
    }
    
  }

  useEffect(()=>{
    isBtnYes();
    // console.log(certification_number_state);
    
  } ,[certification_number_state]);

  // (작은)'완료 버튼 클릭 시'
  const BtnSuccess = () => {
    // console.log("btnSuccess");
    
    // 인증번호와 내가 입력한게 같다면, 인증성공
    if (certification_code === certification_number_state) {
      // console.log("인증성공!");
      setModal(true);
      setTimerModal(false); //타이머 안보이게하기
      set_modal_text(`인증이 완료되었습니다!🎉\n 새 비밀번호를 입력해주세요.`);
      // console.log("제일 밑 완료활성화, 인증번호 맞음/  현재 state %d", btn_all_state);
      // 비밀번호, 새 비밀번호 보이게 하기
      set_body_pass_visibility("visible"); 
    }
    else{
      setModal(true);
      // console.log("인증실패!");
      set_modal_text('유효하지 않은 인증번호입니다.');
      // 비밀번호 새비밀번호 없애기
      set_body_pass_visibility("hidden");
      
      

    }
  }

// -------------------------------------------------------------------//


  // 아이디 이메일 정규식 확인
  const validateEmail = () => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email);
  }



  const [email,setEmail] = useState('');
  const [changeEmail, setChangeEmail] = useState('')
  // id 입력받는거 얻는거
  const handleInputChange = (event) => {
    setEmail(event.target.value);
    const isValid = validateEmail(email);
    // 이메일 유효성 검사 결과 : true, false
    setValidEmail(isValid);
    // console.log(isValid);
    
  }

  useEffect(() => { validateEmail();},[email]);


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
      <pre id = "modal_success_pass">
        {modal_text}
      </pre>
    );
  }


  // 네이게이션
  // 제일 밑 완료 버튼 클릭시, 로그인 화면으로 이동, 서버에 업데이트된 비밀번호 전송
  let navigate = useNavigate(); //라우팅 객체 만들기
  const goLogin = () => {
    navigate('/login');
  }

  // -----------인증 버튼 클릭 시, 유효한 아이디인지 확인 ----------------//
  const checkModal = () =>{
    const phoneData =  { "email" : email  };
    const url = `https://arthurcha.shop/app/users/check-email`;
    

    console.log('id post하자');
    axios.post(url, phoneData )
    .then( (response) => {
        console.log(response);
        // console.log(response.data.isSuccess);
        if (response.data.isSuccess === true){
          // console.log('isSuccess 성공');
          if(response.data.code == 200){  
            // console.log('200번대 성공');
            setValidEmail(true);//인증완료시 버튼 33%채워짐.
            setModal(true); //모달 보이게하기
            setTimerModal(true); //타이머 보이게하기
            setIsCheckModal(true); //인증보내기 성공으로 상태 변경.!!
            set_certification_code(response.data.result.code);
            set_modal_text('인증번호가 발송되었습니다. \n이메일을 확인해주세요.');
          }
          else{
          console.log('▶[오류] 코드:'+response.data.code+'\n'+response.data.message);
          setValidEmail(false);//인증완료시 버튼 33%채워짐.
          setModal(true); //모달 보이게하기
          setTimerModal(false); //타이머 보이게하기
          set_modal_text('아이디를 다시 확인해주세요.');
          setIsCheckModal(false); // 인증번호보내기 실패
          }
        }
        else{
          console.log('▶[오류] isSuccess 실패'+response.data.code+'\n'+response.data.message);
          setValidEmail(false);//인증완료시 버튼 33%채워짐.
          setModal(true); //모달 보이게하기
          set_modal_text('아이디를 다시 확인해주세요.');
          setTimerModal(false); //타이머 보이게하기
          setIsCheckModal(false); // 인증번호보내기 실패
        }
        // setJopDetail(response.recruitment, response.title, response.money, response.time, response.introduction);
    } )
    .catch((error)=>{
      console.error('▶서버오류'+ error);
      setValidEmail(false);//인증완료시 버튼 33%채워짐.
      setModal(true); //모달 보이게하기
      setTimerModal(false); //타이머 보이게하기
      set_modal_text('아이디를 다시 확인해주세요.');
      setIsCheckModal(false); // 인증번호보내기 실패
        // console.log(); // 에러 출력
    });
    // 백엔드에서 받아오기 전이므로, 가상의 데이터로 예시 작성
    
  }

  useEffect(() => {
    // console.log('현재코드: ' + certification_code);
  },[certification_code]);

  // --------------비밀번호 변경api-----------------//
  // --------------비밀번호 변경api-----------------//
  const PasswordChangeToBackEnd= () =>{
    const url = 'https://arthurcha.shop/app/users/password '; // 실제 엔드포인트에 맞게 URL을 수정해야 합니다.

    const data = {
      email: email,
      password: password
    };

    axios.patch(url, data)
      .then((response) => {
        // console.log(response);
        if (response.data.isSuccess){
          
          alert("비밀번호가 변경되었습니다! 로그인 화면으로 이동합니다.");
          // console.log(response.data.message);
          goLogin();
          
        }
        else{
          alert("비밀번호 변경에 실패하였습니다.");
          // console.log(response.data.message);
        }

      })
      .catch(error => {
        alert("비밀번호 변경에 실패하였습니다.");
        console.error('에러!: ', error);
      });

  }




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
      setModal(true);
      setTimerModal(true);
      const timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      
      if (time === 0 ) {
        clearInterval(timer);
        handleTimerEnd();
        alert('시간경과');
        setModal(false);
        setTimerModal(false);
        set_body_pass_visibility("hidden"); //숨기기
      }
    
      return () => clearInterval(timer);
    }, [time]);
    return (
      <div>
        <div className='timer_pass'>
          <span>{parseInt(time / 60)}</span>
          <span> : </span>
          <span>{getSeconds(time)}</span>
        </div>
      </div>
    );
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
          <button className= {validEmail === false ? "btn_all_pass" : "btn_all_pass_yes"} disabled ={!validEmail} type="submit"  onClick={() => { 
            setTime(180); set_body_pass_visibility("hidden"); set_modal_text('id가 유효한지 확인중입니다...'); setModal(true); setTimerModal(true); checkModal(); }} >인증</button>
        </section>
        {/* {}를 쓰면 js 코드 쓸 수 있다. */}
        {/* 인증버튼. */}
        <section className='input_section2_pass'>
          <input onChange={saveCertificationNumber} className="id_input_pass" type="text"  placeholder="000000" maxLength={6} ></input>
          {timerModal === true ? <Timer time={time}></Timer> : <></>}
          <button disabled={ !btn_yes || !isCheckModal} onClick={() => {BtnSuccess(); } } className={ btn_yes && isCheckModal? 'btn_all_pass_yes' : 'btn_all_pass'} type="submit">완료</button>
        </section>
        {modal === true ? <Modal></Modal> : <></>}
      </div>

      <div className = "body_pass_pass" style={{visibility: `${body_pass_visibility}`}}>
        <div className="findingpass__pw__box"><Text finding={true} width="110px">새 비밀번호</Text></div>
          <FindingPass_Input_pw type="password" placeholder=" 비밀번호를 입력해주세요." onChange={handlePasswordChange} />

        <div className="findingpass__pwcheck__box"><Text finding={true} width="156px">새 비밀번호 확인</Text></div>
          <FindingPass_Input_pwcheck type="password" placeholder=" 비밀번호를 확인해주세요." onChange={handlePasswordCheckChange}  />
      </div>

    

      <button 
          disabled={ validEmail && validPassword && validPasswordCheck ? false : true}
          className="btn_all_pass"
          id="btn_success_pass"
          style={{
            background: validEmail && validPassword && validPasswordCheck ? '#5B8E31' : '#A2C08A',
            color: validEmail && validPassword && validPasswordCheck ? 'black' : '#8E8B8B'
          }}
          onClick={() => {  PasswordChangeToBackEnd(); 
          }}

        >
          완료
      </button>


    </div>  
  );
}


export default FindingPass;
