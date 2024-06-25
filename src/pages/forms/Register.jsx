import React, { useEffect, useState } from 'react';
import classes from './Profile.module.css';
import back from '/green_back_new.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../../util/firebase.jsx';
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth';

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 4) {
      setError('Password to short!')
      return;
    };

    if (email.length < 10) {
      setError('Email must be minimum of 6 symbols!')
      
      return;
    };

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setError(null)
      navigate('/'); 
      
    } catch (error) {
      
      if (error.code === 'auth/email-already-in-use') {
        setError("Email already in use!");
      
      } else if (error.code === 'auth/invalid-email') { 
        setError("invalid Email Format!");
      } else {
        console.error('Registration failed:', error);
        setError("Registration failed. Please try again!");
      }
    }
  };

  return (
    <section className={classes.loginSection} style={{ backgroundImage: `url(${back})` }}>
      <div className={classes.loginContainer}>
        <h1 className={classes.h1Css}>Register</h1>
        <form onSubmit={handleSubmit} id='login-form'>
          <div className={classes.formGroup}>
            <label className={classes.labelForm} htmlFor='email'>Email</label>
            <input
              type="text"
              name="email"
              className='username-input'
              placeholder='Enter email'
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              required
            />
          </div>
          {error && <div className='error'>
            {error}
          </div> }
          <button type="submit" className={classes.btnLogin}>Register</button>
        </form>
        <p className={classes.paragLogin}>Alreadty have an account. <NavLink to='/profile'>Sign in</NavLink> </p>
      </div>
    </section>
  );
}
