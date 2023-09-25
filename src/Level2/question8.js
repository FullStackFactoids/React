import React from 'react';
import withData from './components/WithData';
import OriginalComponent from './components/OriginalComponent';

// Wrapping OriginalComponent with withData HOC
const EnhancedComponent = withData(OriginalComponent);

// Fun Fact: Demonstrating chaining of HOCs
function withTheme(WrappedComponent) {
    return function(props) {
        return <WrappedComponent {...props} theme="dark theme" />;
    };
}

const EnhancedWithThemeComponent = withData(withTheme(OriginalComponent));

function Question8() {
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Level 2 - Question 8</h1>
            <EnhancedComponent />
            <div className="mt-4 p-4 border rounded bg-gray-200">
                <h2 className="text-lg font-semibold mb-2">Fun Fact: Chained HOCs</h2>
                <EnhancedWithThemeComponent />
            </div>
        </div>
    );
}

export default Question8;
