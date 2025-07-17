import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/EditExpense.css';

export const EditExpense = () => {
  return (
    <div className="mainContainer editExpense-mainContainer">
      <div className="addExpenseContainer editExpense-addExpenseContainer">
        <div className="header editExpense-header">
          <p>Edit Expense</p>
          <button className="closeButton">
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <hr className="editExpense-hr" />
        <div className="form editExpense-form">
          <p className="formLabel editExpense-formLabel">Expense Name</p>
          <input
            className="formInput editExpense-formInput"
            type="text"
            placeholder="Expense Name"
          />
          <p className="formLabel editExpense-formLabel">Date</p>
          <input
            className="formInput editExpense-formInput"
            type="date"
          />
          <p className="formLabel editExpense-formLabel">Expense Category</p>
          <input
            className="formInput editExpense-formInput"
            type="text"
            placeholder="Category"
          />
          <p className="formLabel editExpense-formLabel">Expense Amount</p>
          <input
            className="formInput editExpense-formInput"
            type="text"
            placeholder="Amount"
          />
          <button className="submitButton editExpense-submitButton">
            <FontAwesomeIcon icon={faPlus} />Add Expense
          </button>
        </div>
      </div>
    </div>
  )
}
