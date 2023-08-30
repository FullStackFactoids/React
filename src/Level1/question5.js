import React from 'react';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

export default function Question5() {
    return (
        <div className="p-4 bg-white rounded-md">
            <h1 className="text-2xl font-bold mb-4">5. How do you pass data to a React component?</h1>
            <p className="mb-4">Answer: Using props</p>
            <p className="mb-4">Props (short for "properties") are a way of passing data from parent to child components.</p>

            <div className="bg-gray-100 p-4 rounded-md mb-4">
                <h2 className="text-xl font-semibold mb-2">Example:</h2>
                <Welcome name="John" />
            </div>

            <div className="bg-yellow-100 p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-2">Fun Fact:</h2>
                <p>Props are read-only.</p>
                {/* Uncomment the line below to see the error in the console */}
                {/* <Welcome name={props => props.name = "Jane"} /> */}
            </div>
        </div>
    );
}
