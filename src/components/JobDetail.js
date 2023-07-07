import styled , {css} from 'styled-components';
import {useState} from 'react';
import { useEffect } from 'react';
import StyledSection from './StyledSection';
import StyledSpan from './StyledSpan';
import Top from './Top';


const StyledDiv = styled.div`
    ${(props) =>
        props.type ==='head' &&
        css`  
        // display:flex;
    `}
`;


const StyledHr = styled.hr`
    position: absolute;
    margin : 0px;

    width: 283px;
    top: 60px;
    left: 24px;

    color: rgba(217, 217, 217, 1);
    border: 1px solid rgba(217, 217, 217, 1);
`



function JobDetail(){

    const ImgMoney = function(){
        return(<div>
            <StyledSpan type="image" top="69px">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6364 14.3333C14.6364 13.281 11.7873 12.4286 8.27273 12.4286M14.6364 14.3333C14.6364 15.3857 11.7873 16.2381 8.27273 16.2381C4.75818 16.2381 1.90909 15.3857 1.90909 14.3333M14.6364 14.3333V19.0352C14.6364 20.12 11.7873 21 8.27273 21C4.75818 21 1.90909 20.121 1.90909 19.0352V14.3333M14.6364 14.3333C18.1127 14.3333 21 13.3933 21 12.4286V2.90476M8.27273 12.4286C4.75818 12.4286 1.90909 13.281 1.90909 14.3333M8.27273 12.4286C4.25636 12.4286 1 11.4886 1 10.5238V5.7619M8.27273 3.85714C4.25636 3.85714 1 4.70952 1 5.7619M1 5.7619C1 6.81429 4.25636 7.66667 8.27273 7.66667C8.27273 8.63143 11.23 9.57143 14.7064 9.57143C18.1818 9.57143 21 8.63143 21 7.66667M21 2.90476C21 1.85238 18.1818 1 14.7064 1C11.23 1 8.41273 1.85238 8.41273 2.90476M21 2.90476C21 3.95714 18.1818 4.80952 14.7064 4.80952C11.2309 4.80952 8.41273 3.95714 8.41273 2.90476M8.41273 2.90476V12.5867" stroke="#5B8E31" stroke-width="2"/>
                </svg>
            </StyledSpan>

        </div>);
    }

    const ImgCalendar = function(){
        return(<div>
            <StyledSpan type="image" top="101px">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M20 8H0V17C0 17.7957 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7957 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7957 20 17V8ZM5 6C4.73478 6 4.48043 5.89464 4.29289 5.70711C4.10536 5.51957 4 5.26522 4 5V1C4 0.734784 4.10536 0.48043 4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0C5.26522 0 5.51957 0.105357 5.70711 0.292893C5.89464 0.48043 6 0.734784 6 1V5C6 5.26522 5.89464 5.51957 5.70711 5.70711C5.51957 5.89464 5.26522 6 5 6ZM15 6C14.7348 6 14.4804 5.89464 14.2929 5.70711C14.1054 5.51957 14 5.26522 14 5V1C14 0.734784 14.1054 0.48043 14.2929 0.292893C14.4804 0.105357 14.7348 0 15 0C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1V5C16 5.26522 15.8946 5.51957 15.7071 5.70711C15.5196 5.89464 15.2652 6 15 6Z" fill="#5B8E31"/>
                <path d="M17 2H16V5C16 5.26522 15.8946 5.51957 15.7071 5.70711C15.5196 5.89464 15.2652 6 15 6C14.7348 6 14.4804 5.89464 14.2929 5.70711C14.1054 5.51957 14 5.26522 14 5V2H6V5C6 5.26522 5.89464 5.51957 5.70711 5.70711C5.51957 5.89464 5.26522 6 5 6C4.73478 6 4.48043 5.89464 4.29289 5.70711C4.10536 5.51957 4 5.26522 4 5V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V8H20V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2Z" fill="#5B8E31"/>
            </svg>

            </StyledSpan>

        </div>);
    }

    const ImgClock = function(){
        return(<div>
            <StyledSpan type="image" top="133px">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z" fill="#5B8E31"/>
            </svg>
            </StyledSpan>

        </div>);
    }

    return (
        <div>
            <Top text ='취업상세'></Top>
            <StyledSection type="1">
                <StyledDiv type = "head">
                    <StyledSpan type = "recruitment">모집중</StyledSpan>
                    <StyledSpan type = "title">시니어 바리스타 자격증 과정</StyledSpan>
                </StyledDiv>
                <StyledHr></StyledHr>
                <div>
                    <ImgMoney></ImgMoney>
                    <StyledSpan type = "write" height="14px" top="72px" left="114px">교육비</StyledSpan>
                    <StyledSpan type = "write" height="14px" top="72px" left="175px">600,000원/월</StyledSpan>
                    <ImgClock></ImgClock>
                    <StyledSpan type = "write" height="14px" top="104px" left="107px">근무 요일</StyledSpan>
                    <StyledSpan type = "write" height="14px" top="104px" left="175px">주 3일</StyledSpan>
                    <ImgCalendar></ImgCalendar>
                    <StyledSpan type = "write" height="14px" top="136px" left="107px">교육 시간</StyledSpan>
                    <StyledSpan type = "write" height="14px" top="136px" left="175px">9:00 ~ 18:00</StyledSpan>
                    {/* <StyledSpan>월급</StyledSpan> */}
                    {/* <StyledSpan>원</StyledSpan> */}
                </div>
            </StyledSection>

            <StyledSection type="2">
                <StyledSpan type="body">5~7세 아이들에게 동화책을 일겅주는 구연 강사 채용합니다. 아이들을 사랑하는 마음만 있으면 충분히 하실 수 있습니다. 
                <br></br><br></br>우대사항 : 교육 관련 직종 근무</StyledSpan>
            </StyledSection>

            <section>
                <StyledSection type ="3">
                <svg style ={{
                    position : 'absolute',
                    top : '12px',
                    left : '47px'
                }} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3937 8.72661L9.809 10.5814C10.1483 11.5175 10.6257 12.4179 11.231 13.2637C11.8611 14.1036 12.6191 14.8778 13.4876 15.5684L16.8349 14.7435C18.7101 14.2811 20.7572 14.756 22.0043 15.9434L23.9107 17.7582C24.6826 18.4868 25.0696 19.427 24.9897 20.3799C24.9098 21.3327 24.3692 22.2232 23.4826 22.8627C20.3728 25.1325 15.5847 25.8999 11.9999 23.6476C8.84928 21.6635 6.18349 19.2313 4.13642 16.4734C2.08486 13.7284 0.711882 10.6936 0.0921691 7.53422C-0.595416 3.97957 2.65811 1.13485 6.71487 0.164943C9.13391 -0.415 11.7155 0.579903 12.6031 2.43472L13.6501 4.62201C14.3377 6.06187 13.8439 7.68671 12.3937 8.72661Z" fill="#5B8E31"/>
                </svg>

                </StyledSection>
                <StyledSpan type = "footer">지원하기</StyledSpan>

            </section>
        </div>

    );
}

export default JobDetail;