import styled from 'styled-components';
function Text_1(props){
  const StyledText_1 =styled.div`
  top : ${props.top};
  left :${props.left};
  position: fixed;
  color:#5C5C5C;
  font-size: 20px;
  font-weight: 550;
  `
  return(
    <StyledText_1>{props.text}</StyledText_1>
  )
}
export default Text_1