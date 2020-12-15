import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

function FormClassdetails() {
    const { name } = useParams();

    const history = useHistory();
    history.push('/users');
    return (
        <>
            <h1>here: {name}</h1>
            <h1>here</h1>
        </>
    )
}

export default FormClassdetails;