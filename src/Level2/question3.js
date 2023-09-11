import React from 'react';
import {ThemeContext} from './components/ThemeContext';
import {ThemedButton} from './components/ThemedButton';

function NestedComponent() {
    return (
        <div className="mt-4">
            <h2 className="text-lg font-bold">Nested Themed Button:</h2>
            <ThemedButton/>
        </div>
    );
}

function Question3() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Level 2 - Question 3</h1>
            <ThemeContext.Provider value="dark">
                <div className="mt-4">
                    <h2 className="text-lg font-bold">Themed Button:</h2>
                    <ThemedButton/>
                </div>
                <NestedComponent/>
            </ThemeContext.Provider>
            <div className="mt-4 bg-yellow-200 p-4 rounded-md">
                <h2 className="text-lg font-bold">Fun Fact Example:</h2>
                <p>Context is primarily used when some data needs to be accessible by many components at different
                    nesting levels. The above "Nested Themed Button" is an example of this.</p>
            </div>
        </div>
    );
}

export default Question3;
