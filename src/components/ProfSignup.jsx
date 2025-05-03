import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../ProfSignup.css';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add signup logic here (e.g., API call)
    
    // Navigate to homepage after signup
    navigate('/login-p');
  };

  return (
    <div className="signup-container">
      <header className="header">
        <div className="logo-text">
          <span className="logo-title">QUICKFIX</span>
          <span className="logo-sub">your instant solution</span>
        </div>
        <div className="logo-icon">🔧🔨</div>
      </header>

      <div className="signup-box">
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password:</label>
          <input type="password" placeholder="Enter your password" required />

          <label>Field/Skill:</label>
          <input type="text" placeholder="Enter your skillset" required />

          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
