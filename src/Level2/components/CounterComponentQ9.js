import React, { useState, useEffect, useRef } from 'react';

const CounterComponentQ9 = () => {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();

    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);

    const prevCount = prevCountRef.current;

    return (
        <div className="p-4 border rounded">
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
            <p className="mt-2">Now: {count}, Before: {prevCount}</p>
        </div>
    );
};

export default CounterComponentQ9;
