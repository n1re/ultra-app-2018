import React from 'react';
import './style.css';

function HistoryList({steps, jumpTo}) {

  const formPosition = ({column, row}) => {
    if (column === 0) return;

    return (
      <span>{`Column: ${column}, Row: ${row}`}<br></br></span>
    );
  }

  const formButton = (index) => {
    const step = ++index;
    const innerText = `Go to step`;

    return (
      <button onClick={() => jumpTo(step)}>
        {innerText}
      </button>
    );
  }

  const realSteps = steps.slice(1, ++steps.length);
  
  const listItems = realSteps.map(({ position }, index) => {
    return (
      <li key={index}>
        {formPosition(position)}
        {formButton(index)}
      </li>
    );
  });

  return (
    <ol>
      {listItems}
    </ol>
  );
}

export default HistoryList;