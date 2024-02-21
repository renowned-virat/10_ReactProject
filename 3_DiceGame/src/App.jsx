import styled from "styled-components";
import StartGame from "./components/StartGame"
import { useState } from "react";
import GamePlay from "./components/GamePlay";

const Button  = styled.button`
background-color: black;
color:white;
padding:10px;
`;

function App() {
  const [isGameOn, setGameOn]=useState(false); 

  const togglePlay=()=>{
  setGameOn( (prev) => !prev );
  };

  return (
    <>
    { isGameOn ? <GamePlay/> : <StartGame toggle = {togglePlay}/>}
    </>
  );
}

export default App
