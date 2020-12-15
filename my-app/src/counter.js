import React from 'react';

const Counter = (props) => {
    let { count } = props;
    return (
        <>
            <p className="display-4">{count}</p>
        </>
    )
}

export default Counter;