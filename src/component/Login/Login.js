import React from 'react'
import './login.css';

export default function Login() {
    
    return (
        <div className='page'>

            <div className='statebar'>
                <span className='statebar_inner'></span>
            </div>
            <div className='titleWrap_login'>
                오다르
            </div>
        
            <div className='sign'>
                <div className='id'>
                    <div className='signFlex'>
                        <div className='inputTitle'>아이디</div>
                        <div className='inputWrap'>
                            <input className='input' placeholder= "아이디를 입력해주세요." />
                        </div>
                    </div>
                    <div className='signFlex'>
                        <div className='inputTitle'>비밀번호</div>
                        <div className='inputWrap'>
                            <input className='input' placeholder= "비밀번호를 입력해주세요." />
                        </div>
                    </div>
                </div>
                    
                    <div>
                        <button className='bottomButton'>
                            로그인
                        </button>
                    </div>
                    <div className='Search'>
                        <div className='idSearch'>아이디찾기</div>
                        <div className='bar'>|</div>
                        <div className='pwSearch'>비밀번호 찾기</div>
                        <div className='SignUp'>회원가입</div>
                    </div>
                </div>
            </div>
    )
}