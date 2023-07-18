import '../../App';
import React from 'react';
import { Link } from "react-router-dom";
import Rectangle from './Rectangle';
import Line from './Line';
import ProfileImage from './ProfileImage';
import ProfileButton from './ProfileButton';
import TopTitle from './TopTitle';
import Back from './Back';
import Line2 from './Line2';
import Line3 from './Line3';
import Container1 from './Container1';
import Container2 from './Container2';
import Container3 from './Container3';
import Container4 from './Container4';
import Container5 from './Container5';
import ModifyLongButton from './ModifyLongButton';
import Container6 from './Container6';

function Modify(){
    return(
        <>
        <div>
        <Back></Back>
        <TopTitle left={119}>내 정보 수정</TopTitle>
        <Rectangle></Rectangle>
        <ProfileImage></ProfileImage>
        <ProfileButton></ProfileButton>

        <Line></Line>
       
        <Container1></Container1>
        <Container2></Container2>
        <Container3></Container3>

        <Line2></Line2>
       
        <Container4></Container4>
        <Container5></Container5>

        <Line3></Line3>
        
        <Container6></Container6>

       <ModifyLongButton></ModifyLongButton>
    
        </div>
        </>
    )
}

export default Modify