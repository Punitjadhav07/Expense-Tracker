// BudgetCards.jsx
// Displays a summary card for budget info (total, spent, remaining). Receives title and value as props from ExpenseMain.

import React from 'react';
import '../css/BudgetCards.css';

export const BudgetCards = ({ title, budget }) => {
  return (
    <div className="card budgetCards-card">
      <p className="Budget budgetCards-title">{title}</p>
      <p className="budgetCards-amount">₹{budget}</p>
    </div>
  );
}

export default BudgetCards;