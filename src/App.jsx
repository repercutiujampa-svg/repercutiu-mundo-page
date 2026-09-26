import { Outlet } from 'react-router-dom'
import './App.css'
import { NavigationBar } from './components/Navigation'

function App() {
  

  return (
    <>
    <h1 className= 'cabecalho' >Notícias App</h1>
    <NavigationBar />
    <Outlet />
    </>
  )
}

export default App
