import React from 'react'
import '../css/CategoryCards.css';

export const CategoryCards = ({ category }) => {
  return (
    <button className="categoryCards-btn">
      {category}
    </button>
  );
};