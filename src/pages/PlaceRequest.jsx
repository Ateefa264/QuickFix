// src/pages/RequestForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import './RequestForm.css';
import logo from '../images/quickfix_logo.png';

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
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
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
    navigate('/');
  };

  

  const goBack = () => {
    navigate('/requests-dashboard'); // Navigate to the dashboard
  };
  const goToDashboard = () => {
    navigate('/'); // Redirects to dashboard
  };

  return (
    <div className="request-form-wrapper">
      {/* Top Navbar */}
      <div className="navbar">
        <img src={logo} alt="QuickFix Logo" className="nav-logo" />
        <div className="nav-icons">
          <span className="search-icon">🔍</span>
          <div className="profile-circle"></div>
        </div>
      </div>

      {/* Back Button */}
      <div className="back-button-container">
        <button onClick={goToDashboard} className="back-button">Back ←</button>
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
              <option value="">select</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Electrical">Electrical</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Moving">Moving</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description :</label>
            <textarea
              id="description"
              name="description"
              placeholder="Give brief description"
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
                placeholder=""
                value={formData.budget}
                onChange={handleChange}
              />
            </div>
          </div>

 
          <div className="form-buttons">
            <button type="button" onClick={goToDashboard} className="cancel-button">Cancel</button>
            <button type="submit" className="submit-button">Submit</button>
         </div>
        </form>
      </div>
    </div>
  );
}
export default RequestForm;