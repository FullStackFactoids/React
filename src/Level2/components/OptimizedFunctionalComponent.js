import React from 'react';

const OptimizedFunctionalComponent = React.memo(function Component(props) {
    return <div className="bg-green-200 p-4 rounded-md">{props.data}</div>;
});

export default OptimizedFunctionalComponent;
