import React from 'react';
import ConcurrentComponent from './components/ConcurrentComponent';

function Question1() {
    return (
        <div className="p-4">
            <h2 className="text-lg font-bold">Implementing Concurrent Rendering in React:</h2>
            <p>To implement concurrent rendering in a React app, you would use ReactDOM.createRoot to create a root and then render your application with concurrent features enabled. Inside your components, you can use concurrent features such as React.useTransition to create transitions that allow React to work on multiple tasks simultaneously, improving the responsiveness of your app. Here is how you can do it:</p>
            <ul>
                <li>First, ensure you are using React 18 or later, as concurrent features are introduced in React 18.</li>
                <li>In your index file where you mount your React application, use ReactDOM.createRoot instead of ReactDOM.render to create a root with concurrent features enabled:
                </li>
            </ul>
             <pre className="bg-gray-800 text-green-400 p-2 rounded mt-2">
               {` 
                import React from 'react';
                import ReactDOM from 'react-dom';
                import Question1 from './Question1'; // Adjust the path to your Question1 component

                const root = ReactDOM.createRoot(document.getElementById('root'));
                root.render(Question1 )
`}
            </pre>
            <div>
                <p></p>
            </div>
            <ConcurrentComponent />
            <div className="mt-4 bg-yellow-200 p-4 rounded-md">
                <h2 className="text-lg font-bold">Fun Fact:</h2>
                <p>Concurrent rendering is a major feature in React 18 and beyond. It allows React to work on multiple tasks simultaneously, making apps feel faster and more responsive.</p>
            </div>
        </div>
    );
}

export default Question1;
