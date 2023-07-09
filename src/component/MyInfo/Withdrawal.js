import '../../App';
import React from 'react';
import { Link } from "react-router-dom";
import Rectangle from './Rectangle';
import Texts from './Texts';
import Withdrawal_Input_Id from './Withdrawal_Input_Id';
import Withdrawal_Input_Pw from './Withdrawal_Input_Pw';
import OxButton from './OxButton';
import TopTitle from './TopTitle';

function Withdrawl(){
    return(
        <>
        <div>
        <TopTitle left={140}>회원탈퇴</TopTitle>
        <Rectangle></Rectangle>
        <Texts fontsize={15} width={274} height={144} top={182} left={58}>
        회원을 탈퇴하시겠습니까?<br/><br/>
        탈퇴할 경우 현재 아이디는 재사용 및 복구가 불가능합니다.
        탈퇴 후 회원정보 및 개인형 서비스 이용기록은 모두 삭제됩니다.<br/><br/>
        계정 탈퇴를 원하시면 아래 정보를 입력 후 탈퇴 버튼을 선택해주세요.</Texts>
        <Withdrawal_Input_Id type="email" placeholder=" 아이디를 입력해주세요."  ></Withdrawal_Input_Id>
        <Withdrawal_Input_Pw type="email" placeholder=" 비밀번호를 입력해주세요."  ></Withdrawal_Input_Pw>
        <OxButton o>확인</OxButton>
        <OxButton o={false}>취소</OxButton>
        </div>
        </>
    )
}

export default Withdrawl