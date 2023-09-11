import React from 'react';
import { DataFetcher } from './components/DataFetcher';
import { FunFactExampleQ4 } from './components/FunFactExampleQ4';

function Question4() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Level 2 - Question 4</h1>
            <DataFetcher />
            <div className="mt-4 bg-yellow-200 p-4 rounded-md">
                <h2 className="text-lg font-bold">Fun Fact:</h2>
                <p>The empty dependency array in <code>useEffect</code> ensures the fetch runs only once, similar to <code>componentDidMount</code> in class components.</p>
            </div>
            <FunFactExampleQ4 />
        </div>
    );
}

export default Question4;
