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
    const loginUrl = 'http://arthurcha.shop:3000/app/users/login'; 

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
            console.log("로그인 성공하였습니다.");
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

    const isButtonDisabled = !(username && password);

    return (
        <div className='page'>
            <div className='statebar'>
                <span className='statebar_inner' style={{ width: username && password ? '100%' : username || password ? '50%' : '0' }}></span>
            </div>
            <div className='titleWrap_login'>
                오다르
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
                    <button className='bottomButton' style={{ background: username && password ? '#5B8E31' :  '#A2C08A' }} disabled={isButtonDisabled} onClick={goToHome}>
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
        </div>
    );
}
