import styled from 'styled-components';
function Complete(props){
  const MainDiv =styled.div`
  top : ${props.top};
  left : 30px;
  position: fixed;
  box-sizing: border-box;
  border-radius: 10px;
  border : solid #D9D9D9 1px;
  width : 330px;
  height : 30px;
  font-size: 15px;
  font-weight: 400;
  padding-top : 4px;
  padding-left : 100px;
  background-color: white;
  cursor : pointer;
`
const SubDiv = styled.div`
top : ${props.top};
left : 30px;
position: fixed;
box-sizing: border-box;
border-radius: 10px;
border : solid #D9D9D9 1px;
width : 72px;
height : 31px;
font-size: 15px;
font-weight: 400;
padding-top : 4px;
padding-left : 5px;
background-color: #D9D9D9;
color : white;
cursor : pointer;
`
  return(
    <div>
      <MainDiv>{props.text}</MainDiv>
      <SubDiv>모집완료</SubDiv>
    </div>
  )
}
export default Complete;