import React, { useState } from 'react';

function ConcurrentComponent() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button className="bg-blue-500 text-white p-2 rounded" onClick={() => setCount(count + 1)}>
                Increment Count
            </button>
        </div>
    );
}

export default ConcurrentComponent;
