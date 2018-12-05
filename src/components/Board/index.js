import React from 'react';
import Square from '../Square';
import './style.css';

class Board extends React.Component {
  renderSquare(i, column, row) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i, {column, row})}
      />
    );
  }

  render() {
    const rows = [];
    let squares;
    let square;
    let index = 0;
    let column = 0;
    let row = 1;

    for (let i = 0; i < 3; i++) {
      squares = [];
      column = 1;

      for (let j = 0; j < 3; j++) {
        square = this.renderSquare(index++, column++, row);
        squares.push(square);
      }

      rows.push(<div key={row} className="board-row">{squares}</div>);
      row++;
    }

    return (
      <div className="game-board">
        {rows}
      </div>
    );
  }
}

export default Board;