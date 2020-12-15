import React from 'react';

function Facebooklogin() {
    return (
        <>
            <div className="container-fluid maindiv">
                <div className="row">
                    <div className="col-6">
                        <div className="row justify">
                            <div className="col-8 ">
                                <h2 className="text-primary facebook">facebook</h2>
                                <p>Connect with friends and the world around you on Facebook.</p>
                                <div className="row ">
                                    <div className="col-6 shadow">
                                        <img src="/images/photo.jpg" className="" width="160px" alt="" />
                                        <p className="">Name</p>
                                    </div>
                                    <div className="col-6 shadow">
                                        <img src="photo.jpg" className="" width="160px" alt="" />
                                        {/* <p className="">Add Account</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row ">
                            <div className="col-6 card shadow">
                                <form className="bg-white">
                                    <input name="" className="form-control mt-3" type="text" placeholder="Email or Password" />
                                    <br></br>
                                    <input name="" className="form-control" placeholder="Password" />
                                    <br></br>
                                    <button className="login form-control btn btn-primary">Log in</button>
                                    <br></br>
                                    <small className="a ml-5 bg-white"><i className="ml-3 bg-white">forgot password?</i></small>
                                    <hr></hr>
                                    <br></br>
                                    <button className="btn secondbtn btn-success mb-3 ml-5 p-2">Creat New Account</button>
                                </form>
                            </div>
                        </div>

                        <ShortText></ShortText>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="container-fluid">
                        <div className="ShortText1">
                            <ShortText1></ShortText1>
                            <hr></hr>
                            <p className="bg-white">!Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>

                    </div>
                </div> */}
            </div>

        </>
    )
}

function ShortText() {
    return (
        <small><b>Create a page</b> for a celebrity, band or business.</small>
    )
}

function ShortText1() {
    return (
        <small className="bg-white col-6 mx-auto d-flex">Language !Lorem Ipsum is simply dummy text of the printing and typesetting industry.&nbsp;<button>+</button> </small>
    )
}
export default (Facebooklogin);