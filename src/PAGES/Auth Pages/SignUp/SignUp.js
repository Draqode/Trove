import React, {useState} from 'react'
import './SignUp.scss'
import { Link, useHistory } from "react-router-dom";
import { handleSignUp, handleGoogleSignUp } from '../../../Helpers/Functions';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordconfirm, setPasswordConfirm] = useState('')
    const [error, setError] = useState('')
    const [success, setResponse ] = useState('')
    const history = useHistory()

    const redirect = () => {
        history.replace('/dashboard')
    }

    return (
        <div className='sign-up lozad'>
            <main>
                <div className='form_logo-desk'>
                    <div className='form_container'>
                        <div className='form'>
                            <div className='form_header-container'>
                                <img src='https://troveapp.co/assets/images/logo.png' alt='' />
                                <p className='form-header-info'> START INVESTING WITH TROVE</p>
                                <p className='sign_up-title'>Sign up here</p>
                            </div>
                            <div className='signup_form-container'>
                                <div className="">
                                    {error && (
                                        <div className='error' > {error}</div>)}
                                    {success && (
                                        <div className='success' > {success} </div>
                                    )}
                                    <p className="signup_form-input-label">Email</p>
                                    <div className="signin_input">
                                        <div className="form-input-1">
                                            <input data-test="input" type="email" className="input_field" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-input-2">
                                    <p className="signup_form-input-label">Password</p>
                                    <div className="signin_input">
                                        <div className="form-input-1">
                                            <input data-test="input" type="password" className="input_field" id="password" placeholder="Password" value={password} onChange={(p) => setPassword(p.target.value)} />
                                        </div>
                                    </div>
                                    <small>**Password should contain atleast one uppercase, lowercase, digit, symbol and minimum of 8 characters**</small>
                                </div>
                                <div className="form-input-2">
                                    <p className="signup_form-input-label-1">Password Confirmation</p>
                                    <div className="signin_input">
                                        <div className="form-input-1">
                                            <input
                                                data-test="input" type="password" className="input_field" id="password-confirm" placeholder="Confirm Password" value={passwordconfirm} onChange={(pc) => setPasswordConfirm(pc.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button type='submit'className='btn_signup btn_main'onClick = { () => {
                                            handleSignUp(setError, password, passwordconfirm, email, redirect)}}>
                                        Sign Up
                                    </button>
                                    <button type='submit'className='btn_signup btn_secondary'onClick={() => {
                                        handleGoogleSignUp(setResponse, setError, redirect)
                                    }}>
                                        <div className='google' />Sign Up with Google
                                    </button>
                                    <p className="sign_up_in">
                                        <Link to="/login">
                                            <span className="sign_up_in font-weight-bold">Have an account?  Sign in here</span>
                                        </Link>
                                    </p>
                                    <p className="sign_up_in">
                                        <span className="sign_up_in terms_text">
                                            By creating an account, you agree to have read and accepted our
                                            <a className="terms_link" href="https://troveapp.co/terms" target="_blank" rel="noopener noreferrer">terms
                                            </a> and
                                            <a className="terms_link" href="https://troveapp.co/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy
                                            </a>
                                        </span>
                                    </p>
                                    <p className="signin_rights">
                                        © Copyright 2019 - Trove Technologies Limited | All Rights Reserved
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', width: '100%' }}>

                    </div>
                    </div>
                </main>
            </div>
    )
}
export default SignUp
