import React from 'react';
import Square from '../Square';
import './style.css';

class Board extends React.Component {
  renderSquare(i, column, row) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i, {column, row})}
      />
    );
  }

  render() {
    return (
      <div className="game-board">
        <div className="board-row">
          {this.renderSquare(0, 1, 1)}
          {this.renderSquare(1, 1, 2)}
          {this.renderSquare(2, 1, 3)}
        </div>
        <div className="board-row">
          {this.renderSquare(3, 2, 1)}
          {this.renderSquare(4, 2, 2)}
          {this.renderSquare(5, 2, 3)}
        </div>
        <div className="board-row">
          {this.renderSquare(6, 3, 1)}
          {this.renderSquare(7, 3, 2)}
          {this.renderSquare(8, 3, 3)}
        </div>
      </div>
    );
  }
}

export default Board;