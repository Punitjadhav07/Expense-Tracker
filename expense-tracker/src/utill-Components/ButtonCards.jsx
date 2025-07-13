import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const ButtonCards = ({ operation }) => {
  return (
    <button style={{
      width: "147px",
      height: "48px",
      borderRadius: "12px",
      backgroundColor: "#5C6AFF",
      color: "white",
      fontSize: "16px",
      fontWeight: "500",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px"
    }}>
      <FontAwesomeIcon icon={faPlus} />
      {operation}
    </button>
  );
};

export default ButtonCards;