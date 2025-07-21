import React from 'react'
import '../css/Chart.css';
import { Barchart } from './Barchart';
import { Piechart } from './Piechart';

export const Chart = ({expenseList}) => {
  return (
    <>
    <div className='mainContainer chart-mainContainer'>
        <div className='leftContainer chart-leftContainer'>
            <div className='chartHeader chart-chartHeader'>
                <p>Expense Chart</p>
                <Piechart expenseList={expenseList}/>
            </div>
            
        </div>
        <div className='rightContainer chart-rightContainer'>
            <div className='chartHeader chart-chartHeader'>
                <p>Expense Tracker</p>
                <Barchart expenseList={expenseList}/>
            </div>
        </div>
    </div>
    </>
  )
}
