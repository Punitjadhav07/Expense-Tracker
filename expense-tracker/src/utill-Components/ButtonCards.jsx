import React from 'react'

export const ButtonCards = ({ operation }) => {
  return (
    <button style={{
        width:"147px",
        height:"48px",
        borderRadius:"12px",
        backgroundColor:"#5C6AFF",
        color:"white",
        fontSize:"16px",
        fontWeight:"500",
        border:"none",
        cursor:"pointer",
    }}>
      {operation}
    </button>
  )
}

export default ButtonCards;