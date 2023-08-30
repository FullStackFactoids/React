import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div>
                <code className="text-sm bg-gray-200 p-2 rounded">
                    {'// Class Component'}
                </code>
                <h1>Hello, {this.props.name}</h1>
            </div>
        );
    }
}

export default Welcome;
