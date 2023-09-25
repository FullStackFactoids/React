import React from 'react';
import UseEffectExample from './components/UseEffectExample';
import UseEffectCleanupExample from './components/UseEffectCleanupExample';

const Question6 = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Level 2 - Question 6</h1>
            {/* Demonstrating useEffect for side effects */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">useEffect Hook:</h2>
                <div className="p-4 border rounded shadow-md bg-white">
                    <UseEffectExample />
                </div>
            </div>
            {/* Demonstrating useEffect for cleanup */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Fun Fact - useEffect for Cleanup:</h2>
                <div className="p-4 border rounded shadow-md bg-green-100">
                    <UseEffectCleanupExample />
                </div>
            </div>
        </div>
    );
};

export default Question6;
