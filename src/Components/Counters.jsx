import React from 'react';
import Counter from './Counter';

export default class Counters extends React.Component {
  render() {
    const { counters, onIncrement, onDecrement, onDelete } = this.props;
    return (
      <div>
        <button className="btn btn-info btn-sm m-3" onClick={this.props.onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter key={counter.id} counter={counter} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete} />
        ))}
      </div>
    );
  }
}
