import React from 'react'

export const CategoryCards = ({ category }) => {
  return (
    <button style={{
        width:"147px",
        height:"48px",
        borderRadius:"12px",
        fontSize:"16px",
        fontWeight:"500",
        border:"none",
        cursor:"pointer",
    }}>
      {category}
    </button>
  );
};