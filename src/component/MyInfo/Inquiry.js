import '../../App';
import React from 'react';
import { Link } from "react-router-dom";

import { useState, useEffect } from 'react';
import Rectangle from './Rectangle';
import LongButton from '../Join/LongButton';
import Title from './Title';
import Texts from './Texts';
import TextBox from './TextBox';
import TopTitle from './TopTitle';
import Back from './Back';
import axios from 'axios';


function Inquiry(){
    // input에서 value를 담기 위한 state 생성
    const [title_state, set_title] = useState('');
    const [textBox_state, set_textBox] = useState('');    
    const [longButton_state, set_longButton] = useState(false);

    // input이 입력될 때마다 state 값 변경되게 하는 함수!
    const saveTitle = event => {
        set_title(event.target.value);
        console.log(title_state);
    }

    const saveTextBox = event => {
        set_textBox(event.target.value);
        console.log(textBox_state);
        // console.log(longButton_state);
    }

    const inputValue = () => {
        if (title_state.length > 0 && textBox_state.length > 0){
            // console.log("문의할수있음");
            set_longButton(true);
            
        }
        else{
            // console.log("아직 문의안됨");
            set_longButton(false);
            
        }
    }

    // title_state와 textBox_state가 변경될 때마다 inputValue 함수를 호출
    useEffect(() => {
        inputValue();
        console.log(`제목:${title_state}\n\n 내용:${textBox_state} `);
    }, [title_state, textBox_state]);

        // 문의하기로 이메일 전송.
   const EmailToQuestion = () => {
        const questionData =  { "question" : `제목:${title_state}\n\n내용:${textBox_state} ` };
        const url = `http://arthurcha.shop:3000/app/question`;
        const userToken = localStorage.getItem('accessToken');
        console.log("문의하기post했다");
        axios.post(url, questionData,  
            {headers:
                 { 'Authorization': `Bearer ${userToken}`,}
            })
        .then((response) => {
            console.log(response.data);
            if(response.data.isSuccess){
                console.log('isSuccess 성공');
            }else{
                console.log('▶[오류] isSuccess 실패'+response.data.code+'\n'+response.data.message);
            }
        })
        .catch((error)=>{
            console.error('▶오류'+ error);
        });
    }
    const TextStyle = {
        pointerEvents: longButton_state ?  'auto' :'none'
    };
        

    return(
        <>
        <div>
        <Back></Back>
        <TopTitle >문의하기</TopTitle>
        <Rectangle></Rectangle>
        <Texts fontsize={14} width={274} height={68} top={-350}> 
        오다르를 이용해주셔서 감사합니다. <br/><br/>
        서비스 사용과 관련해서 문의사항 또는 불편한 점이 
        있다면 아래 작성해 주세요.</Texts>
        <Title type="text" placeholder="제목을 입력해주세요." onChange = {saveTitle}></Title>
        <TextBox placeholder="내용" onChange = {saveTextBox}></TextBox>
        <span style = {TextStyle} onClick={() => {inputValue();  EmailToQuestion(); }}> 
            <LongButton 문의하기={longButton_state} >문의하기</LongButton>
        </span>
        
        </div>
        </>
    );
}

export default Inquiry