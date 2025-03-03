import React from 'react';
import './Login.css';
import { FaUser, FaLock, FaEnvelope} from "react-icons/fa";
import  { useState } from 'react';

const LoginSignup = () => {
    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction(' active');
    };

    const loginLink = () => {
        setAction(' ');
    };
   

    return (
        <div className={`login${action}`}>
            <div className='login__container wrap'>
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type='text'
                        placeholder='Username' required />
                        <FaUser className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type='text'
                        placeholder='password' required />
                        <FaLock  className='icon'/>
                    </div>
                    <div className="remember-forgot">
                        <label><input type='checkbox' /> Remember me</label>
                        <a href="#">Forgetpassword?</a>
                        
                    </div>
                    <button type='submit'>Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <a href='#' onClick={registerLink}>Register</a> 
                        </p>
                    </div>

                </form>

            </div>

            <div className='login__container register'>
                <form action="">
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input type='text'
                        placeholder='Username' required />
                        <FaUser className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type='email'
                        placeholder='Email' required />
                        <FaEnvelope className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type='text'
                        placeholder='password' required />
                        <FaLock  className='icon'/>
                    </div>
                    <div className="remember-forgot">
                        <label><input type='checkbox' /> I agree the terms and conditions</label>
                    </div>
                    <button type='submit'>Register</button>
                    <div className="register-link">
                        <p>Already have an account? <a href='#' onClick={loginLink}>Login</a> 
                        </p>
                    </div>

                </form>

            </div>


        </div>
    );
};


export default LoginSignup;