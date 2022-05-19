import React from 'react'
import Center from './Center'
import Navbar from './Navbar'
import Right from './Right'
import Plant from './Plant'
import Bottom from './Bottom'

function Main() {
  return (
    <div className='main'>
        <Navbar/>
         <Plant/>
        {/* <Right/>
        <Center/>
        <Bottom/>  */}
    </div>
  )
}

export default Main