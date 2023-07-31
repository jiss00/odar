import styled from 'styled-components';
import '../css/join.css';
import { useState } from 'react';

const Div = styled.div`
  color: black;
  display: grid;
  grid-template-columns: 25px 25px 25px 25px 25px 25px 25px;
  width: 270px;
  height: 20px;
  margin-left: 100px;
  margin-top: 90px;
  font-weight: 550;
  font-size: 22px;
  grid-gap: 1px;
  cursor: pointer;
  @media screen and (min-width: 1024px) {
    padding-left: 280px;
  }
`;

function Footer({ page, setPage }) {
  const [current, setCurrent] = useState(1);

  const onClick = (pageNumber) => {
    setCurrent(pageNumber); // 선택한 페이지 번호를 저장하는 상태를 업데이트
    setPage(pageNumber); // 선택한 페이지 번호로 'page' 상태를 
  };

  return (
    <div>
      <Div>
        <div>{'<'}</div>
        {/* 1부터 5까지의 페이지 번호를 생성하여 렌더링 */}
        {Array.from({ length: 5 }, (_, index) => (
          <div
            key={index}
            style={{
              color: current === index + 1 ? '#5B8E31' : 'black',
              fontSize: current === index + 1 ? '22px' : '22px', // 선택한 페이지 번호는 더 큰 폰트 사이즈로 표시
            }}
            onClick={() => onClick(index + 1)}
          >
            {index + 1}
          </div>
        ))}
        <div>{'>'}</div>
      </Div>
    </div>
  );
}

export default Footer;
