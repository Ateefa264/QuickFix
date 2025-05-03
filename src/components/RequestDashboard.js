import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../images/quickfix_logo.png'; // Ensure the logo image is imported correctly
import '../RequestsDashboard.css';

function RequestsDashboard() {
  const navigate = useNavigate();

  const requests = [
    {
      id: 1,
      service: "Cleaning",
      time: "10:00 AM - 11:00 AM",
      status: "Pending"
    },
    {
      id: 2,
      service: "Plumbing",
      time: "12:00 PM - 1:00 PM",
      status: "Completed"
    },
    {
      id: 3,
      service: "Electrician",
      time: "3:00 PM - 4:00 PM",
      status: "In Progress"
    }
  ];

  const handlePlaceRequest = () => {
    navigate('/place-request');
  };

  const handleViewBids = (id) => {
    navigate(`/view-bids`); // Pass dynamic ID for view bids page
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


      {/* Main Dashboard */}
      <div className="dashboard-container">
        <h1 className="dashboard-title">Your Wish, Their Skills!</h1>
        <button className="place-request-btn" onClick={handlePlaceRequest}>
          Place a Request +
        </button>

        <section className="requests-section">
          <div className="requests-table">
            <h2>Your Requests</h2>
            <div className="table-row table-header">
              <span>#</span>
              <span>Service</span>
              <span>Time Slot</span>
              <span>Action</span>
              <span>Status</span>
            </div>
            {requests.map((req, index) => (
              <div className="table-row" key={req.id}>
                <span>{index + 1}</span>
                <span>{req.service}</span>
                <span>{req.time}</span>
                <span>
                  <button className="view-bids-btn" onClick={() => handleViewBids(req.id)}>
                    View Bids
                  </button>
                </span>
                <span>{req.status}</span>
              </div>
            ))}
          </div>
        </section>
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

export default RequestsDashboard;
