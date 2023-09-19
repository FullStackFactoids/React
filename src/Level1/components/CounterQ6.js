import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
    }

    render() {
        return (
            <button onClick={() => this.setState(
                // When state changes, the component re-renders
                { count: this.state.count + 1 })
                // The component will re-render with the updated count
            }>
                {this.state.count}
            </button>
        );
    }
}

export default Counter;
