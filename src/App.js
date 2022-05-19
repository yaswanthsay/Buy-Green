import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Main from './components/Main'
import Cart from './components/Cart'
import Help from './components/Help'

function App() {
  return (
    <div className='app'>
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/help' element={<Help/>}/>
       </Routes>
    </div>
  )
}

export default App