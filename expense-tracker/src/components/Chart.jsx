import React from 'react'
import '../css/Chart.css';

export const Chart = () => {
  return (
    <>
    <div className='mainContainer chart-mainContainer'>
        <div className='leftContainer chart-leftContainer'>
            <div className='chartHeader chart-chartHeader'>
                <p>Expense Chart</p>
            </div>
            
        </div>
        <div className='rightContainer chart-rightContainer'>
            <div className='chartHeader chart-chartHeader'>
                <p>Expense Tracker</p>
            </div>
        </div>
    </div>
    </>
  )
}
