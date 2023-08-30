import React from 'react';
import Group from './components/Group';  // Import Group from components folder

export default function Question8() {
    return (
        <div className="p-4 bg-white rounded-md">
            <h1 className="text-2xl font-bold mb-4">8. What is a React fragment?</h1>
            <p className="mb-4">Answer: A way to group multiple elements</p>
            <p className="mb-4">Fragments let you group a list of children without adding extra nodes to the DOM.</p>

            <div className="bg-gray-100 p-4 rounded-md mb-4">
                <h2 className="text-xl font-semibold mb-2">Example:</h2>
                <Group />
            </div>

            <div className="bg-yellow-100 p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-2">Fun Fact:</h2>
                <p>Short syntax for fragments is <code className="bg-gray-200 p-1 rounded">{'<>'}</code> and <code className="bg-gray-200 p-1 rounded">{'</>'}</code>.</p>
                <div className="bg-gray-300 p-4 rounded-md mt-2">
                    <h1 className="text-2xl font-bold">Hello</h1>
                    <p className="text-xl">World</p>
                </div>
            </div>
        </div>
    );
}
