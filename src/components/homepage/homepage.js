
import React from 'react';
import './homepage.css'

function homepage({setLoginUser}) {
   return (
      <div className='homepage'>
         <h1>homepage</h1>
         <div className='button' onClick={() => setLoginUser({})}>Logout </div>
      </div>
   )
}

export default homepage