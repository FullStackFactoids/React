import React from 'react';
import GrandchildWithDrilling from './GrandchildWithDrilling';

function Child(props) {
    return <GrandchildWithDrilling {...props} />;
}

export default Child;
