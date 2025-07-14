// import React, { useState } from 'react';
// import { BudgetCards } from '../utill-Components/BudgetCards'
// import ButtonCards from '../utill-Components/ButtonCards';
// import { CategoryCards } from '../utill-Components/CategoryCards';
// import { List } from './List';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
import { BudgetCards } from '../utill-Components/BudgetCards'
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

export const ExpenseMain = () => {
  const [budget, setBudget] = useState(0); 
  const [expense, setExpense] = useState(0); 
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
    <>
      <div className="container" style={{ paddingLeft: "121px", paddingRight: "121px",display: 'flex', flexDirection: 'column',width: '100%', gap: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', height: '80px' }}>
          <p style={{ fontSize: "48px",fontWeight: "700", /* marginLeft: "121px", */ height: "55px", width: "100%",textAlign:"left" }}>
            Hello, Punit Jadhav
          </p>
        </div>

        <div className="cards" style={{
          display: 'flex',
            width: '100%',
          justifyContent: 'start',
          alignItems: 'center',
          marginTop: '20px',
          gap: '20px'
        }}>
          <BudgetCards title={"Total Budget"} budget={budget} />
          <BudgetCards title={"Total Expense"} budget={expense} />
          <BudgetCards title={"Remaining Budget"} budget={budget - expense} />
        </div>

        <div className="list" style={{
          width: '100%',
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
                width: '100%',
                height: '487px'
            }}>
                <Chart/>

            </div>
            <div className="expenseList" style={{
                width: '100%',
                height: '487px',
                border: "2px solid #B5B5B5",
                borderRadius: '24px',
            }}>
                <List />
                
            </div>
            {/* <AddExpense/>
            <AddBudget/>
            <EditExpense/> */}


        </div>
      </div>
    </>
  );
}

export default ExpenseMain;