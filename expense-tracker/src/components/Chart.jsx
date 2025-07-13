import React from 'react'

export const Chart = () => {
  return (
    <>
    <div className='mainContainer' style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        
        
    }} >
        <div className='leftContainer' style={{}}>
            <div className='chartHeader' style={{}}>
                <p>Expense Chart</p>
            </div>
            
        </div>
        <div className='rightContainer' style={{}}>
            <div className='chartHeader' style={{}}>
                <p>Expense Tracker</p>
            </div>
        </div>
    </div>
    </>
  )
}
