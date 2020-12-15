import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-md bg-dark">
                <div className="container-fluid ">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand" >WebSiteName</Link>
                    </div>
                    <ul className="nav navbar-nav text-white">
                        <li>
                            <Link to="/FormClass" className="active text-white mr-3">Form</Link>
                        </li>
                        <li>
                            <Link to="/apiass" className="active text-white mr-3">ApiAss</Link>
                        </li>
                        <li>
                            <Link to="/dashboard" className="active text-white mr-3">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/about" className=" text-white mr-3">Effect</Link>
                        </li>
                        <li>
                            <Link to="/contextclass" className="mr-3 text-white">Contex</Link>
                        </li>
                        <li>
                            <Link to="/Assign" className="mr-3 text-white">Ass</Link>
                        </li>
                        <li>
                            <Link to="/reducerclass" className="mr-3 text-white">Reducer</Link>
                        </li>
                        <li>
                            <Link to="/reducerass" className="mr-3 text-white">ReducerAss</Link>
                        </li>
                        <li>
                            <Link to="/ReduxClass" className="mr-3 text-white">ReduxClass</Link>
                        </li>
                        <li>
                            <Link to="*">Error</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;