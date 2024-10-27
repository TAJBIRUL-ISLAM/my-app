
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Component/About'

import Home from './Component/Home'
import Contact from './Component/Contact'
import Signup from './Component/Signup'
import Navbar from './Component/Navbar'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='About' element={<About/>} />
        <Route path='Contact' element={<Contact/>} />
        <Route path='Signup' element={<Signup/>} />
        
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
