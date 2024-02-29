import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchResult from './components/SearchResults/SearchResult';
// import React from 'react';

export const BASE_URL = "http://localhost:9000";



const App = () => {

  const [data, setData]= useState(null);
  const[loading,setLoading]=useState(false);
  const[error, setError]=useState(null);
  const[filteredData, setFilteredData]=useState(null);
  const[selectedButton, setSetlectedButton]=useState("all");

  useEffect(()=>{
    const fetchFoodData= async()=>{
      setLoading(true);
      try {
        const response= await fetch(BASE_URL);
      const json= await response.json();
      setData(json);
      setFilteredData(json);
      setLoading(false);
  
      } catch (error) {
        setError("unable to fetch data")
      }
    }
    fetchFoodData();
    
  },[]);


  const searchFood=(e)=>{
    const searchValue=e.target.value;
    console.log(searchValue);
    if(searchValue=="")
    setFilteredData(null);

    const filter=data?.filter((food)=>
    food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter)
  }
  
  const filterFood=(type)=>{
    if(type=="all"){
      setFilteredData(data);
      setSetlectedButton("all");
      return 
    }

    const filter=data?.filter((food)=>
    food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSetlectedButton(type);
  }


    if(error)return<div>{error}</div>;
    if(loading)return <div>Loading</div>
  


  return (
  <>
    <Container>
    <TopContainer>
      <div className="logo">
        <img src="/logo.svg" height={100} alt="logo"/>
      </div>

      <div className="search">
        <input onChange={searchFood}
        placeholder="Search Food"/>
      </div>
    </TopContainer>

    <FilterContainer>
      <Button isSlected={selectedButton=="all"}onClick={()=>filterFood("all")}>All</Button>
      <Button isSlected={selectedButton=="breakfast"}onClick={()=>filterFood("breakfast")}>BreakFast</Button>
      <Button isSlected={selectedButton=="lunch"}onClick={()=>filterFood("lunch")}>Lunch</Button>
      <Button isSlected={selectedButton=="dinner"}onClick={()=>filterFood("dinner")}>Dinner</Button>
    </FilterContainer>

    

    
  </Container>
  <SearchResult data={filteredData}/>
  </>
  );
};

export default App;


export const Container=styled.div`
max-width: 1200px;
margin: 0 auto;
`;


const TopContainer=styled.section`
height: 140px;
display: flex;
justify-content: space-between;
padding: 10px ;
align-items: center;
.search{
  input{
    background-color: transparent;
    font-size: 16px;
    padding: 0 10px;
    border: 1px solid red;
    color:white;
    border-radius: 5px;
    height:40px;
    &::placeholder{
      color:white;
    }
  }
}
@media(0<width<600px){
  flex-direction: column;
  height: 180px;
}

`;
const FilterContainer=styled.section`
display: flex;
justify-content: center;
gap: 12px;
padding-bottom:20px;



`
export const Button= styled.button`
background : ${({isSlected})=>(isSlected ?"#f22f2f" : "#ff4343")};
outline : 1px solid ${({isSlected})=>(isSlected ?"white" : "#ff4343")};

border: none;
border-radius: 5px;
padding: 6px 12px;
color: white;
cursor: pointer;
&:hover{
  background-color: #f22f2f;
}

`;


