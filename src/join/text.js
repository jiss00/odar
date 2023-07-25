import '../css/join.css';
import styled from "styled-components";

function Text(props){
  const StyledText = styled.div`
  color: #5C5C5C;
  font-weight: 550;
  font-size: 27px;
  margin: 0 auto;
  text-align:center;
  @media screen and (min-width: 1024px) {
    font-size : 52px;
    font-weight: 800;
    margin-top:100px;  
    `;
  return(
    <StyledText>{props.text}</StyledText>
  )
}
export default Text