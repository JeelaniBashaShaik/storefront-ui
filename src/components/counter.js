import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Count: {this.props.count}</p>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button>
      </div>
    );
  }

  incrementCounter = () => {
    console.log('increm');
    this.props.incrementCounter();
  };

  decrementCounter = () => {
    console.log('decrem');
    this.props.decrementCounter();
  };
}
