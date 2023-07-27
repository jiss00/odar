import React, { useState } from 'react';
import './login.css';
import LoginPwCheck from './LoginPwCheck';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const Navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const goToHome = () => {
        Navigate("/");
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
