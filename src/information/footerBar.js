import styled from 'styled-components';
import '../css/join.css';
import { useState,useEffect } from 'react';


const Div = styled.div`
  color: black;
  display: grid;
  grid-template-columns: 30px 30px 30px 30px 30px 30px 30px;
  width: 270px;
  height: 20px;
  margin-left: 120px;
  margin-top: 90px;
  font-weight: 550;
  font-size: 22px;
  grid-gap: 1px;
  cursor: pointer;
  @media screen and (min-width: 1024px) {
    grid-template-columns: 30px 30px 30px 30px 30px 30px 30px;
    padding-left: 310px;
    margin-left: 90px;

  }
`;

function Footer({status, page, setPage,totalpage }) {
  const [totalPages,setTotalPages] = useState(0); // 총 페이지 크기
  const [displayPages,setDisplayPage] = useState(5); // 한 번에 보여질 페이지 개수
  //totalpages : 전체 페이지 수 totalpage : 한 페이지에 보여줄 정보 개수
  useEffect(() => {
    // status에 따라 totalPages를 변경해주는 로직
    if (status === 'recruit') {
      setDisplayPage(5);
      setTotalPages(28);
    }
    else if(status ==='search'){
      setTotalPages(totalpage);
      setDisplayPage(totalpage < 5 ? totalpage : 5);
    }
    else {
      setDisplayPage(5);
      setTotalPages(6);
    }
  }, [status,totalpage]); // status가 변경될 때마다 useEffect가 호출되도록 설정

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
    
    if (totalPages === 1) {
      // totalPages가 1인 경우에는 1만 표시하도록 처리합니다.
      return (
        <div
          style={{
            color: current === 1 ? '#5B8E31' : 'black',
            fontSize: current === 1 ? '21px' : '21px',
          }}
          onClick={() => onClick(1)}
        >
          1
        </div>
      );
    }
  
    const middlePage = Math.floor(displayPages / 2);
    const startIdx = Math.max(0, current - middlePage - 1); // 시작 페이지 인덱스
    const endIdx = Math.min(pageNumbers.length - 1, startIdx + displayPages - 1); // 끝 페이지 인덱스
  
    const visiblePages = pageNumbers.slice(startIdx, endIdx + 1);
  
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
