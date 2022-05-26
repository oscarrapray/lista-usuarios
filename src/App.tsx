import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Detalle from './components/Detalle'
import Header from './components/Header'
import Usuarios from './components/Usuarios'
import './css/estilos.css'

const App =() => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
         <Route path='/' element = {<Usuarios />} />
         <Route path='/usuarios/:id' element = {<Detalle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
