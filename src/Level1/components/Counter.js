import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white p-2 rounded">
                {count}
            </button>
        </div>
    );
}

export default Counter;
