import React from 'react';
import './style.css';

function Square(props) {
  const wonWithClass = props.won ? ' won-with' : null;

  return (
    <button
    className={`square${wonWithClass}`}
    onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;