import {
  BrowserRouter as Router,
  Routes, //
  Route,  //path의 경로에 렌더링 해줌
  Link //라우터에서 다른 라우터로 새로고침 필요 없이 갈 수 있게 해줌
} from "react-router-dom";



import Join1 from './join/join';
import Recruit from './information/recruit';
import Employment from './information/employment';
import Detail from './information/detail';
import './App.css';
import RequitmentDetail from './components/RequitmentDetail';
import JobDetail from './components/JobDetail'
import MyPage from './components/MyPage'
import FindingID from './components/FindingID';
import FindingPass from './components/FindingPass';
import Join from './component/Join/Join';
import Login from './component/Login/Login';
import Main from './component/Main/Main';
import Inquiry from './component/MyInfo/Inquiry';
import Withdrawal from './component/MyInfo/Withdrawal';
import Modify from './component/MyInfo/Modify';
import Alarm from "./information/alarm";
import Error from "./information/error";
import Test from './components/test';

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} /> {/*메인 화면*/}
        <Route path="/join" element={<Join />} /> {/*회원가입*/}
        <Route path="/join1" element={<Join1 />} /> {/*회원가입2*/} 
        <Route path="/recruit" element={<Recruit />} />  {/*채용정보*/}
        <Route path="/employment" element={<Employment />} />  {/*취업지원*/}
        <Route path="/detail" element={<Detail />} />  {/*지원내역*/}
        <Route path="/findingPass" element={<FindingPass />} />  {/*비밀번호 찾기*/}
        <Route path="/findingId" element={<FindingID />} />  {/*아이디 찾기*/}
        <Route path="/myPage" element={<MyPage />} />  {/*내정보*/}
        <Route path="/jobDetail/:job_edu_id" element={<JobDetail />} />  {/*취업상세*/}
        <Route path="/requitmentDetail/:jobPostingId" element={<RequitmentDetail />} />  {/*채용상세*/}
        <Route path="/login" element={<Login />} /> {/*로그인*/}
        <Route path="/inquiry" element={<Inquiry/>}/> {/*문의하기*/} 
        <Route path="/withdrawal" element={<Withdrawal/>}/> {/*회원탈퇴*/}
        <Route path="/modify" element={<Modify/>}/> {/*내 정보 수정*/}
        <Route path="/alarm" element={<Alarm/>}/> {/*알림창*/}
        <Route path="*" element={<Error/>}/> {/*404 에러 페이지*/ }
        <Route path="/test/:jobPostingId" element={<Test></Test>}/> {/*테스트 페이지*/}
      </Routes>
    </Router>

  )
}
export default App;
