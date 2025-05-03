import React, { useState } from 'react';
import '../Login.css';
import logo from '../images/quickfix_logo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      alert('Login successful!');
    } else {
      navigate('/freelancer-dashboard');
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <img src={logo} alt="QuickFix Logo" className="logo" />
        <h2>Login</h2>
      </header>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
