import React from "react"
import './main.css';
import MainTop from "./MainTop";

export default function Main(){

    return(
        <div>
            <div className='titleWrap'>오다르</div>
            <div className="box">
                <div className="main_employment">채용정보</div>
                <div className="main_Recruitment">취업지원</div>
            </div>
            <MainTop></MainTop>
        </div>
        

    )
}