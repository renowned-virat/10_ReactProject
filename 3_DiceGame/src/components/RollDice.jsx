import { useState } from "react"
import styled from "styled-components"

const RollDice = ({curDice,rolldice}) => {
    
   
  return (
    <DiceContainer>
        <div className="dice"
        onClick={rolldice}>
        <img src={`dice_${curDice}.png`} alt="dice1"/>
        </div>
        <p className="text">Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer= styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;
/* max-height: 180px; */
margin-top: -10px;

.text{
    margin-top:-10px;
    font-size:24px;
    
}
.dice{
    cursor: pointer;
}

`