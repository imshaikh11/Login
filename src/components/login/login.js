import React from 'react';
import './login.css'

function login() {
 return (
  <div className='login'>
   <h1>Login</h1>
   <input type="email" placeholder='Enter your email'></input>
   <input type="password" placeholder='Enter your password'></input>
   <div className='button'>Login</div>
   <div>or</div>
   <div className='button'>Register</div>
  </div>
 )
}

export default login