import React, { useState,useEffect } from 'react';
import { NavLink,useLocation } from 'react-router-dom';
import WAicon from '../../assets/img/icons/whats-app.svg';



function Dashboard() {
    
    const location = useLocation();
    console.log(location.response);
    const [WAmodal, handleWAmodal] = useState(false);

    useEffect(() => {
         document.querySelector('.waButton').click();
    }, [])

    
    return (
        <div>
            <main role="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 container-dummy text-center">
                            <br /><br /><br /><br /><br /><br />
                            Welcome to Dashboard <br/>
                           {location.response.data.agentDetails.Entity_1.first_name+ location.response.data.agentDetails.Entity_1.last_name} 
                            <button hidden className="text-center waButton" onClick={(e) => {
                                handleWAmodal(true);
                            }} data-toggle="modal" data-target="#whatsapp">Whats App Optin</button>
                        </div>
                    </div>
                </div>
                {/* Forgot Password Modal */}
                <div className={WAmodal ? 'modal fade active show' : 'modal fade'} style={WAmodal ? { display: 'block' } : { display: 'none' }} id="whatsapp" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="forgot-password" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title  bold" id="staticBackdropLabel"><img className="mrgn-right-10" alt='WAicon' src={WAicon} />WhatsApp Opt-In</h5>
                                <button type="button" className="close modal-close-button" onClick={(e) => {
                                    e.preventDefault();
                                    handleWAmodal(false);
                                }} data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p className="font-size-18">I hereby consent receive communication on WhatsApp from Aditya Biral Life Insurance Company on mobile number XXXXXXXX</p>
                                <br />
                                <p className="font-size-18">Disclaimer text goes here <br /> You can opt-in/opt-out anytime inside your profile</p>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">  Don't show this message again  </label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" onClick={(e) => {
                                    e.preventDefault();
                                    handleWAmodal(false);
                                }}data-dismiss="modal" >Not Now</button>
                                <button type="button" className="btn btn-primary" onClick={(e) => {
                                    e.preventDefault();
                                    handleWAmodal(false);
                                }} data-dismiss="modal">I Accept</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Dashboard;
