import React, { useState } from 'react';
import './login.css';
import LoginPwCheck from './LoginPwCheck';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const Navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const goToHome = () => {
    // 백엔드의 로그인 API 엔드포인트 URL        
    const loginUrl = 'https://arthurcha.shop/app/users/login'; 

      // 이메일과 비밀번호를 담은 요청 본문 객체 생성
      const requestBody = {
        email: username,
        password: password
    };
    console.log(username)

    // Axios를 사용하여 API 요청 보내기
    axios.post(loginUrl, requestBody)
        .then((response) => { 
            // 로그인 성공 시
             if (response.data.isSuccess && response.data.code === 200) {
            const accessToken = response.data.result.accessToken;
            // 접근 토큰을 localStorage 또는 쿠키에 저장하고, 메인 화면으로 이동
            localStorage.setItem('accessToken', accessToken);
            alert("로그인 성공하였습니다.");
            Navigate("/");
            }

        else if (response.data.code === 404) {
            // 로그인 실패 시 - 사용자에게 피드백 제공
            setErrorMessage(response.data.message);
        }

        else {
            // 기타 에러 처리
            console.error('로그인 실패:', response.data.message);
        }
        })
        .catch((error) => {
            // 에러 처리
            console.error('서버 에러:', error.message);
        });
    };

    const goToFindingId = () => {
        Navigate("/findingId");
    };

    const goToFindingPass = () => {
        Navigate("/findingPass");
    };

    const goToJoin = () => {
        Navigate("/join");
    };

    const goMain = () => {
        Navigate('/');
    }

    const isButtonDisabled = !(username && password);

    return (
        <div className='page'>
            <div className='statebar'>
                <span className='statebar_inner' style={{ width: username && password ? '100%' : username || password ? '50%' : '0' }}></span>
            </div>
            <div className='titleWrap_login'> 오다르 </div>
            <div onClick = {goMain} className = "LoginItem_exit"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 25" fill="none">
  <path d="M2.17574 11.2502H23.9131C24.2013 11.2502 24.4778 11.3819 24.6816 11.6163C24.8855 11.8507 25 12.1686 25 12.5001C25 12.8316 24.8855 13.1495 24.6816 13.3839C24.4778 13.6182 24.2013 13.7499 23.9131 13.7499H2.17574C1.88748 13.7499 1.61103 13.6182 1.4072 13.3839C1.20338 13.1495 1.08887 12.8316 1.08887 12.5001C1.08887 12.1686 1.20338 11.8507 1.4072 11.6163C1.61103 11.3819 1.88748 11.2502 2.17574 11.2502Z" fill="#A2C08A"/>
  <path d="M2.62564 12.5L11.6401 22.8637C11.8442 23.0984 11.9589 23.4167 11.9589 23.7486C11.9589 24.0805 11.8442 24.3988 11.6401 24.6335C11.436 24.8682 11.1592 25 10.8706 25C10.582 25 10.3052 24.8682 10.1011 24.6335L0.319308 13.3849C0.218092 13.2688 0.137788 13.1309 0.0829961 12.979C0.0282039 12.8272 0 12.6644 0 12.5C0 12.3356 0.0282039 12.1728 0.0829961 12.021C0.137788 11.8691 0.218092 11.7312 0.319308 11.6151L10.1011 0.366532C10.3052 0.131845 10.582 0 10.8706 0C11.1592 0 11.436 0.131845 11.6401 0.366532C11.8442 0.601219 11.9589 0.919523 11.9589 1.25142C11.9589 1.58332 11.8442 1.90162 11.6401 2.13631L2.62564 12.5Z" fill="#A2C08A"/>
</svg>
            </div>

            <div className='sign'>
                <div className='id'>
                    <div className='signFlex'>
                        <div className='inputTitle'>아이디</div>
                        <div className='inputWrap'>
                            <input
                                className='input'
                                placeholder="아이디를 입력해주세요."
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='signFlex'>
                        <div className='inputTitle'>비밀번호</div>
                        <div className='inputWrap'>
                            <LoginPwCheck
                                placeholder="비밀번호를 입력해주세요."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    {/* 사용자에게 에러 메시지를 표시할 부분 */}
                    {errorMessage && <div className="errorMessage">{errorMessage}</div>}
                </div>
                <div>
                    <button className='bottomButton' style={{ background: username && password ? '#5B8E31' :  '#A2C08A', color: username && password ? 'black' : '#5C5C5C' }} disabled={isButtonDisabled} onClick={goToHome}>
                        로그인
                    </button>
                </div>
                <div className='Search'>
                    <div className='idSearch' onClick={goToFindingId}>아이디찾기</div>
                    <div className='bar'>|</div>
                    <div className='pwSearch' onClick={goToFindingPass}>비밀번호 찾기</div>
                    <div className='SignUp' onClick={goToJoin}>회원가입</div>
                </div>
            </div>
            <div className='Logindiv'></div>
        </div>
    );
}
