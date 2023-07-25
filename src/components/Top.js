import React, { useState } from 'react';
import backImage from './back.png';
import barsImage from './bars.png';
import closeImage from './close.png';
import '../css/Top.css';

function Top(props) {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    const information = () =>{
        window.location.href = 'http://localhost:3000/myPage'
    }
    return(
        <div>
            <img className="back" alt="back" src={backImage} />
            <div className="topName">{props.text}</div>

            <img className={sidebar ? 'bars active': 'bars'} 
                alt="bars" 
                src={barsImage} 
                onClick={showSidebar}
            />

            <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                <ui className='nav-menu-items' onClick={showSidebar}>
                    <img className="close" alt="close" src={closeImage} />
                    <ui className='top'>
                        <li className='topHome'>홈</li>
                        <div className="topBarHome"></div>
                        <li className='topLogin'>로그인</li>
                        <div className="topBarLogin"></div>
                        <li onClick={information} className='topMyInfo'>내정보</li>
                        <div className="topBarMyInfo"></div>
                    </ui>
                </ui>
            </nav>
        </div>
    )
}

export default Top;
