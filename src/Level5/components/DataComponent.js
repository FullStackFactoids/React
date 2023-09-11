import React from 'react';

function DataComponent({ data }) {
    return <div className="text-green-500">Data: {JSON.stringify(data)}</div>;
}

export default DataComponent;
