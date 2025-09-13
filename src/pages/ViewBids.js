import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ViewBids.css";
import logo from "../images/quickfix_logo.png";

const mockBids = [
  { id: 1, name: "Name 1", experience: "5 years" },
  { id: 2, name: "Name 2", experience: "3 years" },
  { id: 3, name: "Name 3", experience: "7 years" },
];

function ViewBids() {
  const navigate = useNavigate();
  const [bids, setBids] = useState(mockBids);
  const [acceptedBidId, setAcceptedBidId] = useState(null);

  const handleAccept = (id) => {
    setAcceptedBidId(id);
    const acceptedBid = bids.find((bid) => bid.id === id);
    setBids([acceptedBid]);
  };

  return (
    <div className="view-bids-wrapper">
      {/* Header */}
      <div className="navbar">
        <img src={logo} alt="QuickFix Logo" className="nav-logo" />
        <div className="nav-icons">
          <span className="search-icon">🔍</span>
          <div className="profile-circle"></div>
        </div>
      </div>

      {/* Back Button */}
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate("/requests-dashboard")}>
          Back ←
        </button>
      </div>

      {/* Bids Table */}
      <div className="bids-section">
        <h2>View Bids :</h2>
        <div className="bids-table">
          {bids.map((bid, index) => (
            <div className="bid-row" key={bid.id}>
              <span>Bid no. {index + 1}</span>
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
    </div>
  );
}

export default ViewBids;
