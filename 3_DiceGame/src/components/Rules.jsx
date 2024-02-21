import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice {" "}</p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer=styled.div`
background-color: #FBF1F1;
padding: 20px;
align-items: center;
 max-width: 794px;
 max-height: 208px; 
margin: 0 auto;
border-radius:5px;

.h2{
    font-size: 24px;
    line-height: 36px;
}
.text{
    font-size: 16px;
    line-height: 24px;
}
`
