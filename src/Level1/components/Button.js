import React from 'react';

function Button() {
    function handleClick() {
        alert('Button was clicked!');
    }

    return (
        <button onClick={handleClick} className="bg-blue-500 text-white p-2 rounded">
            Click Me
        </button>
    );
}

export default Button;
