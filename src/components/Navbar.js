import React from 'react'
import { NavLink } from 'react-router-dom'
import {Fade} from 'react-reveal'

function Navbar() {
    return (
        
        <div className='nav__container'>
            <div className='navbar'>
                <div className='nav__left'>
                   
                    <img src='/sidemenu.png' alt='' className='nav__menu' />
                   
                    <h1 className='nav__title'>BUY
                        <span>GREEN</span></h1>
                </div>
                <div className='nav__right'>
                    <div className='nav_right_link'>
                        <NavLink to='/' className='nav__home'>Home</NavLink>
                        <NavLink to='/cart' className='nav__cart'>Cart</NavLink>
                        <NavLink to='/help' className='nav__help'>Help?</NavLink>
                        <NavLink to='/login' className='nav__login'>Login</NavLink>
                    </div>
                    <Fade>
                    <div className='nav_right_column'>
                        <h1 className='nav_right_title'>Make it Together?</h1>
                        <p className='nav_right_para'>Next generation is the strength of our world.Let us start to <br />create comming generation with full of <NavLink to='/blog' className='nav_para_link'>greenaries</NavLink>.We have <br />already started our mission.Join with us now itself.</p>
                        <button className='nav__btn'>MORE</button>
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
       
    )
}

export default Navbar