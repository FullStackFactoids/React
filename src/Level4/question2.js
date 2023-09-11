import React, { createContext } from 'react';
import { EventEmitter } from 'events';
import Child from './components/Child';

export const EventContext = createContext();

function Question2() {
    const emitter = new EventEmitter();

    return (
        <EventContext.Provider value={emitter}>
            <Child />
        </EventContext.Provider>
    );
}

export default Question2;
