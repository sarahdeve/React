import React, { useState, createContext, useContext, useEffect } from 'react';
import './App.css';

let MyContext = createContext();

function Assign() {
    let [firstname, setFirstname] = useState("");
    let [lastname, setLastname] = useState("");
    let [number, setNumber] = useState(0);
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [edit, setEdit] = useState(false);
    let [editIndex, setEditIndex] = useState('');

    let user = []
    if (localStorage.hasOwnProperty('newStudent')) {
        user = JSON.parse(localStorage.getItem('newStudent'))
    }

    let [formerstd, setFormerstd] = useState(user);

    // useEffect(() => {
    //     let user = JSON.parse(localStorage.getItem('newStudent'))
    //     setFormerstd(user)
    // }, []);


    const handlefirstname = (e) => {
        let value = e.target.value;
        setFirstname(value);
    }

    const handlelastname = (e) => {
        let value = e.target.value;
        setLastname(value);
    }

    const handlenumber = (e) => {
        let value = e.target.value;
        setNumber(value);
    }

    const handleemail = (e) => {
        let value = e.target.value;
        setEmail(value);
    }

    const handlepassword = (e) => {
        let value = e.target.value;
        setPassword(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console. log("ko")
        if (firstname !== "" && lastname !== "" && password !== "") {
            let newArr = [];
            if (edit) {
                console.log(editIndex)
                let a = formerstd.map((each, index) => {
                    return index === editIndex ? { ...each, firstname, lastname, email, password, number } : each
                });
                setFormerstd(a);
                setEdit(false);
                alert("hi")
            } else {
                // e.preventDefault();
                // console.log("hi")
                let allstudent = { firstname, lastname, number, email, password };
                let newStudent = [...formerstd, allstudent];
                setFormerstd(newStudent)
                localStorage.setItem('newStudent', JSON.stringify(newStudent));
                // if (localStorage.hasOwnProperty('newStudent')) {

                // }
                // if (localStorage.getItem('newStudent') === null) {
                //     localStorage.setItem('newStudent', JSON.stringify(newStudent));
                // } else {
                //     newArr =[];
                // }
            }
            // console.log(allstudent);
            setFirstname("");
            setLastname("");
            setEmail("");
            setPassword("");
            setNumber(0);
        } else {
            setFirstname("");
            setLastname("");
            setEmail("");
            setPassword("");
            setNumber(0);
        }
    }

    const removeStd = (index) => {
        console.log(index)
        let a = formerstd.filter((each, i) => i !== index)
        console.log(a)
        setFormerstd(a);
        // console.log(index);
    }

    const handleedit = (index) => {
        console.log(index);
        let exp = formerstd.find((each, i) => i === index);
        console.log(exp)
        let { firstname, lastname, number, email, password } = exp;
        setFirstname(firstname)
        setLastname(lastname)
        setNumber(number)
        setEmail(email)
        setPassword(password)
        setEdit(true)
        setEditIndex(index)
    }

    return (
        <>
            <MyContext.Provider value={{ removeStd, handleedit }}>

                <div className="container">
                    <div className="row mt-5 shadow">
                        <div className="col-6 p-3 border-right">
                            <form onSubmit={handleSubmit} className="bg-white mb-5">
                                <h1 className="text-center bg-white" style={{ fontFamily: 'forte' }}>Register Here</h1>
                                <input type="text" value={firstname} onChange={handlefirstname} placeholder="Your firstname" className="form-control" />
                                <br />
                                <input type="text" value={lastname} onChange={handlelastname} placeholder="Your lastname" className="form-control" />
                                <br />
                                <input type="number" value={number} onChange={handlenumber} placeholder="Your Number"
                                    min={0} className="form-control" />
                                <br />
                                <input type="email" value={email} onChange={handleemail} placeholder="Your Email" className="form-control" />
                                <br />
                                <input type="password" value={password} onChange={handlepassword} placeholder="Your Password" className="form-control" />
                                <br />
                                <button type="submit" name="submit" className="btn btn-primary"> {edit ? 'edit' : "submit"}</button>
                            </form>
                        </div>
                        <div className="col-6 text-center">
                            <ListComponent formerstd={formerstd} />
                        </div>
                    </div>
                </div>
            </MyContext.Provider>
        </>
    )
}

const ListComponent = (props) => {
    let { formerstd } = props;
    console.log(formerstd);
    return (
        <>   <h3 style={{ fontFamily: 'forte' }}>Registration List</h3>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {formerstd.map((newStudent, index) => {
                        return <MainList key={index} newStudent={newStudent} index={index}
                        />
                    })}
                    {/* {formerstd.map((newStudent, index) => {
                        return (
                        )
                    })} */}
                </tbody>
            </table>
        </>
    )
}

const MainList = (props) => {
    let context = useContext(MyContext);
    let { removeStd, handleedit } = context;
    let { index, newStudent } = props;
    return (
        <>
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{newStudent.firstname}</td>
                <td>{newStudent.lastname}</td>
                <td>
                    <button onClick={() => handleedit(index)} className="btn mr-2 btn-sm btn-info">Edit</button>
                    {/* <button data-toggle="modal" data-target={`#mylist${newStudent.index}`} className="btn mr-2 btn-sm btn-secondary">View</button> */}
                    <button onClick={() => removeStd(index)} className="btn btn-sm btn-danger">Del</button>
                    
                </td>
            </tr>
            <div key={index} id={`mylist${newStudent.index}`} className="modal fade" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Modal Header</h4>
                                </div>
                                <div className="modal-body">
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                     </div>
        </>
    )
}


export default Assign;
