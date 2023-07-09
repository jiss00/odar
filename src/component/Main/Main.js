import React from "react"
import './main.css';
import Top from "../../information/Top";

export default function Main(){

    return(
        <div>
            <div className='titleWrap'>오다르</div>
            <div className="box">
                <div className="main_employment">채용정보</div>
                <div className="main_Recruitment">취업지원</div>
            </div>
            <Top></Top>
        </div>
        

    )
}