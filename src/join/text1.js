import styled from 'styled-components';
function Text_1(props){
  const StyledText_1 =styled.div`
  color:#5C5C5C;
  font-size: 20px;
  font-weight: 800;
  margin-bottom : 10px;
  margin-top : 40px;
  @media screen and (min-width: 1024px) {
    font-weight : 800;
    font-size : 36px;
    margin-top : 40px;
  `
  return(
    <StyledText_1>{props.text}</StyledText_1>
  )
}
export default Text_1