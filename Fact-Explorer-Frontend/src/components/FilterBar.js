import React from 'react';

const FilterBar = ({ filters, onFilterChange }) => {
  
  const handleChange = (e) => {
    onFilterChange(e.target.name, e.target.value);
  };

  return (
    <div className="controls">
      <div className="filter-group">
        <label>IPR Type:</label>
        <select name="ipr_type" value={filters.ipr_type} onChange={handleChange}>
          <option value="All">All Types</option>
          <option value="Patent">Patent</option>
          <option value="Copyright">Copyright</option>
          <option value="Trademark">Trademark</option>
          <option value="Trade Secret">Trade Secret</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Domain:</label>
        <select name="domain" value={filters.domain} onChange={handleChange}>
          <option value="All">All Domains</option>
          <option value="Technology">Technology</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Food & Beverage">Food & Beverage</option>
          <option value="Fashion">Fashion</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Sort By:</label>
        <select name="sort" value={filters.sort} onChange={handleChange}>
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;