import React from 'react';
import Welcome from './components/Welcome';
import Counter from './components/Counter';

function Question4() {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">4. How do you create a React component?</h1>
            <p className="text-lg mb-2">React components can be defined by either extending <code>React.Component</code> or as a simple function.</p>

            <div className="bg-yellow-100 p-4 rounded-lg my-4">
                <h2 className="text-xl font-semibold mb-2">Example with Class Component:</h2>
                <Welcome name="John" />
            </div>

            <div className="bg-green-100 p-4 rounded-lg my-4">
                <h2 className="text-xl font-semibold mb-2">Fun Fact:</h2>
                <p className="text-lg">Components can also be created using React hooks.</p>
                <Counter />
            </div>
        </div>
    );
}

export default Question4;
