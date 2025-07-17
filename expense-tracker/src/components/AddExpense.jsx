import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/AddExpense.css';


export const AddExpense = () => {
  return (
    <div className="mainContainer addExpense-mainContainer">
      <div className="addExpenseContainer addExpense-addExpenseContainer">
        <div className="header addExpense-header">
          <p>Add Expense</p>
          <button className="closeButton">
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <hr className="addExpense-hr" />
        <div className="form addExpense-form">
          <p className="formLabel addExpense-formLabel">Expense Name</p>
          <input
            className="formInput addExpense-formInput"
            type="text"
            placeholder="Expense Name"
          />

          <p className="formLabel addExpense-formLabel">Date</p>
          <input
            className="formInput addExpense-formInput"
            type="date"
          />

          <p className="formLabel addExpense-formLabel">Expense Category</p>
          <input
            className="formInput addExpense-formInput"
            type="text"
            placeholder="Category"
          />

          <p className="formLabel addExpense-formLabel">Expense Amount</p>
          <input
            className="formInput addExpense-formInput"
            type="text"
            placeholder="Amount"
          />
          <button className="submitButton addExpense-submitButton">
            <FontAwesomeIcon icon={faPlus} />Add Expense
          </button>
        </div>
      </div>
    </div>
  );
};