import React from "react";
import { NavLink } from "react-router-dom";
import BlankHeader from "../../blankheader";

function Navigation() {
  return (
    <div>
      <BlankHeader />
      <div class="container navigation-container">
        <h1 className="text-center  my-5 nav-heading">PAGE NAVIGATION 🚀 </h1>
        <div className="row text-center">
          <div className="col-6 nav-div">
            {" "}
            <NavLink className="custom-navlink" to="/login">
              Login
            </NavLink>{" "}
          </div>
          <div className="col-6 nav-div">
            <NavLink className="custom-navlink" to="/customerlist">
              CustomerList
            </NavLink>
          </div>

          <div className="col-6  nav-div">
            {" "}
            <NavLink className="custom-navlink" to="/allcustomers">
              All-Customers
            </NavLink>
          </div>
          <div className="col-6 nav-div">
            <NavLink className="custom-navlink" to="/overdue">
              Payment overdue
            </NavLink>
          </div>
          <div className="col-6 nav-div">
            <NavLink className="custom-navlink" to="/recommendations">
              Recommendations
            </NavLink>
          </div>
          <div className="col-6 nav-div">
            {" "}
            <NavLink className="custom-navlink" to="/renewalpaymentdue">
              Renewal Payment Due
            </NavLink>{" "}
          </div>
          <div className="col-6 nav-div">
            <NavLink className="custom-navlink" to="/birthdaywishes">
              Birthday Wishes
            </NavLink>
          </div>
          <div className="col-6 nav-div">
            <NavLink className="custom-navlink" to="/customerdetails">
              Customer Details
            </NavLink>
          </div>
          <div className="col-6 nav-div">
            <NavLink className="custom-navlink" to="/Policydetails">
              Policy Details
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
