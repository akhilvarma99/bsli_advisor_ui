import { OverlayTrigger, Popover } from "react-bootstrap";
import BlankHeader from "../../blankheader";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import Popover from 'react-bootstrap/Popover';
import infoIcon from "../../assets/img/icons/info-icon.svg";
// import Tooltip from 'react-bootstrap/Tooltip';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

function Login(props) {
  const [forgotmodal, setforgotmodal] = useState(false);
  const [textBox, setTextBox] = useState("");
  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        User ID is your Advisor/Agent/Business code. In case of an employee,
        please enter Employee Code
      </Popover.Content>
    </Popover>
  );

  // const [clickForgot, SetClickForgrot] = useState(false);

  const handleInput = (e) => {
    const textElement = document.querySelector(".textBoxControl");
    const buttonElement = document.querySelector(".checkNext");

    // const r = new RegExp("^[^<>'\"/;`%]*$");
    const changedValue = e.target.value.replace(
      /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
      ""
    );
    setTextBox(changedValue);
    if (textBox === "") {
      textElement.style.border = "1px solid";
      buttonElement.disabled = true;
    } else {
      textElement.style.border = "1px #1f874c solid";
      buttonElement.disabled = false;
      console.log("no");
    }
  };

  return (
    <>
      <BlankHeader />
      <main role="main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="login-card shadow-sm">
                <p className="h3 text-center">Welcome to Advisor Portal</p>
                <br />
                <div className="form-group">
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <label htmlFor="exampleInputEmail1">User ID</label>
                    <OverlayTrigger
                      trigger="click"
                      placement="right"
                      overlay={popover}
                    >
                      <img src={infoIcon} alt="infoIcon" />
                    </OverlayTrigger>
                  </div>
                  <input
                    type="email"
                    className="form-control shadow-sm input-success textBoxControl"
                    onChange={handleInput}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Eg :123456"
                    value={textBox}
                  />
                  {/* <span onClick={fnToggleLogin('forgotUserID')} className="float-right" data-toggle="modal" data-target="#forgot-userid" >Forgot User ID?</span> */}
                  <NavLink
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setforgotmodal(true);
                    }}
                    className="float-right"
                    data-toggle="modal"
                    data-target="#forgot-userid"
                  >
                    Forgot User ID?
                  </NavLink>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="col-md-8 hide">
                    <NavLink
                      to="/troubleLogin"
                      target="_blank"
                      className="float-left m-top-10"
                    >
                      Having problem signing in?
                    </NavLink>
                  </div>
                  <div className="col-md-4   ">
                    {" "}
                    <button
                      type="button"
                      disabled
                      className="btn btn-primary float-right checkNext"
                    >
                      Next
                    </button>
                  </div>
                  <div className="col-md-8 show-xs">
                    <br />
                    <NavLink
                      to="/troubleLogin"
                      target="_blank"
                      className="float-left m-top-10"
                    >
                      Having problem signing in?
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ width: "100%" }} className="privacy_term_div">
              <p style={{ textAlign: "center" }}>
                <span>Privacy</span> &nbsp; <span>Terms</span>
              </p>
            </div>
          </div>
        </div>

        {/* Forgot Password Modal */}
        <div
          className={forgotmodal ? `modal fade show` : "modal fade"}
          style={forgotmodal ? { display: "block" } : { display: "none" }}
          id="forgot-userid"
          data-backdrop="static"
          data-keyboard="false"
          tabIndex={-1}
          aria-labelledby="forgot-password"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title  bold" id="staticBackdropLabel">
                  Forgot User ID
                </h5>
                <button
                  type="button"
                  className="close modal-close-button"
                  data-dismiss="modal"
                  onClick={(e) => {
                    e.preventDefault();
                    setforgotmodal(false);
                  }}
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Please contact your manager or FLS to get your User ID</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    setforgotmodal(false);
                  }}
                  data-dismiss="modal"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
