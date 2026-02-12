import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import FactForm from './components/FactForm';
import './App.css';

function App() {
  return (
    <Router>
      {/* 1. Navbar stays at the top of every page */}
      <Navbar />

      {/* 2. Main Content changes based on the page */}
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<FactForm />} />
        </Routes>
      </div>

      {/* 3. Footer stays at the bottom of every page */}
      <Footer />
    </Router>
  );
}

export default App;