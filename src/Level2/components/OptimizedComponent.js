import React, { Component } from 'react';

class OptimizedComponent extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.data !== this.props.data;
    }

    render() {
        return <div className="bg-blue-200 p-4 rounded-md">{this.props.data}</div>;
    }
}

export default OptimizedComponent;
