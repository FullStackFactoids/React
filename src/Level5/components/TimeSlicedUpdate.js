import React, { useState } from 'react';

function TimeSlicedUpdate() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button className="bg-blue-500 text-white p-2 rounded" onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
            <p>Count: {count}</p>
        </div>
    );
}

export default TimeSlicedUpdate;
