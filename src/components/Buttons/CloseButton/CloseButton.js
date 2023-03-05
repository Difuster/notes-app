import React from 'react';
import './CloseButton.scss';

export default function CloseButton(props) {
  const {handler, value} = props;
  return (
    <button
      className={`delete-btn ${value !== "Закрыть" ? "small" : "big"}`}
      onClick={(e) => handler(e)}
    >
      {value}
    </button>
  )
}
