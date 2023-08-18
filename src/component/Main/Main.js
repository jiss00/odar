import React from "react"
import './main.css';
import MainTop from "../../information/MainTop"
import { Link, useNavigate } from "react-router-dom";

export default function Main(){
    const Navigate = useNavigate();

    const goToRecruit = () => {
        Navigate("/recruit")
    }

    const goToEmployment = () => {
        Navigate("/employment")
    }

    return(
        <div>
            <div className="parent">
                <div className='titleWrap'>오다르</div>
                <div className="main_employment" onClick={goToRecruit}>채용 정보</div>
                <div className="main_Recruitment" onClick={goToEmployment}>취업 지원</div>
                <div className="main_div"></div>
            </div>
            <MainTop></MainTop>
        </div>
        

    )
}