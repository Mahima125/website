import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home'
import BareAct from './pages/bareAct/bareAct'
import AddCase from './pages/addCase/addCase'
import Navbar from './components/navbar/navbar'


const App = () => {
  return (
    <div>
      <Navbar/>
       <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/addCase' element={<AddCase/>} />
            <Route path='/bareAct' element={<BareAct/>} />
            
       </Routes>
    </div>
  )
}

export default App
