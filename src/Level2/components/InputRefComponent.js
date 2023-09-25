import React, { useRef } from 'react';

const InputRefComponent = () => {
    const inputRef = useRef(null);

    return (
        <div className="p-4 border rounded mt-4 bg-gray-100">
            <input ref={inputRef} placeholder="Type here..." className="px-2 py-1 border rounded" />
            <button
                className="ml-2 px-4 py-2 bg-green-500 text-white rounded"
                onClick={() => inputRef.current.focus()}
            >
                Focus Input
            </button>
        </div>
    );
};

export default InputRefComponent;
