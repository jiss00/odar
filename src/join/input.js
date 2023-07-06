import styled from 'styled-components';
function Input(props){
  const StyledInput =styled.input`
  top : ${props.top};
  left :${props.left};
  width :${props.width};
  position: fixed;
  box-sizing: border-box;
  border-radius: 15px;
  border : solid #5B8E31 2px;
  height : 50px;
  font-size: 24px;
  padding-left: 10px;
  font-weight: 600;
  ::placeholder {
    font-family: "Pretendard";
    color: #D9D9D9;
    font-size: 24px;
    font-weight: 600;
    line-height: 20px;
  }
  `;
    function a(){
      return (
        <>
        </>
      )
    }
  return(
    <StyledInput onChange={a} placeholder={props.placeholder}></StyledInput>
  )
}
export default Input;