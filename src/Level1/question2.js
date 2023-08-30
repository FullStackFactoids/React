import React from 'react';
import ClassComponentExample from './components/ClassComponentExample';
import FunctionalComponentExample from './components/FunctionalComponentExample';

function Question2() {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">2. Which method is mandatory in a React class component?</h1>
            <p className="text-lg mb-2">In a React class component, the <code>render()</code> method is mandatory. It specifies the HTML output of a React component.</p>

            <div className="bg-yellow-100 p-4 rounded-lg my-4">
                <h2 className="text-xl font-semibold mb-2">Example with Class Component:</h2>
                <ClassComponentExample />
            </div>

            <div className="bg-green-100 p-4 rounded-lg my-4">
                <h2 className="text-xl font-semibold mb-2">Fun Fact:</h2>
                <p className="text-lg">Functional components in React don't require a <code>render()</code> method.</p>
                <FunctionalComponentExample />
            </div>
        </div>
    );
}

export default Question2;
