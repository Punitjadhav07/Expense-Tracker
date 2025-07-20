// ExpenseMain.jsx
// Main dashboard and state manager for the Expense Tracker app.
// Handles all global state: expenses, budget, modals, filtering, and passes props to all child components.

import React, { useState, useEffect } from 'react';
import { BudgetCards } from '../utill-Components/BudgetCards';
import ButtonCards from '../utill-Components/ButtonCards';
import { CategoryCards } from '../utill-Components/CategoryCards';
import { List } from './List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass, faWallet, faPizzaSlice,
  faSuitcaseRolling, faHospital, faBagShopping
} from '@fortawesome/free-solid-svg-icons';
import { Chart } from './Chart';
import { AddExpense } from './AddExpense';
import { AddBudget } from './AddBudget';
import { EditExpense } from './EditExpense';
import '../css/ExpenseMain.css';

export const ExpenseMain = () => {
  // Modal visibility state
  const [showAddBudget, setShowAddBudget] = useState(false); // Show AddBudget modal
  const [showAddExpense, setShowAddExpense] = useState(false); // Show AddExpense modal
  const [showEditExpense, setShowEditExpense] = useState(false); // Show EditExpense modal
  // Budget and expense state
  const [budget, setBudget] = useState(0); // Total budget
  const [budgetAmount, setBudgetAmount] = useState(''); // Last budget amount added
  const [expense, setExpense] = useState(0); // Total spent
  const [expenseList, setExpenseList] = useState([]); // All expenses (array of {title, amount, date, category})
  // Editing state
  const [editingExpense, setEditingExpense] = useState(null); // Expense being edited
  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState('All Expenses'); // Current filter

  // Lock scroll when any modal is open
  useEffect(() => {
    document.body.style.overflow = (showAddBudget || showAddExpense || showEditExpense) ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [showAddBudget, showAddExpense, showEditExpense]);

  // Handle Add Budget/Add Expense button clicks
  const handleOperationClick = (operation) => {
    setShowAddBudget(operation === "Add Budget");
    setShowAddExpense(operation === "Add Expense");
  };

  // Add a new budget (from AddBudget modal)
  const handleAddBudget = (amount) => {
    setBudget(prev => prev + parseFloat(amount));
    setBudgetAmount(amount);
  };

  // Add a new expense (from AddExpense modal)
  const handleAddExpense = (expenseData) => {
    const { title, amount, date, category } = expenseData;
    const parsedAmount = parseFloat(amount);
    setExpense(prev => prev + parsedAmount);
    setExpenseList(prev => [
      ...prev,
      { title, amount: parsedAmount, date, category }
    ]);
  };

  // Open EditExpense modal for a specific expense (from List)
  const handleEditExpense = (expense, index) => {
    setEditingExpense({ ...expense, index });
    setShowEditExpense(true);
  };

  // Save an edited expense (from EditExpense modal)
  const handleSaveEditedExpense = (updatedExpense) => {
    const updatedList = [...expenseList];
    const originalAmount = expenseList[updatedExpense.index].amount;
    updatedList[updatedExpense.index] = {
      title: updatedExpense.title,
      amount: parseFloat(updatedExpense.amount),
      date: updatedExpense.date,
      category: updatedExpense.category,
    };
    // Update total spent
    const difference = parseFloat(updatedExpense.amount) - originalAmount;
    setExpense(prev => prev + difference);
    setExpenseList(updatedList);
    setShowEditExpense(false);
    setEditingExpense(null);
  };

  // Delete an expense (from List)
  const handleDeleteExpense = (indexToDelete) => {
    const deletedAmount = expenseList[indexToDelete].amount;
    setExpense(prev => prev - deletedAmount);
    setExpenseList(prev => prev.filter((_, idx) => idx !== indexToDelete));
  };

  // Category names and icons for filtering and display
  const categoryNames = [
    'All Expenses',
    'Food & Drinks',
    'Groceries',
    'Travel',
    'Health'
  ];
  const categoryIcons = [
    <><FontAwesomeIcon icon={faWallet} /> All Expenses</>,
    <><FontAwesomeIcon icon={faPizzaSlice} /> Food & Drinks</>,
    <><FontAwesomeIcon icon={faBagShopping} /> Groceries</>,
    <><FontAwesomeIcon icon={faSuitcaseRolling} /> Travel</>,
    <><FontAwesomeIcon icon={faHospital} /> Health</>
  ];

  // Filter expenses by selected category
  const filteredExpenses = selectedCategory === 'All Expenses'
    ? expenseList
    : expenseList.filter(exp => exp.category === selectedCategory);

  return (
    <div className="container expenseMain-container">
      {/* App header */}
      <div className="expenseMain-headerRow">
        <p className="expenseMain-headerText">Hello, Punit Jadhav</p>
      </div>

      {/* Budget summary cards */}
      <div className="cards expenseMain-cards">
        <BudgetCards title="Total Budget" budget={budget} />
        <BudgetCards title="Total Expense" budget={expense} />
        <BudgetCards title="Remaining Budget" budget={budget - expense} />
      </div>

      {/* Category filter and action buttons */}
      <div className="list expenseMain-list">
        {categoryNames.map((cat, i) => (
          <CategoryCards
            key={cat}
            category={categoryIcons[i]}
            isSelected={selectedCategory === cat}
            onClick={() => setSelectedCategory(cat)}
          />
        ))}
        <ButtonCards operation="Add Budget" onClick={handleOperationClick} />
        <ButtonCards operation="Add Expense" onClick={handleOperationClick} />
      </div>

      <div className="expenseManagement expenseMain-expenseManagement">
        {/* Chart receives all expenses as a prop for dynamic rendering */}
        <div className="expenseChart expenseMain-expenseChart">
          <Chart expenses={expenseList} />
        </div>

        {/* List receives filtered expenses and update handlers as props */}
        <div className="expenseList expenseMain-expenseList">
          <List
            expenses={filteredExpenses}
            onEdit={handleEditExpense}
            onDelete={handleDeleteExpense}
          />
        </div>

        {/* AddBudget modal (shown when showAddBudget is true) */}
        {showAddBudget && (
          <div className="ModalContainerAddBudget">
            <AddBudget
              onClose={() => setShowAddBudget(false)}
              onAddBudget={handleAddBudget}
            />
          </div>
        )}

        {/* AddExpense modal (shown when showAddExpense is true) */}
        {showAddExpense && (
          <div className="ModalContainerAddBudget">
            <AddExpense
              onClose={() => setShowAddExpense(false)}
              onAddExpense={handleAddExpense}
            />
          </div>
        )}

        {/* EditExpense modal (shown when showEditExpense is true) */}
        {showEditExpense && editingExpense && (
          <div className="ModalContainerAddBudget">
            <EditExpense
              expense={editingExpense}
              onClose={() => setShowEditExpense(false)}
              onSave={handleSaveEditedExpense}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseMain;