import React from "react";

function Control(props) {

    let { inc, dec } = props;

    return (
        <>
            <button className="btn btn-primary mr-3" onClick={inc}>Increase</button>
            <button className="btn btn-danger" onClick={dec}>Decrease</button>
        </>
    )
}

export default Control;