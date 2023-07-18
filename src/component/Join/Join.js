import '../../App';
import React from 'react';
import NextButton from "./LongButton";
import Input_pwcheck from './Input/Input_pwcheck';
import Input_pw from './Input/Input_pw';
import Input_id from './Input/Input_id';
import Text from './Text';
import ProgressBar from './ProgressBar';
import Text_small from './Text_small';
import InputLongButton from './Input/InputLongButton';
import BigText from './BigText';
import JoinContainer from './JoinContainer';

function Join(){
    return(
        <>
        <div>

            <ProgressBar></ProgressBar> 

            <div className="join__box"> 
                <BigText fontSize="32px">회원가입</BigText>
            </div>
            
            <div className="id__box"><Text width="63px">아이디</Text></div>
                    <Input_id type="email" placeholder=" 아이디를 입력해주세요."  />

            <div className="pw__box"><Text width="83px">비밀번호</Text></div>
                    <Input_pw type="password" placeholder=" 비밀번호를 입력해주세요."  />

            <div className="pwcheck__box"><Text width="130px">비밀번호 확인</Text></div>
                    <Input_pwcheck type="password" placeholder=" 비밀번호를 확인해주세요." />

            <InputLongButton></InputLongButton>
            
        </div>
        </>  
    )
}

export default Join