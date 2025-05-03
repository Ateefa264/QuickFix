// src/pages/ClientDetails.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../ViewClientDetails.css";
import logo from "../images/quickfix_logo.png";

function ClientDetails() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Optionally clear session/localStorage here
    navigate('/');
  };

  const profile = () => {
    // Optionally clear session/localStorage here
    navigate('/requests-dashboard');
  };
  return (
    <div className="homepage">
    {/* Navbar */}
    <header className="navbar">
      <img src={logo} alt="QuickFix Logo" className="logo" />
      <nav>
        <button>Home</button>
        <button>Search</button>
        <button>About</button>
        <button className="auth" onClick={profile}>My Profile</button>
        <button className="auth" onClick={handleLogout}>Logout</button>
      </nav>
    </header>


      {/* Back Button */}
      <div className="back-button-container">
        <button
          onClick={() => navigate("/freelancer-dashboard")}
          className="back-button"
        >
          Back
        </button>
      </div>

      {/* Client Details Section */}
      <div className="details-container">
        <h2 className="section-title">Client Details</h2>

        <div className="detail-card">
          <div className="detail-item">
            <span className="detail-label">Name:</span>
            <span className="detail-value">Ali Khan</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Required Service:</span>
            <span className="detail-value">Electrician for ceiling fan repair</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Location:</span>
            <span className="detail-value">Block D, Model Town, Lahore</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Rating:</span>
            <span className="detail-value">★★★★☆</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p><strong>Stay Connected</strong></p>
        <ul>
          <li>📍 Location: 353-H Sector-Y DHA Lahore</li>
          <li>📞 Contact Us: +92 333 4445556</li>
          <li>📧 Email: quick_fix@gmail.com</li>
        </ul>
        <div className="quick-links">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/services")}>Services</button>
          <button onClick={() => navigate("/about-us")}>About Us</button>
          <button onClick={() => navigate("/contact-us")}>Contact Us</button>
          <button onClick={() => navigate("/privacy-policy")}>Privacy Policy</button>
          <button onClick={() => navigate("/terms")}>Terms & Conditions</button>
        </div>
      </footer>
    </div>
  );
}

export default ClientDetails;
