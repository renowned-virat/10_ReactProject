import styled from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import { useState } from 'react'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {
    const [score , setScore]=useState(0);
    const [selectedNum, setSelectedNum]=useState();
    const [curDice, setCurDice]=useState(1);
    const [error, setError]=useState("");
    const [showRules, setShowRules]= useState(false);

    const generateRandomNumber=(min, max)=>{
        return Math.floor(Math.random()*(max-min)+min);
    }

    const rolldice=()=>{
        setError("");
        if(!selectedNum){
            setError("You have not selected any number")
            return ;
        }
        
        const randomNumber= generateRandomNumber(1,7);
        setCurDice((prev)=>randomNumber);
        
        if(selectedNum==randomNumber){
            setScore(prev=>prev+randomNumber)
        }
        else{setScore(prev=>prev-2)}
        setSelectedNum(undefined);
    };
    const resetScore=()=>{
        setScore(0);
    }
    

  return (
    <MainContainer>
        <div className='topsection'>
            <TotalScore score={score}/>
            <NumberSelector error={error}
            selectedNum={selectedNum} 
            setSelectedNum={setSelectedNum}/>
        </div>
        <RollDice curDice={curDice} rolldice={rolldice}/>
        <div className='btns'>
            <OutlineButton onClick={resetScore}>Reset</OutlineButton>
            <Button onClick={()=>setShowRules(prev=>!prev)}> {showRules ? "Hide ": "Show "}Rules</Button>
        </div>
        {showRules && <Rules/>}
    </MainContainer>
    
   
  )
}

export default GamePlay

const MainContainer = styled.main`
margin-top: -20px;
.topsection{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.btns{
    margin-top: -10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-bottom:8px;

}

`;