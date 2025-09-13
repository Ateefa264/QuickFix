// src/pages/PlaceBid.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BidNow.css";
import logo from "../images/quickfix_logo.png";

function PlaceBid() {
  const navigate = useNavigate();
  const [bidAmount, setBidAmount] = useState("");

  return (
    <div className="place-bid-page">
      {/* Header */}
      <div className="navbar">
        <img src={logo} alt="QuickFix Logo" className="nav-logo" />
        <div className="nav-icons">
          <span className="search-icon">🔍</span>
          <div className="profile-circle"></div>
        </div>
      </div>

      {/* Full-width Back Button */}
      <div className="back-button-container">
        <button onClick={() => navigate("/freelancer-dashboard")} className="back-button">
          Back
        </button>
      </div>

      {/* Place Bid Section */}
      <div className="bid-container">
        <h2 className="section-title">Place your Bid:</h2>
        
        <div className="bid-card">
          <div className="bid-item">
            <span className="bid-label">Present Bid:</span>
            <span className="bid-value">Bid</span>
          </div>
          <div className="bid-item">
            <span className="bid-label">Your Bid:</span>
            <input
              type="text"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              placeholder="Enter your bid amount"
            />
          </div>
        </div>

        <button 
          className="done-btn"
          onClick={() => {
            console.log("Bid placed:", bidAmount);
            navigate("/freelancer-dashboard");
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default PlaceBid;