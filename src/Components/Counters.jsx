import React from "react";
import Counter from "./Counter";

export default class Counters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
      ]
    };
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters }); 
  }

  render() {
    return (
      <div>
        <button className="btn btn-info btn-sm m-3" onClick={this.handleReset}>Reset</button>
       {this.state.counters.map((counter) => <Counter key={counter.id} onDelete={this.handleDelete} onIncrement={this.handleIncrement} counter={counter} />)}
      </div>
    );
  }
}