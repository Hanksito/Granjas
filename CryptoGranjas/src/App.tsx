import { styled } from "styled-components"




[{
  granja:"ceuta",
  propietario:"alejandro",
  direccion:'xxxxxx',
  hosting:[
  { id: 1, model: 'Model A', serialNumber: 'SN001', user: 'User 1', wallet: 'Wallet A', pool: 'Pool X' },
  { id: 2, model: 'Model B', serialNumber: 'SN002', user: 'User 2', wallet: 'Wallet B', pool: 'Pool Y' },
]
},
{
  granja:"ceuta",
  propietario:"alejandro",
  direccion:'xxxxxx',
  maquinas:[
  { id: 1, model: 'Model A', serialNumber: 'SN001', user: 'User 1', wallet: 'Wallet A', pool: 'Pool X' },
  { id: 2, model: 'Model B', serialNumber: 'SN002', user: 'User 2', wallet: 'Wallet B', pool: 'Pool Y' },
]
},
{
  granja:"ceuta",
  propietario:"alejandro",
  direccion:'xxxxxx',
  maquinas:[
  { id: 1, model: 'Model A', serialNumber: 'SN001', user: 'User 1', wallet: 'Wallet A', pool: 'Pool X' },
  { id: 2, model: 'Model B', serialNumber: 'SN002', user: 'User 2', wallet: 'Wallet B', pool: 'Pool Y' },
]
},
{
  granja:"ceuta",
  propietario:"alejandro",
  direccion:'xxxxxx',
  maquinas:[
  { id: 1, model: 'Model A', serialNumber: 'SN001', user: 'User 1', wallet: 'Wallet A', pool: 'Pool X' },
  { id: 2, model: 'Model B', serialNumber: 'SN002', user: 'User 2', wallet: 'Wallet B', pool: 'Pool Y' },
]
}
]




function App() {

  return (
    <AppContainer>
 HOLIII
    </AppContainer>
  )
}
export const AppContainer = styled.div`
  background-color: #f5f5f5;
  color: #333;
  font-family: Arial, sans-serif;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default App
