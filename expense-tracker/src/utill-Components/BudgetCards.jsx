import React from 'react';


export const BudgetCards = ({ title, budget }) => {
  return (
    <div className="card" style={{
      width: '100%',
      height: '167px',
      borderRadius: '24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      backgroundColor: '#F5F5F5'
    }}>
      <p className="Budget" style={{
        fontSize: '24px',
        fontWeight: 400,
        marginBottom: '10px',
        color: '#B5B5B5'
      }}>{title}</p>
      <p style={{
        fontSize: '48px',
        fontWeight: 700,
        color: '#1C1C1E'
      }}>₹{budget}</p>
    </div>
  );
}

export default BudgetCards;