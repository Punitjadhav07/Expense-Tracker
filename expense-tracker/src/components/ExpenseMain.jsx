import React, { useState } from 'react';
import { BudgetCards } from '../utill-Components/BudgetCards'
import ButtonCards from '../utill-Components/ButtonCards';
import { CategoryCards } from '../utill-Components/CategoryCards';

export const ExpenseMain = () => {
  const [budget, setBudget] = useState(0); 
  const [expense, setExpense] = useState(0); 
  let cat=["Search","All Expenses","Food & Drinks","Travel","Health"];
  
  return (
    <>
      <div className="container" style={{ marginLeft: "121px", display: 'flex', flexDirection: 'column',    }}>
        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', height: '80px' }}>
          <p style={{ fontSize: "48px", /* marginLeft: "121px", */ height: "55px", width: "406px",textAlign:"left" }}>
            Hello Punit Jadhav
          </p>
        </div>

        <div className="cards" style={{
          display: 'flex',
            width: '1200px',
          justifyContent: 'start',
          alignItems: 'center',
          marginTop: '20px',
          gap: '20px'
        }}>
          <BudgetCards title={"Total Budget"} budget={budget} />
          <BudgetCards title={"Total Expense"} budget={expense} />
          <BudgetCards title={"Remaining Budget"} budget={budget - expense} />
        </div>

        <div class="list" style={{
          width: '1200px',
          height: '48px',
          /* marginLeft: '121px', */
          marginTop: '20px',
          display: 'flex',
          gap: '20px',
          justifyContent:'space-evenly'
        }}>
          {cat.map((category, i) => (
            <CategoryCards key={i} category={category} />
          ))}
          <ButtonCards operation={"Add Budget"} />
          <ButtonCards operation={"Add Expense"} />
        </div>
        <div className="expenseManagement" style={{
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'center',
            // alignItems: 'center',
            gap: '20px',
          
        }}> 
            <div className='expenseChart' style={{
                width: '1200px',
                height: '487px'

            }}><p>Chart</p>

            </div>
            <div className="expenseList" style={{
                width: '1200px',
                height: '487px'
            }}>
                <p>List</p>
            </div>


        </div>
      </div>
    </>
  );
}

export default ExpenseMain;