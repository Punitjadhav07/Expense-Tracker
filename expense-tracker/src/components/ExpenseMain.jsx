import React, { useState } from 'react';
import { BudgetCards } from '../utill-Components/BudgetCards';
import ButtonCards from '../utill-Components/ButtonCards';
import { CategoryCards } from '../utill-Components/CategoryCards';
import { List } from './List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit, faTrash,
  faMagnifyingGlass, faWallet, faPizzaSlice, faSuitcaseRolling, faHospital
} from '@fortawesome/free-solid-svg-icons';
import { Chart } from './Chart';
import { AddExpense } from './AddExpense';
import { AddBudget } from './AddBudget';
import { EditExpense } from './EditExpense';
import '../css/ExpenseMain.css';

export const ExpenseMain = () => {
  const [budget, setBudget] = useState(0);
  const [expense, setExpense] = useState(0);

  // Flags for showing AddBudget or AddExpense components
  const [showAddBudget, setShowAddBudget] = useState(false);
  const [showAddExpense, setShowAddExpense] = useState(false);

  // Handle button clicks
  const handleOperationClick = (operation) => {
    if (operation === "Add Budget") {
      setShowAddBudget(true);
      setShowAddExpense(false);
    } else if (operation === "Add Expense") {
      setShowAddExpense(true);
      setShowAddBudget(false);
    }
  };

  const cat = [
    <>
      <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
    </>,
    <>
      <FontAwesomeIcon icon={faWallet} /> All Expenses
    </>,
    <>
      <FontAwesomeIcon icon={faPizzaSlice} /> Food & Drinks
    </>,
    <>
      <FontAwesomeIcon icon={faSuitcaseRolling} /> Travel
    </>,
    <>
      <FontAwesomeIcon icon={faHospital} /> Health
    </>
  ];

  return (
    <div className="container expenseMain-container">
      <div className="expenseMain-headerRow">
        <p className="expenseMain-headerText">
          Hello, Punit Jadhav
        </p>
      </div>

      {/* Budget Summary Cards */}
      <div className="cards expenseMain-cards">
        <BudgetCards title={"Total Budget"} budget={budget} />
        <BudgetCards title={"Total Expense"} budget={expense} />
        <BudgetCards title={"Remaining Budget"} budget={budget - expense} />
      </div>

      {/* Category Buttons & Action Buttons */}
      <div className="list expenseMain-list">
        {cat.map((category, i) => (
          <CategoryCards key={i} category={category} />
        ))}
        <ButtonCards operation={"Add Budget"} onClick={handleOperationClick} />
        <ButtonCards operation={"Add Expense"} onClick={handleOperationClick} />
      </div>

      {/* Chart + List + Conditional Forms */}
      <div className="expenseManagement expenseMain-expenseManagement">
        <div className='expenseChart expenseMain-expenseChart'>
          <Chart />
        </div>

        <div className="expenseList expenseMain-expenseList">
          <List />
        </div>

        {/* Show forms based on button click */}
        {showAddBudget && <AddBudget />}
        {showAddExpense && <AddExpense />}
        {/* Optional: <EditExpense /> */}
      </div>
    </div>
  );
};

export default ExpenseMain;