import styled from "styled-components";
import { Button } from "../styled/Button";

function StartGame({toggle}) {
  return (
    <Container>
        <div>
        <img src='dices_1.png'alt='dice1'/>
        </div>
        
        <div className="content">
        <h1 >DICE GAME</h1>
        <Button
         onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
max-width: 1180px;
display: flex;
margin: 0 auto;
height: 100vh;
align-items: center;
gap: 80px;

.content h1{
    font-size: 96px;
    font-weight: 700;
    white-space: nowrap;
    
     &:hover{

     }
  

 }

`;

