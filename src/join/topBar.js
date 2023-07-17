import { useState } from 'react';
import styled from 'styled-components';

function TopBar(props){
  const Container = styled.div`
    width : 193px;
    height : 15px;
    border-radius: 15px;
    background-color: #ABABAB80;
    margin-left:20%;
    @media screen and (min-width: 1024px) {
      width : 915px;
      margin-left:0%;
    }

  `
  const Progress = styled.div`
    width : ${props => props.width};
    height : 15px;
    border-radius: 15px;
    transition: width 1s;
    background-color: #A2C08A;

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