import React from 'react'

export const List = () => {
  const expenses = [
  ];

  return (
    <div>
      {/* Header */}
      <div className="list" style={{
        display: 'flex',
        width: '100%',
        height: '58px',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        boxSizing: 'border-box',
        fontWeight: '600',
        fontSize: '16px',
        textAlign: 'center',
        borderBottom: '2px solid #B5B5B5',
      }}>
        <div className='srNo' style={{ flex: 1 }}>
          <p>Sr.</p>
        </div>
        <div className='expenseName' style={{ flex: 3 }}><p>Expense</p></div>
        <div className='amount' style={{ flex: 2 }}><p>Amount</p></div>
        <div className='expenseOperation' style={{ flex: 3, textAlign: 'center' }}>
          <p>Edit/Delete</p>
        </div>
      </div>

      {/* Expense List */}
      {expenses.map((item, index) => (
        <div key={item.id} style={{
          display: 'flex',
          width: '100%',
          height: '58px',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 20px',
          boxSizing: 'border-box',
          fontSize: '15px',
          borderBottom: '1px solid #ddd',
          textAlign: 'center'
        }}>
          <div style={{ flex: 1 }}>{index + 1}</div>
          <div style={{ flex: 3 }}>{item.name}</div>
          <div style={{ flex: 2 }}>₹{item.amount}</div>
          <div style={{ flex: 3 }}>
            <button style={{
              marginRight: '10px',
              background: '#B5B5B5',
              border: 'none',
              borderRadius: '6px',
              padding: '6px 12px',
              cursor: 'pointer',
            }}>Edit</button>
            <button style={{
              background: '#FFE1E1',
              border: 'none',
              borderRadius: '6px',
              padding: '6px 12px',
              cursor: 'pointer',
            }}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}