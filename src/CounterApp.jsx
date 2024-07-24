import React, { Component } from 'react'

export default class CounterApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    handleIncrement = () => {
        this.setState({count: this.state.count + 1})
    }

    handleDecrement = () => {
        this.setState({count: this.state.count - 1})
    }

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <h3>Counter: <span>{this.state.count}</span></h3>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    )
  }
}
