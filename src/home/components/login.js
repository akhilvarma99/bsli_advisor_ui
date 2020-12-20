import React, { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AESEncryption from './aes';
import axios from 'axios';
import { useHistory } from "react-router-dom";



function Login(props) {

    const history = useHistory();
    const [forgotmodal, setforgotmodal] = useState(false);
    const [nextButton, setNextButton] = useState(false);
    const [wrongUser, setWrongUser] = useState(false);
    // const [activateNext,SetActivateNext] = useState(false);
    console.log(AESEncryption.encrypt('akhil'));
    useEffect(() => {
        // POST request using axios inside useEffect React hook
        const headers = {
           'checksum' : 'b4a465320696ab8119974e90f321bd7fe0a04a65',
           'timestamp' : '1607326166'          };
        const article = {
            "mode": "LWUP",
            "user_id": "ByNDZ4knI0NniQcjQ2eJJ5lWBDgQmVYEOBCZVgQ4EBBa5PeFgk25Fz7JB0lYRu4inHXmkfdeXAnNEgk1vTqCPr3NycuDJF34wL25lgGqS+I=",
            "password": "ByNDZ4knI0NniQcjQ2eJJ5lWBDgQmVYEOBCZVgQ4EBAgZ1Cf/1PczoO5HNhtLcxVMabC7xwT/XUTcSbfhAGJIJOTkYyg86w+mS0KW8ACdgQ=",
            "ip_address": "127.0.0.1",
            "device_type": "app",
            "device_os": "windows"
        };
        axios.post('http://localhost:4000/v1/auth/login', article, {headers})
            .then(response => console.log(response));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


    
const handleInput = () => {
    const textElement = document.querySelector(".textBoxControl");
    const buttonElement = document.querySelector('.checkNext');
    if (textElement.value.length === 5 || textElement.value.length === 8  ) {
        textElement.style.border = '1px #1f874c solid';
        console.log(textElement.value);
        setNextButton(true);
        textElement.addEventListener("keyup", function(event) { 
            if (event.keyCode === 13) {
              buttonElement.click();
            }
          });
    }
    else {
        textElement.style.border = '1px solid';
        setNextButton(false);
    }
}



const nextHandler = () => {
    const textElement = document.querySelector(".textBoxControl");
    if (textElement.value === 'akhil' || textElement.value === 'kamal') {
        console.log('matches');
        history.push('/password');
    }
    else {
        console.log('no');
        setWrongUser(true);
        textElement.style.border = '1px solid red';
        }     
    }
    
    return (
        <main role="main">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="login-card shadow-sm">
                            <p className="h3 text-center">Welcome to Advisor Portal</p>
                            <br />
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">User ID</label>


                                <input type="email" className="form-control shadow-sm input-success textBoxControl" onChange={handleInput} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Eg :123456" />
                                <span className = {wrongUser ? 'float-left text-danger' : 'noDisplay'}   >Please Enter the Correct User ID</span>
                                {/* <span onClick={fnToggleLogin('forgotUserID')} className="float-right" data-toggle="modal" data-target="#forgot-userid" >Forgot User ID?</span> */}
                                <NavLink to="#" onClick={(e) => {
                                    e.preventDefault();
                                    setforgotmodal(true);
                                }} className="float-right" data-toggle="modal" data-target="#forgot-userid" >Forgot User ID?</NavLink>

                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-8 hide">

                                    <NavLink to='/troubleLogin' target = '_blank' className="float-left m-top-10">Having problem signing in?</NavLink>

                                </div>
                                <div className="col-md-4   ">
                                     <button type="button" disabled = {!nextButton} onClick = {nextHandler}   className="btn btn-primary float-right checkNext">Next</button>


                                </div>
                                <div className="col-md-8 show-xs">
                                    <br />
                                    <NavLink to='/troubleLogin'target = '_blank'  className="float-left m-top-10" >Having problem signing in?</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Forgot Password Modal */}
            <div className={forgotmodal ? `modal fade show` : "modal fade"} style={forgotmodal ? { display: 'block' } : { display: 'none' }} id="forgot-userid" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="forgot-password" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title  bold" id="staticBackdropLabel">Forgot User ID</h5>
                            <button type="button" className="close modal-close-button" data-dismiss="modal" onClick={(e) => {
                                e.preventDefault()
                                setforgotmodal(false)
                            }} aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Please contact your manager or FLS to get your User ID</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={(e) => {
                                e.preventDefault()
                                setforgotmodal(false)
                            }} data-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Login
