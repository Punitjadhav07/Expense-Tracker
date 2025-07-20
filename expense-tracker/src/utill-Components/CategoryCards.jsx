// ButtonCards.jsx
// Renders an action button (Add Budget/Add Expense). Receives label and click handler as props from ExpenseMain.
// When clicked, notifies parent to open the respective modal.

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