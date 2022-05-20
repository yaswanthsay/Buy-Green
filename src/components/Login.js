import React from 'react'
import { Fade } from 'react-reveal'
import { useFormik } from 'formik';
import { useState } from 'react';

function Login() {

    const [values, setValues] = useState({});

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
             alert(JSON.stringify(values, null, 2))
        }
    });

    const handleChange = (event) => {
        setValues(prevValues => ({
            ...prevValues,
            [event.target.name]: event.target.values
        })
        )
    }

    const errors = {};
    if (!values.firstName) {
        errors.email = 'Required';
    } else if (values.email > 15) {
        errors.email = 'Must be 15 characters or less';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length > 20) {
        errors.password = 'Must be 20 characters or less';
    }

    return (
        <div className='login__container'>
            <Fade>
                <div className='login'>
                    <form className='login__form' onSubmit={formik.handleSubmit}>
                        <h4 className='login__title'>BUY GREEN</h4>
                        <input placeholder='Email' className='login__email' name='email' type='email' id='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                        <input placeholder='Password' className='login__password' name='password' type='password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                        <input type='submit' className='login__btn' value='Login' />
                        <p className='login_new_account'>Create an account?</p>
                    </form>
                </div>
            </Fade>
        </div>
    )
}

export default Login