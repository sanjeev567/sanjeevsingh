import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchTable from "./SearchTable";
import axios from 'axios'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

const Input = styled.input`
  margin: 50px 0;
  border: none;
  outline: 1px solid #ccc;
  padding-left: 15px;
  width: 40%;
  height: 5vh;
  border-radius: 5px;
  font-size: 1.1rem;
  &::placeholder{
    font-size: 1.1rem;
    color: #999;


  }
 
`


const SearchInp = () => {
  const [query, setQeury] = useState("");
  const [data, setData] = useState([])
    
  useEffect(() =>{
    const fetchCompanyData = async() =>{
      const res = await axios.get(`http://localhost:8800/ads/search/?q=${query}`);
      setData(res.data);
    }
    fetchCompanyData();
  }, [query]);

  // console.log(data);
  return (
    <Container>
        <Input placeholder="Search... " onChange={e => setQeury(e.target.value)}/>
       <SearchTable data = {data}/>
    </Container>
  )
}

export default SearchInp;
