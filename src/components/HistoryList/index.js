import React from 'react';

function HistoryList(props) {
  
  const moves = props.history.map((step, move) => {
    const desc = move ?
        `Got to move #${move}` :
        'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => props.jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <ol>
      {moves}
    </ol>
  );
}

export default HistoryList;