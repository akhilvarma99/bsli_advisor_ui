import React from 'react';
import arrow from '../../assets/img/icons/arrow.svg';
import { Link } from 'react-router-dom'

function Password() {

    console.log('yes');
    return (
        <main role="main">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="login-card shadow-sm">
                            <span className="back-a"><Link to='/'>Back</Link></span>
                            <p className="h3 text-center">Welcome to Advisor Portal</p>
                            <br />
                            <div className="user-id-drop-div">

                                <Link to='/users' >12345656</Link> <img src={arrow} alt='arrow_icon' />
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="nav nav-tabs row" id="myTab" role="tablist">
                                        <li className="nav-item col-md-6 col-sm-6 col-xs-6" role="presentation">
                                            <span className="nav-link active" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">Login With Password</span>

                                        </li>
                                        <li className="nav-item  col-md-6 col-sm-6 col-xs-6" role="presentation">

                                            <span className="nav-link" id="profile-tab" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false">Login With OTP</span>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div className="form-group">
                                                <br />
                                                <label htmlFor="exampleInputEmail1">Enter Password</label>
                                                <input className="form-control shadow-sm" id="password-field" type="password" name="password" defaultValue="secret" />
                                                <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password" />
                                                <span className="float-right" data-toggle="modal" data-target="#forgot-password">Forgot Password?</span>

                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            <div className="form-group">
                                                <br />
                                                <label htmlFor="exampleInputEmail1">Enter OTP</label>
                                                <input type="email" className="form-control shadow-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Eg :123456" />
                                                <span className="float-right" href="login-1-otp.html">Send OTP</span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <br /> <br />
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            I agree the
                                             <span className="text-u" data-toggle="modal" data-target="#staticBackdrop">terms &amp; conditions</span>


                                        </label>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-8 hide">
                                    <span className="float-left m-top-10">Having problem signing in?</span>


                                </div>
                                <div className="col-md-4">
                                    <button type="button" className="btn btn-primary float-right">Next</button>
                                </div>
                                <div className="col-md-8 show-xs">
                                    <br />                         <span className="float-left m-top-10">Having problem signing in?</span>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal Div Starts Here */}
            {/* Button trigger modal */}
            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
  Launch static backdrop modal
</button> */}
            {/* Terms & Conditions Modal */}
            <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-terms-conditions">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title  bold" id="staticBackdropLabel">Terms of Use</h5>
                            <button type="button" className="close modal-close-button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="terms-text-div">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">I Agree</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Forgot Password Modal */}
            <div className="modal fade" id="forgot-password" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="forgot-password" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title  bold" id="staticBackdropLabel">Forgot Password</h5>
                            <button type="button" className="close modal-close-button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Clicking forgot password link will redirect you to an external self help page where you can reset your password</p>
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

export default Password
