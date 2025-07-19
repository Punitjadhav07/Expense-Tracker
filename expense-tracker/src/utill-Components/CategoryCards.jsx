import React from 'react';
import '../css/CategoryCards.css';

export const CategoryCards = ({ category, isSelected, onClick }) => {
  return (
    <button
      className={`categoryCards-btn ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {category}
    </button>
  );
};