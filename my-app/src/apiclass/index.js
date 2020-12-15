import React from 'react';
import axios from 'axios';
import UseFetch from '../hooks/useFetch';

const APIClass = () => {
   
    const url = 'http://api.github.com/users';
    const { data, isLoading } = UseFetch(url, {});
    return (
        <>
            <p className="display-4 text-center">API CLASS</p>
        </>
    )
}

export default APIClass;
