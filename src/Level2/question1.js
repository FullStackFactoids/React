import React, { useState } from 'react';
import OptimizedComponent from './components/OptimizedComponent';
import OptimizedFunctionalComponent from './components/OptimizedFunctionalComponent';

function Question1() {
    const [data, setData] = useState("Initial Data");

    return (
        <div className="p-4">
            <button className="bg-red-500 text-white p-2 rounded ml-4" onClick={() => setData("Updated Data")}>Update Data</button>
            <div className="mt-4">
                <h2 className="text-lg font-bold">Class Component:</h2>
                <OptimizedComponent data={data} />
            </div>
            <div className="mt-4">
                <h2 className="text-lg font-bold">Functional Component:</h2>
                <OptimizedFunctionalComponent data={data} />
            </div>
            <div className="mt-4 bg-yellow-200 p-4 rounded-md">
                <h2 className="text-lg font-bold">Fun Fact:</h2>
                <p>Functional components can also optimize rendering using React.memo.</p>
            </div>
        </div>
    );
}

export default Question1;


