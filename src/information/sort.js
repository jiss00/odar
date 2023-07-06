import styled from 'styled-components';

function Sort(props){
  const Div = styled.div`
  box-sizing: border-box;
  padding-left : ${props.padding};
  padding-top : 4px;
  position: fixed;
  width : 98px;
  height : 30px;
  top : 149px;
  left : ${props.left};
  color: #5C5C5C;
  font-weight: 400;
  font-size: 15px;
  border-radius : 20px;
  border : solid #5B8E31 1px;
  cursor: pointer;

  `  
  const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-top: 15px solid #A2C08A;
  border-left: 7.5px solid transparent;
  border-right: 7.5px solid transparent;
  top : 159px;
  left : ${props.left1};
  position : fixed;
  `
  return(
    <div>
      <Triangle></Triangle>
      <Div>{props.text}</Div>
    </div>
  )
}
export default Sort;
