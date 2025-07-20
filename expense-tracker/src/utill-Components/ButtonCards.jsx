// ButtonCards.jsx
// Renders an action button (Add Budget/Add Expense). Receives label and click handler as props from ExpenseMain.
// When clicked, notifies parent to open the respective modal.

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/ButtonCards.css';

export const ButtonCards = ({ operation, onClick }) => {
  return (
    <button
      onClick={() => onClick(operation)} // Notifies parent to open modal
      className="buttonCards-btn"
    >
      <FontAwesomeIcon icon={faPlus} />
      {operation}
    </button>
  );
};

export default ButtonCards;