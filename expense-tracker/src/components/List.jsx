import React from 'react'

export const List = () => {
  return (
    <div className="list" style={{
            display: 'flex',
            width: '1200px',
            height: '58px',
            border: "1px solid #B5B5B5",
    }}>
        <div className="expenseInfo" style={{
           
            
        }}>
            <div className='srNo' style={{

            }
            }><p>Sr.</p>

            </div>
            <div className='expenseName' style={{

            }
            }><p>Expense</p>

            </div>
            <div className='amount' style={{

            }
            }><p>Amount</p>

            </div>
        </div>
        <div className="expenseOperation" style={{
        }}>
            <div>
                <p> Edit/Delete</p>

            </div>
            <div>
                <button style={{
                    width: "103px",
                    height: "42px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "700",
                    backgroundColor: "#B5B5B5",
                    border: "none",
                    cursor: "pointer",
                }}>Edit</button>
                <button style={{
                    width: "121px",
                    height: "42px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "700",
                    backgroundColor: "#FFE1E1",
                    border: "none",
                    cursor: "pointer",
                }}>Delete</button>

            </div>
        </div>
    </div>
  )
}
