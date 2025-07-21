

import React from 'react';
import '../css/List.css';

export const List = ({ expenses, onEdit, onDelete }) => {
  return (
    <div>
    
      <div className="list list-header">
        <div className="srNo list-srNo"><p>Sr.</p></div>
        <div className="expenseName list-expenseName"><p>Expense</p></div>
        <div className="amount list-amount"><p>Amount</p></div>
        <div className="expenseOperation list-expenseOperation"><p>Edit/Delete</p></div>
      </div>

      
      {expenses.map((item, index) => (
        <div key={index} className="list-row">
          <div className="list-row-srNo">{index + 1}</div>
          <div className="list-row-expenseName">{item.title}</div> 
          <div className="list-row-amount">₹{item.amount}</div>
          <div className="list-row-expenseOperation">

            <button
              className="list-editButton"
              onClick={() => onEdit(item, index)}
            >
              Edit
            </button>
          
            <button
              className="list-deleteButton"
              onClick={() => onDelete(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};