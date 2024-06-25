import React, { useEffect } from 'react'
import classes from './Profile.module.css'
import back from '/green_back_new.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../../util/firebase.jsx';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { useState,useContext } from 'react'
import AuthContext from '../../contexts/AuthContext.jsx'

export default function Profile() {
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const { uid } = useContext(AuthContext)
  useEffect(() => {
    if (uid) {
      console.log(uid)
    } else {
      console.log('there is no user')
    }
  }, [uid])
  
  
  const handleSubmit = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/")
          console.log(user);
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
      });
    
  }

  return (
    <section className={classes.loginSection} style={{ backgroundImage: `url(${back})` }}>
       <div className={classes.loginContainer}>
          <h1 className={classes.h1Css}>Login</h1>
          <form onSubmit={handleSubmit} id='login-form'>
            <div className={classes.formGroup}>
              <label className={classes.labelForm} htmlFor='email'>Email</label>
              <input
                  type="email"
                  name="email"
                  className='username-input'
                  placeholder='Enter email'
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
            </div>
            <div className={classes.formGroup}>
              <label className={classes.labelForm} htmlFor="email" >Password</label>
              <input
                type="password"
                name="password"
                className='password-input'
                placeholder='Enter Password'
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit} className={classes.btnLogin}>Login</button>
          </form>
          <p className={classes.paragLogin}>Don't have an account? <NavLink to='/register'>Create new</NavLink> </p>
        </div> 
        
    </section>
    
  )
}
