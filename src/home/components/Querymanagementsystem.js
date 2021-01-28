import React, { useState } from "react";
import Header from "../../header";
import breadcrumbsarrow from "../../assets/img/icons/breadcrumbs-arrow.png";
import filter from "../../assets/img/icons/filter.svg";
import searchbox from "../../assets/img/icons/search-bx.svg";
import sort from "../../assets/img/icons/sort.svg";
import loadmore from "../../assets/img/icons/load-more.svg";
function Querymanagementsystem() {
  function myFunction(all) {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  return (
    <div>
      <Header />

      <main className="bg-white pb-4" role="main">
        <div className="breadcrubs-div shadow-sm d-none d-lg-block d-md-block  d-sm-none">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul>
                  <li>Dashboard</li>
                  <li>
                    <img src={breadcrumbsarrow} alt="breadcrumbsarrow" />
                  </li>
                  <li className="active-li">Query Management System</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {/* Heading Starts  */}
          <div className="row">
            <div className="col-12 q-card-md">
              <h1 className="p-header small-no-display ">
                Query Management System
              </h1>
            </div>
          </div>
          {/* Heading Ends  */}
          <div className="row d-flex justify-content-between">
            <div className="col-sm-12 col-12 d-sm-block d-lg-none d-md-none sm-query_btn ">
              <button className="btn btn-primary px-4 ">Raise a Query</button>
            </div>
            <div className="col-lg-3 col-md-5 col-xs-6 col-7 q-card-md">
              <div className="card-div-lrge shadow-normal  m-left-0">
                <p>Total Queries Raised</p>
                <h2 className="mb-0">100</h2>
              </div>
            </div>
            <div className="col-sm-12 col-12 d-sm-block d-lg-none d-md-none sm-query_btn ">
              <h5>Query List (10)</h5>
            </div>
            <div className="col-md-3 col-xs-6 text-align-right d-none d-md-block d-lg-block d-sm-none">
              <button className="btn btn-primary px-4">Raise a Query</button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="f_Div_outer">
                <div className="f_Div_c1 d-none d-lg-block">
                  <div className="filter-div-l shadow-normal">
                    <div className="filter_header">
                      <div className="row">
                        <div className="col-lg-12 filter_sub_heading">
                          <h2 className="d-flex align-items-center">
                            <img src={filter} alt="filter" />
                            Filter (2)
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="filter_body">
                      <div className="row">
                        <div className="col-lg-12"></div>
                        <div className="col-lg-12 filter_sub_check_box_row">
                          <h3>Query Status</h3>
                          <div className="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="queryStatusPending"
                              defaultChecked
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="queryStatusPending"
                            >
                              Pending
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="queryStatusResolved"
                              defaultChecked
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="queryStatusResolved"
                            >
                              Resolved
                            </label>
                          </div>
                        </div>
                      </div>
                      <div
                        className="row"
                        id="myDIV"
                        onClick={() => myFunction}
                      >
                        <div className="col-lg-12 filter_sub_check_box_row">
                          <h3>Raised By</h3>
                          <div className="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="raisedBySelf"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="raisedBySelf"
                            >
                              Self
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="raisedByCustomer"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="raisedByCustomer"
                            >
                              Customer
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 filter_sub_check_box_row">
                          <h3>Query Type</h3>
                          <div className="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="queryTypeServicing"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="queryTypeServicing"
                            >
                              Customer Servicing
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="queryTypeRnr"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="queryTypeRnr"
                            >
                              RnR
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="queryTypeCommission"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="queryTypeCommission"
                            >
                              Commission
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="filter-footer">
                      <div className="row">
                        <div className="col-lg-12">
                          <button
                            type="button"
                            className="btn btn-outline-s-secondary"
                          >
                            Reset
                          </button>{" "}
                          <button
                            type="button"
                            className="btn btn-primary-s mrgn-0"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="f_Div_c2">
                  <div className="data-card">
                    {/* d-none d-lg-block d-md-block d-sm-none  */}
                    <div className="data_card_body">
                      <div className="row">
                        <div className="col-md-12" />
                        <div className="col-md-12 pad-0">
                          <div className="sidebar m-pad">
                            <div className="date-search-outer d-search d-none d-lg-block">
                              <div className="data-search-inner">
                                <div className="data-search">
                                  <img src={searchbox} alt="searchbox" />
                                  <input
                                    type="email"
                                    className="form-control data-search-box"
                                    id="search"
                                    aria-describedby="data-search"
                                    placeholder="Search by QUERY FOR, INTERACTION ID"
                                  />
                                  <button
                                    type="button"
                                    className="btn btn-primary-s"
                                  >
                                    Search
                                  </button>
                                </div>
                              </div>
                            </div>
                            <ul
                              className="nav nav-tabs h-scroll-s "
                              id="myTab"
                              role="tablist"
                            >
                              <li
                                className="nav-item w-50-p"
                                role="presentation"
                              >
                                <a
                                  className="nav-link active"
                                  id="home-tab"
                                  data-toggle="tab"
                                  href="#all"
                                  role="tab"
                                  aria-controls="all"
                                  aria-selected="true"
                                >
                                  Today
                                </a>
                              </li>
                              <li
                                className="nav-item w-50-p"
                                role="presentation"
                              >
                                <a
                                  className="nav-link"
                                  id="self-tab"
                                  data-toggle="tab"
                                  href="#self"
                                  role="tab"
                                  aria-controls="self"
                                  aria-selected="false"
                                  onClick={() => myFunction}
                                >
                                  Next Week
                                </a>
                              </li>
                              <li
                                className="nav-item w-50-p"
                                role="presentation"
                              >
                                <a
                                  className="nav-link"
                                  id="customer-tab"
                                  data-toggle="tab"
                                  href="#customer"
                                  role="tab"
                                  aria-controls="customer"
                                  aria-selected="false"
                                >
                                  Later
                                </a>
                              </li>
                            </ul>
                            {/* <div class="date-search-outer">
                        
                      </div> */}
                          </div>
                          <div
                            className="tab-content m-pad-normal"
                            id="myTabContent"
                          >
                            {/* All Content Starts Here */}
                            <div
                              className="tab-pane fade show active"
                              id="all"
                              role="tabpanel"
                              aria-labelledby="all"
                            >
                              <div className="g-container">
                                {/* Block */}
                                <div className="g-header d-none d-lg-block d-md-none d-sm-none d-xs-none ">
                                  <div className="row">
                                    <div className="col-md-2">
                                      <label>
                                        Interaction ID
                                        <img src={sort} alt="sort" />
                                      </label>
                                    </div>
                                    <div className="col-md-2">
                                      <label>
                                        Query Type
                                        <img src={sort} alt="sort" />
                                      </label>
                                    </div>
                                    <div className="col-md-2">
                                      <label>Raised By</label>
                                    </div>
                                    <div className="col-md-3">
                                      <label>Created Date</label>
                                    </div>
                                    <div className="col-md-2">
                                      <label>
                                        Query For
                                        <img src={sort} alt="sort" />
                                      </label>
                                    </div>
                                    <div className="col-md-1">
                                      <label>Status</label>
                                    </div>
                                  </div>
                                </div>
                                {/* Block */}
                                {/* Block */}
                                <div className="g-row q-row-cntn">
                                  <div className="row">
                                    <div className="col-md-4 col-lg-2 col-sm-12 ">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Interaction ID
                                      </span>
                                      <p>12345678AB123456</p>
                                    </div>
                                    <div className="col-md-4 col-lg-2 col-7">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Query Type
                                      </span>
                                      <p>Customer Servicing</p>
                                    </div>
                                    <div className="col-md-4 col-lg-2 col-5">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Raised by
                                      </span>
                                      <p>Self</p>
                                    </div>
                                    <div className="col-md-4 col-lg-3  col-12">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Created Date
                                      </span>
                                      <p>DD/MMM/YYYY 12:10 AM</p>
                                    </div>
                                    <div className="col-md-4 col-lg-2  col-6">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Query For
                                      </span>
                                      <p>Misra</p>
                                    </div>
                                    <div className="col-md-4 col-lg-1  col-6">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Status
                                      </span>
                                      <p>Pending</p>
                                    </div>
                                  </div>
                                </div>
                                {/* Block */}
                                <div className="g-row q-row-cntn">
                                  <div className="row">
                                    <div className="col-md-4 col-lg-2 col-sm-12 ">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Interaction ID
                                      </span>
                                      <p>12345678AB123456</p>
                                    </div>
                                    <div className="col-md-4 col-lg-2 col-7">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Query Type
                                      </span>
                                      <p>Business</p>
                                    </div>
                                    <div className="col-md-4 col-lg-2 col-5">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Raised by
                                      </span>
                                      <p>Customer</p>
                                    </div>
                                    <div className="col-md-4 col-lg-3  col-12">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Created Date
                                      </span>
                                      <p>DD/MMM/YYYY 12:10 AM</p>
                                    </div>
                                    <div className="col-md-4 col-lg-2  col-6">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Query For
                                      </span>
                                      <p>Tanmoy</p>
                                    </div>
                                    <div className="col-md-4 col-lg-1  col-6">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Status
                                      </span>
                                      <p>Pending</p>
                                    </div>
                                  </div>
                                </div>
                                {/* Block */}
                                <div className="g-row q-row-cntn">
                                  <div className="row">
                                    <div className="col-md-4 col-lg-2 col-sm-12 ">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Interaction ID
                                      </span>
                                      <p>12345678AB123456</p>
                                    </div>
                                    <div className="col-md-4 col-lg-2 col-7">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Query Type
                                      </span>
                                      <p>Commission</p>
                                    </div>
                                    <div className="col-md-4 col-lg-2 col-5">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Raised by
                                      </span>
                                      <p>Self</p>
                                    </div>
                                    <div className="col-md-4 col-lg-3  col-12">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Created Date
                                      </span>
                                      <p>DD/MMM/YYYY 12:10 AM</p>
                                    </div>
                                    <div className="col-md-4 col-lg-2  col-6">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Query For
                                      </span>
                                      <p>John</p>
                                    </div>
                                    <div className="col-md-4 col-lg-1  col-6">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Status
                                      </span>
                                      <p>Pending</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="g-footer text-center">
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                  >
                                    <img src={loadmore} alt="loadmore" />
                                    See More
                                  </button>
                                </div>
                              </div>
                            </div>
                            {/* All Content Ends Here */}
                            {/* All Content Starts Here */}
                            <div
                              className="tab-pane fade"
                              id="self"
                              role="tabpanel"
                              aria-labelledby="self"
                            >
                              <div className="g-container">
                                {/* Block */}
                                <div className="g-header d-none d-lg-block d-md-none d-sm-none d-xs-none ">
                                  <div className="row">
                                    <div className="col-md-2">
                                      <label>
                                        Interaction ID
                                        <img src={sort} alt="sort" />
                                      </label>
                                    </div>
                                    <div className="col-md-2">
                                      <label>
                                        Query Type
                                        <img src={sort} alt="sort" />
                                      </label>
                                    </div>
                                    <div className="col-md-2">
                                      <label>Raised By</label>
                                    </div>
                                    <div className="col-md-3">
                                      <label>Created Date</label>
                                    </div>
                                    <div className="col-md-2">
                                      <label>
                                        Query For
                                        <img src={sort} alt="sort" />
                                      </label>
                                    </div>
                                    <div className="col-md-1">
                                      <label>Status</label>
                                    </div>
                                  </div>
                                </div>

                                <div className="g-container">
                                  {/* Block */}
                                  <div className="g-row q-row-cntn">
                                    <div className="row">
                                      <div className="col-md-4 col-lg-2 col-sm-12 ">
                                        <span className="d-sm-block d-lg-none d-md-block">
                                          Interaction ID
                                        </span>
                                        <p>12345678AB123456</p>
                                      </div>
                                      <div className="col-md-4 col-lg-2 col-7">
                                        <span className="d-sm-block d-lg-none d-md-block">
                                          Query Type
                                        </span>
                                        <p>Business</p>
                                      </div>
                                      <div className="col-md-4 col-lg-2 col-5">
                                        <span className="d-sm-block d-lg-none d-md-block">
                                          Raised by
                                        </span>
                                        <p>Self</p>
                                      </div>
                                      <div className="col-md-4 col-lg-3  col-12">
                                        <span className="d-sm-block d-lg-none d-md-block">
                                          Created Date
                                        </span>
                                        <p>DD/MMM/YYYY 12:10 AM</p>
                                      </div>
                                      <div className="col-md-4 col-lg-2  col-6">
                                        <span className="d-sm-block d-lg-none d-md-block">
                                          Query For
                                        </span>
                                        <p>Tanmoy</p>
                                      </div>
                                      <div className="col-md-4 col-lg-1  col-6">
                                        <span className="d-sm-block d-lg-none d-md-block">
                                          Status
                                        </span>
                                        <p>Pending</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Block */}
                                <div className="g-row q-row-cntn">
                                  <div className="row">
                                    <div className="col-md-4 col-lg-2 col-sm-12 ">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Interaction ID
                                      </span>
                                      <p>12345678AB123456</p>
                                    </div>
                                    <div className="col-md-4 col-lg-2 col-7">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Query Type
                                      </span>
                                      <p>Commission</p>
                                    </div>
                                    <div className="col-md-4 col-lg-2 col-5">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Raised by
                                      </span>
                                      <p>Self</p>
                                    </div>
                                    <div className="col-md-4 col-lg-3  col-12">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Created Date
                                      </span>
                                      <p>DD/MMM/YYYY 12:10 AM</p>
                                    </div>
                                    <div className="col-md-4 col-lg-2  col-6">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Query For
                                      </span>
                                      <p>John</p>
                                    </div>
                                    <div className="col-md-4 col-lg-1  col-6">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Status
                                      </span>
                                      <p>Pending</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Self Content Ends Here */}
                            {/* All Content Starts Here */}
                            <div
                              className="tab-pane fade"
                              id="customer"
                              role="tabpanel"
                              aria-labelledby="customer"
                            >
                              <div className="g-container">
                                {/* Block */}
                                <div className="g-header d-none d-lg-block d-md-none d-sm-none d-xs-none ">
                                  <div className="row">
                                    <div className="col-md-2">
                                      <label>
                                        Interaction ID
                                        <img src={sort} alt="sort" />
                                      </label>
                                    </div>
                                    <div className="col-md-2">
                                      <label>
                                        Query Type
                                        <img src={sort} alt="sort" />
                                      </label>
                                    </div>
                                    <div className="col-md-2">
                                      <label>Raised By</label>
                                    </div>
                                    <div className="col-md-3">
                                      <label>Created Date</label>
                                    </div>
                                    <div className="col-md-2">
                                      <label>
                                        Query For
                                        <img src={sort} alt="sort" />
                                      </label>
                                    </div>
                                    <div className="col-md-1">
                                      <label>Status</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="g-container">
                                {/* Block */}
                                <div className="g-row q-row-cntn">
                                  <div className="row">
                                    <div className="col-md-4 col-lg-2 col-sm-12 ">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Interaction ID
                                      </span>
                                      <p>12345678AB123456</p>
                                    </div>
                                    <div className="col-md-4 col-lg-2 col-7">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Query Type
                                      </span>
                                      <p>Business</p>
                                    </div>
                                    <div className="col-md-4 col-lg-2 col-5">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Raised by
                                      </span>
                                      <p>Customer</p>
                                    </div>
                                    <div className="col-md-4 col-lg-3  col-12">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Created Date
                                      </span>
                                      <p>DD/MMM/YYYY 12:10 AM</p>
                                    </div>
                                    <div className="col-md-4 col-lg-2  col-6">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Query For
                                      </span>
                                      <p>Tanmoy</p>
                                    </div>
                                    <div className="col-md-4 col-lg-1  col-6">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Status
                                      </span>
                                      <p>Pending</p>
                                    </div>
                                  </div>
                                </div>
                                {/* Block */}
                                <div className="g-row q-row-cntn">
                                  <div className="row">
                                    <div className="col-md-4 col-lg-2 col-sm-12 ">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Interaction ID
                                      </span>
                                      <p>12345678AB123456</p>
                                    </div>
                                    <div className="col-md-4 col-lg-2 col-7">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Query Type
                                      </span>
                                      <p>Commission</p>
                                    </div>
                                    <div className="col-md-4 col-lg-2 col-5">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Raised by
                                      </span>
                                      <p>Customer</p>
                                    </div>
                                    <div className="col-md-4 col-lg-3  col-12">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Created Date
                                      </span>
                                      <p>DD/MMM/YYYY 12:10 AM</p>
                                    </div>
                                    <div className="col-md-4 col-lg-2  col-6">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Query For
                                      </span>
                                      <p>John</p>
                                    </div>
                                    <div className="col-md-4 col-lg-1  col-6">
                                      <span className="d-sm-block d-lg-none d-md-block">
                                        Status
                                      </span>
                                      <p>Pending</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Customer Content Ends Here */}
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Querymanagementsystem;
