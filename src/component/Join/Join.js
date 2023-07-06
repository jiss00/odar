import '../../App';
import React from 'react';
import NextButton from "./LongButton";
import Input_pwcheck from './Input/Input_pwcheck';
import Input_pw from './Input/Input_pw';
import Input_id from './Input/Input_id';
import Text from './Text';
import ProgressBar from './ProgressBar';
import Text_small from './Text_small';
import LongButton from './LongButton';

function Join(){
    return(
        <>
        <div>

            <ProgressBar></ProgressBar> 

            <div className="join__box"> 
                <Text fontSize="32px">회원가입</Text>
            </div>
            
            <div className="id__box"><Text width="63px">아이디</Text></div>
                    <Input_id type="email" placeholder=" 아이디를 입력해주세요."  />
                    <Text_small 이메일형식>이메일 형식</Text_small>

            <div className="pw__box"><Text width="83px">비밀번호</Text></div>
                    <Input_pw type="password" placeholder=" 비밀번호를 입력해주세요."  />
                    <Text_small 대소문자>대문자 · 소문자</Text_small>
                    <Text_small 숫자>숫자</Text_small>
                    <Text_small 특수문자>특수문자</Text_small>

            <div className="pwcheck__box"><Text width="130px">비밀번호 확인</Text></div>
                    <Input_pwcheck type="password" placeholder=" 비밀번호를 확인해주세요." />

            <LongButton 문의하기={false}>다  음</LongButton>

        </div>
        </>  
    )
}

export default Join