import React, { useState, useEffect, useReducer } from 'react'

const ReducerClass = () => {

    let defaultState = { array: [], isMessage: false, name: "", info: "" };

    const reducer = (state, action) => {
        if (action.type == "UPDATE_NAME") {
            let value = action.payload;
            let newState = { ...state, name: value }
            return newState;
        }
        if (action.type == "ADD_USER") {
            let value = action.payload;
            let newState = { ...state, array: [...state.array, value], isMessage: true }
            return newState;
        }
        if (action.type == "ADD_INFO") {
            let value = action.payload;
            let newState = { ...state, info: "Added a new user" }
            return newState;
        }
        if (action.type == "CLOSE_MESSAGE") {
            return { ...state, isMessage: false };

        } else {
            return state;
        }
    }

    let [state, dispatch] = useReducer(reducer, defaultState);

    const handleName = (e) => {
        let value = e.target.value;
        dispatch({ type: "UPDATE_NAME", payload: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_USER", payload: state.name })
        dispatch({ type: "ADD_INFO", payload: state.info })
    }

    const clossMessage = () => {
        dispatch({ type: "CLOSE_MESSAGE" })
    }

    return (
        <>
            <div className="">
                <p className="display-4 text-center">Reducer Class</p>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-4">
                            {state.isMessage && <Info close={clossMessage} info={state.info} />}
                            <form onSubmit={handleSubmit}>
                                <input value={state.name} onChange={handleName} type="text" className="form-control" />
                                {/* <input value={} type="text" className="form-control"/> */}
                                <button type="submit" className="btn-sm btn-info mt-2">Submit</button>
                            </form>
                        </div>
                        <div className="col-md-8">
                            {
                                state.array.map((each, i) => (
                                    <div className="mb-2 shadow "><p>{each}</p> </div>
                                ))
                            }
                        </div>
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
            <div>{info}</div>
        </>
    )
}

export default ReducerClass;
