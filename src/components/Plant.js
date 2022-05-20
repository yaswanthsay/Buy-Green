import React from 'react'
import Typical from 'react-typical'

function Plant() {
  return (
    <div className='plant__container'>
    <div className='plant'>
      <div className='plant_img_para'>
      <img src='office1.jpg' alt='' className='plant__img'/>
      <h4 className='plant__para'>Why not a</h4>
      </div>
     
    </div>
    <div className='nav_right_typical'>
                <Typical className='nav__typical'
                            steps={[
                                'GREEN',
                                500,
                                'SPACE?',
                                500,
                            ]}
                            wrapper="p"
                            loop={Infinity}
                        /> 
                    </div>
    </div>
  )
}

export default Plant