import React, { useState } from 'react';

const ForceRenderFunctionalComponent = () => {
    const [, forceRender] = useState();

    return (
        <div className="p-4 border rounded-md">
            <h2 className="text-xl font-bold">Functional Component</h2>
            <button onClick={() => forceRender({})} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                Re-render
            </button>
            <p className="mt-2">Rendered at: {new Date().toISOString()}</p>
        </div>
    );
};

export default ForceRenderFunctionalComponent;
