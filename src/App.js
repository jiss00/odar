import React,{ useState } from 'react';
import '../src/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Join from './component/Join/Join';
import Login from './component/Login/Login';
import Main from './component/Main/Main';
import MyInfo from './component/MyInfo/Inquiry';
import Withdrawl from './component/MyInfo/Withdrawal';
import Modify from './component/MyInfo/Modify';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="join" element={<Join />} />
          <Route path="login" element={<Login />} />
          <Route path="inquiry" element={<MyInfo/>}/>  
          <Route path="withdrawal" element={<Withdrawl/>}/>
          <Route path="modify" element={<Modify/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
