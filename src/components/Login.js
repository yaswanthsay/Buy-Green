import React from 'react'
import { Fade } from 'react-reveal'

function Login() {
    return (
        <div className='login__container'>
        <Fade>
        <div className='login'>
            <form className='login__form'>
                <h4 className='login__title'>BUY GREEN</h4>
                <input placeholder='Email' className='login__email' name='email' type='email' />
                <input placeholder='Password' className='login__password' name='password' type='password' />
                <input type='submit' className='login__btn' value='Login'/>
                <p className='login_new_account'>Create an account?</p>
            </form>
        </div>
        </Fade>
        </div>
    )
}

export default Login