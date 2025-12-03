// Chart.jsx
import React from 'react';
import '../css/Chart.css';
import { Barchart } from './Barchart';
import { Piechart } from './Piechart';

export const Chart = ({ expenses, selectedCategory = 'All Expenses' }) => {
  return (
    <div className='mainContainer chart-mainContainer'>
      <div className='leftContainer chart-leftContainer'>
        <div className='chartHeader chart-chartHeader'>
          <p>Expense Chart</p>
          <Piechart expenses={expenses} selectedCategory={selectedCategory} />
        </div>
      </div>

      <div className='rightContainer chart-rightContainer'>
        <div className='chartHeader chart-chartHeader'>
          <p>Expense Tracker</p>
          <Barchart expenseList={expenses} />
        </div>
      </div>
    </div>
  );
};