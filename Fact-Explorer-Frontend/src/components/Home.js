import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

const Home = () => {
  const [facts, setFacts] = useState([]);
  const [filters, setFilters] = useState({ ipr_type: 'All', domain: 'All', sort: 'Newest', search: '' });

  const fetchFacts = useCallback(async () => {
    try {
      const params = new URLSearchParams(filters).toString();
      const response = await axios.get(`http://localhost:5000/api/facts?${params}`);
      setFacts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [filters]);

  useEffect(() => {
    fetchFacts();
  }, [fetchFacts]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const deleteFact = async (id) => {
    if (window.confirm("Are you sure you want to delete this fact?")) {
      try {
        await axios.delete(`http://localhost:5000/api/facts/${id}`);
        fetchFacts(); 
      } catch (err) {
        alert("Error deleting");
      }
    }
  };

  return (
    <div className="container">
      <header>
        <h1>IPQuest Fact Explorer</h1>
        <p>Discover Intellectual Property Trends</p>
      </header>

      {/* 🟢 BUTTON GROUP (UPDATED with new styles) */}
      <div className="button-group">
        
        {/* Add New Fact Button */}
        <Link to="/add">
          <button className="toggle-btn btn-primary">
            <span>➕</span> Add New Fact
          </button>
        </Link>

        {/* Reset Button */}
        <button 
          onClick={async () => {
            if(window.confirm("This will replace all facts with the default set. Continue?")) {
              await axios.post('http://localhost:5000/api/facts/seed');
              window.location.reload(); 
            }
          }}
          className="toggle-btn btn-reset"
        >
          <span>🔄</span> Reset / Load Data
        </button>

      </div>

      {/* 🟢 CONTROLS (Search + Filters) */}
      <div className="controls">
        <input 
          type="text" 
          name="search" 
          placeholder="🔍 Search facts..." 
          value={filters.search} 
          onChange={handleFilterChange} 
          className="search-bar"
        />

        <select name="ipr_type" onChange={handleFilterChange} value={filters.ipr_type}>
          <option value="All">All Types</option>
          <option value="Patent">Patent</option>
          <option value="Copyright">Copyright</option>
          <option value="Trademark">Trademark</option>
        </select>
        
        <select name="domain" onChange={handleFilterChange} value={filters.domain}>
          <option value="All">All Domains</option>
          <option value="Technology">Technology</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Fashion">Fashion</option>
        </select>

        <select name="sort" onChange={handleFilterChange} value={filters.sort}>
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </div>

      <div className="grid">
        {facts.length > 0 ? (
          facts.map((fact) => (
            <div key={fact._id} className={`card ${fact.ipr_type.replace(" ", "")}`}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="badge">{fact.ipr_type}</span>
                  <button 
                    onClick={() => deleteFact(fact._id)} 
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}
                    title="Delete Fact"
                  >
                    🗑️
                  </button>
              </div>
              <h3>{fact.title}</h3>
              <p>{fact.description}</p>
              <div className="footer">
                <span>{fact.domain}</span>
                <span>{fact.year}</span>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', width: '100%', color: '#666' }}>No facts found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default Home;