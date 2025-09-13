// src/pages/FreelancerDashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./FreelancerDashboard.css";
import logo from "../images/quickfix_logo.png";

function FreelancerDashboard() {
  const navigate = useNavigate();

  return (
    <div className="freelancer-dashboard">
      {/* Header */}
      <div className="navbar">
        <img src={logo} alt="QuickFix Logo" className="nav-logo" />
        <div className="nav-icons">
          <span className="search-icon">🔍</span>
          <div className="profile-circle"></div>
        </div>
      </div>

      {/* Tagline */}
      <h1 className="tagline">Bid Smart, Earn Big!</h1>

      {/* Available Jobs */}
      <div className="jobs-section">
        <h2>AVAILABLE JOBS</h2>
        <div className="job-row header">
          <span>Job no.</span>
          <span>Service</span>
          <span>Time slot</span>
          <span>Urgency</span>
          <span>Client Budget</span>
          <span></span>
          <span></span>
        </div>
        {[1, 2, 3].map((job) => (
          <div className="job-row" key={job}>
            <span>Job no. {job}</span>
            <span>Service</span>
            <span>Time slot</span>
            <span>Urgency</span>
            <span>Client Budget</span>
            <button
              className="view-btn"
              onClick={() => navigate("/view-client-details")}
            >
              View Client Detail
            </button>
            <button
              className="bid-btn"
              onClick={() => navigate("/bid-now")}
            >
              Bid Now
            </button>
          </div>
        ))}
      </div>

      {/* Active Bids - Updated to match Available Jobs style */}
      <div className="bids-section">
        <h2>Your Active Bids</h2>
        <div className="job-row header">
          <span>Job no.</span>
          <span>Service</span>
          <span>Your Bid</span>
          <span>Status</span>
          <span>Client Rating</span>
        </div>
        {[1, 2, 3].map((bid) => (
          <div className="job-row" key={bid}>
            <span>Job no. {bid}</span>
            <span>Service</span>
            <span>Your Bid</span>
            <span>Status</span>
            <span>Client Rating</span>
          </div>
        ))}
      </div>

      {/* Upcoming Jobs */}
      <div className="upcoming-section">
        <h2>Your Upcoming Jobs</h2>
        {[1, 2].map((item) => (
          <div className="upcoming-card" key={item}>
            <div className="upcoming-row">
              <span>📅 Date</span>
              <span>🕒 Time:</span>
              <span>Service</span>
              <span>Client Name</span>
              <button
                className="view-more-btn"
                onClick={() => navigate("/view-more-details")}
              >
                View More Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FreelancerDashboard;