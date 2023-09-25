import React, { useState } from 'react';

function OneWayDataFlowExample() {
    const [value, setValue] = useState('');

    return (
        <div className="p-4 border rounded">
            <h2 className="text-xl font-bold mb-2">One-Way Data Flow Example</h2>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="border p-2 mr-2"
            />
            <div className="mt-2">
                <strong>Input Value:</strong> {value}
            </div>
            <p className="mt-2 text-sm text-gray-600">
                In this example, changes in the UI (input) automatically update the component's state (model), demonstrating one-way data flow.
            </p>
        </div>
    );
}

export default OneWayDataFlowExample;
