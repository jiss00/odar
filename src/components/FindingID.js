import '../css/FindingID.css';
import '../css/FindingID_web.css';
// styled 컴포넌트 사용
// import styled from 'styled-components';
import {useState} from 'react';
import { useEffect } from 'react';

// 띄우는거 : 대문자
// 그냥 실행시키는 함수 : 소문자동사+대문자
// props : 부모가 자식에게 state 물려주기.




//이건 아이디 찾기
function FindingID(){
  const [modal, setModal] = useState(false); // 상태를 만듬.
  // const [time, setTime] = useState(180); // 남은 시간 (단위: 초)

  const Modal = function(){
    return(
      <div id = "modal_success">
        해당 번호로 인증번호가 전송되었습니다!
      </div>
    );
  }

  const checkModal = function(){
    setModal(true);

    if ({modal}){
      console.log("인증버튼 클릭");
    }
  }
  

  const getSeconds = (time) => {
    const seconds = Number(time % 60);
    if(seconds < 10) {
        return "0" + String(seconds);
    } else {
        return String(seconds);
    }
  }

  const Timer = () => {
    const [time, setTime] = useState(3); // 남은 시간 (단위: 초)
    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);
        if (time === 0) {
          clearInterval(timer);
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


  return(
    
    <div className='screen'>
      <div className='state_bar'>
        <span className = 'state_bar_inner'></span>
      </div>
      <h2 className = "id_find">아이디 찾기</h2>
      <div className='body'>
        <h3 className ="phone_number_name">휴대폰 번호</h3>
        <section className='input_section1'>
          <input className = "input_all" type="text" id="phone_number" placeholder="010-0000-0000"  maxLength={13}></input>
          <button className="btn_all" type="submit" id = "btn_phone" onClick={() => { checkModal(); }} >인증</button>
        </section>
        <section className='input_section2'>
          <input className = "input_all" type="text" id="certification_number" placeholder="000000" maxLength={6} ></input>
          {modal === true ? <Timer></Timer> : <></>}
          <button className="btn_all" id = "btn_certification" type="submit">완료</button>
        </section>
        {modal === true ? <Modal></Modal> : <></>}
      {/* {}를 쓰면 js 코드 쓸 수 있다. */}
      </div>

      <button className="btn_all" id = "btn_success" >완료</button>

    </div>
  );
}

export default FindingID;
// 컴포넌트 내보내기