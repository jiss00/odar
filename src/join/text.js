import '../css/join.css';
import styled from "styled-components";

function Text(props){
  const StyledText = styled.div`
  color: #5C5C5C;
  font-weight: 800;
  font-size: 32px;
  margin: 0 auto;
  text-align:center;
  @media screen and (min-width: 1024px) {
    font-size : 52px;
    font-weight: 800;
    `;
  return(
    <StyledText>{props.text}</StyledText>
  )
}
export default Text