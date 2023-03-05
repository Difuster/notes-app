import React from 'react';
import './AddButton.scss';

export default function AddButton({value}) {
  return (
    <button
    className="btn"
    >
      {value}
    </button>
  )
}
