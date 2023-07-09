import React, { useState } from 'react';
import barsImage from './bars.png';
import closeImage from './close.png';
import './mainTop.css';

function MainTop() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <img
        className={sidebar ? 'bars active' : 'bars'}
        alt="bars"
        src={barsImage}
        onClick={showSidebar}
      />

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <img className="close" alt="close" src={closeImage} />
          <ul className='top'>
            <li className='topLogin'>로그인</li>
            <div className="topBarLogin"></div>
            <li className='topMyInfo'>내정보</li>
            <div className="topBarMyInfo"></div>
          </ul>
        </ul>
      </nav>
    </div>
  );
}

export default MainTop;
