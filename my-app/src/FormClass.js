import React, { useState, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FormClassdetails from './FormClassdetails';

function FormClass() {
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    
    let [person, setPerson] = useState({ Name: "", age: "" });
    
    let inputContainer = useRef("");
    // let History = useHistory("");
    
    let [users, setUsers] = useState([]);


    //exact bfore routing
    // const viewUser = (name) => {
    //     history.pushState(`/user/${name}`);
            // history.goBack();
    // }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let user = { name, age };
        let allUsers = [...users, user];
        setUsers([allUsers, user]);
        // localStorage.setItem('allUsers', JSON.stringify(allUsers));
        // setUsers([...users, user])
        
        // setUsers((oldUsers) => {
        //     return [...oldUsers, user]
        // })
        setName('');
        setAge('');
    }
    
    // useEffect(() => {
        //     let user = JSON.parse(localStorage.getItem('allUsers'))
        //     setUsers(user)
        // }, []);
        
        const HandleSubmit = (e) => {
            e.preventDefault();
            let newUser = { name: person.name, age: person.age };
            setUsers([...users, newUser])
            console.log(users);
        }

    const testRef = (e) => {
        alert(inputContainer.current.value);
    }
    const handleChang = (e) => {
        let value = e.target.value;
        setName(value);
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name, value);
        setPerson({ ...person, [name]: value });
    }

    const handleAge = (e) => {
        let value = e.target.value;
        setAge(value);
    }

    // const removeData = (id) => {

    //     axios.delete(`${URL}/${id}`).then(res => {
    //         const del = employees.filter(employee => id !== employee.id)
    //         setEmployees(del)
    //     })
    // }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6 card shadow mx-auto m-5">
                        <div className=" mt-4 text-center">
                            <form onSubmit={handleSubmit} className="bg-white mb-5">
                                <h1 className="text-center bg-white">FORM CLASS</h1>
                                <input type="text" value={name} onChange={handleChang} placeholder="Your name" className="form-control" />
                                <br />
                                <input type="number" value={age} onChange={handleAge} placeholder="Your age" className="form-control" />
                                <br />
                                {/* <input type="file" value={file} onChange={handleFile} placeholder="Your file" className="form-control" />
                                <br /> */}
                                <input type="submit" className="btn btn-primary " />
                            </form>
                            <div>
                                {/* {users.map((user, index) => {
                                    return (<p key={index} className="p-2 font-weight-bold">{user.name}-{user.age} <button onClick={()=>viewUser(user.name)} className="btn btn-sm ml-3">View</button></p>)
                                })} */}

                                {users.map((user, index) => {
                                    return (<p key={index} className="p-2 font-weight-bold">{user.name}-{user.age} <Link to={`/FormClassdetails/users${user.name}`} className="btn btn-sm ml-3">View</Link></p>)
                                })}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <form>
                            <input className="form-control" ref={inputContainer} placeholder="text" />
                            <br />
                            <input className="form-control" ref={inputContainer} placeholder="text" />
                            <br />
                            <button className="btn btn-primary" onClick={testRef}>Text</button>
                        </form>
                    </div>
                    <br />
                    <div className="col">
                        <form onSubmit={HandleSubmit}>
                            <input className="form-control" name="name" value={person.name} onChange={handleChange} placeholder="text" />
                            <br />
                            <input className="form-control" name="age" value={person.age} onChange={handleChange} placeholder="age" />
                            <br />
                            <button className="btn btn-primary" type="submit">Text</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormClass;