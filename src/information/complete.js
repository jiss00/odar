import styled from 'styled-components';
function Complete(props){
  const ContentDiv =styled.div`
  box-sizing: border-box;
  border-radius: 10px;
  border : solid #D9D9D9 1px;
  width : 275px;
  height : 30px;
  font-size: 15px;
  font-weight: 400;
  padding-top : 5px;
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
const TitleDiv = styled.div`
box-sizing: border-box;
border-radius: 10px;
border : solid #D9D9D9 1px;
width : 67px;
height : 31px;
font-size: 15px;
font-weight: 400;
padding-top : 5px;
padding-left : 6px;
background-color: #D9D9D9;
color : white;
cursor : pointer;
z-index:1;
@media screen and (min-width: 1024px) {
  height : 40px;
  padding-top : 7px;
  padding-left:3px;
  font-size: 17px;

}
`
const formatText = (text) => {
  return text.replace('(마감)', '');
};
  return(
    <div onClick = {props.onClick} className='recruit'>
      <TitleDiv>모집완료</TitleDiv>      
      <ContentDiv>{formatText(props.text)}</ContentDiv>
    </div>
  )
}
export default Complete;