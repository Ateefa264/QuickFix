import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RequestsDashboard from "./pages/RequestsDashboard";
import ViewBids from "./pages/ViewBids";
import PlaceRequest from "./pages/PlaceRequest"; // ensure this file exists
import FreelancerDashboard from "./pages/FreelancerDashboard";
import ViewClientDetails from "./pages/ViewClientDetails";
import ViewMoreDetails from "./pages/ViewMoreDetails";
import BidNow from "./pages/BidNow";
function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to dashboard */}
        <Route path="/" element={<Navigate to="/freelancer-dashboard" />} />

        {/* Main routes */}
        <Route path="/requests-dashboard" element={<RequestsDashboard />} />
        <Route path="/view-bids" element={<ViewBids />} />
        <Route path="/place-request" element={<PlaceRequest />} />
        <Route path="/freelancer-dashboard" element={<FreelancerDashboard />} />
        <Route path="/view-client-details" element={<ViewClientDetails />} />
        <Route path="/bid-now" element={<BidNow />} />
        <Route path="/view-more-details" element={<ViewMoreDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
