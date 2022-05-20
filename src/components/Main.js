import React from 'react'
import Center from './Center'
import Navbar from './Navbar'
import Plant from './Plant'
import Bottom from './Bottom'
import Footer from './Footer'

function Main() {
  return (
    <div className='main'>
        <Navbar/>
         <Plant/>
         <Center/>
         <Bottom/> 
         <Footer/>
    </div>
  )
}

export default Main