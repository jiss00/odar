import '../../App';
import React from 'react';
import { Link } from "react-router-dom";
import Rectangle from './Rectangle';
import LongButton from '../Join/LongButton';
import Line from './Line';
import ProfileImage from './ProfileImage';
import ProfileButton from './ProfileButton';
import Texts from './Texts';
import Selectbar from './Selectbar';
import Day from './Day';
import Time from './Time';
import Tilde from './Tilde';
import AgreeButton from './AgreeButton';
import TopTitle from './TopTitle';
import Back from './Back';

function Modify(){
    return(
        <>
        <div>
        <Back></Back>
        <TopTitle left={119}>내 정보 수정</TopTitle>
        <Rectangle></Rectangle>
        <ProfileImage></ProfileImage>
        <ProfileButton></ProfileButton>

        <Line top={324}></Line>
        
        <Texts fontsize={16} width={56} height={20} top={354} left={63} >희망직종</Texts>
        <Selectbar></Selectbar>
        <Texts fontsize={16} width={56} height={20} top={399} left={63} >희망요일</Texts>
        <Day left={139} text="월"></Day>
        <Day left={178.5} text="화"></Day>
        <Day left={218} text="수"></Day>
        <Day left={257.5} text="목"></Day>
        <Day left={297} text="금"></Day>
        <Texts fontsize={16} width={56} height={20} top={444} left={63} >희망시간</Texts>
        <Time left={139}></Time>
        <Tilde></Tilde>
        <Time left={257}></Time>

        <Line top={494}></Line>
       
        <Texts fontsize={16} width={119} height={20} top={524} left={64} >채용정보 알림 동의</Texts>
        <AgreeButton top={521}></AgreeButton>
        <Texts fontsize={16} width={91} height={20} top={569} left={64} >위치 알림 동의</Texts>
        <AgreeButton top={571}></AgreeButton>

        <Line top={619}></Line>
        
        <Texts fontsize={16} width={56} height={20} top={649} left={66} >내 위치</Texts>
        <Texts fontsize={16} width={132} height={20} top={649} left={183} >창원시 마산회원구</Texts>

        <LongButton 문의하기>적용</LongButton>
        
        </div>
        </>
    )
}

export default Modify