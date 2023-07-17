import styled from 'styled-components';
function Recruiting(props){
  const MainDiv =styled.div`
    box-sizing: border-box;
    border-radius: 10px;
    border : solid #D9D9D9 1px;
    width : 260px;
    height : 30px;
    font-size: 15px;
    font-weight: 400;
    padding-top : 4px;
    padding-left : 30px;
    background-color: #EDF1D5;
    cursor : pointer;
    @media screen and (min-width: 1024px) {
      width : 840px;
      height : 40px;
      position:absolute
      padding-left : 30px;
      padding-top : 6px;
      font-size: 16px;
    }
  `
  const SubDiv = styled.div`
  box-sizing: border-box;
  border-radius: 10px;
  border : solid #D9D9D9 1px;
  width : 72px;
  height : 31px;
  font-size: 16px;
  font-weight: 400;
  padding-top : 4px;
  padding-left : 10px;
  background-color: #5B8E31;
  color : white;
  cursor : pointer;
  z-index:1;
  @media screen and (min-width: 1024px) {
    height : 40px;
    padding-top : 6px;
    font-size: 16px;
    padding-left:12px;

  }
`
  return(
    <div className='recruit'onClick={props.func}>
      <SubDiv>모집중</SubDiv>
      <MainDiv>{props.text}</MainDiv>
    </div>
  )
}
export default Recruiting;