import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Component Imports
import Terms from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Service from './components/Service';
import InitialSignup from './components/InitialSignup';
import ViewBids from './components/ViewBids';
import RequestsDashboard from './components/RequestDashboard';
import PlaceRequest from './components/PlaceRequest';
import HomePage from './components/HomePage';
import LoginP from './components/LoginP';
// Newly Added Pages
import ApplyNow from './components/ApplyNow';
import BidNow from './components/BidNow';
import FreelancerDashboard from './components/FreelancerDashboard';
import Login from './components/Login';
import ProfSignup from './components/ProfSignup';
import UserSign from './components/UserSignup';
import ViewClientDetails from './components/ViewClientDetails';
import ViewMoreDetails from './components/ViewMoreDetails';
import AfterLogin from './components/AfterLogin';
const App = () => {
  return (
    <Router>
      <div style={{ maxHeight: '100vh', overflowY: 'auto' }}>
        {/* Scrollable Navigation Bar */}
        <nav
          style={{
            padding: '1rem',
            backgroundColor: '#D7B981',
            display: 'flex',
            overflowX: 'auto',
            whiteSpace: 'nowrap'
          }}
        >
          
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/InitialSignup" element={<InitialSignup />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Service />} />
          <Route path="/place-request" element={<PlaceRequest />} />
          <Route path="/requests-dashboard" element={<RequestsDashboard />} />
          <Route path="/view-bids" element={<ViewBids />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* New Pages */}
          <Route path="/apply-now" element={<ApplyNow />} />
          <Route path="/bid-now" element={<BidNow />} />
          <Route path="/freelancer-dashboard" element={<FreelancerDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/after-login" element={<AfterLogin />} />
          <Route path="/prof-signup" element={<ProfSignup />} />
          <Route path="/user-signup" element={<UserSign />} />
          <Route path="/view-client-details" element={<ViewClientDetails />} />
          <Route path="/view-more-details" element={<ViewMoreDetails />} />
          <Route path="/login-p" element={<LoginP />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
