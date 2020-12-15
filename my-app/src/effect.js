import React, { useEffect, useState } from 'react';

function EffectClass() {
    let [value, setValue] = useState(0);
    let [name, setName] = useState("");
    let [size, setSize] = useState(0);

    let [title, setTitle] = useState(0);


    useEffect(()=>{
        console.log("USING UseEffect")
        if (value > 0) {
            document.title = `my count (${value})`
        } else {
            document.title = `my count`
        }
        window.addEventListener('resize', getSize);
        return(()=> {
            window.removeEventListener('resize', null)
        })
    }, [value]);

    console.log("Rendered Component");

    const inc = () => {
        setValue(value + 1);
    }

    const handleChange = (e) => {
        let name = e.target.value;
        setName(name);
    }

    const getSize = () => {
        setSize(window.innerWidth);
    }
    
    useEffect(()=> {
        if(!value === 0) {
            document.title = `title (${name})`
        }else {
            document.title = `title`
        }
    }, [name])

        // if (value > 0) {
        //     return (
        //         <>
        //             <BlueComponent/>
        //         </>
        //     )
        // }else if(value <= 0) {
        //         <>
        //             <RedComponent/>
        //         </>
        // }
   

    return(
        <>
             <div className="text-center">
                 <p className="display-4 text-center">Effect Class</p>
                 <p className="display-4 text-center">
                     {value > 0 ? <b className="text-primary">{value}</b> : <b className="text-danger">{value}</b>}
                     {value > 0 ? <BlueComponent/> : <RedComponent/>}

                    {}

                </p>
                 <p className="display-4 text-center">{size}</p>
                 <button onClick={inc}className="btn btn-info mr-2">Inc</button>
                 <button onClick={()=>setValue(value -1)} min={0} className="btn btn-info">Dec</button>
                 <br/><br/>
                 <input type="text" name="" onChange={handleChange} className="" placeholder="Title input..."/>
             </div>    
        </>
    )
}

function RedComponent() {
    return(
        <p className="bg-danger p-3 text-white">RED COMPONENT</p>
    )
}
function BlueComponent() {
    return(
        <p className="bg-primary p-3 text-white">BLUE COMPONENT</p>
    )
}

export default EffectClass;