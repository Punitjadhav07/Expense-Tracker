import React, { useState } from 'react';
import { BudgetCards } from '../utill-Components/BudgetCards'
import ButtonCards from '../utill-Components/ButtonCards';
import { CategoryCards } from '../utill-Components/CategoryCards';

export const ExpenseMain = () => {
  const [budget, setBudget] = useState(0); // Example
  const [expense, setExpense] = useState(0); // Example
  let cat=["All Expenses","Food & Drinks","Travel","Health"];
  return (
    <>
    
      <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', height: '80px' }}>
        <p style={{ fontSize: "48px", marginLeft: "121px", height: "55px", width: "406px" }}>
          Hello Punit Jadhav
        </p>
      </div>

      <div className="cards" style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '20px',
        gap: '20px'
      }}>
        <BudgetCards title={"Total Budget"} budget={budget} />
        <BudgetCards title={"Total Expense"} budget={expense} />
        <BudgetCards title={"Remaining Budget"} budget={budget - expense} />
      </div>

      <div style={{
        width: '1200px',
        height: '48px',
        marginLeft: '121px',
        marginTop: '20px',
        display: 'flex',
        gap: '20px',
      }}>
        {cat.map((category, i) => (
          <CategoryCards key={i} category={category} />
        ))}
        <ButtonCards operation={"Add Budget"} />
        <ButtonCards operation={"Add Expense"} />
      </div>

    </>
  );
}

export default ExpenseMain;