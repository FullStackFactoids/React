import React, { useEffect, useState } from 'react';

function Question2() {
    const [prop, setProp] = useState('Initial Prop');
    const [otherState, setOtherState] = useState('Initial State');

    useEffect(() => {
        // Handle prop change
        console.log(`Prop has changed to: ${prop}`);
    }, [prop]);

    // Example for Fun Fact: This effect runs on every render
    useEffect(() => {
        console.log('This effect runs on every render');
    });
    // Example for Fun Fact: This effect runs only once
    useEffect(() => {
        console.log('This effect runs only once');
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold">Handling Side-Effects Related to Prop Changes:</h2>
            <button className="bg-blue-500 text-white p-2 rounded" onClick={() => setProp('Updated Prop')}>Update Prop</button>
            <button className="bg-red-500 text-white p-2 rounded ml-4" onClick={() => setOtherState('Updated State')}>Update Other State</button>
            <div className="mt-4">
                <p>Current Prop: {prop}</p>
                <p>Other State: {otherState}</p>
            </div>
            <div className="mt-4 bg-yellow-200 p-4 rounded-md">
                <h2 className="text-lg font-bold">Fun Fact:</h2>
                <p>The dependency array is a powerful feature of useEffect. It allows you to control when the effect runs.</p>
                <ul className="list-disc list-inside">
                    <li>This effect runs on every render: <code>React.useEffect(() => {"console.log('Runs on every render')"});</code></li>
                    <li>This effect runs only once: <code>React.useEffect(() => {"console.log('Runs only once')"}, []);</code></li>
                </ul>
            </div>
        </div>
    );
}

export default Question2;
