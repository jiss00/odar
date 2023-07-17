import styled from 'styled-components';
function Button(props){
  const auth = document.getElementsByClassName("auth");
  const complete = () =>{
    auth[0].style.display = 'block';
  }
  const Button =styled.div`
  box-sizing: border-box;
  background-color: #A2C08A;
  border-radius: 10px;
  gap: 8px;
  cursor: pointer;
  padding-top: 20px;
  font-size: 24px;
  text-align: center;
  font-weight: 700;
  width: 335px;
  height:75px;
  @media screen and (min-width: 1024px) {
    width : ${props.w_width};
  }
  `
  return(
    <Button onClick={complete} >{props.text}</Button>
  )
}
export default Button