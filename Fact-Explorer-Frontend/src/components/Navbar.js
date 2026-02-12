import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo / Brand Name */}
        <Link to="/" className="nav-logo">IPQuest</Link>

        {/* Navigation Links */}
        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Games</Link></li>
          <li><Link to="/">Leaderboard</Link></li>
          <li><Link to="/">Reference Hub</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;