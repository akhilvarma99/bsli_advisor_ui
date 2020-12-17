import React, { useState } from 'react';
import arrow from '../../assets/img/icons/arrow.svg';
import leftArrow from '../../assets/img/icons/left-arrow.svg';
import { NavLink } from 'react-router-dom';




function Password() {

    const [forgotmodal, setForgotModal] = useState(false);
    const [loginPassword, setLoginPassword] = useState(true);
    const [loginOTP, setLoginOTP] = useState(false);
    const [TermsModal, HandleTerms] = useState(false);
    const [sendOTP, setSendOTP] = useState(false);





    return (
        <main role="main">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="login-card shadow-sm">
                            <span className="back-a"><NavLink to='/'><img className = 'backArrow' alt = 'backIcon' src = {leftArrow}/>Back</NavLink></span>
                            <p className="h3 text-center">Welcome to Advisor Portal</p>

                            <div className="user-id-drop-div">

                                <NavLink to='/users' >12345656</NavLink> <img src={arrow} alt='arrow_icon' />
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="nav nav-tabs row" id="myTab" role="tablist">
                                        <li className="nav-item col-6" role="presentation">
                                            <span className={loginPassword ? "nav-link active nav-link-50 cursor-pointer" : "nav-link cursor-pointer  nav-link-50"} id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true" onClick={() => { console.log('Password clicked'); setLoginOTP(false); setLoginPassword(true) }} >Login With Password</span>

                                        </li>
                                        <li className="nav-item  col-6" role="presentation">

                                            <span className={loginOTP ? "nav-link active nav-link-50 cursor-pointer" : "nav-link cursor-pointer nav-link-50"} id="profile-tab" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false" onClick={() => { console.log('Otp clicked'); setLoginOTP(true); setLoginPassword(false) }}>Login With OTP</span>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className={loginPassword ? "tab-pane fade show active" : "tab-pane fade"} style={loginPassword ? { display: 'block' } : { display: 'none' }} id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div className="form-group">
                                                <br />
                                                <label htmlFor="exampleInputEmail1">Password</label>
                                                <input className="form-control shadow-sm" id="password-field" type="password" name="password" placeholder='Enter your password' />
                                                <span id="toggle-pwd" toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password" onClick={
                                                    () => {

                                                        const togglePwd = document.getElementById('toggle-pwd');
                                                        togglePwd.classList.toggle('fa-eye');
                                                        togglePwd.classList.toggle('fa-eye-slash');

                                                        const pwdField = document.getElementById('password-field');

                                                        if (pwdField.type === 'password') {
                                                            pwdField.type = 'text'
                                                        } else {
                                                            pwdField.type = 'password'
                                                        }
                                                    }
                                                }></span>
                                                <NavLink to='#' onClick={(e) => {
                                                    e.preventDefault();
                                                    setForgotModal(true);
                                                }} className="float-right" data-toggle="modal" data-target="#forgot-password">Forgot Password?</NavLink>

                                            </div>
                                        </div>
                                        <div className={loginOTP ? "tab-pane fade show active" : "tab-pane fade"} style={loginOTP ? { display: 'block' } : { display: 'none' }} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            <div className="form-group">

                                                <div className="alert alert-secondary otp-txt mrgn-0" style={sendOTP ? { display: 'block' } : { display: 'none' }} role="alert">
                                                    Please enter the OTP sent to your mobile number 98*****180 as well as registered email ID
                                                    san****ha@gmail.com
                                                </div>
                                                <br />
                                                <label htmlFor="exampleInputEmail1">Enter OTP</label>
                                                <input type="email" className="form-control shadow-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your OTP" />
                                                <NavLink to="#" className="float-right link-underline" onClick={(e) => {
                                                    e.preventDefault();
                                                    setSendOTP(true);
                                                }}>{sendOTP? 'Resend OTP' : 'Send OTP'}</NavLink>
                                                <label className="otp-expire-txt" style={sendOTP ? { display: 'block' } : { display: 'none' }}>Wait 60 seconds to regenerate </label>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <br />
                                    <div className="custom-control custom-checkbox check-box-row">
                                    <input type="checkbox" defaultChecked className="custom-control-input" id="customCheckBox5"/>
                                            <label className="custom-control-label" htmlFor="customCheckBox5">I agree to &nbsp;
                                             <NavLink to='#' className="text-u" onClick={(e) => { e.preventDefault(); HandleTerms(true) }} data-toggle="modal" data-target="#staticBackdrop">Terms &amp; Conditions</NavLink></label>
                                    </div>
                                    {/* <div className="form-check custom-checkbox">
                                        <input className="form-check-input custom-control-input" type="checkbox" defaultChecked defaultValue id="defaultCheck1" />
                                        <label className="form-check-label custom-control-label" htmlFor="defaultCheck1">
                                            I agree to &nbsp;
                                             <NavLink to='#' className="text-u" onClick={(e) => { e.preventDefault(); HandleTerms(true) }} data-toggle="modal" data-target="#staticBackdrop">Terms &amp; Conditions</NavLink>

                                        </label>
                                    </div> */}
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-8 hide">
                                    <NavLink to='/troubleLogin' target = '_blank' className="float-left m-top-10">Having problem signing in?</NavLink>


                                </div>
                                <div className="col-md-4">
                                    <NavLink to='/dashboard'><button type="button" className="btn btn-primary float-right">Login</button></NavLink>
                                </div>
                                <div className="col-md-8 show-xs">
                                    <br />  <NavLink to='/troubleLogin' target = '_blank' className="float-left m-top-10">Having problem signing in?</NavLink>
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
            <div className={TermsModal ? `modal fade show` : "modal fade"} style={TermsModal ? { display: 'block' } : { display: 'none' }} id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-terms-conditions">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title  bold" id="staticBackdropLabel">Terms of Use</h5>
                            <button type="button" className="close modal-close-button" onClick={() => HandleTerms(false)} data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">x</span>
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
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => HandleTerms(false)} data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => HandleTerms(false)}>I Agree</button>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* Forgot Password Modal */}
            <div className={forgotmodal ? `modal fade show` : "modal fade"} style={forgotmodal ? { display: 'block' } : { display: 'none' }} id="forgot-password" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="forgot-password" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title  bold" id="staticBackdropLabel">Forgot Password</h5>
                            <button onClick={(e) => {
                                e.preventDefault();
                                setForgotModal(false);
                            }} type="button" className="close modal-close-button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Clicking forgot password link will redirect you to an external self help page where you can reset your password</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={(e) => {
                                e.preventDefault();
                                setForgotModal(false);
                            }} type="button" className="btn btn-primary" data-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Password
