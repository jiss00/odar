
import '../css/FindingID_Result.css';
// styled 컴포넌트 사용
// import styled from 'styled-components';
import { useState, useEffect } from 'react';

function FindingID_Result(props){
    const [ModalId_id, setModalId_id] = useState('아이디 기본');
    
    useEffect(() => {
        setModalId_id(props.id);
    }, [props.id]);
    

    return(
        <div>{ModalId_id}</div>
    );
}


export default FindingID_Result;
// 컴포넌트 내보내기