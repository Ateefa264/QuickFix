// src/pages/ClientDetails.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ViewClientDetails.css";
import logo from "../images/quickfix_logo.png";

function ClientDetails() {
  const navigate = useNavigate();

  return (
    <div className="client-details-page">
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

      {/* Client Details Section */}
      <div className="details-container">
        <h2 className="section-title">Client Details :</h2>
        
        <div className="detail-card">
          <div className="detail-item">
            <span className="detail-label">Name:</span>
            <span className="detail-value">Name</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Required Service:</span>
            <span className="detail-value">Brief Description</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Location:</span>
            <span className="detail-value">Detailed Location</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Rating:</span>
            <span className="detail-value">★★★★☆</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ClientDetails;