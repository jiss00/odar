import '../css/FindingPass.css';
import {useState} from 'react';
import { useEffect } from 'react';
import FindingPass_Input_pw from './FindingPass_Input_pw';
import FindingPass_Input_pwcheck from './FindingPass_Input_pwcheck';
import Text from '../component/Join/Text';
import Text_small from '../component/Join/Text_small';
// 띄우는거 : 대문자
// 그냥 실행시키는 함수 : 소문자동사+대문자
// props : 부모가 자식에게 state 물려주기.

function FindingPass(){
  const [modal, setModal] = useState(false); // 상태를 만듬.
  // const [time, setTime] = useState(180); // 남은 시간 (단위: 초)

  const Modal = function(){
    return(
      <div id = "modal_success_pass">
        아이디 인증이 완료되었습니다!
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
    
    <div className='screen_pass'>
      <div className='state_bar_pass'>
        <span className = 'state_bar_inner_pass'></span>
      </div>
      <h2 className="pass_find">비밀번호 찾기</h2>
      <div className='body_id_pass'>
        <h3 className="id_pass">아이디</h3>
        <section className='input_section1_pass'>
          <input className="id_input_pass" type="text" id="" placeholder="oooo@oooo" ></input>
          <button className= "btn_all_pass" type="submit"  onClick={() => { checkModal(); }} >인증</button>
        </section>
        {modal === true ? <Modal></Modal> : <></>}
        {/* {}를 쓰면 js 코드 쓸 수 있다. */}
      </div>

       {/*<div className = "body_pass_pass">
          새비밀번호 비밀번호확인
        </div> */}

      <div className="findingpass__pw__box"><Text width="110px">새 비밀번호</Text></div>
        <FindingPass_Input_pw type="password" placeholder=" 비밀번호를 입력해주세요."  />

      <div className="findingpass__pwcheck__box"><Text width="156px">새 비밀번호 확인</Text></div>
        <FindingPass_Input_pwcheck type="password" placeholder=" 비밀번호를 확인해주세요." />


      <button className= "btn_all_pass" id = "btn_success_pass" >완료</button>

    </div>
  );
}


export default FindingPass;
