import styled from 'styled-components';
function Recruiting(props){
  const ContentDiv =styled.div`
  font-family: "Pretendard";
  box-sizing: border-box;
  border-radius: 10px;
  border : solid #D9D9D9 1px;
  width : 275px;
  height : 30px;
  font-size: 15px;
  font-weight: 400;
  padding-top : 5px;
  padding-left : 25px;
  background-color: #EDF1D5;
  cursor : pointer;
  overflow-x: auto;
  white-space: nowrap; 
  @media screen and (min-width: 1024px) {
    width : 840px;
    height : 40px;
    padding-left : 30px;
    padding-top : 7px;
    font-size: 18px;
  }
  `
  const TitleDiv = styled.div`
  font-family: "Pretendard";
  box-sizing: border-box;
  border-radius: 10px;
  border : solid #D9D9D9 1px;
  width : 67px;
  height : 31px;
  font-size: 16px;
  font-weight: 400;
  padding-top : 5px;
  padding-left :11px;
  background-color: #5B8E31;
  color : white;
  cursor : pointer;
  z-index:1;
  @media screen and (min-width: 1024px) {
    height : 40px;
    padding-top : 8px;
    font-size: 17px;
    padding-left:9px;

  }
`

  return(
    <div onClick = {props.onClick} className='recruit'>
      <TitleDiv>모집중</TitleDiv>
      <ContentDiv>{props.text}</ContentDiv>
    </div>
  )
}
export default Recruiting;