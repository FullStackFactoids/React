import React from 'react';

function Welcome(props) {
    return (
        <h1 className="text-2xl font-bold">Hello, {
            props.name.toUpperCase()
        }</h1>
    );
}

export default Welcome;
