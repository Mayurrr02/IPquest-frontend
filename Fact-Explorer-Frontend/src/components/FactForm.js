import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const FactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ipr_type: 'Patent',
    domain: 'Technology',
    year: new Date().getFullYear(),
    source: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/facts', formData);
      alert('Fact Added Successfully!');
      navigate('/');
    } catch (error) {
      alert('Error adding fact');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <Link to="/" className="back-link">← Back to Home</Link>
        
        <h2>Add a New IP Fact</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Title Input */}
          <input 
            type="text" 
            name="title" 
            placeholder="Title (e.g., The First Patent)" 
            value={formData.title} 
            onChange={handleChange} 
            required 
          />
          
          {/* Description Textarea */}
          <textarea 
            name="description" 
            placeholder="Write a short description..." 
            value={formData.description} 
            onChange={handleChange} 
            required 
          />
          
          {/* Row 1: Type and Domain */}
          <div className="form-row">
            <select name="ipr_type" value={formData.ipr_type} onChange={handleChange}>
              <option value="Patent">Patent</option>
              <option value="Copyright">Copyright</option>
              <option value="Trademark">Trademark</option>
              <option value="Trade Secret">Trade Secret</option>
            </select>

            <select name="domain" value={formData.domain} onChange={handleChange}>
              <option value="Technology">Technology</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Fashion">Fashion</option>
              <option value="Food & Beverage">Food & Beverage</option>
              <option value="Healthcare">Healthcare</option>
            </select>
          </div>

          {/* Row 2: Year and Source */}
          <div className="form-row">
              <input 
                type="number" 
                name="year" 
                placeholder="Year" 
                value={formData.year} 
                onChange={handleChange} 
                required 
              />
              <input 
                type="text" 
                name="source" 
                placeholder="Source (Optional)" 
                value={formData.source} 
                onChange={handleChange} 
              />
          </div>

          <button type="submit" className="submit-btn">Save Fact</button>
        </form>
      </div>
    </div>
  );
};

export default FactForm;