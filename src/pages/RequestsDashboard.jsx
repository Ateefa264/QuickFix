import React from "react";
import { useNavigate } from "react-router-dom";
import './RequestsDashboard.css';

function RequestsDashboard() {
  const navigate = useNavigate();

  const requests = [
    {
      id: 1,
      service: "Service",
      time: "Time slot",
      status: "status"
    },
    {
      id: 2,
      service: "Service",
      time: "Time slot",
      status: "status"
    },
    {
      id: 3,
      service: "Service",
      time: "Time slot",
      status: "status"
    }
  ];

  const handlePlaceRequest = () => {
    navigate('/place-request');
  };
  const handleViewBids = () => {
    navigate('/view-bids');
  };
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Your Wish, Their Skills!</h1>
      <button className="place-request-btn" onClick={handlePlaceRequest}>
        Place a Request +
      </button>

      <section className="requests-section">
        <div className="requests-table">
          <h2>Your Requests</h2>
          <div className="table-row table-header">
            <span>request no 1</span>
            <span>Service</span>
            <span>Time slot</span>
            <span></span>
            <span>status</span>
          </div>
          {requests.map((req, index) => (
            <div className="table-row" key={index}>
              <span>request no {index + 1}</span>
              <span>{req.service}</span>
              <span>{req.time}</span>
              <button className="view-bids-btn" onClick={handleViewBids}>View Bids</button>
              <span>{req.status}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default RequestsDashboard;
