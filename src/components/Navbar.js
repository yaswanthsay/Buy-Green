import React from 'react'
import { NavLink } from 'react-router-dom'
import { Fade } from 'react-reveal'

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
                    
                        <div className='nav_right_column'>
                            <h1 className='nav_right_title1'>WE HAVE STARTED!</h1>
                            <p className='nav_right_para'>What about you ? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                        </div>
                    
                    
                </div>
               
                   
            </div>
           
        </div>

    )
}

export default Navbar