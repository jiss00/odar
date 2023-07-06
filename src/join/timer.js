import '../css/join.css';
import styled from 'styled-components';
import { useEffect, useState } from "react";

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
position: fixed;
top: 603px;
left : 220px;
`
function Timer() {
    const [time, setTime] = useState(180); // 남은 시간 (단위: 초)
    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);
        if (time === 0) {
            clearInterval(timer);
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