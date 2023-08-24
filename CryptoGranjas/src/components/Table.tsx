import styled from 'styled-components';

interface TableDataItem {
    id: number;
    model: string;
    serialNumber: string;
    user: string;
    wallet: string;
    pool: string;
  }

  interface TableProps {
    data: TableDataItem[];
  }

const Table: React.FC<TableProps> = ({data}) => {
  return (
    
        <TableContainer> 
          <thead>
            <tr>
              <TableHeader>ID</TableHeader>
              <TableHeader>Model</TableHeader>
              <TableHeader>Serial Number</TableHeader>
              <TableHeader>User</TableHeader>
              <TableHeader>Wallet</TableHeader>
              <TableHeader>Pool</TableHeader>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <TableData>{item.id}</TableData>
                <TableData>{item.model}</TableData>
                <TableData>{item.serialNumber}</TableData>
                <TableData>{item.user}</TableData>
                <TableData>{item.wallet}</TableData>
                <TableData>{item.pool}</TableData>
              </tr>
            ))}
          </tbody>
        </TableContainer>
  )
}

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  border: 1px solid #ccc;
  font-family: Arial, sans-serif;
`;

export const TableHeader = styled.th`
  background-color: #f5f5f5;
  padding: 10px;
  border: 1px solid #ccc;
`;

export const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

export default Table