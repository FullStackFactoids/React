import React from 'react';
import Button from './components/Button';  // Import Button from components folder

export default function Question7() {
    return (
        <div className="p-4 bg-white rounded-md">
            <h1 className="text-2xl font-bold mb-4">7. How do you handle events in React?</h1>
            <p className="mb-4">Answer: Using camelCase event handlers</p>
            <p className="mb-4">In React, events are named using camelCase, and you pass a function as the event handler.</p>

            <div className="bg-gray-100 p-4 rounded-md mb-4">
                <h2 className="text-xl font-semibold mb-2">Example:</h2>
                <Button />
            </div>

            <div className="bg-yellow-100 p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-2">Fun Fact:</h2>
                <p>In JSX, you cannot return `false` to prevent default behavior. You must call `event.preventDefault()` explicitly to prevent the default behavior of the event.</p>
            </div>
        </div>
    );
}
