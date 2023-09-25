import React from 'react';
import CounterComponentQ9 from './components/CounterComponentQ9';
import InputRefComponent from './components/InputRefComponent';

const Question9 = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Level 2 - Question 9</h1>
            <CounterComponentQ9 />
            <InputRefComponent />
        </div>
    );
};

export default Question9;
