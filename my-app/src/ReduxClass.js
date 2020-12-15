import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const ReduxClass = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch()
    const handleDec = () => {
        dispatch({type: 'DEC'})
    }

    // const handleInc = () => {
    //     dispatch({type:'INC'})
    // }
    const handleChange = (e) => {
        let value = e.target.value;
        dispatch({type: 'CHANGE', payload: value})
    }
    return (
        <>
            <div className="text-center">
                <p className="display-4">Counter: {counter}</p>
                <input type="number" className="mr-3" onChange={handleChange}/><br/>
                <button className=" btn btn-sm btn-info mr-3 mt-2" onClick={handleDec}>Dec</button>
                <button className="mt-2 btn btn-sm btn-danger" onClick={()=> dispatch({type: 'INC'})}>Inc</button>
            </div>
        </>
    )
}

export default ReduxClass;