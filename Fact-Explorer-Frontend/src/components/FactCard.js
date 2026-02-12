import React from 'react';

const FactCard = ({ fact }) => {
  return (
    <div className={`card ${fact.ipr_type}`}>
      <div className="card-header">
        <span className="badge">{fact.ipr_type}</span>
        <span className="year">{fact.year}</span>
      </div>
      <h3>{fact.title}</h3>
      <p>{fact.description}</p>
      <div className="footer">
        <span className="domain-tag">Domain: {fact.domain}</span>
        <small className="source">Source: {fact.source}</small>
      </div>
    </div>
  );
};

export default FactCard;