import React, { Component } from 'react';

class ForceRenderClassComponent extends Component {
    handleButtonClick = () => {
        this.forceUpdate();
    };

    render() {
        return (
            <div className="p-4 border rounded-md">
                <h2 className="text-xl font-bold">Class Component</h2>
                <button onClick={this.handleButtonClick} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                    Re-render
                </button>
                <p className="mt-2">Rendered at: {new Date().toISOString()}</p>
            </div>
        );
    }
}

export default ForceRenderClassComponent;
