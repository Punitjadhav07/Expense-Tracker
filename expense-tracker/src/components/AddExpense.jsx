import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus } from '@fortawesome/free-solid-svg-icons';



export const AddExpense = () => {
  return (
    <div className="mainContainer" style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "520px",
      height: "524px",
    }}>
      <div className="addExpenseContainer" style={{
        width: "440px",
        height: "476px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px"
      }}>
        <div className="header" style={{
          display: "flex",
          alignItems: "center",
          fontSize: "24px",
          fontWeight:"800"  ,
          justifyContent: "space-between"
        }}>
          <p>Add Expense</p>
          <button className="closeButton">
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <hr style={{ width: "100%", borderTop: "1px solid black" }} />
        <div className="form" style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "space-between"
        }}>
          <p className="formLabel" style={{ fontSize: "16px" }}>Expense Name</p>
          <input
            className="formInput"
            type="text"
            placeholder="Expense Name"
            style={{
              width: "100%",
              height: "51px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #8E8E93",
              fontSize: "16px"
            }}
          />

          <p className="formLabel" style={{ fontSize: "16px" }}>Date</p>
          <input
            className="formInput"
            type="date"
            style={{
              width: "100%",
              height: "51px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #8E8E93",
              fontSize: "16px"
            }}
          />

          <p className="formLabel" style={{ fontSize: "16px" }}>Expense Category</p>
          <input
            className="formInput"
            type="text"
            placeholder="Category"
            style={{
              width: "100%",
              height: "51px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #8E8E93",
              fontSize: "16px"
            }}
          />

          <p className="formLabel" style={{ fontSize: "16px" }}>Expense Amount</p>
          <input
            className="formInput"
            type="text"
            placeholder="Amount"
            style={{
              width: "100%",
              height: "51px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #8E8E93",
              fontSize: "16px"
            }}
            
          />
          <button className="submitButton" style={{width:"100%",height:"48px",backgroundColor:"#5C6AFF",fontSize:"16px",fontWeight:"700",border:"none", color:"white",textAlign:"left",padding:"10px"}}>
                          <FontAwesomeIcon icon={faPlus} />Add Expense
                        </button>
        </div>
      </div>
    </div>
  );
};