import React from 'react';

function OriginalComponent(props) {
    return (
        <div className="p-4 border rounded">
            <h2>Original Component</h2>
            <p>{props.data}</p>
        </div>
    );
}

export default OriginalComponent;
