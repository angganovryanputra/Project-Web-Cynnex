import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import CareerPage from './pages/CareerPage';
import CareersListing from './pages/CareersListing';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-navy-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:service" element={<ServicePage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<CareersListing />} />
          <Route path="/careers/:position" element={<CareerPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;