import React from 'react';
import { useCounter } from './useCounter';

export function CounterComponent() {
    const [count, increment] = useCounter();

    return (
        <button className="bg-blue-500 text-white p-2 rounded" onClick={increment}>
            {count}
        </button>
    );
}
