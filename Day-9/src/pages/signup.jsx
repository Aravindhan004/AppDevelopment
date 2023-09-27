import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom';
import videobg1 from '../images/signup.mp4';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const history = useHistory();

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

    history.push('/home');
  };

  return (
    <div className='fixed inset-0 w-full h-full object-cover z-[-1]'>
      <video autoPlay loop muted playsInline className='back-video'>
        <source src={videobg1} type='video/mp4'/>
      </video>
      <div className='before'>
      <div className="container bg-white p-6 rounded shadow-md text-center opacity-80 backdrop-blur-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full overflow-x-hidden">       
          <form className="signup-form" onSubmit={handleSignup}>
            <div className='font-bold text-right'>
              Bookstagram.inc
            </div>
            <br/>
            <div className='text-left font-bold'>
              <h1 className="text-2xl font-bold">Sign Up</h1>
              <br />
            </div>
            <div className='text-left'>
              <h3 className="text-lg">Reading Made Easy, Anytime, Anywhere !!!!</h3>
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
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300">SignUp</button>
            <br/><br/>
            <p>Already have an account? <Link to="/login" className="text-primary">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
