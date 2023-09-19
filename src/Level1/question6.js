import React from 'react';
import Counter from './components/CounterQ6';

 function Question6() {
    return (
        <div className="p-4 bg-white rounded-md">
            <h1 className="text-2xl font-bold mb-4">6. What is the state in React?</h1>
            <p className="mb-4">Answer: An object that holds data</p>
            <p className="mb-4">The state is an object that holds data that may change over the lifetime of the component.</p>

            <div className="bg-gray-100 p-4 rounded-md mb-4">
                <h2 className="text-xl font-semibold mb-2">Example: Click number</h2>
                <Counter />
            </div>

            <div className="bg-yellow-100 p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-2">Fun Fact:</h2>
                <p>State changes cause the component to re-render.</p>
            </div>
        </div>
    );
}
export default Question6;

