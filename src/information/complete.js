import styled from 'styled-components';
function Complete(props){
  const MainDiv =styled.div`
  box-sizing: border-box;
  border-radius: 10px;
  border : solid #D9D9D9 1px;
  width : 290px;
  height : 30px;
  font-size: 15px;
  font-weight: 400;
  padding-top : 4px;
  padding-left : 25px;
  padding-right : 25px;
  background-color: white;
  overflow-x: auto;
  white-space: nowrap; 
  cursor : pointer;    
  @media screen and (min-width: 1024px) {
    width : 840px;
    height : 40px;
    position:absolute
    padding-left : 30px;
    padding-top : 7px;
    font-size: 18px;
    padding-right : 25px;
  }
`
const SubDiv = styled.div`
box-sizing: border-box;
border-radius: 10px;
border : solid #D9D9D9 1px;
width : 72px;
height : 31px;
font-size: 15px;
font-weight: 400;
padding-top : 4px;
padding-left : 8px;
background-color: #D9D9D9;
color : white;
cursor : pointer;
z-index:1;
@media screen and (min-width: 1024px) {
  height : 40px;
  padding-top : 6px;
  padding-left:5px;
  font-size: 17px;

}
`
const formatText = (text) => {
  return text.replace('(마감)', '');
};
  return(
    <div onClick = {props.onClick} className='recruit'>
      <SubDiv>모집완료</SubDiv>      
      <MainDiv>{formatText(props.text)}</MainDiv>
    </div>
  )
}
export default Complete;