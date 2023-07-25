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
import Container6 from './Container6';
import ModifyLongButton from './ModifyLongButton';

function Modify(){
    return(
        <>
        <div>
        <Back></Back>{/*뒤로가기*/}
        <TopTitle left={119}>내 정보 수정</TopTitle>
        <Rectangle></Rectangle>
        <ProfileImage></ProfileImage>{/*프로필 이미지*/}
        <ProfileButton></ProfileButton>{/*프로필변경 버튼*/}

        <Line></Line>
       
        <Container1></Container1>{/*희망직종*/}
        <Container2></Container2>{/*희망요일*/}
        <Container3></Container3>{/*희망시간*/}

        <Line2></Line2>
       
        <Container4></Container4>{/*채용정보 알림 동의*/}
        <Container5></Container5>{/*위치 알림 동의*/}

        <Line3></Line3>
        
        <Container6></Container6> {/*내위치*/}

       <ModifyLongButton></ModifyLongButton>{/*적용버튼*/}
    
        </div>
        </>
    )
}

export default Modify