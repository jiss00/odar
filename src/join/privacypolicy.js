import React, { useState } from 'react';
import styled from 'styled-components';

const CheckboxAndLinkContainer = styled.div`
  align-items: center;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-right: 50px;
    @media screen and (min-width: 1024px) {
      margin-top: 30px;
      margin-bottom: 30px; 
      margin-right:140px; 
      position: relative;
  }
`;


const Checkbox = styled.input`
  position: relative;
  margin-right: 5px;
  appearance: none;
  width: 20px;
  height: 20px;
  cursor: pointer;
  outline: none;
  align-items: center;
  top:5px;

  &:before {
    content: ${props => (props.checked ? "'\\2714'" : "''")}; /* Unicode checkmark symbol */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #D9D9D9;
    font-size: 20px;
    color: #5B8E31;
    line-height: 1;
    text-align: center;
  }
`;

const PrivacyPolicyLink = styled.a`
  margin-left: 10px;
  font-size: 22px;
  text-decoration: underline;
  color: #5C5C5C;
  cursor: pointer;
  font-family: "Pretendard";
  font-weight: 800;
  @media screen and (min-width: 1024px) {
    font-size: 24px;
}
`;

function PrivacyPolicy(props) {
  const { onChange } = props;
  const [agreed, setAgreed] = useState(false);

  const handleAgreeChange = () => {
    setAgreed(!agreed);
    onChange(!agreed); // onChange를 호출하여 부모 컴포넌트로 체크 상태를 전달

  };

  return (
    <div>
      {/*체크박스와 개인정보 처리 방침 링크 */}
      <CheckboxAndLinkContainer>
        <Checkbox type="checkbox" checked={agreed} onChange={handleAgreeChange} />
        <PrivacyPolicyLink
          href="개인정보처리방침.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          개인정보 제공에 동의합니다.
        </PrivacyPolicyLink>
      </CheckboxAndLinkContainer>
    </div>
  );
}

export default PrivacyPolicy;
