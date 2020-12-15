import React, { useState, useRef, useEffect, createContext, useContext } from 'react'

let MyContext = createContext();

function ContextClass() {

    let [names, setNames] = useState([]);
    let inputContainer = useRef(null);

    useEffect(() => {
        focusInput();
    })

    const focusInput = () => {
        inputContainer.current.focus();
    }

    const addUser = (e) => {
        e.preventDefault();
        let name = inputContainer.current.value;
        // console.log(names, name)
        setNames([...names, name]);
    }
    const removeUser = (index) => {
        setNames(names.filter((each, i) => i !== index));
    }

    return (
        <>
            <MyContext.Provider value={{ removeUser }}>
                <div className="container">
                    <div className="row mt-5 ">
                        <div className="col-6 mt-5 text-center border-right">
                            <form>
                                <input ref={inputContainer} className="form-control w-50 mx-auto mb-3" />
                                <button className="btn btn-info" onClick={addUser}>Add</button>
                            </form>
                        </div>
                        <div className="col-6">
                            <ListComponent nameArr={names} removeUser={removeUser} />
                        </div>
                    </div>
                </div>
            </MyContext.Provider>
        </>
    )
}

const ListComponent = (props) => {
    let { nameArr, removeUser } = props;
    return (
        <>
            <h3 className="text-center">MyList</h3>
            {nameArr.map((name, index) => {
                return <SingleName key={index} name={name} index={index} removeUser={removeUser} />
            })}
        </>
    )
}

const SingleName = (props) => {
    let context = useContext(MyContext);
    let { removeUser } = context;
    let { name, index } = props;
    return (
        <>
            <div className="p-2">
                <span>{name}</span>
                <button className="btn btn-sm primary float-right btn-info" onClick={removeUser}>Del</button>
            </div>
        </>
    )
}
export default ContextClass;
