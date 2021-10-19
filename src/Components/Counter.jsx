import React from 'react';

export default class Counter extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary position-relative btn-sm m-3">
          Increment
          <span className={this.getBadgeClass()}>
            {this.formatCount()}
          </span>
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-3">Delete</button>
      </div>
    );
  }

  getBadgeClass() {
    let classes = 'position-absolute top-0 start-100 translate-middle badge rounded-pill bg-'
    return classes += this.props.counter.value === 0 ? 'warning' : 'info';
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'None' : value;
  }
}
