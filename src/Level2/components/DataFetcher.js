import React, { useState, useEffect } from 'react';

export function DataFetcher() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Simulating an API call
        setTimeout(() => {
            setData({ message: 'Hello, this is your data!' });
        }, 1000);
    }, []);

    return (
        <div className="bg-blue-100 p-4 rounded-md">
            <h2 className="text-lg font-bold">Data Fetcher:</h2>
            <div>{JSON.stringify(data)}</div>
        </div>
    );
}
