import styled from 'styled-components';

function Text(props){
  const Div = styled.div`
  position: fixed;
  top : 88px;
  left : 136px;
  left: 140px;
  color: #A2C08A;
  font-weight: 800;
  font-size: 32px;

  `
  return(
    <Div>{props.text}</Div>
  )
}
export default Text;