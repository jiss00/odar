import '../../App';
import React ,{ useState } from 'react';
import Input_pwcheck from './Input/Input_pwcheck';
import Input_pw from './Input/Input_pw';
import Input_id from './Input/Input_id';
import Text from './Text';
import ProgressBar from './ProgressBar';
import InputLongButton from './Input/InputLongButton';
import BigText from './BigText';

function Join(){
    
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [validPasswordCheck, setValidPasswordCheck] = useState(false);
  
    const handleEmailChange = (isValid) => {
      setValidEmail(isValid);
    };
  
    const handlePasswordChange = (isValid) => {
      setValidPassword(isValid);
    };
  
    const handlePasswordCheckChange = (isValid) => {
      setValidPasswordCheck(isValid);
    };

    return(
        <>
        <div>

        <ProgressBar validEmail={validEmail} validPassword={validPassword} validPasswordCheck={validPasswordCheck} />

            <div className="join__box"> 
                <BigText fontSize="32px">회원가입</BigText>
            </div>
            
            <div className="id__box"><Text width="63px">아이디</Text></div>
            <Input_id type="email" placeholder=" 아이디를 입력해주세요." onChange={handleEmailChange} />

            <div className="pw__box"><Text width="83px">비밀번호</Text></div>
            <Input_pw type="password" placeholder=" 비밀번호를 입력해주세요." onChange={handlePasswordChange} />


            <div className="pwcheck__box"><Text width="130px">비밀번호 확인</Text></div>
            <Input_pwcheck type="password" placeholder=" 비밀번호를 확인해주세요." onChange={handlePasswordCheckChange} />

        <InputLongButton validEmail={validEmail}
          validPassword={validPassword}
          validPasswordCheck={validPasswordCheck}/>
        </div>
        </>  
    )
}

export default Join