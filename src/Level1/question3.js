import React from 'react';
import WithJSXQ3 from './components/WithJSXQ3';
import WithoutJSXQ3 from './components/WithoutJSXQ3';

function Question3() {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">3. What is JSX?</h1>
            <p className="text-lg mb-2">JavaScript XML (JSX) allows developers to write HTML in React, making it easier to visualize and work with UI components.</p>

            <div className="bg-yellow-100 p-4 rounded-lg my-4">
                <h2 className="text-xl font-semibold mb-2">Example with JSX:</h2>
            <WithJSXQ3 />
            </div>
            <div className="bg-green-100 p-4 rounded-lg my-4">
                <h2 className="text-xl font-semibold mb-2">Fun Fact:</h2>
                <p className="text-lg">JSX is not required to use React, but it makes the code more readable.</p>
            <WithoutJSXQ3 />
            </div>

        </div>
    );
}

export default Question3;
