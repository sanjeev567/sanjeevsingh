import React from 'react'
import styled from 'styled-components'
import SeachTable from '../components/SearchTable'
import SearchInp from '../components/SearchInp'

const Container = styled.div`


`


const Search = () => {
  return (
    <Container>
        <SearchInp/>
        {/* <SeachTable /> */}
    </Container>
  )
}

export default Search
