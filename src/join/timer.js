import '../css/join.css';
import styled from 'styled-components';
import { useEffect, useState } from "react";
import join from './join';
const getSeconds = (time) => {
    const seconds = Number(time % 60);
    if (seconds < 10) {
        return "0" + String(seconds);
    } else {
        return String(seconds);
    }
}
const Div = styled.div`
color:red;
font-size: 18px;
font-weight: 600;
position:absolute;
padding-top : 15px;
margin-left : 190px;
@media screen and (min-width: 1024px) {
    margin-left : 290px;
  }
`
function Timer({ modal, setModal }) {
    const [time, setTime] = useState(180); // 남은 시간 (단위: 초)
    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);
        if (time === 0) {
            clearInterval(timer);
            alert('시간이 만료되었습니다. 인증을 다시 해주세요');
            setModal(false);
        }
        return () => clearInterval(timer);
    }, [time]);
    return (
        <Div>
            <span>{parseInt(time / 60)}</span>
            <span> : </span>
            <span>{getSeconds(time)}</span>
        </Div>
                )
}
export default Timer