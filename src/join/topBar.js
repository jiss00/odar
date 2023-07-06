import { useState } from 'react';
import { styled } from 'styled-components';

function TopBar(){
  const Container = styled.div`
    position: fixed;
    width : 193px;
    height : 15px;
    border-radius: 15px;
    background-color: #ABABAB80;
    top : 83px;
    left : 99px;
  `
  const Progress = styled.div`
    position: fixed;
    width : ${props => props.width};
    height : 15px;
    border-radius: 15px;
    transition: width 1s;
    background-color: #A2C08A;
    top : 83px;
    left : 99px;
  `  
  const [count,setCount] = useState(0);
  const addCount = () =>{
    if(count ===5){
      setCount(0);
    }
    else{
      setCount(count+1);
    }
  }

  return(
    <div>
      <Container>
        <Progress width={(count/25)*100+"%"}/>
      </Container>
    </div>
  )
}
export default TopBar;