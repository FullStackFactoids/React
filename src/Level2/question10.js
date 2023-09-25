import React from 'react';
import ForceRenderClassComponent from './components/ForceRenderClassComponent';
import ForceRenderFunctionalComponent from './components/ForceRenderFunctionalComponent';

const Question10 = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Level 2 - Question 10</h1>
            <ForceRenderClassComponent />
            <ForceRenderFunctionalComponent />
            <div className="p-4 mt-4 bg-yellow-100 border rounded-md">
                <h2 className="text-xl font-bold">Fun Fact</h2>
                Forcing a re-render is generally discouraged as it can lead to performance issues.
            </div>
        </div>
    );
};

export default Question10;
