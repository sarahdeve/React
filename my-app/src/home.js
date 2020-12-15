import React, { useState } from 'react';
import Counter from './counter';
import Control from './control';

function Home() {
    // let count = 300;
    let [count, setCount] = useState(0)
    
    let inc = () => {
        setCount(count + 1)
        console.log(count);
    }

    let dec = () => {
        setCount(count - 1)
        console.log(count);
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4 text-center mx-auto">
                        <Counter count={count} />
                        <p>{count}</p>
                        <Control inc={inc} dec={dec} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;


