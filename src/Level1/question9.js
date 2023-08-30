import React from 'react';
import Welcome from './components/WelcomeQ9';  // Import WelcomeQ9 from components folder
import Image from './components/Image';  // Import Image from components folder

export default function Question9() {
    return (
        <div className="p-4 bg-white rounded-md">
            <h1 className="text-2xl font-bold mb-4">9. How do you embed expressions in JSX?</h1>
            <p className="mb-4">Answer: Using {'{}'}</p>
            <p className="mb-4">In JSX, you can embed any valid JavaScript expression inside curly braces {'{}'}.</p>

            <div className="bg-gray-100 p-4 rounded-md mb-4">
                <h2 className="text-xl font-semibold mb-2">Example:</h2>
                <Welcome name="John" />
            </div>

            <div className="bg-yellow-100 p-4 rounded-md">
                <h2 className="text-xl font-semibold mb-2">Fun Fact:</h2>
                <p>You can also use expressions for attributes in JSX.</p>
                <div className="bg-gray-300 p-4 rounded-md mt-2">
                    <Image path="/FullStack Factoids Channel Picture.png" />
                </div>
            </div>
        </div>
    );
}
