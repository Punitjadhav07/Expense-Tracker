import React, { useState, useEffect } from 'react';
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
  const [showAddBudget, setShowAddBudget] = useState(false);
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [budget, setBudget] = useState(0);
  const [budgetAmount, setBudgetAmount] = useState('');
  const [expense, setExpense] = useState(0);
  const [expenseList, setExpenseList] = useState([]); // 🆕 Store each expense with title + amount

  useEffect(() => {
    document.body.style.overflow = (showAddBudget || showAddExpense) ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showAddBudget, showAddExpense]);

  const handleOperationClick = (operation) => {
    if (operation === "Add Budget") {
      setShowAddBudget(true);
      setShowAddExpense(false);
    } else if (operation === "Add Expense") {
      setShowAddExpense(true);
      setShowAddBudget(false);
    }
  };

  const handleAddBudget = (amount) => {
    setBudget(prev => prev + parseFloat(amount));
    setBudgetAmount(amount);
  };

  const handleAddExpense = (expenseData) => {
    const { title, amount } = expenseData;
    const parsedAmount = parseFloat(amount);

    setExpense(prev => prev + parsedAmount);
    setExpenseList(prev => [...prev, { title, amount: parsedAmount }]);
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
        <p className="expenseMain-headerText">Hello, Punit Jadhav</p>
      </div>

      <div className="cards expenseMain-cards">
        <BudgetCards title={"Total Budget"} budget={budget} />
        <BudgetCards title={"Total Expense"} budget={expense} />
        <BudgetCards title={"Remaining Budget"} budget={budget - expense} />
      </div>

      <div className="list expenseMain-list">
        {cat.map((category, i) => (
          <CategoryCards key={i} category={category} />
        ))}
        <ButtonCards operation={"Add Budget"} onClick={handleOperationClick} />
        <ButtonCards operation={"Add Expense"} onClick={handleOperationClick} />
      </div>

      <div className="expenseManagement expenseMain-expenseManagement">
        <div className="expenseChart expenseMain-expenseChart">
          <Chart />
        </div>

        <div className="expenseList expenseMain-expenseList">
          <List expenses={expenseList} /> {/* 🔄 Pass expenseList to List */}
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
              onAddExpense={handleAddExpense} // ✅ Add this line
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseMain;