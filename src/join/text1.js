import styled from 'styled-components';
function Text_1(props){
  const StyledText_1 =styled.div`
  color:#5C5C5C;
  font-size: 24px;
  font-weight: 800;
  margin-bottom : 10px;
  margin-top : 40px;
  text-align: left;
  margin-left:auto;
  margin-right:auto;

  @media screen and (min-width: 1024px) {
    font-size : 36px;
    align-items: center;
    justify-content: center;
    margin-left:26%;
  `
  return(
    <StyledText_1>{props.text}</StyledText_1>
  )
}
export default Text_1