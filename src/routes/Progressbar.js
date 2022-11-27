import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Nweet from '../components/Nweet';

const Progressbar = ({msgCount}) => {

//   const [count, setCount] = useState(0);
const [nweet, setNweet] = useState("");
const [count, setCount] = useState();

const getTodayCount = () => {
  setCount(5);
}

useEffect(() => {
  setCount(msgCount);
  getTodayCount();
}, []);


//   function add_count(){
//     if (count === 5){
//       setCount(0);
//     }
//     else{
//       setCount(count + 1);
//     }
//   }

  return (
    <>  
        <CountContainer>
            <h1>오늘의 편지 (</h1>
            <h1 style={{color: "#AF2010"}}>{msgCount}</h1>
            <h1>/{count})</h1>
        </CountContainer>
        <Container>
        {/*%로 부모넓이의 1/5 씩 넓어짐*/}
        <Progress width={(msgCount/count)*100 + "%"}/>
        </Container>
    </>
    
  );
}

export default Progressbar;

const Container = styled.div`
  margin-top: 5px;
  background-color: #D9D9D9;
  width: 109px;
  height: 6px;
  display: flex;
  align-items: center;
  border-radius: 100px;
`;

const Progress = styled.div`
  background-color: #AF2010;
  width: ${props => props.width};
  height: 100%;
  transition: width 1s;
  border-radius: 20px;
`;

const CountContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 69px;
`