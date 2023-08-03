import styled , {css} from 'styled-components';
import {useState} from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

import Top from '../information/Top';

// 띄우는거 : 대문자
// 그냥 실행시키는 함수 : 소문자동사+대문자
// props : 부모가 자식에게 state 물려주기.

function Test(){
    let {jobPostingId} = useParams();
    console.log(jobPostingId);

    // --------------상태 변수 모음------------
    let [recruitment, set_recruitment] = useState(''); //모집여부
    let [title, set_title] = useState(''); //직업 제목
    let [money, set_money] = useState(''); // 월급
    let [time, set_time] = useState(''); // 근무시간
    let [introduction, set_introduction] = useState(''); // 근무시간

    //--------------지원하기 버튼 클릭 시 기능----------------//
    // 이동할 페이지 url 선언
    let [url, set_url] = useState('https://www.naver.com');

    // 이미 지원했는지 확인할 state , false: 미지원, true : 지원
    let [apply_state, set_apply_state] = useState(0);
    // ----------------------------//
    
    // --------------전화 걸기 기능-------------//
    let phoneNumber = '777-7777-7777'; // 설정한 전화번호 
    // 이 전화번호 길이에 따라 전화버튼 생기거나 없어짐


    // 상태 업데이트하는 함수
    const setJopDetail =(recruitment, title, money, time, introduction) => {
        set_recruitment(recruitment);
        set_title(title);
        set_money(money);
        set_time(time);
        set_introduction(introduction);
    }


    // 백엔드에서 데이터 가져와서 상태를 업데이트 하는 함수. 아직 백엔드에서 받아노는건 구현 안함
    const fetchDataFromBackend = () =>{
        const url = `http://arthurcha.shop:3000/app/jobPosting/${jobPostingId}`
        console.log('get하자');
        axios.get(url)
        .then( (response) => {
            console.log(response.data);
            // setJopDetail(response.recruitment, response.title, response.money, response.time, response.introduction);
        } )
        .catch((error)=>{
            console.log("에러임");
            // console.log(); // 에러 출력
        })
        // 백엔드에서 받아오기 전이므로, 가상의 데이터로 예시 작성
        
    }



    return(
        <div>
            테스트창
            <button onClick={fetchDataFromBackend}> get하자</button>
        </div>
    );
}
export default Test;