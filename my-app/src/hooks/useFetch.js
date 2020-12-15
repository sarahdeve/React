import React, { useState, useEffect } from 'react';

const UseFetch = (url) => {

    let [users, setUsers] = useState([]);
    let [isLoading, useIsloading] = useState(true);

    let  url = 'http://api.github.com/users';

    // axios third party library to make a request
    // const getUserlist = async() => {
       
    //    const option = {
    //        url: 'http://api.github.com/users',
    //        method: 'GET'
    //    } 
    //    axios(option).then(response => {
    //        let data = response.data
    //    })
    // }

    //asynchronous part of the axios
    // const response = await axios(option);
    // let data = response.data;

    // synchronous
    // const option = {
    //     methods: 'post'
    //     // body: JSON.stringify(userForm),
    // }
    // const getUserlist = () => {
    //     fetch('http://api.github.com/users', option).then(resp => resp.json()).then(data => {
    //         console.log(data);
    //         setUsers(data);
    //     })
    // }


    //how to use usefetch
    // let resp;
    // if (Object.keys(option).length > 0) {
    //     resp = await fetch(url, option);            
    // }else {
    //     resp = await fetch(url);
    // }
    // let data = await resp.json();
    //    if (resp.status == 200) {
    //        setUsers(data);
    //        setIsloadiing(false);
    //    }




    const getUserlist = async(url) => {
        let resp = await fetch(url);
        let data = await resp.json();
           if (resp.status == 200) {
               setUsers(data);
               setIsloadiing(false);
           }
    }


    useEffect(() => {
        getUserlist();
    }, [])
    return (
        <>
          <div className="container">
            <div className="row">
                <div>
                        {users}    
                </div>
            </div>
            </div>  
        </>
    )
}

export default UseFetch;
