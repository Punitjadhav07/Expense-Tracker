// AddBudget.jsx
// Modal form for adding a new budget amount. Manages local form state and notifies parent on submit.
// Calls onAddBudget to update the budget in ExpenseMain.

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/AddBudget.css';

export const AddBudget = ({ onClose, onAddBudget }) => {
  // Local form state for the budget amount
  const [amount, setAmount] = useState('');

  // On submit, validate and call parent handler
  const handleAddBudget = () => {
    if (!amount || isNaN(amount)) {
      alert("Please enter a valid number.");
      return;
    }
    onAddBudget(amount); // Notify parent to update budget state
    onClose(); // Close modal
  };

  return (
    <div className="mainContainer addBudget-mainContainer">
      <div className="addBudgetContainer addBudget-addBudgetContainer">
        <div className="header addBudget-header">
          <p>Add Budget</p>
          <button className="closeButton" onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <hr className="addBudget-hr" />
        <div className="form addBudget-form">
          <p className="Amount addBudget-amount">Amount</p>
          <input
            className="formInput addBudget-formInput"
            type="text"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button className="submitButton addBudget-submitButton" onClick={handleAddBudget}>
            <FontAwesomeIcon icon={faPlus} /> Add Budget
          </button>
        </div>
      </div>
    </div>
  );
};