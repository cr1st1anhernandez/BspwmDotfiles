import React, { useState } from 'react';
import './App.css';

export function LoginCard() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault(); 
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <>
      <div className='loginCard-container'>
        <h2 className='loginCard-title'>Login</h2>
        <p className='loginCard-subtitle'>Please sign in to continue</p>
        <form className='loginCard-form' onSubmit={handleLogin}>
          <input
            className='loginCard-input'
            type='text'
            placeholder='Username'
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            className='loginCard-input'
            type='password'
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
          />
          <button className='loginCard-button' type="submit">LOGIN</button>
          <p className='loginCard-footer'>
            Don't have an account? <a href="" className='loginCard-link'>Sign up</a>
          </p>
        </form>
      </div>
    </>
  );
}
