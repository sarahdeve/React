import React, { useState, useEffect } from 'react';
import './style.css';


const Apiass = () => {
    
    let [userData, setUserData] = useState([]);
    const [isLoading, setLoading] = useState(false); 
    
    

    const fetchData = () => {
        setLoading(true);

        fetch("https://api.github.com/users")
        .then(resp => resp.json())
        .then(json => {
            console.log(json); setLoading(false); setUserData(json) 
        });
    }
    

    const handledetails = () => {

    }
   
    return ( 
        <>
            <div className="container">
                <div className="row">
                   <div className="col">
                        <header className="header">
                            <h2>Github User Data</h2>
                        </header>
                        <div className=" user-container">
                            <h5 className="">
                                {userData  && userData.map((user, index) => {
                                    const cleanedData = new Date(user.id).toDateString();
                                    // let users = user.users.join(', ');
                                    return (
                                             <div className="col-md-3">
                                                <div className="mt-2 card user shadow-sm" key={{index}}>
                                                    <div className="card-body">
                                                        <p>{index + 1}.&nbsp;&nbsp;{user.login}{user.type}.<a href={user.html_url}><button className="btn btn-sm btn-info">View</button></a></p>
                                                    </div>
                                                </div>                                                
                                             </div>
                                    )
                                })}
                            </h5>

                            {!isLoading && (
                                <button className="btn btn-sm btn-info" onClick={fetchData}>Fetch</button>
                            )}
                            {isLoading && (
                                // <div className="spinner">
                                <button className="btn text-center mx-auto mt-5 spinner-grow-sm spinner-border btn-info" disabled> 
                                <span className="sr-only"></span>{" "}</button>
                                // </div>
                            )}
                        </div>
                    </div> 
                </div>    
            </div>   
        </>
    )
}

export default Apiass
