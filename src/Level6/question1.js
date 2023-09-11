import React from 'react';
import ConcurrentComponent from './components/ConcurrentComponent';

function Question1() {
    return (
        <div className="p-4">
            <h2 className="text-lg font-bold">Implementing Concurrent Rendering in React:</h2>
            <ConcurrentComponent />
            <div className="mt-4 bg-yellow-200 p-4 rounded-md">
                <h2 className="text-lg font-bold">Fun Fact:</h2>
                <p>Concurrent rendering is a major feature in React 18 and beyond. It allows React to work on multiple tasks simultaneously, making apps feel faster and more responsive.</p>
            </div>
        </div>
    );
}

export default Question1;
