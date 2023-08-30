import React, { useState } from 'react';

function VirtualDOMExample() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white p-2 rounded-md">
                Increment Count
            </button>
            <p className="text-2xl font-bold mt-4">Count: {count}</p>
        </div>
    );
}

export default VirtualDOMExample;
