import React from 'react';
import Child from './Child';

function Parent(props) {
    return <Child {...props} />;
}

export default Parent;
