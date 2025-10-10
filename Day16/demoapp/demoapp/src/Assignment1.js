import React, { useEffect, useState } from 'react';

export default function Functional() {
    const [count, setCount] = useState(0);


    useEffect(() => {
        console.log('Component mounted');


        return () => {
            console.log('Component will unmount');
        };
    }, []);

    useEffect(() => {
        console.log('Component updated: count is', count);
    }, [count]);

    function handle2() {
        setCount(count + 1)
    }
    return (
        <>
            <h1>Hello there</h1>
            <button onClick={handle2}>Click Me</button>
        </>
    );
}
