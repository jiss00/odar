import '../../App';
import React from 'react';
import { Link } from "react-router-dom";
import Rectangle from './Rectangle';
import LongButton from '../Join/LongButton';
import Title from './Title';
import Texts from './Texts';
import TextBox from './TextBox';
import TopTitle from './TopTitle';
import Back from './Back';
function Inquiry(){
    return(
        <>
        <div>
        <Back></Back>
        <TopTitle left={140}>문의하기</TopTitle>
        <Rectangle></Rectangle>
        <Texts fontsize={14} width={274} height={68} top={178} left={58}> 
        오다르를 이용해주셔서 감사합니다. <br/><br/>
        서비스 사용과 관련해서 문의사항 또는 불편한 점이 
        있다면 아래 작성해 주세요.</Texts>
        <Title type="text" placeholder="제목을 입력해주세요."></Title>
        <TextBox placeholder="내용"></TextBox>
        <LongButton 문의하기>문의하기</LongButton>
        </div>
        </>
    )
}

export default Inquiry