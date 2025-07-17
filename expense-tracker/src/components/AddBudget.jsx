import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faXmark, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/AddBudget.css';

export const AddBudget = () => {
  return (
    <div className="mainContainer addBudget-mainContainer">
      <div className="addBudgetContainer addBudget-addBudgetContainer">
        <div className="header addBudget-header">
          <p>Add Budget</p>
          <button className="closeButton">
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <hr className="addBudget-hr" />
        <div
          className="form addBudget-form"
        >
          <p className="Amount addBudget-amount">
            Amount
          </p>
          <input
            className="formInput addBudget-formInput"
            type="text"
            placeholder="Enter Amount"
          />
          <button className="submitButton addBudget-submitButton">
            <FontAwesomeIcon icon={faPlus} />Add Expense
          </button>
        </div>
      </div>
    </div>
  );
}
