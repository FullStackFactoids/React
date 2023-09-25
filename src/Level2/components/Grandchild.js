import React, { useContext } from 'react';
import DataContext from './DataContext';

function Grandchild() {
    const data = useContext(DataContext);
    return (
        <div className="p-4 border rounded shadow-md bg-blue-100">
            {data}
        </div>
    );
}

export default Grandchild;
