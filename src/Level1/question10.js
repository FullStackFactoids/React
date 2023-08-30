import React from 'react';
import VirtualDOMExample from './components/VirtualDOMExample';  // Import VirtualDOMExample from components folder

export default function Question10() {
    return (
        <div className="p-4 bg-white rounded-md">
            <h1 className="text-2xl font-bold mb-4">10. What is the virtual DOM?</h1>
            <p className="mb-4">Answer: An in-memory representation of the real DOM</p>
            <p className="mb-4">React creates an in-memory data structure cache which computes the changes made and then updates the browser. This allows for efficient updates and rendering.</p>

            <div className="bg-yellow-100 p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-2">Fun Fact:</h2>
                <p>The virtual DOM allows React to be fast and efficient.</p>
                <div className="bg-gray-300 p-4 rounded-md mt-2">
                    <VirtualDOMExample />
                </div>
            </div>
        </div>
    );
}
