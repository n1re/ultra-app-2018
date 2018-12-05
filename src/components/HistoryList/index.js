import React from 'react';
import './style.css';

class HistoryList extends React.Component {
  constructor(options) {
    super(options);

    this.state = {
      reversed: false,
    }
  }
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
    const items = this.props.steps.map((steps, index) => this.listItem(steps, index));
    
    if (this.state.reversed) return items.reverse();

    return items;
  }

  reverse() {
    this.setState({
      reversed: !this.state.reversed
    })
  }

  reverseButton() {
    return (
      <button onClick={() => this.reverse()}>
        Reverse list
      </button>
    );
  }

  render() {
    const reverseButton = this.reverseButton();
    const listItems = this.listItems();

    return (
      <div className='history-list'>
        {reverseButton}
        <ol reversed={this.state.reversed}>
          {listItems}
        </ol>
      </div>
    );
  }
}

export default HistoryList;