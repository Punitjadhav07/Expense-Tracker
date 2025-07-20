// AddExpense.jsx
// Modal form for adding a new expense. Manages local form state and notifies parent on submit.
// Calls onAddExpense to update the main expense list in ExpenseMain.

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/AddExpense.css';

export const AddExpense = ({ onClose, onAddExpense }) => {
  // Local form state for each field
  const [expenseName, setExpenseName] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  // On submit, call parent handler and reset form
  const handleSubmit = () => {
    const newExpense = {
      title: expenseName,
      date: expenseDate,
      category: expenseCategory,
      amount: parseFloat(expenseAmount),
    };
    onAddExpense(newExpense); // Notify parent to update state
    setExpenseName('');
    setExpenseDate('');
    setExpenseCategory('');
    setExpenseAmount('');
    onClose(); // Close modal
  };

  return (
    <div className="mainContainer addExpense-mainContainer">
      <div className="addExpenseContainer addExpense-addExpenseContainer">
        <div className="header addExpense-header">
          <p>Add Expense</p>
          <button className="closeButton" onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <hr className="addExpense-hr" />
        <div className="form addExpense-form">
          {/* Form fields for each property */}
          <p className="formLabel addExpense-formLabel">Expense Name</p>
          <input
            className="formInput addExpense-formInput"
            type="text"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            placeholder="Expense Name"
          />

          <p className="formLabel addExpense-formLabel">Date</p>
          <input
            className="formInput addExpense-formInput"
            type="date"
            value={expenseDate}
            onChange={(e) => setExpenseDate(e.target.value)}
          />

          <p className="formLabel addExpense-formLabel">Expense Category</p>
          <select
            className="formInput addExpense-formInput"
            value={expenseCategory}
            onChange={(e) => setExpenseCategory(e.target.value)}
          >
            <option value="">Choose Category</option>
            <option value="Food & Drinks">Food & Drinks</option>
            <option value="Groceries">Groceries</option>
            <option value="Travel">Travel</option>
            <option value="Health">Health</option>
          </select>

          <p className="formLabel addExpense-formLabel">Expense Amount</p>
          <input
            className="formInput addExpense-formInput"
            type="number"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            placeholder="Amount"
          />
          <button className="submitButton addExpense-submitButton" onClick={handleSubmit}>
            <FontAwesomeIcon icon={faPlus} /> Add Expense
          </button>
        </div>
      </div>
    </div>
  );
};