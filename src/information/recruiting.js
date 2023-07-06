import styled from 'styled-components';
function Recruiting(props){
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
    background-color: #EDF1D5;
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
  font-size: 16px;
  font-weight: 400;
  padding-top : 4px;
  padding-left : 10px;
  background-color: #5B8E31;
  color : white;
  cursor : pointer;
`
  return(
    <div>
      <MainDiv>{props.text}</MainDiv>
      <SubDiv>모집중</SubDiv>

    </div>
  )
}
export default Recruiting;