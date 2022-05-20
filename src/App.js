import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Main from './components/Main'
import Cart from './components/Cart'
import Help from './components/Help'
import Login from './components/Login'

function App() {
  return (
    <div className='app'>
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/help' element={<Help/>}/>
      <Route path='/login' element={<Login/>}/>
       </Routes>
    </div>
  )
}

export default App