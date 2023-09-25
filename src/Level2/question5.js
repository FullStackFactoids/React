import React from 'react';
import DataContext from './components/DataContext';
import Grandchild from './components/Grandchild';
import Parent from './components/Parent';

const Question5 = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Level 2 - Question 5</h1>
            {/* Demonstrating prop drilling */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Prop Drilling:</h2>
                <div className="p-4 border rounded shadow-md bg-white">
                    <Parent data="Prop Drilled Data" />
                </div>
            </div>
            {/* Demonstrating using Context API to avoid prop drilling */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Fun Fact - Using Context API:</h2>
                <div className="p-4 border rounded shadow-md bg-green-100">
                    <DataContext.Provider value="Data from Context">
                        <Grandchild />
                    </DataContext.Provider>
                </div>
            </div>
        </div>
    );
};

export default Question5;
