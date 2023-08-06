import styled from 'styled-components';
function Recruiting(props){
  const MainDiv =styled.div`
    box-sizing: border-box;
    border-radius: 10px;
    border : solid #D9D9D9 1px;
    width : 310px;
    height : 30px;
    font-size: 15px;
    font-weight: 400;
    padding-top : 4px;
    padding-left : 25px;
    background-color: #EDF1D5;
    cursor : pointer;
    @media screen and (min-width: 1024px) {
      width : 840px;
      height : 40px;
      position:absolute
      padding-left : 30px;
      padding-top : 7px;
      font-size: 18px;
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
  padding-top : 3px;
  padding-left : 13px;
  background-color: #5B8E31;
  color : white;
  cursor : pointer;
  z-index:1;
  @media screen and (min-width: 1024px) {
    height : 40px;
    padding-top : 7px;
    font-size: 17px;
    padding-left:12px;

  }
`

  return(
    <div onClick = {props.onClick} className='recruit'>
      <SubDiv>모집중</SubDiv>
      <MainDiv>{props.text}</MainDiv>
    </div>
  )
}
export default Recruiting;