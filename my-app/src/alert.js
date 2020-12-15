import React from 'react';
import './App.css';

function Alert ({type, text}) {
    return (
        <>
        <span className={`alert alert-${type}`}>{text}</span>
        </>
    )
}

export default Alert;
