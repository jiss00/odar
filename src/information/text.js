import styled from 'styled-components';

function Text(props){
  const Div = styled.div`
  left: 140px;
  color: #A2C08A;
  padding-left : 90px;
  padding-top : 20px;
  font-weight: 800;
  font-size: 32px;  
  @media screen and (min-width: 1024px){
    margin-bottom: 20px;
    font-size :50px;  
    padding-left : 300px;

    }
  `
  return(
    <Div>{props.text}</Div>
  )
}
export default Text;