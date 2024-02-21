import styled from "styled-components"

 export const Button= styled.button`

color :white;
padding: 10px 18px;
background-color: black;
border-radius: 5px;
min-width: 220px;
border: none;
border:  1px solid transparent;
transition: 0.4s background ease-in;
&:hover{
    background-color: white;
    color: black;
    border:  1px black solid;
    transition: 0.3s background ease-in;
    /* animation: 900ms; */
}
`
export const OutlineButton= styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
&:hover{
    background-color: black;
    color: white;
    border: 1px solid transparent ;
    /* transition: 0.3s background ease-in; */
}
`
