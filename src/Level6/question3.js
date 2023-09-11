import React from 'react';

const Spinner = () => <div>Loading...</div>;

function Question3() {
    const RemoteComponent = React.lazy(() => import('./components/ServerComponent.server'));

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold">Implementing Suspense with Server Components in React:</h2>
            <React.Suspense fallback={<Spinner />}>
                <RemoteComponent />
            </React.Suspense>
            <div className="mt-4 bg-yellow-200 p-4 rounded-md">
                <h2 className="text-lg font-bold">Fun Fact:</h2>
                <p>Server components can fetch data and send only the rendered output, not the code, to the client. This reduces the JavaScript sent to the client, improving performance.</p>
                <pre className="bg-gray-800 text-green-400 p-2 rounded mt-2">
          {`
// ServerComponent.server.js
function ServerComponent() {
  // Fetch data and render the component on the server
  return <div>Server-rendered component</div>;
}

export default ServerComponent;
          `}
        </pre>
            </div>
        </div>
    );
}

export default Question3;
