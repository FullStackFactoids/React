import React from 'react';
import { List, AutoSizer } from 'react-virtualized';

function Row({ index, style }) {
    return (
        <div style={style} className="border-b p-4">
            Row {index}
        </div>
    );
}

const MemoizedRow = React.memo(Row);

function Question1() {
    return (
        <div className="p-4">
            <h2 className="text-lg font-bold">Optimizing Large Lists:</h2>
            <div className="mt-4 h-64">
                <AutoSizer>
                    {({ height, width }) => (
                        <List
                            width={width}
                            height={height}
                            rowCount={1000}
                            rowHeight={35}
                            rowRenderer={({ index, style }) => <MemoizedRow index={index} style={style} />}
                        />
                    )}
                </AutoSizer>
            </div>
            <div className="mt-4 bg-yellow-200 p-4 rounded-md">
                <h2 className="text-lg font-bold">Fun Fact:</h2>
                <p>Without virtualization, all 1000 items would be in the DOM. With virtualization, only ~20 might be, depending on the viewport size.</p>
            </div>
        </div>
    );
}
export default Question1;