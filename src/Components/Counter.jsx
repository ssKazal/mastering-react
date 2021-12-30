import React from 'react';

export default class Counter extends React.Component {
  render() {
    const { counter } = this.props;

    return (
      <div>
        <button className="btn btn-secondary position-relative btn-sm m-3" onClick={() => this.props.onIncrement(counter)}>
          +<span className={this.getBadgeClass()}>{this.formatCount()}</span>
        </button>
        <button className="btn btn-secondary btn-sm m-3" disabled={counter.value === 0 ? 'disable' : ''} onClick={() => this.props.onDecrement(counter)}>
          -
        </button>
        <button className="btn btn-danger btn-sm m-3" onClick={() => this.props.onDelete(counter)}>
          X
        </button>
      </div>
    );
  }

  getBadgeClass() {
    let classes = 'position-absolute top-0 start-100 translate-middle badge rounded-pill bg-';
    return (classes += this.props.counter.value === 0 ? 'warning' : 'info');
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'None' : value;
  }
}
