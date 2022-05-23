import React from 'react'
import { NavLink } from 'react-router-dom'
import { Fade } from 'react-reveal'

function Signup() {
    return (
        <div className='signup__container'>
            <Fade>
            <div className='signup'>
                <form className='signup__form'>
                    <div className='signup'>
                        <h3 className='signup__title'>BUY GREEN</h3>
                        <input placeholder='Firstname' type='text' name='firstname' className='signup__firstname' />
                        <input placeholder='Lastname' type='text' name='lastname' className='signup__lastname' />
                        <input placeholder='email' type='email' name='email' className='signup__email' />
                        <input placeholder='password' type='password' name='password' className='signup__password' />
                        <input type='submit' className='signup__btn' value='Signup' />
                        <NavLink to='/login' className='already__accnt'>Already have an account?</NavLink>
                    </div>
                </form>
            </div>
            </Fade>
        </div>
    )
}

export default Signup