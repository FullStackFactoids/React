import React from 'react';

const WithoutJSXQ3 = () => {
    const element = React.createElement('h1', null, 'Hello, world!');
    return <div>
        <code className="text-sm bg-gray-200 p-2 rounded">
            {'// Without JSX'}
        </code>
        {element}
    </div>;
};

export default WithoutJSXQ3;
