import React, { useEffect , useState} from 'react';

const UseEffectExample = () => {
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (clicked) {
            document.title = 'You clicked the button!';
        }
    }, [clicked]);

    return (
        <button
            onClick={() => setClicked(true)}
            className="p-2 rounded bg-blue-500 text-white"
        >
            Click me
        </button>
    );
};

export default UseEffectExample;
