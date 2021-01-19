import React from "react";
import breadcrumbsArrow from "../../assets/img/icons/breadcrumbs-arrow.png";
import starEmpty from "../../assets/img/icons/star-empty.svg";
import user from "../../assets/img/icons/user.svg";
import hand from "../../assets/img/icons/hand.svg";
import wishlist from "../../assets/img/icons/wishlist.svg";
import help from "../../assets/img/icons/help.svg";
import invoice from "../../assets/img/icons/invoice.svg";
import handshake from "../../assets/img/icons/hand-shake.svg";
import sort from "../../assets/img/icons/sort.svg";
import { NavLink } from "react-router-dom";

function CoustmerListingPage() {
  return (
    <div>
      <div>
        {/* Hello world */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content />
        <meta
          name="author"
          content="Mark Otto, Jacob Thornton, and Bootstrap contributors"
        />
        <meta name="generator" content="Jekyll v4.1.1" />
        <title>Dashboard</title>
        {/* Bootstrap core CSS */}
        <link href="./assets/css/vendor/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/css/custom/index.css" />
        <header>
          <div className="sample-header"></div>
        </header>
        <main className="bg-white " role="main">
          <div className="breadcrubs-div shadow-sm">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <ul>
                    <li>Dashboard</li>
                    <li>
                      <img src={breadcrumbsArrow} alt="breadcrumbsArrow" />
                    </li>
                    <li className="active-li">Customer List</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Customer List</h1>
              </div>
            </div>
            <div className="row h-scroll-s">
              <div className="col-md-12 h-scroll-s">
                <div className="card-div m-left-0">
                  <p>Total Customers</p>
                  <h2>100</h2>
                </div>
                <div className="card-div">
                  <p>Total Policies</p>
                  <h2>50</h2>
                </div>
                <div className="card-div">
                  <p>AUM</p>
                  <h2>Value</h2>
                </div>
                <div className="card-div">
                  <p>Persistency</p>
                  <h2>40%</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="quikc-links-card">
                  <h2>Quick Links</h2>
                  <div className="quick-links-inner h-scroll-s">
                    <ul className>
                      <NavLink
                        to="/Allcustomers"
                        style={{
                          listStyle: "none",
                          textDecoration: "none",
                          color: "#000",
                        }}
                      >
                        <li>
                          <img src={user} alt="user" />
                          All Customers
                        </li>
                      </NavLink>
                      <NavLink
                        to="/Overdue"
                        style={{
                          listStyle: "none",
                          textDecoration: "none",
                          color: "#000",
                        }}
                      >
                        <li>
                          <img src={hand} alt="hand" />
                          Overdue
                        </li>
                      </NavLink>
                      <NavLink
                        to="/Recommendations"
                        style={{
                          listStyle: "none",
                          textDecoration: "none",
                          color: "#000",
                        }}
                      >
                        <li>
                          <img src={wishlist} alt="wishlist" />
                          Recommendations
                        </li>
                      </NavLink>
                      <NavLink
                        to="/PendingQueries"
                        style={{
                          listStyle: "none",
                          textDecoration: "none",
                          color: "#000",
                        }}
                      >
                        <li>
                          <img src={help} alt="help" />
                          Pending Queries
                        </li>
                      </NavLink>
                      <NavLink
                        to="/Payouts"
                        style={{
                          listStyle: "none",
                          textDecoration: "none",
                          color: "#000",
                        }}
                      >
                        <li>
                          <img src={invoice} alt="invoice" />
                          Payouts
                        </li>
                      </NavLink>
                      <li>
                        <img src={handshake} alt="handshake" />
                        New Business
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <p class="sidebar">sample content</p> */}
            <div className="row">
              <div className="col-md-12">
                <div className="data-card">
                  {/* d-none d-lg-block d-md-block d-sm-none  */}
                  <div className="data-card_header">
                    <h2>Renewal Payment Due (10)</h2>
                  </div>
                  <div className="data_card_body">
                    <div className="row">
                      <div className="col-md-12" />
                      <div className="col-md-12 pad-0">
                        <div className="sidebar m-pad">
                          <ul
                            className="nav nav-tabs h-scroll-s "
                            id="myTab"
                            role="tablist"
                          >
                            <li className="nav-item w-50-p" role="presentation">
                              <a
                                className="nav-link active"
                                id="home-tab"
                                data-toggle="tab"
                                href="#today"
                                role="tab"
                                aria-controls="home"
                                aria-selected="true"
                              >
                                Today
                              </a>
                            </li>
                            <li className="nav-item w-50-p" role="presentation">
                              <a
                                className="nav-link"
                                id="profile-tab"
                                data-toggle="tab"
                                href="#next-week"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                              >
                                Next Week
                              </a>
                            </li>
                            <li className="nav-item w-50-p" role="presentation">
                              <a
                                className="nav-link"
                                id="profile-tab"
                                data-toggle="tab"
                                href="#later"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                              >
                                Later
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="tab-content m-pad-normal"
                          id="myTabContent"
                        >
                          {/* Today Content Starts Here */}
                          <div
                            className="tab-pane fade show active"
                            id="today"
                            role="tabpanel"
                            aria-labelledby="today"
                          >
                            <div className="g-container">
                              {/* Block */}
                              <div className="g-header d-none d-lg-block d-md-none d-sm-none d-xs-none ">
                                <div className="row">
                                  <div className="col-md-3">
                                    <label>
                                      name
                                      <img src={sort} alt="sort" />
                                    </label>
                                  </div>
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <label>
                                      Contact
                                      <img src={sort} alt="sort" />
                                    </label>
                                  </div>
                                  <div className="col-md-7">
                                    <label>
                                      Policy Details
                                      <img src={sort} alt="sort" />
                                      <br />
                                      <span>Sorted by due date</span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-1">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-1">
                                            F
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Fohn Crockett
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s disabled-btn"
                                    >
                                      Premium Already Paid
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-2">
                                        E
                                      </div>
                                      <label>Elisha McFadden</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-2">
                                            E
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Elisha McFadden
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Reminder
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-3">
                                        A
                                      </div>
                                      <label>Abel Cunningham</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-3">
                                            A
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Abel Cunningham
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right indication-span">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Resend Payment Link
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-4">
                                        R
                                      </div>
                                      <label>Richard Nichol</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-4">
                                            R
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Richard Nichol
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Payment Link
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-5">
                                        D
                                      </div>
                                      <label>Degory Kirk</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-5">
                                            D
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Degory Kirk <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Payment Link
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-6">
                                        C
                                      </div>
                                      <label>Clement Ebaugh</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-6">
                                            C
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Clement Ebaugh <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Payment Link
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              <div className="g-footer text-center">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  See More
                                </button>
                              </div>
                            </div>
                          </div>
                          {/* Today Content Ends Here */}
                          {/* Next Week Content Starts Here -------------------------------------------------------------------------------- */}
                          <div
                            className="tab-pane fade"
                            id="next-week"
                            role="tabpanel"
                            aria-labelledby="next-week"
                          >
                            <div className="g-container">
                              {/* Block */}
                              <div className="g-header d-none d-lg-block d-md-none d-sm-none d-xs-none ">
                                <div className="row">
                                  <div className="col-md-3">
                                    <label>
                                      name
                                      <img src={sort} alt="sort" />
                                    </label>
                                  </div>
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <label>
                                      Contact
                                      <img src={sort} alt="sort" />
                                    </label>
                                  </div>
                                  <div className="col-md-7">
                                    <label>
                                      Policy Details
                                      <img src={sort} alt="sort" />
                                      <br />
                                      <span>Sorted by due date</span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-1">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-1">
                                            F
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Fohn Crockett
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Payment Link
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-2">
                                        E
                                      </div>
                                      <label>Elisha McFadden</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-2">
                                            E
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Elisha McFadden
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Payment Link
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-3">
                                        A
                                      </div>
                                      <label>Abel Cunningham</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-3">
                                            A
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Abel Cunningham
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Payment Link
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-4">
                                        R
                                      </div>
                                      <label>Richard Nichol</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-4">
                                            R
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Richard Nichol
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Payment Link
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-5">
                                        D
                                      </div>
                                      <label>Degory Kirk</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-5">
                                            D
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Degory Kirk <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Payment Link
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-6">
                                        C
                                      </div>
                                      <label>Clement Ebaugh</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-6">
                                            C
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Clement Ebaugh <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Payment Link
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              <div className="g-footer text-center">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  See More
                                </button>
                              </div>
                            </div>
                          </div>
                          {/* Next Week Content Ends Here */}
                          {/* Later Content Starts Here ----------------------------------------------------------------------------------------------*/}
                          <div
                            className="tab-pane fade"
                            id="later"
                            role="tabpanel"
                            aria-labelledby="later"
                          >
                            <div className="g-container">
                              {/* Block */}
                              <div className="g-header d-none d-lg-block d-md-none d-sm-none d-xs-none ">
                                <div className="row">
                                  <div className="col-md-3">
                                    <label>
                                      name
                                      <img src={sort} alt="sort" />
                                    </label>
                                  </div>
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <label>
                                      Contact
                                      <img src={sort} alt="sort" />
                                    </label>
                                  </div>
                                  <div className="col-md-7">
                                    <label>
                                      Policy Details
                                      <img src={sort} alt="sort" />
                                      <br />
                                      <span>Sorted by due date</span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-1">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-1">
                                            F
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Fohn Crockett
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Payment Link
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-2">
                                        E
                                      </div>
                                      <label>Elisha McFadden</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-2">
                                            E
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Elisha McFadden
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Payment Link
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-3">
                                        A
                                      </div>
                                      <label>Abel Cunningham</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-3">
                                            A
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Abel Cunningham
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Payment Link
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-4">
                                        R
                                      </div>
                                      <label>Richard Nichol</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-4">
                                            R
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Richard Nichol
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Payment Link
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-5">
                                        D
                                      </div>
                                      <label>Degory Kirk</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-5">
                                            D
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Degory Kirk <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Payment Link
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-6">
                                        C
                                      </div>
                                      <label>Clement Ebaugh</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-6">
                                            C
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Clement Ebaugh <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Payment Link
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              <div className="g-footer text-center">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  See More
                                </button>
                              </div>
                            </div>
                          </div>
                          {/* Later Content Ends Here */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Birthday Wishes */}
            <br />
            <div className="row">
              <div className="col-md-12">
                <div className="data-card">
                  {/* d-none d-lg-block d-md-block d-sm-none  */}
                  <div className="data-card_header">
                    <h2>Birthday Wishes(10)</h2>
                  </div>
                  <div className="data_card_body">
                    <div className="row">
                      <div className="col-md-12" />
                      <div className="col-md-12 pad-0">
                        <div className="sidebar m-pad">
                          <ul
                            className="nav nav-tabs h-scroll-s "
                            id="myTab"
                            role="tablist"
                          >
                            <li className="nav-item w-50-p" role="presentation">
                              <a
                                className="nav-link active"
                                id="home-tab"
                                data-toggle="tab"
                                href="#today1"
                                role="tab"
                                aria-controls="home"
                                aria-selected="true"
                              >
                                Today
                              </a>
                            </li>
                            <li className="nav-item w-50-p" role="presentation">
                              <a
                                className="nav-link"
                                id="profile-tab"
                                data-toggle="tab"
                                href="#next-week1"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                              >
                                Next Week
                              </a>
                            </li>
                            <li className="nav-item w-50-p" role="presentation">
                              <a
                                className="nav-link"
                                id="profile-tab"
                                data-toggle="tab"
                                href="#later1"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                              >
                                Later
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="tab-content m-pad-normal"
                          id="myTabContent"
                        >
                          {/* Today Content Starts Here */}
                          <div
                            className="tab-pane fade show active"
                            id="today1"
                            role="tabpanel"
                            aria-labelledby="today"
                          >
                            <div className="g-container">
                              {/* Block */}
                              <div className="g-header d-none d-lg-block d-md-none d-sm-none d-xs-none ">
                                <div className="row">
                                  <div className="col-md-3">
                                    <label>
                                      name
                                      <img src={sort} alt="sort" />
                                    </label>
                                  </div>
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <label>
                                      Contact
                                      <img src={sort} alt="sort" />
                                    </label>
                                  </div>
                                  <div className="col-md-7">
                                    <label>
                                      Details
                                      <img src={sort} alt="sort" />
                                    </label>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-1">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-1">
                                            F
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Fohn Crockett
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      Sangeetha &nbsp;|&nbsp; Self &nbsp;|&nbsp;
                                      26.11.2020
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Wishes
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-2">
                                        E
                                      </div>
                                      <label>Elisha McFadden</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-2">
                                            E
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Elisha McFadden
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      Vijay Singa &nbsp;|&nbsp; Son
                                      &nbsp;|&nbsp; 26.11.2020
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Wishes
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-3">
                                        A
                                      </div>
                                      <label>Abel Cunningham</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-3">
                                            A
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Abel Cunningham
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      Ayesha &nbsp;|&nbsp; Mother &nbsp;|&nbsp;
                                      26.11.2020
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Wishes
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-4">
                                        R
                                      </div>
                                      <label>Richard Nichol</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-4">
                                            R
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Richard Nichol
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      Randal Patel &nbsp;|&nbsp; Father
                                      &nbsp;|&nbsp; 26.11.2020
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Wishes
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-5">
                                        D
                                      </div>
                                      <label>Degory Kirk</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-5">
                                            D
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Degory Kirk <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      Santosh Boyini &nbsp;|&nbsp; Self
                                      &nbsp;|&nbsp; 26.11.2020
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Wishes
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-6">
                                        C
                                      </div>
                                      <label>Clement Ebaugh</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-6">
                                            C
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Clement Ebaugh <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      Digbijay &nbsp;|&nbsp; Self &nbsp;|&nbsp;
                                      26.11.2020
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Wishes
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              <div className="g-footer text-center">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  See More
                                </button>
                              </div>
                            </div>
                          </div>
                          {/* Today Content Ends Here */}
                          {/* Next Week Content Starts Here -------------------------------------------------------------------------------- */}
                          <div
                            className="tab-pane fade"
                            id="next-week1"
                            role="tabpanel"
                            aria-labelledby="next-week"
                          >
                            <div className="g-container">
                              {/* Block */}
                              <div className="g-header d-none d-lg-block d-md-none d-sm-none d-xs-none ">
                                <div className="row">
                                  <div className="col-md-3">
                                    <label>
                                      name
                                      <img src={sort} alt="sort" />
                                    </label>
                                  </div>
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <label>
                                      Contact
                                      <img src={sort} alt="sort" />
                                    </label>
                                  </div>
                                  <div className="col-md-7">
                                    <label>
                                      Details
                                      <img src={sort} alt="sort" />
                                    </label>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-1">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-1">
                                            F
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Fohn Crockett
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      Sangeetha &nbsp;|&nbsp; Self &nbsp;|&nbsp;
                                      26.11.2020
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Wishes
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-2">
                                        E
                                      </div>
                                      <label>Elisha McFadden</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-2">
                                            E
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Elisha McFadden
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      Vijay Singa &nbsp;|&nbsp; Son
                                      &nbsp;|&nbsp; 26.11.2020
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src="starEmpty" alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Wishes
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-3">
                                        A
                                      </div>
                                      <label>Abel Cunningham</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-3">
                                            A
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Abel Cunningham
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      Ayesha &nbsp;|&nbsp; Mother &nbsp;|&nbsp;
                                      26.11.2020
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src="starEmpty" alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Wishes
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-4">
                                        R
                                      </div>
                                      <label>Richard Nichol</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-4">
                                            R
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Richard Nichol
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      Randal Patel &nbsp;|&nbsp; Father
                                      &nbsp;|&nbsp; 26.11.2020
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src="starEmpty" alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Wishes
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-5">
                                        D
                                      </div>
                                      <label>Degory Kirk</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-5">
                                            D
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Degory Kirk <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      Santosh Boyini &nbsp;|&nbsp; Self
                                      &nbsp;|&nbsp; 26.11.2020
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src="starEmpty" alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Wishes
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-6">
                                        C
                                      </div>
                                      <label>Clement Ebaugh</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-6">
                                            C
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Clement Ebaugh <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      Digbijay &nbsp;|&nbsp; Self &nbsp;|&nbsp;
                                      26.11.2020
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src="starEmpty" alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Wishes
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              <div className="g-footer text-center">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  See More
                                </button>
                              </div>
                            </div>
                          </div>
                          {/* Next Week Content Ends Here */}
                          {/* Later Content Starts Here ----------------------------------------------------------------------------------------------*/}
                          <div
                            className="tab-pane fade"
                            id="later1"
                            role="tabpanel"
                            aria-labelledby="later"
                          >
                            <div className="g-container">
                              {/* Block */}
                              <div className="g-header d-none d-lg-block d-md-none d-sm-none d-xs-none ">
                                <div className="row">
                                  <div className="col-md-3">
                                    <label>
                                      name
                                      <img src={sort} alt="sort" />
                                    </label>
                                  </div>
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <label>
                                      Contact
                                      <img src={sort} alt="sort" />
                                    </label>
                                  </div>
                                  <div className="col-md-7">
                                    <label>
                                      Details
                                      <img src={sort} alt="sort" />
                                    </label>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-1">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-1">
                                            F
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Fohn Crockett
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      Sangeetha &nbsp;|&nbsp; Self &nbsp;|&nbsp;
                                      26.11.2020
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src="starEmpty" alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Wishes
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-2">
                                        E
                                      </div>
                                      <label>Elisha McFadden</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-2">
                                            E
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Elisha McFadden
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      Vijay Singa &nbsp;|&nbsp; Son
                                      &nbsp;|&nbsp; 26.11.2020
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src="starEmpty" alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Wishes
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-3">
                                        A
                                      </div>
                                      <label>Abel Cunningham</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-3">
                                            A
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Abel Cunningham
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      Ayesha &nbsp;|&nbsp; Mother &nbsp;|&nbsp;
                                      26.11.2020
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src="starEmpty" alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Wishes
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-4">
                                        R
                                      </div>
                                      <label>Richard Nichol</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-4">
                                            R
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Richard Nichol
                                            <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      Randal Patel &nbsp;|&nbsp; Father
                                      &nbsp;|&nbsp; 26.11.2020
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src="starEmpty" alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Wishes
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-5">
                                        D
                                      </div>
                                      <label>Degory Kirk</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-5">
                                            D
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Degory Kirk <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      Santosh Boyini &nbsp;|&nbsp; Self
                                      &nbsp;|&nbsp; 26.11.2020
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src="starEmpty" alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Wishes
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4">
                                    <div className="v-lg d-none d-lg-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-6">
                                        C
                                      </div>
                                      <label>Clement Ebaugh</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                      <div className="row">
                                        <div className="p-3 bd-highlight">
                                          <div className="name_circle color-6">
                                            C
                                          </div>
                                        </div>
                                        <div className="p-9 bd-highlight">
                                          <label>
                                            Clement Ebaugh <br /> 9876543213
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  <div className="col-lg-3 col-md-4">
                                    <p>
                                      Digbijay &nbsp;|&nbsp; Self &nbsp;|&nbsp;
                                      26.11.2020
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-1 text-center">
                                    <p>
                                      <img src="starEmpty" alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Send Wishes
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              <div className="g-footer text-center">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  See More
                                </button>
                              </div>
                            </div>
                          </div>
                          {/* Later Content Ends Here */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </main>
      </div>
    </div>
  );
}

export default CoustmerListingPage;
