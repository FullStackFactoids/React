import React from 'react';
import { CounterComponent } from './components/CounterComponent';

 function Question2() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Level 2 - Question 2</h1>
            <div className="mt-4">
                <h2 className="text-lg font-bold">Counter Component:</h2>
                <CounterComponent />
            </div>
            <div className="mt-4 bg-yellow-200 p-4 rounded-md">
                <h2 className="text-lg font-bold">Fun Fact:</h2>
                <p>Hooks can't be called inside loops, conditions, or nested functions. Attempting to do so will throw an error.</p>
            </div>
        </div>
    );
}

export default Question2;

