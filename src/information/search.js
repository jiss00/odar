import styled from 'styled-components';
import '../css/join.css';


function Search(props) {
  const input = document.getElementsByClassName('search_input');
  const onclick = () => {
    if(input[0].style.display ==='block'){
      input[0].style.display ='none';
    }
    else{
      input[0].style.display ='block';
    }
  }
  return (
    <>
      <input className='search_input'></input>
        <svg onClick={onclick} className='search' viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.8838 18.9266L13.8109 12.8166C14.9428 11.4609 15.625 9.71687 15.625 7.8125C15.625 3.49781 12.1272 0 7.8125 0C3.49781 0 0 3.49781 0 7.8125C0 12.1272 3.49781 15.625 7.8125 15.625C9.77281 15.625 11.5634 14.9012 12.9353 13.7081L18.9997 19.8106C19.2437 20.0547 19.6397 20.0547 19.8838 19.8106C20.1275 19.5666 20.1275 19.1709 19.8838 18.9266H19.8838ZM7.8125 14.3853C4.1825 14.3853 1.23969 11.4425 1.23969 7.8125C1.23969 4.1825 4.1825 1.23969 7.8125 1.23969C11.4425 1.23969 14.3853 4.1825 14.3853 7.8125C14.3853 11.4425 11.4425 14.3853 7.8125 14.3853Z" fill="#A2C08A" />
        </svg></>
  )
}

export default Search;