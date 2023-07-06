import '../css/join.css';
import styled from "styled-components";

function Text(props){
  const StyledText = styled.div`
  position: fixed;
  top : 129px;
  left: 140px;
  color: #5C5C5C;
  font-weight: 550;
  font-size: 27px;
  `;
  return(
    <StyledText>{props.text}</StyledText>
  )
}
export default Text