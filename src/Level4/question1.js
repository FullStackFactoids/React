import React from 'react';

function Question1() {
    // // On the server
    // import ReactDOMServer from 'react-dom/server';
    // const html = ReactDOMServer.renderToString(<div>Hello World</div>);
    // // Output: The HTML string of the server-rendered content
    // // On the client
    // import React from 'react';
    // import ReactDOM from 'react-dom';
    // ReactDOM.hydrate(<div>Hello World</div>, document.getElementById('root'));
    // // Output: The server-rendered content is hydrated on the client


    return (
        <div className="p-4">
            <h2 className="text-lg font-bold">Server-Side Hydration with React:</h2>
            <p>Using <code>ReactDOM.hydrate</code> to hydrate a container whose HTML contents were rendered by <code>ReactDOMServer</code>.  Check source in repo.</p>
            <div className="mt-4 bg-yellow-200 p-4 rounded-md">
                <h2 className="text-lg font-bold">Fun Fact:</h2>
                <p>Hydration attaches event listeners to the existing server-rendered markup, allowing React to smoothly take control of the server-rendered app without re-rendering it from scratch. Without hydration, React would re-render the entire app, potentially discarding server-rendered content.</p>
            </div>
        </div>
    );
}

export default Question1;
