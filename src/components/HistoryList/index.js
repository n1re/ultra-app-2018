import React from 'react';
import './style.css';

class HistoryList extends React.Component {
  turnPosition({column, row}) {
    if (column === 0) return;

    return (
      <span>{`Column: ${column}, Row: ${row}`}<br></br></span>
    );
  }

  jumpButton(index) {
    const step = ++index;
    const innerText = 'Go to step';

    return (
      <button onClick={() => this.props.jumpTo(step)}>
        {innerText}
      </button>
    );
  }

  listItem(steps, index) {
    const position = steps.position;

    return (
      <li key={index}>
        {this.turnPosition(position)}
        {this.jumpButton(index)}
      </li>
    );
  }

  listItems() {
    return this.props.steps.map((steps, index) => this.listItem(steps, index));
  }

  render() {
    return (
      <ol>
        {this.listItems()}
      </ol>
    );
  }
}

export default HistoryList;