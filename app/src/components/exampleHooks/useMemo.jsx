import React, { useMemo } from 'react';

const AppMemo = () => {
    return (
        <>
            <MemoComponent arrayValue={10} />
            {/* <MemoComponent arrayValue={20} /> */}
        </>
    );
};

const MemoComponent = ({ arrayValue }) => {
    const myArray = useMemo(() => {
        console.log('render:', arrayValue)
        return [arrayValue, arrayValue + 1, arrayValue + 2];
    }, [arrayValue]);

    return (
        <>
            <h2>First render of {arrayValue} execute the console.log() of myArray()</h2>
            {myArray.map((item, key) =>
                <div key={key}>{item}</div>
            )}

            <h2>Second render of {arrayValue} doesn't execute the console.log() of myArray()</h2>
            {myArray.map((item, key) =>
                <div key={key}>{item}</div>
            )}
        </>
    );
};

export default AppMemo;