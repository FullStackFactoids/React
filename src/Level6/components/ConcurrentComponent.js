import React, { useState } from 'react';


function ConcurrentComponent() {
    const [state, setState] = useState(0);
    const [isPending, startTransition] = React.useTransition();

    return (
        <div>
            <button className="bg-blue-500 text-white p-2 rounded"
                onClick={() => {
                    startTransition(() => {
                        setState(prevState => prevState + 1);
                    });
                }}
                disabled={isPending}
            >
                Increment
            </button>
            <p>State: {state}</p>
            {isPending && <p>Loading...</p>}
        </div>
    );
}



export default ConcurrentComponent;
