// src/pages/RequestForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../PlaceRequest.css";
import logo from '../images/quickfix_logo.png'; // Uncomment and ensure the logo exists in the correct path

function RequestForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    serviceType: "",
    description: "",
    urgency: "Standard",
    date: "",
    time: "",
    location: "",
    budget: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // You can navigate or trigger API call here
  };

  const handleCancel = () => {
    setFormData({
      serviceType: "",
      description: "",
      urgency: "Standard",
      date: "",
      time: "",
      location: "",
      budget: ""
    });
    navigate("/requests-dashboard");
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


      {/* Request Form Section */}
      <div className="request-form-wrapper">
        {/* Back Button */}
        <div className="back-button-container">
          <button onClick={handleCancel} className="back-button">
            ← Back
          </button>
        </div>

        {/* Form */}
        <div className="request-form-card">
          <h2 className="request-form-title">Place a Request :</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="serviceType">Service Type:</label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Electrical">Electrical</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Moving">Moving</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                placeholder="Give a brief description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Urgency:</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="urgency"
                    value="Standard"
                    checked={formData.urgency === "Standard"}
                    onChange={handleChange}
                  />
                  Standard
                </label>
                <label>
                  <input
                    type="radio"
                    name="urgency"
                    value="Urgent"
                    checked={formData.urgency === "Urgent"}
                    onChange={handleChange}
                  />
                  Urgent
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Time Slot:</label>
              <div className="time-slot-group">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter your location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="budget">Budget:</label>
              <div className="budget-group">
                <span>Rs.</span>
                <input
                  type="number"
                  id="budget"
                  name="budget"
                  placeholder="Enter your budget"
                  value={formData.budget}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="form-buttons">
              <button type="button" onClick={handleCancel} className="cancel-button">
                Cancel
              </button>
              <button type="submit" onClick={handleCancel}
              className="submit-button">
                Submit
              </button>
            </div>
          </form>
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
    </div>
  );
}

export default RequestForm;
