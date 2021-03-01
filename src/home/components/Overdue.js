import React from "react";
import Header from "../../header";
import breadcrumbs from "../../assets/img/icons/breadcrumbs-arrow.png";
import backarrow from "../../assets/img/icons/back-arrow.svg";
import downloadexcel from "../../assets/img/icons/dlownload-excel.svg";
import downloadpdf from "../../assets/img/icons/dlownload-pdf.svg";
import filter from "../../assets/img/icons/filter.svg";
import search from "../../assets/img/icons/search-bx.svg";
import dateicon from "../../assets/img/icons/date-icon.svg";
import loadmore from "../../assets/img/icons/load-more.svg";
import starempty from "../../assets/img/icons/star-empty.svg";
import sort from "../../assets/img/icons/sort.svg";
import starEmpty from "../../assets/img/icons/star-empty.svg";
import searchbox from "../../assets/img/icons/search-bx.svg";
import { NavLink } from "react-bootstrap";
import closeIcon from "../../assets/img/icons/f_close.svg";

function Overdue() {
  function buttonText(accordionId, buttonId) {
    const accordionClass = document.getElementById(accordionId).classList;
    console.log(accordionClass);
    if (accordionClass[2] == "show") {
      console.log("conditin" + accordionClass);
      document.getElementById(buttonId).innerHTML = "Show More";
      document.getElementById(buttonId).classList.remove("checked-state");
    } else {
      document.getElementById(buttonId).innerHTML = "Show Less";
      document.getElementById(buttonId).classList.add("checked-state");
    }
  }
  return (
    <div>
      <div>
        <Header />
        <main className="bg-white " role="main">
          <div className="breadcrubs-div shadow-sm">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <ul>
                    <li>Home</li>
                    <li>
                      <img src={breadcrumbs} alt="breadcrumbs" />
                    </li>
                    {/* <li>Customer List</li>
                    <li>
                      <img src={breadcrumbs} alt="breadcrumbs" />
                    </li> */}
                    <li className="active-li">Overdue</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {/* Heading Starts  */}
            <div className="row">
              <div className="col">
                <h1 className="p-header">
                  <img src={backarrow} alt="backarrow" />
                  Overdue
                </h1>
              </div>
              <div className="asOn verticalAlign mr-3">
                <h1>As on: 26-Jan-2021</h1>
              </div>
            </div>
            {/* Heading Ends  */}
            <div className="f_Div_outer">
              <div className="f_Div_c1 d-none d-lg-block ">
                <div class="filter-div-l shadow-normal">
                  <div class="filter_header">
                    <div class="row">
                      <div class="col-lg-12 filter_sub_heading">
                        <h2 class="d-flex align-items-center">
                          <img src={filter} alt="filter" />
                          Filter (1)
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="filter_body ">
                    <div class="row">
                      <div class="col-lg-12 filter_sub_check_box_row">
                        <h3>Premium Due Date</h3>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="premiumduedateRadio"
                            value="active"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Yesterday
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="premiumduedateRadio"
                            value="active"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Last 7 days
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="premiumduedateRadio"
                            value="active"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Earlier
                          </label>
                        </div>
                        <br />

                        <h3>Payment Mode</h3>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="paymentRadio"
                            value="active"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Manual Payment
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="paymentRadio"
                            value="lapsed"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Auto debit
                          </label>
                        </div>
                      </div>
                      {/* 
                      <div class="col-lg-6">
                        <span>from Date</span>
                        <div class="date-box">
                          <img src={dateicon} alt="dateicon" />

                          <input
                            type="email"
                            class="form-control data-search-box"
                            id="search"
                            aria-describedby="data-search"
                            placeholder="dd/mm/yyyy"
                          />
                        </div>
                      </div> */}

                      {/* <div class="col-lg-6">
                        <span>To Date</span>
                        <div class="date-box">
                          <img src={dateicon} alt="dateicon" />

                          <input
                            type="email"
                            class="form-control data-search-box"
                            id="search"
                            aria-describedby="data-search"
                            placeholder="dd/mm/yyyy"
                          />
                        </div>
                      </div> */}
                    </div>
                  </div>

                  <div class="filter-footer">
                    <div class="row">
                      <div class="col-lg-12">
                        <button type="button" class="btn btn-outline-s">
                          Reset
                        </button>
                        <button type="button" class="btn btn-primary-s mrgn-0">
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="g-container">
                {/* Block */}

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
                                    placeholder="Search by customer name, policy no., mobile no."
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
                                  href="#today"
                                  role="tab"
                                  aria-controls="home"
                                  aria-selected="true"
                                >
                                  Payment Overdue
                                </a>
                              </li>
                              <img
                                className="filter-image d-lg-none"
                                src={filter}
                                alt="filter"
                                data-toggle="modal"
                                data-target="#bottom_modal_success"
                              />
                            </ul>
                            {/* <div class="date-search-outer">
        
      </div> */}
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
                                    <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                      <label>
                                        Contact
                                        {/* <img src={sort} alt="sort" /> */}
                                      </label>
                                    </div>
                                    <div className="col-md-4">
                                      <label>
                                        Policy Details
                                        <img src={sort} alt="sort" />
                                        <br />
                                        <span>Sorted by due date</span>
                                      </label>
                                    </div>
                                    {/* <div className="col-lg-2 ">
                                      <label>Reason</label>
                                    </div> */}
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
                                          F
                                        </div>
                                        <label>Fohn Crockett</label>
                                      </div>
                                      <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                        <div className="row">
                                          <div className="p-3 bd-highlight">
                                            <div className="name_circle color-4">
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
                                    <div className="col-lg-2 col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                      <p>9876543213</p>
                                    </div>
                                    {/* Hidden sm xs */}
                                    <div className="col-lg-4 col-md-4">
                                      <p>
                                        129129229 &nbsp;|&nbsp; 28-dec-2020
                                        &nbsp;|&nbsp; ₹ 1,00,000
                                      </p>
                                    </div>
                                    {/* <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                      <p className="float-left line-height">
                                        Credit Card Expiry
                                      </p>
                                    </div> */}
                                    <div className="col-lg-3 col-md-4">
                                      <div className="row">
                                        <div className="col-lg-2 col-md-1 text-center">
                                          <p>
                                            <img
                                              src={starEmpty}
                                              alt="starEmpty"
                                              className="starempty"
                                            />
                                          </p>
                                        </div>
                                        <div className="col-lg-10 col-md-3 text-right">
                                          <button
                                            type="button"
                                            className="btn btn-outline-s"
                                            data-toggle="collapse"
                                            data-target="#collapseExample"
                                            aria-expanded="false"
                                            id="buttonel"
                                            aria-controls="collapseExample"
                                            onClick={() =>
                                              buttonText(
                                                "collapseExample",
                                                "buttonel"
                                              )
                                            }
                                          >
                                            Show More
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="row collapse"
                                    id="collapseExample"
                                  >
                                    <div className="col-lg-12 m-pad-div">
                                      <div className="expanded-div collapse-inner">
                                        <div className="row">
                                          <div className="col-lg-12 m-pad-div">
                                            <div className="expanded-div">
                                              <div className="row">
                                                <div className="col-lg-3 col-md-3 col-sm-12">
                                                  <p className="black-fade">
                                                    Billing Method
                                                    <br />
                                                    <span className="black">
                                                      Cheque
                                                    </span>
                                                  </p>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-12">
                                                  <p className="black-fade">
                                                    Payment Status <br />
                                                    <span className="black">
                                                      Failed
                                                    </span>
                                                  </p>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-12">
                                                  <p className="black-fade">
                                                    Policy Lapse Date
                                                    <br />
                                                    <span className="black">
                                                      28-dec-2020
                                                    </span>
                                                  </p>
                                                </div>
                                              </div>
                                              <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                  <p className="black-fade">
                                                    Reason
                                                    <br />
                                                    <span className="black">
                                                      Lorem ipsum dolor sit
                                                      amet, consectetur
                                                      adipiscing elit, sed do
                                                      eiusmod tempor incididunt
                                                      ut labore et dolore magna
                                                      aliqua
                                                    </span>
                                                  </p>
                                                </div>
                                              </div>

                                              <div className="row">
                                                <div className="col-lg-12">
                                                  <ul className="chips-tag">
                                                    {/* <li>
                                                    Send ECS registration
                                                    request
                                                  </li>
                                                  <li>Send Payment Link</li> */}
                                                    <NavLink
                                                      className="padding-none margin-top-10"
                                                      to="#"
                                                      style={{
                                                        textDecoration: "none",
                                                      }}
                                                    >
                                                      <li className="active">
                                                        Send Payment link
                                                      </li>
                                                    </NavLink>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
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
                                    <div className="col-lg-2 col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                      <p>9876543213</p>
                                    </div>
                                    {/* Hidden sm xs */}
                                    <div className="col-lg-4 col-md-4">
                                      <p>
                                        129129229 &nbsp;|&nbsp; 28-dec-2020
                                        &nbsp;|&nbsp; ₹ 1,00,000
                                      </p>
                                    </div>

                                    <div className="col-lg-3 col-md-4">
                                      <div className="row">
                                        <div className="col-lg-2 col-md-1 text-center">
                                          <p>
                                            <img
                                              src={starEmpty}
                                              alt="starEmpty"
                                              className="starempty"
                                            />
                                          </p>
                                        </div>
                                        <div className="col-lg-10 col-md-3 text-right">
                                          <button
                                            type="button"
                                            className="btn btn-outline-s"
                                            data-toggle="collapse"
                                            data-target="#collapseExample1"
                                            aria-expanded="false"
                                            id="buttonel"
                                            aria-controls="collapseExample"
                                          >
                                            Show More
                                          </button>
                                        </div>
                                      </div>
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
                                          F
                                        </div>
                                        <label>Fohn Crockett</label>
                                      </div>
                                      <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                        <div className="row">
                                          <div className="p-3 bd-highlight">
                                            <div className="name_circle color-2">
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
                                    <div className="col-lg-2 col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                      <p>9876543213</p>
                                    </div>
                                    {/* Hidden sm xs */}
                                    <div className="col-lg-4 col-md-4">
                                      <p>
                                        129129229 &nbsp;|&nbsp; 28-dec-2020
                                        &nbsp;|&nbsp; ₹ 1,00,000
                                      </p>
                                    </div>

                                    <div className="col-lg-3 col-md-4">
                                      <div className="row">
                                        <div className="col-lg-2 col-md-1 text-center">
                                          <p>
                                            <img
                                              src={starEmpty}
                                              alt="starEmpty"
                                              className="starempty"
                                            />
                                          </p>
                                        </div>
                                        <div className="col-lg-10 col-md-3 text-right">
                                          <button
                                            type="button"
                                            className="btn btn-outline-s"
                                            data-toggle="collapse"
                                            data-target="#collapseExample1"
                                            aria-expanded="false"
                                            id="buttonel"
                                            aria-controls="collapseExample"
                                          >
                                            Show More
                                          </button>
                                        </div>
                                      </div>
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
                                          F
                                        </div>
                                        <label>Fohn Crockett</label>
                                      </div>
                                      <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                        <div className="row">
                                          <div className="p-3 bd-highlight">
                                            <div className="name_circle color-3">
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
                                    <div className="col-lg-2 col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                      <p>9876543213</p>
                                    </div>
                                    {/* Hidden sm xs */}
                                    <div className="col-lg-4 col-md-4">
                                      <p>
                                        129129229 &nbsp;|&nbsp; 28-dec-2020
                                        &nbsp;|&nbsp; ₹ 1,00,000
                                      </p>
                                    </div>

                                    <div className="col-lg-3 col-md-4">
                                      <div className="row">
                                        <div className="col-lg-2 col-md-1 text-center">
                                          <p>
                                            <img
                                              src={starEmpty}
                                              alt="starEmpty"
                                              className="starempty"
                                            />
                                          </p>
                                        </div>
                                        <div className="col-lg-10 col-md-3 text-right">
                                          <button
                                            type="button"
                                            className="btn btn-outline-s"
                                            data-toggle="collapse"
                                            data-target="#collapseExample1"
                                            aria-expanded="false"
                                            id="buttonel"
                                            aria-controls="collapseExample"
                                          >
                                            Show More
                                          </button>
                                        </div>
                                      </div>
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
                                          F
                                        </div>
                                        <label>Fohn Crockett</label>
                                      </div>
                                      <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                        <div className="row">
                                          <div className="p-3 bd-highlight">
                                            <div className="name_circle color-4">
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
                                    <div className="col-lg-2 col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                      <p>9876543213</p>
                                    </div>
                                    {/* Hidden sm xs */}
                                    <div className="col-lg-4 col-md-4">
                                      <p>
                                        129129229 &nbsp;|&nbsp; 28-dec-2020
                                        &nbsp;|&nbsp; ₹ 1,00,000
                                      </p>
                                    </div>

                                    <div className="col-lg-3 col-md-4">
                                      <div className="row">
                                        <div className="col-lg-2 col-md-1 text-center">
                                          <p>
                                            <img
                                              src={starEmpty}
                                              alt="starEmpty"
                                              className="starempty"
                                            />
                                          </p>
                                        </div>
                                        <div className="col-lg-10 col-md-3 text-right">
                                          <button
                                            type="button"
                                            className="btn btn-outline-s"
                                            data-toggle="collapse"
                                            data-target="#collapseExample1"
                                            aria-expanded="false"
                                            id="buttonel"
                                            aria-controls="collapseExample"
                                          >
                                            Show More
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Block */}

                                {/* Block */}
                                <div className="g-footer text-center loadingText">
                                  {/* <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  See More
                                </button> */}
                                  <img src={loadmore} alt="loadmore" />
                                  <h1>Loading...</h1>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Fav Content Ends Here */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3"></div>
            </div>
          </div>

          <div
            className="modal bottom mobile-filter fade"
            id="bottom_modal_success"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="bottom_modal"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="col-lg-12 filter_sub_heading f_btn">
                    <h2 className="d-flex align-items-center mrgn-0">
                      <img src={filter} alt="filter" />
                      Filter (1)
                    </h2>
                    <span
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <img src={closeIcon} alt="close" />
                    </span>
                  </div>
                </div>
                <div className="modal-body text-left">
                  <div className="filter-div-l">
                    <div className="filter_body1">
                      <div className="space-height" />
                      <div className="row">
                        <div className="col-lg-12"></div>
                        <div className="col-lg-12 filter_sub_check_box_row m_filter">
                          <h3>Premium Due Date</h3>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="premiumduedateRadio"
                              value="active"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Yesterday
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="premiumduedateRadio"
                              value="active"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Last 7 days
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="premiumduedateRadio"
                              value="active"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Earlier
                            </label>
                          </div>
                          <br />

                          <h3>Payment Mode</h3>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="paymentRadio"
                              value="active"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Manual Payment
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="paymentRadio"
                              value="lapsed"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Auto debit
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="empty-div"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="row">
                  <div className="col-6">
                    <button type="button" className="btn btn-outline-s">
                      Reset
                    </button>
                  </div>
                  <div className="col-6">
                    <button type="button" className="btn btn-primary-s mrgn-0">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* <footer class="text-muted">
  <div class="sample-footer">
              
  </div>
</footer> */}
      </div>
    </div>
  );
}

export default Overdue;
