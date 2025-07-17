import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/ButtonCards.css';

export const ButtonCards = ({ operation, onClick }) => {
  return (
    <button
      onClick={() => onClick(operation)}
      className="buttonCards-btn"
    >
      <FontAwesomeIcon icon={faPlus} />
      {operation}
    </button>
  );
};

export default ButtonCards;