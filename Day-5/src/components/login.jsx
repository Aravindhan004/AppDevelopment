import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './ls.css';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useDispatch } from 'react-redux';
import {login} from '../features/admin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.match(emailPattern)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    console.log('Email is valid:', email);

    
    history.push('/adminDash');
  }

  


  return (
    <div className='before'>
    <div className="container">
      <form className="login-form" onSubmit={handleLogin}>
        <div className='title'>
            Bookstagram.inc
        </div>
        <div className='login'>
          <h1>
          Login
          </h1>
          <h3>Welcome Back, Reading Redefined !</h3>
          </div>
        <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
        {errorMessage && <p className="error">{errorMessage}</p>}
        <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
        <br/><br/>
        <button type="submit" onClick={() => dispatch(login({email}))}>Login</button>
        <br/><br/>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </form>
    </div> 
    </div>
  );
};

export default Login;
