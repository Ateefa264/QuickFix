// src/pages/FreelancerDashboard.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../FreelancerDashboard.css";
import logo from "../images/quickfix_logo.png";

function FreelancerDashboard() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [bids, setBids] = useState([]);
  const professionalId = "pro123"; // Replace with actual logged-in professional ID

  useEffect(() => {
    // Fetch available jobs for the freelancer
    axios.get(`http://localhost:5000/api/requests/professional/${professionalId}`)
      .then((res) => setJobs(res.data))
      .catch((err) => console.error("Error fetching jobs:", err));

    // Fetch bids for the freelancer (dummy for now, add real endpoint later if needed)
    setBids([
      { id: 1, service: "Electrician", amount: 2500, status: "Pending", rating: 4.5 },
      { id: 2, service: "Electrician", amount: 2800, status: "Accepted", rating: 4.2 }
    ]);
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  const profile = () => {
    navigate('/requests-dashboard');
  };

  return (
    <div className="homepage">
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

      <h1 className="tagline">Bid Smart, Earn Big!</h1>

      {/* Available Jobs */}
      <div className="jobs-section">
        <h2>Available Jobs</h2>
        <div className="job-row header">
          <span>Job No.</span>
          <span>Service</span>
          <span>Time Slot</span>
          <span>Urgency</span>
          <span>Client Budget</span>
          <span></span>
          <span></span>
        </div>
        {jobs.map((job, index) => (
          <div className="job-row" key={job._id}>
            <span>Job #{index + 1}</span>
            <span>{job.service}</span>
            <span>{job.timeSlot}</span>
            <span>{job.urgency}</span>
            <span>Rs. {job.budget}</span>
            <button
              className="view-btn"
              onClick={() => navigate("/view-client-details", { state: job })}
            >
              View Client Detail
            </button>
            <button
              className="bid-btn"
              onClick={() => navigate("/bid-now", { state: job })}
            >
              Bid Now
            </button>
          </div>
        ))}
      </div>

      {/* Active Bids */}
      <div className="bids-section">
        <h2>Your Active Bids</h2>
        <div className="job-row header">
          <span>Job No.</span>
          <span>Service</span>
          <span>Your Bid</span>
          <span>Status</span>
          <span>Client Rating</span>
        </div>
        {bids.map((bid, index) => (
          <div className="job-row" key={bid.id}>
            <span>Job #{index + 1}</span>
            <span>{bid.service}</span>
            <span>Rs. {bid.amount}</span>
            <span>{bid.status}</span>
            <span>⭐ {bid.rating}</span>
          </div>
        ))}
      </div>

      {/* Upcoming Jobs */}
      <div className="upcoming-section">
        <h2>Your Upcoming Jobs</h2>
        {[1, 2].map((item) => (
          <div className="upcoming-card" key={item}>
            <div className="upcoming-row">
              <span>📅 5th May 2025</span>
              <span>🕒 11:00 AM</span>
              <span>AC Repair</span>
              <span>Mr. Usman</span>
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

export default FreelancerDashboard;
