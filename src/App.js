import {useState} from 'react';
import { useEffect } from 'react';
import './App.css';
import RequitmentDetail from './components/RequitmentDetail';
import JobDetail from './components/JobDetail'
import JobDetail2 from './components/JobDetail2'
import MyPage from './components/MyPage'
import Login from './components/Top';
import FindingID from './components/FindingID';
import FindingPass from './components/FindingPass';

function App() {
  return (
    <div>
      <FindingPass></FindingPass>
      {/* <FindingID></FindingID> */}
      {/* <MyPage></MyPage> */}
      {/* <Login></Login> */}
      {/* <JobDetail></JobDetail> */}
      {/* <JobDetail2></JobDetail2> */}
      {/* <RequitmentDetail></RequitmentDetail> */}
    </div>
  );
}

export default App;
