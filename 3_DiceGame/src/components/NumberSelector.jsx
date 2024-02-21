import { useState } from "react"
import styled from "styled-components"

const NumberSelector = ({error,selectedNum,setSelectedNum}) => {

    const arrNum=[1,2,3,4,5,6]

    // console.log(selectedNum)

  return (
    <Selector>
    <p className="error">{error}</p>
    
    <div className="flex">
    
        {arrNum.map((value,i)=>(
        <Box 
        
        isselected = {value === selectedNum}
            key={i}
        
        onClick={()=>setSelectedNum(value)}
        >{value}
        </Box>
        
        ))}
        
    </div>
    <p>Select Number</p>
    </Selector>
  )
}

export default NumberSelector

const Selector=styled.main`
display: flex;
/* margin-top: 30px; */
flex-direction: column;
align-items:end;
/* align-content:end; */

.error{
  color: red;
}
.flex{
    display: flex;
    gap: 24px;
}
.p{
    font-size: 24px;
    font-weight: 700px;
    
};`


const Box = styled.div`
  height: 62px;
  width: 62px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (!props.isselected ? "black" : "white")};
`;

