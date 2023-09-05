import React, { useState, useEffect } from 'react';

export function FunFactExampleQ4() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Simulating an API call that runs only once
        setTimeout(() => {
            setData({ message: 'This data is fetched only once!' });
        }, 1000);
    }, []); // Empty dependency array

    return (
        <div className="bg-green-100 p-4 rounded-md">
            <h2 className="text-lg font-bold">Fun Fact Example:</h2>
            <div>{JSON.stringify(data)}</div>
        </div>
    );
}
