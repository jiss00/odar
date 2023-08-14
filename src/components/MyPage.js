
import styled , {css} from 'styled-components';
import {useState} from 'react';
import { useEffect } from 'react';
import StyledSection from './StyledSection';
import StyledHr from '../css/StyledHr';
import StyledSpan from './StyledSpan';
import grandFather from './grandFather.png';
import axios from 'axios'
import "../css/MyPage.css"

import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';


function MyPage(){
    // ------------------이동하는 메소드 --------------//

    let navigate = useNavigate();

    // 메인으로
    const goMain = () => {
        navigate('/');
    }

    // 내정보 수정
    const goModify = () => {
        navigate('/modify');
    }

    // 지원내역
    const goDetail = () => {
        navigate('/detail');
    }

    // 문의하기
    const goMyInfo = () => {
        navigate('/inquiry');
    }

    // 로그아웃
    const goLogout = async () => {
        try {
            const token = localStorage.getItem('accessToken');
            console.log(token);
          
            const response = await axios.post('https://arthurcha.shop/app/users/logout', 
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              }
            });
          
            if (response.data.isSuccess && response.data.code === 200) {
              localStorage.removeItem('accessToken');
              alert('로그아웃 되었습니다.');
              navigate('/login');

            } else {
              // 에러 처리 로직 추가
              alert('요청 실패1: ' + response.data.code + response.data.message);
            }
          } catch (error) {
            // 에러 처리 로직 추가
            alert('요청 실패2: ' + error.code+ error.message);
          }
        
    }

    //회원 탈퇴
    const goWithdrawal = () =>{
        navigate('/withdrawal');
    }

    // -------------------------------------------//
    const [name, setName] = useState('이름'); //사용자명
    const [age, setAge] = useState('나이'); //나이
    const [job, setJop] = useState('희망 직종');
    const [region, setRegion] = useState('00동'); // 00동
    const [desire_start_time, set_desire_start_time] = useState('0'); //희망 시작시간
    const [desire_end_time, set_desire_end_time] = useState('0');
    const [profile_img, set_profile_img] = useState(grandFather); //프로필이미지

    // ------------------------------------------------//
    const userToken = localStorage.getItem('accessToken'); //토큰

    //get
    const fetchDataFromBackend = () =>{
        const url = `https://arthurcha.shop/app/users/info`
        // console.log('get하자');
        
        axios.get(url,
            {
                headers : {
                'Authorization': `Bearer ${userToken}`, //토큰추가
                },
                
            })
        .then( (response) => { //성공시
            
            console.log(response.data);
            if (response.data['isSuccess']){
                console.log('get성공');
                console.log(response.data.result);
                
                const backendData = response.data['result'];
                
                // 백엔드에 내용이 있다면, 백엔드에서 받아온 내용으로 업그레이드 해준다.
                //이름, 직업, 사는곳, 시작시간, 끝시간

                if (backendData.userInfo.name != null)    setName(backendData.userInfo.name); //이름 
                setAge(backendData.userInfo.age); //나이 
                if (backendData.job != null)   setJop(backendData.job); //직업
                for (let key in backendData.region){
                    // console.log('key',key);
                    if (backendData.region[key] != null){
                        setRegion(backendData.region[key]); //사는곳
                    }
                }
                // 변수명을 이용해 속성에 접근하려면 대괄호 표기법을 사용해야 합니다. 
                if(backendData.userInfo.profile_img != "https://arthurcha.shop/app/image")  set_profile_img(backendData.userInfo.profile_img);
                if(backendData.userInfo.desire_start_time !=null)   set_desire_start_time(backendData.userInfo.desire_start_time); //시작시간
                if(backendData.userInfo.desire_end_time !=null)   set_desire_end_time(backendData.userInfo.desire_end_time); //끝시간

            }
            else{
                // 오류코드 알려주고, 뒤로가기
                alert('▶오류'+response.data.code+'\n'+response.data.message);
                // goBack();
            }

        } )
        .catch((error)=>{
            console.error('▶서버오류'+ error);
            // console.log(); // 에러 출력
        });
    }

    // userEffect를 사용하여 컴포넌트가 렌더링됐을때 한번만 실행된다.
    useEffect(() => {
        // console.log('useEffect!');
        fetchDataFromBackend(); // 데이터 가져오기
    }, []);



    return (
        <div className = "screen_my_page">
            <section className = "head">
                <div className = "item_title"> 내 정보</div>
                <button onClick = {goMain} className = "item_exit"> 
                    <svg width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 30V19.4118H21V30H29.75V15.8824H35L17.5 0L0 15.8824H5.25V30H14Z" fill="#5B8E31"/>
                    </svg>
                </button>

            </section>
            <section className = "body_1">
                <div className = "item_profile_1">
                    <img className = "item_image" alt="Grandfather" src={profile_img}/>
                    <span className = "item_name">
                        {name}
                    </span>
                </div>
                <div className = "item_profile_2">
                    {/* 나이 */}
                    <div className = "item_age"> 만 {age} 세 </div>
                    <hr className = "item_hr"></hr>
                    {/* 사는곳 */}
                    <div className = "item_house"> {region}</div>
                    <hr className = "item_hr"></hr>
                    <button className = "item_btn" onClick = {goModify}> 수정 </button>
                </div>
            </section>
            <section className = "body_2">
                <div className = "item_job"> 
                    <span className = "item_job_img">
                        <svg  width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.5833 8.54158H29.3333V6.45825C29.3333 4.80065 28.6748 3.21094 27.5027 2.03883C26.3306 0.866732 24.7409 0.208252 23.0833 0.208252H18.9166C17.259 0.208252 15.6693 0.866732 14.4972 2.03883C13.3251 3.21094 12.6666 4.80065 12.6666 6.45825V8.54158H6.41663C4.75902 8.54158 3.16931 9.20007 1.99721 10.3722C0.825107 11.5443 0.166626 13.134 0.166626 14.7916V33.5416C0.166626 35.1992 0.825107 36.7889 1.99721 37.961C3.16931 39.1331 4.75902 39.7916 6.41663 39.7916H35.5833C37.2409 39.7916 38.8306 39.1331 40.0027 37.961C41.1748 36.7889 41.8333 35.1992 41.8333 33.5416V14.7916C41.8333 13.134 41.1748 11.5443 40.0027 10.3722C38.8306 9.20007 37.2409 8.54158 35.5833 8.54158ZM16.8333 6.45825C16.8333 5.90572 17.0528 5.37581 17.4435 4.98511C17.8342 4.59441 18.3641 4.37492 18.9166 4.37492H23.0833C23.6358 4.37492 24.1657 4.59441 24.5564 4.98511C24.9471 5.37581 25.1666 5.90572 25.1666 6.45825V8.54158H16.8333V6.45825ZM37.6666 33.5416C37.6666 34.0941 37.4471 34.624 37.0564 35.0147C36.6657 35.4054 36.1358 35.6249 35.5833 35.6249H6.41663C5.86409 35.6249 5.33419 35.4054 4.94349 35.0147C4.55279 34.624 4.33329 34.0941 4.33329 33.5416V22.0833C9.638 24.1877 15.2931 25.2692 21 25.2708C26.7067 25.2672 32.3614 24.1858 37.6666 22.0833V33.5416ZM37.6666 17.5208C32.4133 19.8286 26.7379 21.0203 21 21.0203C15.262 21.0203 9.58663 19.8286 4.33329 17.5208V14.7916C4.33329 14.239 4.55279 13.7091 4.94349 13.3184C5.33419 12.9277 5.86409 12.7083 6.41663 12.7083H35.5833C36.1358 12.7083 36.6657 12.9277 37.0564 13.3184C37.4471 13.7091 37.6666 14.239 37.6666 14.7916V17.5208Z" fill="#5B8E31"/>
                        </svg>
                    </span>
                    {/* 희망 직종 */}
                    <span className="item_job_write"> {job} </span>
                </div>
                <div className = "item_time"> 
                    <span className ="item_time_img">
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 0.6875C16.9826 0.6875 13.0554 1.87881 9.71499 4.11077C6.37462 6.34274 3.77111 9.51512 2.23371 13.2267C0.696301 16.9384 0.294046 21.0225 1.07781 24.9628C1.86157 28.903 3.79615 32.5224 6.6369 35.3631C9.47766 38.2039 13.097 40.1384 17.0372 40.9222C20.9775 41.706 25.0616 41.3037 28.7733 39.7663C32.4849 38.2289 35.6573 35.6254 37.8892 32.285C40.1212 28.9446 41.3125 25.0174 41.3125 21C41.3068 15.6145 39.1649 10.4513 35.3568 6.64317C31.5487 2.83507 26.3855 0.693187 21 0.6875ZM21 38.1875C17.6006 38.1875 14.2776 37.1795 11.4511 35.2909C8.62468 33.4023 6.42171 30.718 5.12083 27.5774C3.81995 24.4368 3.47958 20.9809 4.14276 17.6469C4.80595 14.3128 6.4429 11.2503 8.84661 8.8466C11.2503 6.44289 14.3128 4.80594 17.6469 4.14275C20.9809 3.47957 24.4368 3.81994 27.5774 5.12082C30.718 6.4217 33.4023 8.62467 35.2909 11.4511C37.1795 14.2776 38.1875 17.6006 38.1875 21C38.1823 25.5568 36.3699 29.9255 33.1477 33.1477C29.9255 36.3699 25.5568 38.1823 21 38.1875ZM33.5 21C33.5 21.4144 33.3354 21.8118 33.0424 22.1049C32.7493 22.3979 32.3519 22.5625 31.9375 22.5625H21C20.5856 22.5625 20.1882 22.3979 19.8952 22.1049C19.6021 21.8118 19.4375 21.4144 19.4375 21V10.0625C19.4375 9.6481 19.6021 9.25067 19.8952 8.95765C20.1882 8.66462 20.5856 8.5 21 8.5C21.4144 8.5 21.8118 8.66462 22.1049 8.95765C22.3979 9.25067 22.5625 9.6481 22.5625 10.0625V19.4375H31.9375C32.3519 19.4375 32.7493 19.6021 33.0424 19.8951C33.3354 20.1882 33.5 20.5856 33.5 21Z" fill="#5B8E31"/>
                        </svg>
                    </span>
                    {/* 희망 시간 */}
                    <span className = "item_time_write">{desire_start_time}시 ~ {desire_end_time}시</span>
                </div>
            </section>

            <hr className = "footer_hr"></hr>

            <section className = "footer">
                <div className = "footer_head">
                    고객 지원
                </div>
                <div className = "footer_body">
                    <div onClick ={goDetail} className = "item_footer_list">
                        <span className = "item_footer_write" onClick={goDetail}>지원내역</span>
                        <button className = "item_footer_btn">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.51715 1.95471C5.5723 1.89942 5.63782 1.85555 5.70996 1.82561C5.78209 1.79568 5.85942 1.78027 5.93752 1.78027C6.01562 1.78027 6.09295 1.79568 6.16509 1.82561C6.23722 1.85555 6.30274 1.89942 6.3579 1.95471L13.4829 9.07971C13.5382 9.13486 13.5821 9.20039 13.612 9.27252C13.6419 9.34466 13.6573 9.42199 13.6573 9.50008C13.6573 9.57818 13.6419 9.65551 13.612 9.72765C13.5821 9.79978 13.5382 9.86531 13.4829 9.92046L6.3579 17.0455C6.24641 17.1569 6.09519 17.2196 5.93752 17.2196C5.77985 17.2196 5.62864 17.1569 5.51715 17.0455C5.40566 16.934 5.34302 16.7828 5.34302 16.6251C5.34302 16.4674 5.40566 16.3162 5.51715 16.2047L12.223 9.50008L5.51715 2.79546C5.46185 2.74031 5.41798 2.67478 5.38805 2.60265C5.35812 2.53052 5.34271 2.45318 5.34271 2.37508C5.34271 2.29699 5.35812 2.21965 5.38805 2.14752C5.41798 2.07539 5.46185 2.00986 5.51715 1.95471Z" fill="black"/>
                            </svg>
                        </button>
                    </div>
                    <div className = "item_footer_list"  onClick={goMyInfo} >
                        <span className = "item_footer_write">문의하기</span>
                        <button className = "item_footer_btn">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.51715 1.95471C5.5723 1.89942 5.63782 1.85555 5.70996 1.82561C5.78209 1.79568 5.85942 1.78027 5.93752 1.78027C6.01562 1.78027 6.09295 1.79568 6.16509 1.82561C6.23722 1.85555 6.30274 1.89942 6.3579 1.95471L13.4829 9.07971C13.5382 9.13486 13.5821 9.20039 13.612 9.27252C13.6419 9.34466 13.6573 9.42199 13.6573 9.50008C13.6573 9.57818 13.6419 9.65551 13.612 9.72765C13.5821 9.79978 13.5382 9.86531 13.4829 9.92046L6.3579 17.0455C6.24641 17.1569 6.09519 17.2196 5.93752 17.2196C5.77985 17.2196 5.62864 17.1569 5.51715 17.0455C5.40566 16.934 5.34302 16.7828 5.34302 16.6251C5.34302 16.4674 5.40566 16.3162 5.51715 16.2047L12.223 9.50008L5.51715 2.79546C5.46185 2.74031 5.41798 2.67478 5.38805 2.60265C5.35812 2.53052 5.34271 2.45318 5.34271 2.37508C5.34271 2.29699 5.35812 2.21965 5.38805 2.14752C5.41798 2.07539 5.46185 2.00986 5.51715 1.95471Z" fill="black"/>
                            </svg>
                        </button>
                    </div>
                    <div className = "item_footer_list" onClick={goLogout} >
                        <span className = "item_footer_write" >로그아웃</span>
                        <button className = "item_footer_btn">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.51715 1.95471C5.5723 1.89942 5.63782 1.85555 5.70996 1.82561C5.78209 1.79568 5.85942 1.78027 5.93752 1.78027C6.01562 1.78027 6.09295 1.79568 6.16509 1.82561C6.23722 1.85555 6.30274 1.89942 6.3579 1.95471L13.4829 9.07971C13.5382 9.13486 13.5821 9.20039 13.612 9.27252C13.6419 9.34466 13.6573 9.42199 13.6573 9.50008C13.6573 9.57818 13.6419 9.65551 13.612 9.72765C13.5821 9.79978 13.5382 9.86531 13.4829 9.92046L6.3579 17.0455C6.24641 17.1569 6.09519 17.2196 5.93752 17.2196C5.77985 17.2196 5.62864 17.1569 5.51715 17.0455C5.40566 16.934 5.34302 16.7828 5.34302 16.6251C5.34302 16.4674 5.40566 16.3162 5.51715 16.2047L12.223 9.50008L5.51715 2.79546C5.46185 2.74031 5.41798 2.67478 5.38805 2.60265C5.35812 2.53052 5.34271 2.45318 5.34271 2.37508C5.34271 2.29699 5.35812 2.21965 5.38805 2.14752C5.41798 2.07539 5.46185 2.00986 5.51715 1.95471Z" fill="black"/>
                            </svg>
                        </button>
                    </div>
                    <div className = "item_footer_list" onClick={goWithdrawal}>
                        <span className = "item_footer_write" >회원탈퇴</span>
                        <button className = "item_footer_btn">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.51715 1.95471C5.5723 1.89942 5.63782 1.85555 5.70996 1.82561C5.78209 1.79568 5.85942 1.78027 5.93752 1.78027C6.01562 1.78027 6.09295 1.79568 6.16509 1.82561C6.23722 1.85555 6.30274 1.89942 6.3579 1.95471L13.4829 9.07971C13.5382 9.13486 13.5821 9.20039 13.612 9.27252C13.6419 9.34466 13.6573 9.42199 13.6573 9.50008C13.6573 9.57818 13.6419 9.65551 13.612 9.72765C13.5821 9.79978 13.5382 9.86531 13.4829 9.92046L6.3579 17.0455C6.24641 17.1569 6.09519 17.2196 5.93752 17.2196C5.77985 17.2196 5.62864 17.1569 5.51715 17.0455C5.40566 16.934 5.34302 16.7828 5.34302 16.6251C5.34302 16.4674 5.40566 16.3162 5.51715 16.2047L12.223 9.50008L5.51715 2.79546C5.46185 2.74031 5.41798 2.67478 5.38805 2.60265C5.35812 2.53052 5.34271 2.45318 5.34271 2.37508C5.34271 2.29699 5.35812 2.21965 5.38805 2.14752C5.41798 2.07539 5.46185 2.00986 5.51715 1.95471Z" fill="black"/>
                            </svg>
                        </button>

                    </div>
                </div>
            </section>
        </div>
    );
}


export default MyPage;