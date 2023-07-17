import styled , {css} from 'styled-components';
import {useState} from 'react';
import { useEffect } from 'react';
import StyledSection from './StyledSection';
import StyledSpan from './StyledSpan';
import Top from './Top';

// 띄우는거 : 대문자
// 그냥 실행시키는 함수 : 소문자동사+대문자
// props : 부모가 자식에게 state 물려주기.


import '../css/Requitment_Jop_Detail.css';

function RequitmentDetail(){

    const ImgMoney = function(){
        return(<div>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6364 14.3333C14.6364 13.281 11.7873 12.4286 8.27273 12.4286M14.6364 14.3333C14.6364 15.3857 11.7873 16.2381 8.27273 16.2381C4.75818 16.2381 1.90909 15.3857 1.90909 14.3333M14.6364 14.3333V19.0352C14.6364 20.12 11.7873 21 8.27273 21C4.75818 21 1.90909 20.121 1.90909 19.0352V14.3333M14.6364 14.3333C18.1127 14.3333 21 13.3933 21 12.4286V2.90476M8.27273 12.4286C4.75818 12.4286 1.90909 13.281 1.90909 14.3333M8.27273 12.4286C4.25636 12.4286 1 11.4886 1 10.5238V5.7619M8.27273 3.85714C4.25636 3.85714 1 4.70952 1 5.7619M1 5.7619C1 6.81429 4.25636 7.66667 8.27273 7.66667C8.27273 8.63143 11.23 9.57143 14.7064 9.57143C18.1818 9.57143 21 8.63143 21 7.66667M21 2.90476C21 1.85238 18.1818 1 14.7064 1C11.23 1 8.41273 1.85238 8.41273 2.90476M21 2.90476C21 3.95714 18.1818 4.80952 14.7064 4.80952C11.2309 4.80952 8.41273 3.95714 8.41273 2.90476M8.41273 2.90476V12.5867" stroke="#5B8E31" stroke-width="2"/>
                </svg>
        </div>);
    }

    const ImgClock = function(){
        return(<div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z" fill="#5B8E31"/>
            </svg>
        </div>);
    }


    return(
        <div className="screen_requitment_detail">
            
            <div style={ {height:"166px"}}><Top text ='취업상세'></Top></div>
            <section className="body_1_detail"> 
                <div className="body_1_title_detail"> 
                    <span className="title_item1_detail">모집중</span>
                    <span className="title_item2_detail">시니어 바리스타 자격증 과정</span>
                </div>
                <hr className="body_1_hr_detail"></hr>
                <div className="body_1_list_detail">
                    <div className ="list_item_detail"> 
                        <span> 
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6364 14.3333C14.6364 13.281 11.7873 12.4286 8.27273 12.4286M14.6364 14.3333C14.6364 15.3857 11.7873 16.2381 8.27273 16.2381C4.75818 16.2381 1.90909 15.3857 1.90909 14.3333M14.6364 14.3333V19.0352C14.6364 20.12 11.7873 21 8.27273 21C4.75818 21 1.90909 20.121 1.90909 19.0352V14.3333M14.6364 14.3333C18.1127 14.3333 21 13.3933 21 12.4286V2.90476M8.27273 12.4286C4.75818 12.4286 1.90909 13.281 1.90909 14.3333M8.27273 12.4286C4.25636 12.4286 1 11.4886 1 10.5238V5.7619M8.27273 3.85714C4.25636 3.85714 1 4.70952 1 5.7619M1 5.7619C1 6.81429 4.25636 7.66667 8.27273 7.66667C8.27273 8.63143 11.23 9.57143 14.7064 9.57143C18.1818 9.57143 21 8.63143 21 7.66667M21 2.90476C21 1.85238 18.1818 1 14.7064 1C11.23 1 8.41273 1.85238 8.41273 2.90476M21 2.90476C21 3.95714 18.1818 4.80952 14.7064 4.80952C11.2309 4.80952 8.41273 3.95714 8.41273 2.90476M8.41273 2.90476V12.5867" stroke="#5B8E31" stroke-width="2"/>
                            </svg>
                        </span>
                        <span className="list_item_text_detail">월급</span>
                        <span className="list_item_text_detail">600,000원/월</span>    
                    </div>
                    <div className ="list_item_detail"> 
                        <span> 
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z" fill="#5B8E31"/>
                            </svg>

                        </span>
                        <span className="list_item_text_detail">근무 시간</span>
                        <span className="list_item_text_detail">주 5일, 10시 ~ 12시 30분</span>    
                    </div>
                </div>
            </section>
            <section className="body_2_detail"> 
                <span className="detail_text"> 바리스타 자격증 과정입니다.
                </span>
            </section>
            <section className='footer_detail'> 

                <button className="btn_call">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.3937 8.72661L9.809 10.5814C10.1483 11.5175 10.6257 12.4179 11.231 13.2637C11.8611 14.1036 12.6191 14.8778 13.4876 15.5684L16.8349 14.7435C18.7101 14.2811 20.7572 14.756 22.0043 15.9434L23.9107 17.7582C24.6826 18.4868 25.0696 19.427 24.9897 20.3799C24.9098 21.3327 24.3692 22.2232 23.4826 22.8627C20.3728 25.1325 15.5847 25.8999 11.9999 23.6476C8.84928 21.6635 6.18349 19.2313 4.13642 16.4734C2.08486 13.7284 0.711882 10.6936 0.0921691 7.53422C-0.595416 3.97957 2.65811 1.13485 6.71487 0.164943C9.13391 -0.415 11.7155 0.579903 12.6031 2.43472L13.6501 4.62201C14.3377 6.06187 13.8439 7.68671 12.3937 8.72661Z" fill="#5B8E31"/>
                        </svg>    
                    </button>
                <button className="btn_apply">지원하기</button>
             </section>

        </div>
    );
}
export default RequitmentDetail;