import React from 'react';
import {Route, Redirect} from 'react-router-dom';


const Guardroute = (props) => {
    let {component: Component, condition, ...rest} = props; 
    return (
        <>
            <div>
                <Route {...rest} render={()=> {
                   return condition ? <Component/> : <Redirect to="/" />
                }}></Route>
            </div>
        </>
    )
}

export default Guardroute;
