import styled from 'styled-components';

function Sort(props){
  const Div = styled.div`
  box-sizing: border-box;
  padding-top : 4px;
  width : 98px;
  height : 30px;
  color: #5C5C5C;
  font-weight: 400;
  font-size: 15px;
  border-radius : 20px;
  border : solid #5B8E31 1px;
  cursor: pointer;
  padding-left:10px;
  @media screen and (min-width: 1024px){
    font-size:18px;
    padding-top:5px;
    width : 104px;
    height : 40px; 
  } 
  `  
  const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-top: 15px solid #A2C08A;
  border-left: 7.5px solid transparent;
  border-right: 7.5px solid transparent;
  box-sizing: border-box;
  margin-top:7px;
  margin-left:4px;
  @media screen and (min-width: 1024px){
    margin-top:12px;
    margin-left:10px;
  } 
  `
  return(
    <div className='sort_1'>
      <Div>{props.text}</Div>
      <Triangle></Triangle>
    </div>
  )
}
export default Sort;
