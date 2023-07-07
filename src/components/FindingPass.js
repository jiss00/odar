import '../css/FindingPass.css';

import {useState} from 'react';
import { useEffect } from 'react';
// 띄우는거 : 대문자
// 그냥 실행시키는 함수 : 소문자동사+대문자
// props : 부모가 자식에게 state 물려주기.

function FindingPass(){
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


  return(
    
    <div className='screen'>
      <div className='state_bar'>
        <span className = 'state_bar_inner'></span>
      </div>
      <h2 className="pass_find">비밀번호 찾기</h2>
      <div>
        <h3 className="id_id">아이디</h3>
        <section>
          <input className="input_all" type="text" id="phone_number" placeholder="oooo@oooo" ></input>
          <button className= "btn_all" type="submit" id = "btn_phone" onClick={() => { checkModal(); }} >인증</button>
        </section>
        <section>
          <input className="input_all" type="text" id="certification_number" placeholder="000000" maxLength={6} ></input>
          {modal === true ? <Timer></Timer> : <></>}
          <button className= "btn_all" id = "btn_certification" type="submit">완료</button>
        </section>
      </div>
      {/* {modal === true ? <Modal></Modal> : <></>} */}
      {/* {}를 쓰면 js 코드 쓸 수 있다. */}
      <button className= "btn_all" id = "btn_success" >완료</button>

    </div>
  );
}


export default FindingPass;
