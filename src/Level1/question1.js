import React from 'react';
import ReactDOMServer from 'react-dom/server';

// Main example component
function Welcome(props) {
    return <h1 className="text-2xl font-bold text-blue-600">Hello, {props.name}</h1>;
}

// Fun fact example component for server-side rendering
function ServerSideExample() {
    // Simulate server-side rendering using ReactDOMServer
    const html =
        ReactDOMServer.renderToString(<Welcome name="John" />);
    return <div className="text-sm italic text-gray-500">Server-side Output: {html}</div>;
}

function Question1() {
    return (
        <div className="p-4 border rounded-md">
            <h2 className="text-xl font-semibold">1. What is React primarily used for?</h2>
            <p className="mt-2">React is a JavaScript library developed by Facebook for building user interfaces, especially for single-page applications.</p>

            {/* Main Example */}
            <div className="mt-4 p-4 bg-blue-100 rounded-md">
                <h3 className="text-lg font-semibold">Example:</h3>
                <Welcome name="John" />
            </div>

            {/* Fun Fact */}
            <div className="mt-4 p-4 bg-yellow-100 rounded-md">
                <h3 className="text-lg font-semibold">Fun Fact:</h3>
                <p>React can be used on both the client and server side.</p>
                <ServerSideExample />
            </div>
        </div>
    );
}

export default Question1;
