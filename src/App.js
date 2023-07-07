import {
  BrowserRouter as Router,
  Routes, //
  Route,  //path의 경로에 렌더링 해줌
  Link //라우터에서 다른 라우터로 새로고침 필요 없이 갈 수 있게 해줌
} from "react-router-dom";
import Join from './join/join';
import Recruit from './information/recruit';
import Employment from './information/employment';
import Detail from './information/detail';
import './App.css';
import RequitmentDetail from './components/RequitmentDetail';
import JobDetail from './components/JobDetail'
import JobDetail2 from './components/JobDetail2'
import MyPage from './components/MyPage'
import Login from './components/Top';
import FindingID from './components/FindingID';
import FindingPass from './components/FindingPass';


function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Join />} /> {/*회원가입*/} 
        <Route path="/recruit" element={<Recruit />} />  {/*채용정보*/}
        <Route path="/employment" element={<Employment />} />  {/*취업지원*/}
        <Route path="/detail" element={<Detail />} />  {/*지원내역*/}
        <Route path="/FindPass" element={<FindingPass />} />  {/*비밀번호 찾기*/}
        <Route path="/FindId" element={<FindingID />} />  {/*아이디 찾기*/}
        <Route path="/myPage" element={<MyPage />} />  {/*내정보*/}
        <Route path="/detail_1" element={<JobDetail />} />  {/*취업상세_1*/}
        <Route path="/5" element={<JobDetail2 />} />  {/*취업상세_2*/}
        <Route path="/requirement" element={<RequitmentDetail />} />  {/*채용상세*/}
      </Routes>
    </Router>
  )
}
export default App;
