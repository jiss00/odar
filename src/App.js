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



function App(){
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Join/>}/>
        <Route path = "/recruit" element={<Recruit/>}/>
        <Route path = "/employment" element={<Employment/>}/>
        <Route path = "/detail" element={<Detail/>}/>
      </Routes>
    </Router>
  )
}

export default App;
