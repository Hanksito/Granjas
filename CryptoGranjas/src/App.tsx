import { styled } from "styled-components"
import Card from "./components/Card"




const pruebas = [
  {
    id: 1,
    img:"https://criptotendencia.com/wp-content/uploads/2022/02/Resumen-semanal-de-noticias-sobre-mineria-de-Bitcoin.jpg",
    granja:"ceuta",
    propietario:"alejandro",
    direccion:'xxxxxx',
    Machines:[
    { id: 1, model: 'Model A', serialNumber: 'SN001', user: 'User 1', wallet: 'Wallet A', pool: 'Pool X' },
    { id: 2, model: 'Model B', serialNumber: 'SN00asdad2', user: 'Usasder 2', wallet: 'Wallet B', pool: 'Pool Y' },]
  },  {
    id: 2,
    img:"https://criptotendencia.com/wp-content/uploads/2022/02/Resumen-semanal-de-noticias-sobre-mineria-de-Bitcoin.jpg",
    granja:"ceuta",
    propietario:"alejandro",
    direccion:'xxxxxx',
    Machines:[
    { id: 1, model: 'Model A', serialNumber: 'SNasdas001', user: 'Useasdar 1', wallet: 'Wallet A', pool: 'Pool X' },
    { id: 2, model: 'Modasdasel B', serialNumber: 'SN0asd02', user: 'User 2', wallet: 'Wallet B', pool: 'Pool Y' },]
  },  {
    id: 3,
    img:"https://criptotendencia.com/wp-content/uploads/2022/02/Resumen-semanal-de-noticias-sobre-mineria-de-Bitcoin.jpg",
    granja:"ceuta",
    propietario:"alejandro",
    direccion:'xxxxxx',
    Machines:[
    { id: 1, model: 'Modeasdal A', serialNumber: 'SN001', user: 'User 1', wallet: 'Wallet A', pool: 'Pool X' },
    { id: 2, model: 'Masdasdodel B', serialNumber: 'SN002', user: 'User 2', wallet: 'Wallet B', pool: 'Pool Y' },]
  },  {
    id: 4,
    img:"https://criptotendencia.com/wp-content/uploads/2022/02/Resumen-semanal-de-noticias-sobre-mineria-de-Bitcoin.jpg",
    granja:"ceuta",
    propietario:"alejandro",
    direccion:'xxxxxx',
    Machines:[
    { id: 1, model: 'Model c', serialNumber: 'SNasdas001', user: 'User 1', wallet: 'Wallet A', pool: 'Pool X' },
    { id: 2, model: 'Model d', serialNumber: 'SN002', user: 'User 2', wallet: 'Wallet B', pool: 'Pool Y' },]
  },  {
    id: 5,
    img:"",
    granja:"ceuta",
    propietario:"alejandro",
    direccion:'xxxxxx',
    Machines:[
    { id: 1, model: 'Model f', serialNumber: 'SN0sadasd01', user: 'User 1', wallet: 'Wallet A', pool: 'Pool X' },
    { id: 2, model: 'Model h', serialNumber: 'SN00asdasd2', user: 'User 2', wallet: 'Wallet B', pool: 'Pool Y' },]
  }
]




function App() {

  return (
    <AppContainer >
      <VideoBackground autoPlay loop muted>
      <source src="../src/assets/video/backgroundvideo.mp4" type="video/mp4" />
      </VideoBackground>
      <Content>
        {pruebas.map(granja =>(
          <Card {...granja}/>
        ))}
      </Content>
    </AppContainer>
  )
}
export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
 
`
const VideoBackground = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`
const Content = styled.div`
  position: relative;
  z-index: 1; 
  display: flex;
  flex-wrap: wrap;
  gap:auto; 
  overflow-y: auto; 
  padding: 20px; 
  justify-content: space-evenly;
`;

export default App
