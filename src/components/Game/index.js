import React from 'react';
import Board from '../Board';
import calculateWinner from './calculateWinner';
import HistoryList from '../HistoryList';
import './style.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        {
          squares: Array(9).fill(null),
          position: {column: 0, row: 0}
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i, position)  {
    const steps = this.state.steps.slice(0, this.state.stepNumber + 1);
    const current = steps[steps.length - 1];
    const squares = current.squares.slice();

    const winner = calculateWinner(squares);
    const square = squares[i];

    if (winner || square) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      steps: steps.concat([{
        squares,
        position
      }]),
      stepNumber: steps.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  render() {
    const steps = this.state.steps;
    const current = steps[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i, position) => this.handleClick(i, position)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button onClick={() => this.jumpTo(0)}>Go to game start</button>
          <HistoryList
            steps={steps}
            jumpTo={move => this.jumpTo(move)}
          />
        </div>
      </div>
    );
  }
}

export default Game;