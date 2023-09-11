import React, { useContext, useEffect, useState } from 'react';
import { EventContext } from '../question2'; // Adjust the path to your Parent component

function Child() {
    const emitter = useContext(EventContext);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const handleEvent = () => {
            console.log('Event received');
            setMessage('Event received');
        };

        emitter.on('myEvent', handleEvent);

        return () => {
            emitter.off('myEvent', handleEvent);
        };
    }, [emitter]);

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold">Cross-Component Communication:</h2>
            <button
                className="bg-blue-500 text-white p-2 rounded"
                onClick={() => {
                    emitter.emit('myEvent');
                    setMessage('Event emitted');
                }}
            >
                Emit Event
            </button>
            <div className="mt-4">
                <p>{message}</p>
            </div>
            <div className="mt-4 bg-yellow-200 p-4 rounded-md">
                <h2 className="text-lg font-bold">Fun Fact:</h2>
                <p>Event emitters are a pattern from Node.js, allowing for an event-driven architecture where components can communicate indirectly through events.</p>
            </div>
        </div>
    );
}

export default Child;
