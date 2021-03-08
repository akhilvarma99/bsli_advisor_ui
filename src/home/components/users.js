import React from "react";
// import userIcon from '../../assets/img/icons/user-icon.svg';
import newUser from "../../assets/img/icons/newUser.svg";
import existingUser from "../../assets/img/icons/existingUser.svg";
import { NavLink } from "react-router-dom";
import leftArrow from "../../assets/img/icons/arrow-left.svg";

function Users() {
  return (
    <div>
      <main role="main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="login-card shadow-sm">
                <span className="back-a">
                  <NavLink to="/password">
                    <img className="backArrow" alt="backIcon" src={leftArrow} />
                    Back
                  </NavLink>
                </span>
                <p className="h3 text-center">Choose an Account</p>
                <br />
                <div className="row">
                  <div className="col-md-12">
                    <div className="select-user-id">
                      <ul>
                        <li>
                          <span></span>
                          <NavLink to="/">
                            <img
                              className="existingUser"
                              src={existingUser}
                              alt={existingUser}
                            />
                            User ID 123456
                          </NavLink>
                        </li>
                        <li className="brdr-none">
                          <NavLink to="/" className="bold">
                            <img src={newUser} alt={newUser} />
                            Add Another Account
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
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
          </div>
        </div>
      </main>
    </div>
  );
}

export default Users;
