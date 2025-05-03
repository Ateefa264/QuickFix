import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../ViewBids.css";
import logo from "../images/quickfix_logo.png"; // Uncomment if you actually have a logo

const mockBids = [
  { id: 1, name: "Ali", experience: "5 years" },
  { id: 2, name: "Sara", experience: "3 years" },
  { id: 3, name: "Ahmed", experience: "7 years" },
];

function ViewBids() {
  const navigate = useNavigate();
  const [bids, setBids] = useState(mockBids);
  const [acceptedBidId, setAcceptedBidId] = useState(null);

  const handleAccept = (id) => {
    setAcceptedBidId(id);
    const acceptedBid = bids.find((bid) => bid.id === id);
    setBids([acceptedBid]); // This filters out other bids once one is accepted
  };
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
        <button className="back-button" onClick={() => navigate("/requests-dashboard")}>
          ← Back
        </button>
      </div>

      {/* Bids Table */}
      <div className="bids-section">
        <h2>Available Bids</h2>
        <div className="bids-table">
          {bids.map((bid, index) => (
            <div className="bid-row" key={bid.id}>
              <span>Bid #{index + 1}</span>
              <span>{bid.name}</span>
              <span>{bid.experience}</span>
              <span>
                {acceptedBidId === bid.id ? (
                  <span className="accepted-text">Accepted</span>
                ) : (
                  <button className="accept-button" onClick={() => handleAccept(bid.id)}>
                    Accept
                  </button>
                )}
              </span>
            </div>
          ))}
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
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/services')}>Services</button>
          <button onClick={() => navigate('/about-us')}>About Us</button>
          <button onClick={() => navigate('/contact-us')}>Contact Us</button>
          <button onClick={() => navigate('/privacy-policy')}>Privacy Policy</button>
          <button onClick={() => navigate('/terms')}>Terms & Conditions</button>
        </div>
      </footer>
    </div>
  );
}

export default ViewBids;
