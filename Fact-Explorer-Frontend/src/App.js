import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation'; // 👈 IMPORT NEW NAME
import Footer from './components/Footer';
import Home from './components/Home';
import FactForm from './components/FactForm';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation /> {/* 👈 USE NEW COMPONENT */}

      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<FactForm />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;