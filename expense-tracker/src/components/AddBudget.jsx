

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/AddBudget.css';

export const AddBudget = ({ onClose, onAddBudget }) => {

  const [amount, setAmount] = useState('');

 
  const handleAddBudget = () => {
    if (!amount || isNaN(amount)) {
      alert("Please enter a valid number.");
      return;
    }
    onAddBudget(amount); 
    onClose(); 
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