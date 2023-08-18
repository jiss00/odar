import styled from 'styled-components';
import '../css/join.css';
import { useState, useEffect } from 'react';


const Div = styled.div`
  color: black;
  display: grid;
  grid-template-columns: 30px 30px 30px 30px 30px 30px 30px;
  width: 270px;
  height: 20px;
  margin-top: 90px;
  font-weight: 550;
  font-size: 22px;
  grid-gap: 1px;
  cursor: pointer;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  margin:0 auto;
  top : 640px;
  padding-left: ${props => {
    if (props.displayPages === 5) {
      return '70px';
    } else if (props.displayPages === 4) {
      return '100px';
    }
    else if (props.displayPages === 3) {
      return '140px';
    }
    else if (props.displayPages === 2) {
      return '170px';
    } else if (props.displayPages === 1) {
      return '200px';
    } else if (props.displayPages === 0) {
      return '220px'
    }
  }};  
    @media screen and (min-width: 1024px) {
    padding-left: padding-left: ${props => {
    if (props.displayPages === 5) {
      return '330px';
    } else if (props.displayPages === 4) {
      return '340px';
    }
    else if (props.displayPages === 3) {
      return '370px';
    }
    else if (props.displayPages === 2) {
      return '400px';
    } else if (props.displayPages === 1) {
      return '430px';
    }
  }};
    top : 960px;
    padding-bottom:30px;
  }
`;
function Footer({ setRecruitPage, totalpage, current, setCurrent, status, page, setSearchPage, setPage, totalSearchPages }) {
  const [totalPages, setTotalPages] = useState(0);
  const [displayPages, setDisplayPage] = useState(5);

  useEffect(() => {
    if (status === 'recruit') {
      setDisplayPage(5);
      setTotalPages(totalpage);
    } else if (status === 'search') {
      setTotalPages(totalSearchPages);
      setDisplayPage(totalSearchPages < 5 ? totalSearchPages : 5);
    } else if (status === 'recruiting') {
      setTotalPages(totalSearchPages);
      setDisplayPage(totalSearchPages < 5 ? totalSearchPages : 5);
    }else if(status ==='distance'){
      setTotalPages(1);
      setDisplayPage(1);
    }
     else {
      setDisplayPage(5);
      setTotalPages(totalpage);
    }
  }, [status, totalSearchPages]);
  const onClick = async (pageNumber) => {
    if (status === 'recruit') {
      setPage(pageNumber);
    } else if (status === 'search') {
      setSearchPage(pageNumber);
    }
    else if (status === 'recruiting') {
      setRecruitPage(pageNumber);
    }
    else {
      setPage(pageNumber);
    }
    setCurrent(pageNumber);
  };


  const onPrevClick = () => {
    if (current > 1) {
      setCurrent((prev) => Math.max(prev - displayPages, 1));

      if (status === 'recruit') {
        setPage((prev) => Math.max(prev - displayPages, 1));
      } else if (status === 'search') {
        setSearchPage((prev) => Math.max(prev - displayPages, 1));
      } else if (status === 'recruiting') {
        setRecruitPage((prev) => Math.max(prev - displayPages, 1));
      }
      else {
        setPage((prev) => Math.max(prev - displayPages, 1));
      }

    }
  };

  const onNextClick = () => {
    if (current < totalPages) {
      setCurrent((prev) => Math.min(prev + displayPages, totalPages));
      if (status === 'recruit') {
        setPage((prev) => Math.min(prev + displayPages, totalPages));
      } else if (status === 'search') {
        setSearchPage((prev) => Math.min(prev + displayPages, totalPages));
      } else if (status === 'recruiting') {
        setRecruitPage((prev) => Math.min(prev + displayPages, totalPages));
      }
      else {
        setPage((prev) => Math.min(prev + displayPages, totalPages));
      }

    }
  };
  const renderPageNumbers = () => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);


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
    <Div displayPages={displayPages}>
      <div onClick={onPrevClick}>{'<'}</div>
      {renderPageNumbers()}
      <div onClick={onNextClick}>{'>'}</div>
      
    </Div>
  );
}

export default Footer;

