    import React, { useState, useEffect } from 'react';
    import barsImage from './bars.png';
    import closeImage from './close.png';
    import '../css/MainTop.css';
    import { useNavigate } from 'react-router-dom';

    function MainTop(props) {
        const [sidebar, setSidebar] = useState(false)
        const [loggedIn, setLoggedIn] = useState(false);

        const showSidebar = () => setSidebar(!sidebar)

        const Navigate = useNavigate();

        const goToLogin = () => {
            Navigate("/login")
        }
        const goToMyPage = () => {
            Navigate("/myPage")
        }
        const goToAlarm = () => {
            Navigate("/alarm")
        }
        const goToHome = () => {
            Navigate("/")
        }
        
        const userToken = localStorage.getItem('accessToken');

        useEffect(() => {
            if (userToken) {
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        }, []);

        const handleLoginLogout = () => {
            if (loggedIn) {
                localStorage.removeItem('accessToken');
                setLoggedIn(false);
                goToHome();

            } else {
                goToLogin();
            }
        };

        const LoginLogoutMypage = () => {
            if (userToken){
                goToMyPage();
            } else {
                goToLogin();
            }
        }

        const LoginLogoutAlarm = () => {
            if (userToken){
                goToAlarm();
            } else {
                goToLogin();
            }
        }

        
        return(
            <div className="Mparent">
                <img className={sidebar ? 'Mbars active': 'Mbars'} 
                    alt="Mbars" 
                    src={barsImage} 
                    onClick={showSidebar}
                />
                
                <nav className={sidebar ? 'Mnav-menu active': 'Mnav-menu'}>
                    <ui className='Mnav-menu-items' onClick={showSidebar}>
                        <img className="Mclose" alt="close" src={closeImage} />
                        <ui className='Mtop'>
                            <li className='MtopHome' onClick={handleLoginLogout}>
                            {loggedIn ? '로그아웃' : '로그인'}
                        </li>
                            <div className="MtopBarHome"></div>
                            <li className='MtopLogin' onClick={LoginLogoutMypage}>내정보</li>
                            <div className="MtopBarLogin"></div>
                            <li className='MtopMyInfo' onClick={LoginLogoutAlarm}>알림</li>
                            <div className="MtopBarMyInfo"></div>
                        </ui>
                    </ui>
                </nav>
            </div>
        )
    }

    export default MainTop;
