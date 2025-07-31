import React, { useState, useEffect } from 'react';


import { BudgetCards } from './utill-Components/BudgetCards';
import { ButtonCards } from './utill-Components/ButtonCards';
import { CategoryCards } from './utill-Components/CategoryCards';

import { List } from './components/List';
import { Chart } from './components/Chart';
import { AddExpense } from './components/AddExpense';
import { AddBudget } from './components/AddBudget';
import { EditExpense } from './components/EditExpense';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass, faWallet, faPizzaSlice,
  faSuitcaseRolling, faHospital, faBagShopping
} from '@fortawesome/free-solid-svg-icons';

import './css/ExpenseMain.css';

export const ExpenseMain = () => {
  // State variables to manage budget, expenses, and UI states
  const [showAddBudget, setShowAddBudget] = useState(false);
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [showEditExpense, setShowEditExpense] = useState(false);
  const [budget, setBudget] = useState(() => {
    const saved = localStorage.getItem("budget");
    return saved ? parseFloat(saved) : 0;
  });
  const [budgetAmount, setBudgetAmount] = useState("");
  const [expense, setExpense] = useState(() => {
    const saved = localStorage.getItem("expense");
    return saved ? parseFloat(saved) : 0;
  });
  const [expenseList, setExpenseList] = useState(() => {
    const saved = localStorage.getItem("expenseList");
    return saved ? JSON.parse(saved) : [];
  });
  const [editingExpense, setEditingExpense] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All Expenses');

  useEffect(() => {
    localStorage.setItem("budget", budget);
  }, [budget]);

  useEffect(() => {
    localStorage.setItem("expense", expense);
  }, [expense]);

  useEffect(() => {
    localStorage.setItem("expenseList", JSON.stringify(expenseList));
  }, [expenseList]);

  useEffect(() => {
    document.body.style.overflow = (showAddBudget || showAddExpense || showEditExpense) ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [showAddBudget, showAddExpense, showEditExpense]);

  const handleOperationClick = (operation) => {
    setShowAddBudget(operation === "Add Budget");
    setShowAddExpense(operation === "Add Expense");
  };

  const handleAddBudget = (amount) => {
    setBudget(parseFloat(amount)); 
  };

  const handleAddExpense = (expenseData) => {
    const { title, amount, date, category } = expenseData;
    const parsedAmount = parseFloat(amount);
    setExpense(prev => prev + parsedAmount);
    setExpenseList(prev => [
      ...prev,
      { title, amount: parsedAmount, date, category }
    ]);
  };

  const handleEditExpense = (expense, index) => {
    setEditingExpense({ ...expense, index });
    setShowEditExpense(true);
  };

  const handleSaveEditedExpense = (updatedExpense) => {
    const updatedList = [...expenseList];
    const originalAmount = expenseList[updatedExpense.index].amount;
    updatedList[updatedExpense.index] = {
      title: updatedExpense.title,
      amount: parseFloat(updatedExpense.amount),
      date: updatedExpense.date,
      category: updatedExpense.category,
    };
    const difference = parseFloat(updatedExpense.amount) - originalAmount;
    setExpense(prev => prev + difference);
    setExpenseList(updatedList);
    setShowEditExpense(false);
    setEditingExpense(null);
  };

  const handleDeleteExpense = (indexToDelete) => {
    const deletedAmount = expenseList[indexToDelete].amount;
    setExpense(prev => prev - deletedAmount);
    setExpenseList(prev => prev.filter((_, idx) => idx !== indexToDelete));
  };

  // Categories for filtering expenses

  const categories = [
    { name: 'Search', icon: <FontAwesomeIcon icon={faMagnifyingGlass} /> },
    { name: 'All Expenses', icon: <FontAwesomeIcon icon={faWallet} /> },
    { name: 'Food & Drinks', icon: <FontAwesomeIcon icon={faPizzaSlice} /> },
    { name: 'Groceries', icon: <FontAwesomeIcon icon={faBagShopping} /> },
    { name: 'Travel', icon: <FontAwesomeIcon icon={faSuitcaseRolling} /> },
    { name: 'Health', icon: <FontAwesomeIcon icon={faHospital} /> },
  ];

  let filteredExpenses = [];

  if (selectedCategory === 'All Expenses') {
    filteredExpenses = expenseList;
  } else {
    filteredExpenses = expenseList.filter(exp => exp.category === selectedCategory);
  }

  return (
    <div className="container expenseMain-container">
      <div className="expenseMain-headerRow">
        <p className="expenseMain-headerText">Hello, Punit Jadhav</p>
      </div>

      <div className="cards expenseMain-cards">
        <BudgetCards title="Total Budget" budget={budget} />
        <BudgetCards title="Total Expense" budget={expense} />
        <BudgetCards title="Remaining Budget" budget={budget - expense} />
      </div>

      <div className="list expenseMain-list">
        {categories.map(({ name, icon }) => (
          <CategoryCards
            key={name}
            category={<>{icon} {name}</>}
            isSelected={selectedCategory === name}
            onClick={() => setSelectedCategory(name)}
          />
        ))}
        <ButtonCards operation="Add Budget" onClick={handleOperationClick} />
        <ButtonCards operation="Add Expense" onClick={handleOperationClick} />
      </div>

      <div className="expenseManagement expenseMain-expenseManagement">
        <div className="expenseChart expenseMain-expenseChart">
          <Chart expenses={expenseList} />
        </div>

        <div className="expenseList expenseMain-expenseList">
          <List
            expenses={filteredExpenses}
            onEdit={handleEditExpense}
            onDelete={handleDeleteExpense}
          />
        </div>

        {showAddBudget && (
          <div className="ModalContainerAddBudget">
            <AddBudget
              onClose={() => setShowAddBudget(false)}
              onAddBudget={handleAddBudget}
            />
          </div>
        )}

        {showAddExpense && (
          <div className="ModalContainerAddBudget">
            <AddExpense
              onClose={() => setShowAddExpense(false)}
              onAddExpense={handleAddExpense}
            />
          </div>
        )}

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