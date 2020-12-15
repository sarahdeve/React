import React from 'react';
import {Link} from 'react-router-dom';

function Error () {
    return(
        <>
            <h1 className="text-center diaplay-4">Page not found</h1>
            <Link to="/" className="btn btn-danger btn-block">Let help your life</Link>
        </>
    )
}

export default Error;