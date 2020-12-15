import React, { useEffect, useReducer } from 'react';
import './App.css';

const ReducerAss = () => {

    let defaultState = {
        // array: window.localStorage.getItem("array") == null ? "" : window.localStorage.getItem("array"),
        array: [], isPopup: false, firstname: "", lastname: "", email: "", number: 0,
    };

    const reducer = (state, action) => {
        if (action.type === "UPDATE_FIRSTNAME") {
            let value = action.payload;
            let newState = { ...state, firstname: value }
            return newState;
        }
        if (action.type === "UPDATE_LASTNAME") {
            let value = action.payload;
            let newState = { ...state, lastname: value }
            return newState;
        }
        if (action.type === "UPDATE_NUMBER") {
            let value = action.payload;
            let newState = { ...state, number: value }
            return newState;
        }
        if (action.type === "UPDATE_EMAIL") {
            let value = action.payload;
            let newState = { ...state, email: value }
            return newState;
        }
        if (action.type === "CLOSE_MESSAGE") {
            return { ...state, isPopup: false };
        }
        if (action.type === "ADD_USER") {
            let value = action.payload;
            console.log(value)
            // let a = { firstname: value, lastname: value, email: value, number: value }
            let newState = { ...state, array: [...state.array, value], isPopup: true }
            console.log(newState)
            return newState;
            // localStorage.setItem('newUser', JSON.stringify(newState));
        }
        if (action.type === "ADD_INFO") {
            // let value = action.payload;
            let newState = { ...state, info: "You just added a new user", infoS: "User Deleted"}
            return newState;
        }
        if (action.type === "REMOVE_USER") {
            let b = action.payload
            let State = state.array.filter((each, i) => i !== b);
            let newState = {...state, array:State, info: "User Deleted", isPopup: true }
            return newState;
        }
    }


    let [state, dispatch] = useReducer(reducer, defaultState);

    const handleFirstname = (e) => {
        let value = e.target.value;
        dispatch({ type: "UPDATE_FIRSTNAME", payload: value })
    }

    const handleLastname = (e) => {
        let value = e.target.value;
        dispatch({ type: "UPDATE_LASTNAME", payload: value })
    }

    const handleNumber = (e) => {
        let value = e.target.value;
        dispatch({ type: "UPDATE_NUMBER", payload: value })
    }

    const handleEmail = (e) => {
        let value = e.target.value;
        dispatch({ type: "UPDATE_EMAIL", payload: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_USER", payload: { firstname: state.firstname, lastname: state.lastname, email: state.email, number: state.number } })
        // dispatch({ type: "ADD_USER", payload: state.firstname })
        // dispatch({ type: "ADD_USER", payload: state.lastname })
        // dispatch({ type: "ADD_USER", payload: state.number })
        // dispatch({ type: "ADD_USER", payload: state.email })
        dispatch({ type: "ADD_INFO", payload: {info: state.info} })
        dispatch({ type: "ADD_INFO", payload: {info: state.infoS} })
    }

    const closeMessage = () => {
        dispatch({ type: "CLOSE_MESSAGE" })
    }

    const handleRemove = (e) => {
        let dd = e
        dispatch({ type: "REMOVE_USER", payload: dd})
        
    }


    // useEffect(
    //     () => {
    //         window.localStorage.setItem("array", state.array);
    //     },
    //     [state.array]
    // );


    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-4 border-right text-white bg-dark">
                        <hr />
                        <h3 className="col-10 ">Users</h3>
                        {
                            state.array.map((each, i) => (
                                <>
                                    <span key={i}>{each.firstname} {each.lastname}</span>
                                    <button onClick={()=>handleRemove(i)} className="btn btn-sm btn-info">Del</button><br />
                                </>
                            ))
                        }
                    </div>
                    <div className="col-md-6 shadow mt-4 mx-auto">
                        {state.isPopup && <Info close={closeMessage} info={state.info} infoS={state.infoS} />}
                        <form onSubmit={handleSubmit} className="col-6 p-2 mx-auto">
                            <h3 className="mt-5" style={{ fontFamily: "forte" }}>REGISTRATION LIST</h3>
                            <input type="text" placeholder="First Name" onChange={handleFirstname} value={state.firstname} className="form-control mb-3" />
                            <input type="text" placeholder="Last Name" onChange={handleLastname} value={state.lastname} className="form-control mb-3" />
                            <input type="number" placeholder="Number" onChange={handleNumber} value={state.number} className="form-control mb-3" />
                            <input type="email" placeholder="Email" onChange={handleEmail} value={state.email} className="form-control mb-3" />
                            <button type="submit" className="btn mt-2 mb-5 btn-sm btn-info">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

const Info = ({ close, info }) => {
    useEffect(() => {
        setTimeout(() => {
            close();
        }, 3000)
    })
    return (
        <>
            <div style={{
                padding: "0.75rem 1.25rem",
                color: "var(--mainWhite)",
                textAlign: "center",
                textTransform: "capitalize",
                width: "90%",
                margin: "2rem auto 0 auto",
                borderRadius: "2px",
                backgroundColor: "green"
            }}>{info}</div>

        </>
    )
}

export default ReducerAss;
