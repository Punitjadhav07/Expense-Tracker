

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../css/EditExpense.css';

export const EditExpense = ({ expense, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  // Load existing data into the form
  useEffect(() => {
    if (expense) {
      setTitle(expense.title || '');
      setDate(expense.date || '');
      setCategory(expense.category || '');
      setAmount(expense.amount || '');
    }
  }, [expense]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedExpense = {
      ...expense,
      title,
      date,
      category,
      amount,
    };

    onSave(updatedExpense);
  };

  return (
    <div className="mainContainer editExpense-mainContainer">
      <div className="addExpenseContainer editExpense-addExpenseContainer">
        <div className="header editExpense-header">
          <p>Edit Expense</p>
          <button className="closeButton" onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <hr className="editExpense-hr" />
        <form className="form editExpense-form" onSubmit={handleSubmit}>
          <p className="formLabel editExpense-formLabel">Expense Name</p>
          <input
            className="formInput editExpense-formInput"
            type="text"
            placeholder="Expense Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <p className="formLabel editExpense-formLabel">Date</p>
          <input
            className="formInput editExpense-formInput"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <p className="formLabel editExpense-formLabel">Expense Category</p>
          <input
            className="formInput editExpense-formInput"
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <p className="formLabel editExpense-formLabel">Expense Amount</p>
          <input
            className="formInput editExpense-formInput"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <button type="submit" className="saveButton">
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};