import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './Component/Home'
import Nav from './Component/Nav'
import Create from './Component/Create'

function App() {

  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create-employee' element={<Create/>}></Route>
      <Route path='/Update-employee:id' element={<Create/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
