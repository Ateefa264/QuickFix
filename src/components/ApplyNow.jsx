import React, { useState } from 'react';
import '../ApplyNow.css';
import logo from '../images/quickfix_logo.png';

const ApplyNow = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('/' + message);
  };

  return (
    <div className="apply-container">
      <header className="apply-header">
        <img src={logo} alt="QuickFix Logo" className="logo" />
        <nav>
          <button>Home</button>
          <button>Search</button>
          <button>About</button>
          <button>Login</button>
          <button>Sign up</button>
        </nav>
      </header>
      <main className="apply-main">
        <h2>JOIN QUICK FIX</h2>
        <p>
          Send in your CV at <strong>quickfix@gmail.com</strong>
        </p>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Tell us about yourself..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </main>
      <footer className="apply-footer">
      <p><strong>Stay Connected</strong></p>
        <ul>
          <li>📍 Location: 353-H Sector-Y DHA Lahore</li>
          <li>📞 Contact Us: +92 333 4445556</li>
          <li>📧 Email: quick_fix@gmail.com</li>
        </ul>
        <p>
          <strong>Quick Links:</strong> Home | Services | About Us | Contact Us | Privacy Policy | Terms & Conditions
        </p>
      </footer>
    </div>
  );
};

export default ApplyNow;
