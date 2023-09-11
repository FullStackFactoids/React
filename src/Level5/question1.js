import React, { Suspense, useState } from 'react';
import Loading from './components/Loading';
import Component from './components/DataComponent';

function Question1() {
    // Simulate server-fetched data
    const data = { message: "Hello, world!" };

    // For Fun Fact example
    const [loading, setLoading] = useState(true);
    const [funFactData, setFunFactData] = useState(null);

    setTimeout(() => {
        setFunFactData({ message: "Traditional data fetching" });
        setLoading(false);
    }, 2000);

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold">Server-Side Data Fetching with Suspense:</h2>
            <Suspense fallback={<Loading />}>
                <Component data={data} />
            </Suspense>
            <div className="mt-4 bg-yellow-200 p-4 rounded-md">
                <h2 className="text-lg font-bold">Fun Fact:</h2>
                <p>Suspense for data fetching represents a paradigm shift in data handling in React, moving away from the traditional conditional rendering based on data state to a more streamlined approach that integrates loading states seamlessly.</p>
                <div className="mt-4">
                    <h3 className="text-md font-bold">Example:</h3>
                    {loading ? <Loading /> : <Component data={funFactData} />}
                </div>
            </div>
        </div>
    );
}

export default Question1;
