import styled from 'styled-components'


const Container = styled.div`

`

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  text-align: left;
  background-color: #f2f2f2;
  padding: 8px;
`;

const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;


const SearchTable = ({data}) => {
  return (
    <Container>
        <Table>
            <thead>
                <TableRow>
                <TableHeader>Company Name</TableHeader>
                <TableHeader>Primary Text</TableHeader>
                <TableHeader>Headline</TableHeader>
                </TableRow>
            </thead>
            <tbody>
                {
                  data.map((item) =>(
                    <TableRow key={item._id}>
                    <TableData>{item.company.name}</TableData>
                    <TableData>{item.primaryText}</TableData>
                    <TableData>{item.headline}</TableData>
                    </TableRow>
                  ))
                }
            </tbody>
        </Table>
    </Container>
  )
}

export default SearchTable;
