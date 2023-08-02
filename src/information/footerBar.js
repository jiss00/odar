import styled from 'styled-components';
import '../css/join.css';
import { useState,useEffect } from 'react';

const Div = styled.div`
  color: black;
  display: grid;
  grid-template-columns: 30px 30px 30px 30px 30px 30px 30px;
  width: 270px;
  height: 20px;
  margin-left: 90px;
  margin-top: 90px;
  font-weight: 550;
  font-size: 22px;
  grid-gap: 1px;
  cursor: pointer;
  @media screen and (min-width: 1024px) {
    grid-template-columns: 30px 30px 30px 30px 30px 30px 30px;
    padding-left: 300px;
  }
`;

function Footer({status, page, setPage }) {
  const [totalPages,setTotalPages] = useState(0); // 총 페이지 크기
  useEffect(() => {
    // status에 따라 totalPages를 변경해주는 로직
    if (status === 'recruit') {
      setTotalPages(25);
    } else {
      setTotalPages(6);
    }
  }, [status]); // status가 변경될 때마다 useEffect가 호출되도록 설정

  const displayPages = 5; // 한 번에 보여질 페이지 개수
  const [current, setCurrent] = useState(1);

  const onClick = (pageNumber) => {
    setCurrent(pageNumber);
    setPage(pageNumber);
  };

  const onPrevClick = () => {
    if (current > 1) {
      setCurrent((prev) => Math.max(prev - displayPages, 1));
      setPage((prev) => Math.max(prev - displayPages, 1));
    }
  };

  const onNextClick = () => {
    if (current < totalPages) {
      setCurrent((prev) => Math.min(prev + displayPages, totalPages));
      setPage((prev) => Math.min(prev + displayPages, totalPages));
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    const startIdx = Math.floor((current - 1) / displayPages) * displayPages;
    const visiblePages = pageNumbers.slice(startIdx, startIdx + displayPages);

    return visiblePages.map((pageNumber) => (
      <div
        key={pageNumber}
        style={{
          color: current === pageNumber ? '#5B8E31' : 'black',
          fontSize: current === pageNumber ? '21px' : '21px',
        }}
        onClick={() => onClick(pageNumber)}
      >
        {pageNumber}
      </div>
    ));
  };

  return (
    <div>
      <Div>
        <div onClick={onPrevClick}>{'<'}</div>
        {renderPageNumbers()}
        <div onClick={onNextClick}>{'>'}</div>
      </Div>
    </div>
  );
}

export default Footer;
