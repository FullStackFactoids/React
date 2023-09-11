import React, { createContext, useEffect } from 'react';
import { EventEmitter } from 'events'; // Ensure to install events package
import Child from './components/Child'; // Adjust the path to your Child component

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
