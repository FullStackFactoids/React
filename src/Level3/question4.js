import React from 'react';
// Using React.createElement to create an element
const element = React.createElement('h1', null, 'Hello World');

const Question1 = () => {
    return (
        <div>
            <h1>Level X - Question X</h1>
            {/* Rendering the created element */}
            {element}
        </div>
    );
};

export default Question1;
