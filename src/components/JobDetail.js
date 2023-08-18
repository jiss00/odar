import styled , {css} from 'styled-components';
import {useState} from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import ReactMarkdown from 'react-markdown';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Top from '../information/Top';

// 띄우는거 : 대문자
// 그냥 실행시키는 함수 : 소문자동사+대문자
// props : 부모가 자식에게 state 물려주기.


import '../css/Requitment_Jop_Detail.css';


function JobDetail(){
    let {job_edu_id} = useParams();
    console.log(job_edu_id);

    // --------------상태 변수 모음------------
    let [recruitment, set_recruitment] = useState(''); //모집여부
    let [title, set_title] = useState(''); //직업 제목
    let [salary, set_salary] = useState(''); // 월급
    let [work_day, set_work_day] = useState(''); // 근무시간
    let [content, set_content] = useState(''); // 근무시간

    //--------------지원하기 버튼 클릭 시 기능----------------//
    // 이동할 페이지 url 선언
    let [url, set_url] = useState('');

    // 이미 지원했는지 확인할 state , false: 미지원, true : 지원
    let [apply_state, set_apply_state] = useState(0);
    // ----------------------------//
    
    // --------------전화 걸기 기능-------------//
    let [phone, set_phone] = useState('-'); // 설정한 전화번호 
    // 이 전화번호 길이에 따라 전화버튼 생기거나 없어짐

    // --------휴대번호에 따른 전화번호 모양 띄우기 기능----------------//
    // 전화번호 있는지 판단해서 class이름 설정하는 state
    // 기본이 둘 다 있음
    let [btn_apply_state, set_btn_apply_state] = useState(0);
    // ------------------------------------------------------//

    // ---------------화면이동----------------//
    // 네이베게이트 변수
    let navigate = useNavigate();

    // 이전 화면으로
    const goBack = () => {
        navigate(-1);
    }

    // 메인으로
    const goMain = () => {
        navigate('/');
    }
    // ---------------------------------------------//

    // 상태 업데이트하는 함수
    const setJopDetail =(recruitment, title, salary, work_day, content, url,phone) => {
        set_recruitment(recruitment);
        set_title(title);
        set_salary(salary);
        set_work_day(work_day);
        set_content(content);

        set_url(url);
        set_phone(phone);
    }


    // '\n' 문자열을 br 태그로 변경하는 함수
    const renderNewLine = (props) => <br key={props.key} />;
    // 백엔드에서 데이터 가져와서 상태를 업데이트 하는 함수. 아직 백엔드에서 받아노는건 구현 안함
    const fetchDataFromBackend = () =>{


        const url = `https://arthurcha.shop/app/jobEdu/${job_edu_id}`
        // console.log('get하자');
        axios.get(url)
        .then( (response) => {

            // console.log(response.data);
            if(response.data['isSuccess']){
                const dataFromBackend = {
                    recruitment : (response.data['result']['active_status'] == 1 ? '모집중' : '모집완료'), // 모집중, 모집완료
                    title : response.data['result']['title'], // 이름
                    salary : '[없음]', // 월급 -> 없음!
                    work_day : response.data['result']['edu_day']+response.data['result']['edu_time'], //근무시간
                    content : response.data['result']['content'], // 컨텐츠
                    // content : "줄바꿈\n\n 줄바꿈 \n\n줄바꿈3",
                    url : response.data['result']['url'],
                    phone : response.data['result']['phone1'],
    
    
                };
                setJopDetail(
                    dataFromBackend.recruitment, 
                    dataFromBackend.title, 
                    dataFromBackend.salary, 
                    dataFromBackend.work_day,
                    dataFromBackend.content,
                    dataFromBackend.url,
                    dataFromBackend.phone,
                    );
                    
                callState_func();

            }
            else{
                // console.log(response);
                // 오류코드 알려주고, 뒤로가기
                alert('▶오류'+response.data.code+'\n'+response.data.message);
                // goBack();
            }
            

        } )
        .catch((error)=>{
            // 임시 오류 추가
            console.error('Error fetching data:', error);
            alert('▶오류'+error.data);
            // goBack();
            // cosole.log(); // 에러 출력
        })
        
    }

    // userEffect를 사용하여 컴포넌트가 렌더링됐을때 한번만 실행된다.
    useEffect(() => {
        // console.log('useEffect!');
        fetchDataFromBackend(); // 데이터 가져오기
    }, []);

    // =============제일 처음 지원상태 변경=================//
    const StartApplyToUpdate = () => {
        const url = `https://arthurcha.shop/app/jobApply/edu/${job_edu_id}`
        const userToken = localStorage.getItem('accessToken');

        axios.get(url,{
            headers : {
                'Authorization' : `Bearer ${userToken}`, //토큰추가
            }
        })
        .then( (response) => { // 서버연결 성공시
            if (response.data['isSuccess']){
                // 이미 지원함
                if (response.data.result === true){
                    console.log("이미 지원하였습니다.");
                    set_apply_state(1); // 지원내역 상태변경
                }
                else{
                    console.log("지원하지 않았습니다.");
                    set_apply_state(0);
                }
                
            }
            else{
                console.log(response.data);
                console.log('▶isSuccess오류'+'\n'+response.data.message);
            }
        } )
        .catch((error)=>{
            console.error('Error fetching data:', error);
            // console.log(); // 에러 출력
        });
    }

    useEffect(()=>{
        // console.log("맨 처음 렌더링 될때 한 번만 실행 : 지원상태 업데이트");
        StartApplyToUpdate();
    },[]);

    // ==============================//

    
// ------------ 지원하기 ----------------------//
    // 지원하기 기능
    const ApplyToBackend = () =>{
        const url = `https://arthurcha.shop/app/jobApply`
        // console.log('get하자');
        // 토큰 받아오기
        const userToken = localStorage.getItem('accessToken');

        axios.post(url, 
            {
                "jobEduId" : job_edu_id,
            },    
            {
                headers : {
                'Authorization': `Bearer ${userToken}`, //토큰추가
                },
                
            })
        .then( (response) => { //성공시
            if (response.data['isSuccess']){
                alert("지원이 완료되었습니다.");
                // console.log("post 성공, ID: "+ job_edu_id);
                set_apply_state(1); // 지원내역 상태변경
                // console.log(response.data);
                openLink(); // 링크 열기
            }
            else{
                // console.log(response.data);
                console.log('▶오류'+response.data.code+'\n'+response.data.message);
                alert(response.data.message);
                openLink(); //링크열기
            }
        } )
        .catch((error)=>{
            console.error('Error fetching data:', error);
            // console.log(); // 에러 출력
            openLink();
        });
    }


    
    // ----------전화걸기 기능 -----------------//
    // 전화 걸기 기능
    const callPhone = (phone) => {
        window.location.href = `tel:${phone}`;
        
        const url = `https://arthurcha.shop/app/jobApply`
        // console.log('get하자');
        // 토큰 받아오기
        const userToken = localStorage.getItem('accessToken');

        axios.post(url, 
            {
                "jobEduId" : job_edu_id,
            },    
            {
                headers : {
                'Authorization': `Bearer ${userToken}`, //토큰추가
                },
                
            })
        .then( (response) => { //성공시
            if (response.data['isSuccess']){
                alert("지원이 완료되었습니다.");
                set_apply_state(1); // 지원내역 상태변경

            }
            else{
                // console.log(response.data);
                console.log('▶오류'+response.data.code+'\n'+response.data.message);
            }
        } )
        .catch((error)=>{
            console.error('Error fetching data:', error);
        });
    };

    // --------휴대번호에 따른 전화번호 모양 띄우기 기능----------------//
    // 전화번호 있는지 판단해서 class이름 설정하는 state
    // 기본이 둘 다 있음


    const callState_func = () =>{
        // 휴대폰 번호가 존재하면 (0)
        if (phone.length > 0 ) {
            set_btn_apply_state(0);
        }
        // 휴대폰 번호가 존재하지 않으면 (1)
        else{
            set_btn_apply_state(1);
        }
        
    }

    //------------------------------- -//

    // ---------------지원 상태 업데이트 ------------//

    //--------------지원하기 버튼 클릭 시 기능----------------//

    const openLink = () => {
        // console.log('지원하기 클릭');
        window.open(url, '_blank');
        // 여기에 이동하고자 하는 URL을 넣어주세요.
        // 이미 지원했다면(state:true)
        // if (apply_state === 1 ) {
        //     // alert("이미 지원한 공고입니다.");
        //     window.open(url, '_blank');
        // }
        // // 지원하지 않았으면 ( state : false)
        // else if (apply_state === 0){
        //     window.open(url, '_blank');
        // }
        
    };
    

    return(
        <div className="screen_requitment_detail">
            <div  className="top_">
                <Top display = 'none' text ='취업 지원'></Top>
            </div>
            
            <section className="body_1_detail"> 
                <div className="body_1_title_detail"> 
                    {/* 모집여부 : recruitment */}
                    <span className="title_item1_detail">{recruitment}</span>
                    {/* 직업이름 title */}
                    <span className="title_item2_detail">{title}</span>
                </div>
                <hr className="body_1_hr_detail"></hr>
                <div className="body_1_list_detail">
                    <div className ="list_item_detail"> 
                        <span> 
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6364 14.3333C14.6364 13.281 11.7873 12.4286 8.27273 12.4286M14.6364 14.3333C14.6364 15.3857 11.7873 16.2381 8.27273 16.2381C4.75818 16.2381 1.90909 15.3857 1.90909 14.3333M14.6364 14.3333V19.0352C14.6364 20.12 11.7873 21 8.27273 21C4.75818 21 1.90909 20.121 1.90909 19.0352V14.3333M14.6364 14.3333C18.1127 14.3333 21 13.3933 21 12.4286V2.90476M8.27273 12.4286C4.75818 12.4286 1.90909 13.281 1.90909 14.3333M8.27273 12.4286C4.25636 12.4286 1 11.4886 1 10.5238V5.7619M8.27273 3.85714C4.25636 3.85714 1 4.70952 1 5.7619M1 5.7619C1 6.81429 4.25636 7.66667 8.27273 7.66667C8.27273 8.63143 11.23 9.57143 14.7064 9.57143C18.1818 9.57143 21 8.63143 21 7.66667M21 2.90476C21 1.85238 18.1818 1 14.7064 1C11.23 1 8.41273 1.85238 8.41273 2.90476M21 2.90476C21 3.95714 18.1818 4.80952 14.7064 4.80952C11.2309 4.80952 8.41273 3.95714 8.41273 2.90476M8.41273 2.90476V12.5867" stroke="#5B8E31" strokeWidth="2"/>
                            </svg>
                        </span>
                        <span className="list_item_text_detail">월급</span>
                        {/* 월급 돈 :  money */}
                        <span className="list_item_text_detail">{salary}</span>    
                    </div>
                    <div className ="list_item_detail"> 
                        <span> 
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z" fill="#5B8E31"/>
                            </svg>

                        </span>
                        <span className="list_item_text_detail">교육 시간</span>
                        {/* time */}
                        <span id = "work_day" className="list_item_text_detail">{work_day}</span>    
                    </div>
                </div>
            </section>
            <section className="body_2_detail"> 
                {/*    직업 소개 : content */}
                <span className="detail_text">
                    <ReactMarkdown escapeHtml={false} renderers={{ text: renderNewLine }}>{content}</ReactMarkdown>
                     {/* <ReactMarkdown >{"\n\n줄바꿈  줄바꿈\n\n줄바꿈"}</ReactMarkdown> */}
                </span>
            </section>
            <section className='footer_detail'> 

                <button className={`btn_call ${btn_apply_state === 0 ? '' : 'no_call'}`} onClick={() => callPhone(phone)}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.3937 8.72661L9.809 10.5814C10.1483 11.5175 10.6257 12.4179 11.231 13.2637C11.8611 14.1036 12.6191 14.8778 13.4876 15.5684L16.8349 14.7435C18.7101 14.2811 20.7572 14.756 22.0043 15.9434L23.9107 17.7582C24.6826 18.4868 25.0696 19.427 24.9897 20.3799C24.9098 21.3327 24.3692 22.2232 23.4826 22.8627C20.3728 25.1325 15.5847 25.8999 11.9999 23.6476C8.84928 21.6635 6.18349 19.2313 4.13642 16.4734C2.08486 13.7284 0.711882 10.6936 0.0921691 7.53422C-0.595416 3.97957 2.65811 1.13485 6.71487 0.164943C9.13391 -0.415 11.7155 0.579903 12.6031 2.43472L13.6501 4.62201C14.3377 6.06187 13.8439 7.68671 12.3937 8.72661Z" fill="#5B8E31"/>
                        </svg>    
                    </button>
                    {/* url 페이지로 이동 */}
                <button className={`btn_apply ${btn_apply_state === 0 ? '' : 'no_call'}`} onClick={() => {
                    if (localStorage.getItem('accessToken')){ //만약, 로그인 되어 있다면 백엔드 호출
                        ApplyToBackend();
                        
                    }
                    else{ openLink(); //로그인 아니면, 그냥 open Link
                    }

                }}>지원하기</button>                    
                {/* <button className="btn_apply">지원하기</button> */}
             </section>

        </div>
    );
}
export default JobDetail;


