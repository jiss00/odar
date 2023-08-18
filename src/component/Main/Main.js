import React, { useState, useEffect } from "react"
import './main.css';
import MainTop from "../../information/MainTop"
import { Link, useNavigate } from "react-router-dom";

export default function Main(){
    const Navigate = useNavigate();
    
    const [loggedIn, setLoggedIn] = useState(false);

    const userToken = localStorage.getItem('accessToken');

    useEffect(() => {
    
        if (userToken) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, []);

    const goToRecruit = () => {
        if (loggedIn){
            Navigate("/recruit");
        }
        else{
            Navigate("/recruit");
            alert("로그인을 하셔야 지원하기에 추가가 가능합니다.");
        }  
    }

    const goToEmployment = () => {
        if (loggedIn){
            Navigate("/employment");
        }
        else {
            Navigate("/recruit");
            alert("로그인을 하셔야 지원하기에 추가가 가능합니다.");
        }
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