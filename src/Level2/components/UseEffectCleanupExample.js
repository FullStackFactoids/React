import React, { useEffect } from 'react';

const UseEffectCleanupExample = () => {
    useEffect(() => {
        console.log('Component is mounted or updated');

        return () => {
            console.log('Cleanup code here - Component will unmount');
        };
    }, []);

    return (
        <div>
            <p>Check the console for logs on mount, update, and unmount.</p>
        </div>
    );
};

export default UseEffectCleanupExample;
