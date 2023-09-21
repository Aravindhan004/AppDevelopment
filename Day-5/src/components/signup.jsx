import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './ls.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!email.match(emailRegex)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();

    if (!emailError && !passwordError) {
      const data = new FormData(e.currentTarget);
      console.log({
        name: data.get('name'),
        email: data.get('email'),
        password: data.get('password'),
      });
    }
  };

  return (
    <div className='before'>
    <div className="container">
      <form className="signup-form" onSubmit={handleSignup}>
        <div className='title'>
          Bookstagram.inc
        </div>
        <div className='signup'>
        <h1>Sign Up</h1>
        <h3>Reading Made Easy, Anytime, Anywhere !!!!</h3>
        </div>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
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
          error={!!emailError}
          helperText={emailError}
        />
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
          error={!!passwordError}
          helperText={passwordError}
        />
        <br/><br/>   
        <button type="submit">Sign up</button>
        <br/><br/>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
    </div>
  );
};

export default Signup;
