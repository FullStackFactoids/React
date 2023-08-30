import React from 'react';

function Image(props) {
    return (
        <img src={props.path } alt="A sample image" className="w-32 h-32 object-cover rounded-md" />
    );
}

export default Image;
