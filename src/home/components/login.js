import React from 'react';
import { Link } from 'react-router-dom';


function Login() {

    // const [clickForgot, SetClickForgrot] = useState(false);

    return (
        <main role="main">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="login-card shadow-sm">
                            <p className="h3 text-center">Welcome to Advisor Portal</p>
                            <br />
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Enter User ID</label>
                                <input type="email" className="form-control shadow-sm input-success" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Eg :123456" />

                                <a className="float-right" href='_self' data-toggle="modal" data-target="#forgot-userid" >Forgot User ID?</a>
                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-8 hide">
                                    <span className="float-left m-top-10"><Link to='/troubleLogin'>Having problem signing in?</Link></span>

                                </div>
                                <div className="col-md-4">
                                    <Link to='/password'> <button type="button" className="btn btn-primary float-right">Next</button></Link>

                                </div>
                                <div className="col-md-8 show-xs">
                                    <br />
                                    <a className="float-left m-top-10" href="/">Having problem signing in?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Forgot Password Modal */}
            <div className="modal fade" id="forgot-userid" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="forgot-password" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title  bold" id="staticBackdropLabel">Forgot User ID</h5>
                            <button type="button" className="close modal-close-button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Please contact your manager or FLS to get your User ID</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Login
