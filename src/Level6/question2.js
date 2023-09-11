import React from 'react';

function Question2() {
    return (
        <div className="p-4">
            <h2 className="text-lg font-bold">Implementing a Custom React Reconciler:</h2>
            <pre className="bg-gray-800 text-green-400 p-2 rounded mt-2">
        {`
import Reconciler from 'react-reconciler';

const hostConfig = {
  // ... (a substantial configuration should be here)
};

const MyReconciler = Reconciler(hostConfig);

// Output: A custom reconciler instance
        `}
      </pre>
            <div className="mt-4 bg-yellow-200 p-4 rounded-md">
                <h2 className="text-lg font-bold">Fun Fact:</h2>
                <p>React's flexibility comes from its architecture, where the reconciler is decoupled from the renderer. This allows for different reconcilers to be created for different platforms, such as React DOM for web development and React Native for mobile development.</p>
                <pre className="bg-gray-800 text-green-400 p-2 rounded mt-2">
          {`
// In React DOM
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));

// In React Native
import { AppRegistry } from 'react-native';
AppRegistry.registerComponent('App', () => App);
          `}
        </pre>
            </div>
        </div>
    );
}

export default Question2;
