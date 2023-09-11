import React from 'react';
import ReactDOM from 'react-dom';
import TimeSlicedUpdate from './components/TimeSlicedUpdate';

function Question2() {
    const [state, setState] = React.useState('Initial state');

    const updateState = () => {
        setState('State updated normally');
    };

    const startTransition = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.startTransition(() => {
            setState('State updated with time slicing');
        });
    };

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold">Implementing Time Slicing in React:</h2>
            <button className="bg-blue-500 text-white p-2 rounded" onClick={updateState}>
                Update State Normally
            </button>
            <button className="bg-green-500 text-white p-2 rounded ml-4" onClick={startTransition}>
                Start Transition (Time Sliced)
            </button>
            <div className="mt-4">
                <p>State: {state}</p>
            </div>
            <div className="mt-4 bg-yellow-200 p-4 rounded-md">
                <h2 className="text-lg font-bold">Fun Fact:</h2>
                <p>Time slicing ensures that high-priority updates (like user input) are not blocked by large renders. It allows React to split rendering work into chunks, improving responsiveness.</p>
                <div className="mt-4">
                    <h3 className="text-md font-bold">Functional Example:</h3>
                    <TimeSlicedUpdate />
                </div>
            </div>
        </div>
    );
}

export default Question2;
