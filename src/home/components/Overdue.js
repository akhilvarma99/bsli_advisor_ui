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

function Overdue() {
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
                    <li>Dashboard</li>
                    <li>
                      <img src={breadcrumbs} alt="breadcrumbs" />
                    </li>
                    <li>Customer List</li>
                    <li>
                      <img src={breadcrumbs} alt="breadcrumbs" />
                    </li>
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
            </div>
            {/* Heading Ends  */}
            <div className="f_Div_outer">
              <div className="f_Div_c1 d-none d-lg-block ">
                <div className="filter-div-l shadow-normal ">
                  <div className="filter_header">
                    <div className="row">
                      <div className="col-lg-12 filter_sub_heading">
                        <h2>
                          <img src={filter} alt="filter" />
                          Filter (1)
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="filter_body" id="style-3">
                    <div className="row">
                      <div className="col-lg-12"></div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 filter_sub_check_box_row">
                        <h3>Premium Due Date </h3>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="retentionRadio"
                            value="Mature"
                            id="customCheckBox5"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox5"
                          >
                            Today
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="retentionRadio"
                            value="Mature"
                            id="customCheckBox6"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox6"
                          >
                            Last Week
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="retentionRadio"
                            value="Mature"
                            id="customCheckBox7"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox7"
                          >
                            Last 30 days
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <span>from Date</span>
                        <div className="date-box">
                          <img src={dateicon} alt="dateicon" />
                          <input
                            type="email"
                            className="form-control data-search-box"
                            id="search"
                            aria-describedby="data-search"
                            placeholder="dd/mm/yyyy"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <span>To Date</span>
                        <div className="date-box">
                          <img src={dateicon} alt="dateicon" />
                          <input
                            type="email"
                            className="form-control data-search-box"
                            id="search"
                            aria-describedby="data-search"
                            placeholder="dd/mm/yyyy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 filter_sub_check_box_row">
                        <h3>Transaction Failure date</h3>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="retentionRadio"
                            value="Mature"
                            id="customCheckBox5"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox5"
                          >
                            Today
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="retentionRadio"
                            value="Mature"
                            id="customCheckBox"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox5"
                          >
                            Last Week
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="retentionRadio"
                            value="Mature"
                            id="customCheckBox7"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox7"
                          >
                            Last 30 days
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <span>from Date</span>
                        <div className="date-box">
                          <img src={dateicon} alt="dateicon" />
                          <input
                            type="email"
                            className="form-control data-search-box"
                            id="search"
                            aria-describedby="data-search"
                            placeholder="dd/mm/yyyy"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <span>To Date</span>
                        <div className="date-box">
                          <img src={dateicon} alt="dateicon" />
                          <input
                            type="email"
                            className="form-control data-search-box"
                            id="search"
                            aria-describedby="data-search"
                            placeholder="dd/mm/yyyy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 filter_sub_check_box_row">
                        <h3>Payment Mode</h3>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="retentionRadio"
                            value="Mature"
                            id="customCheckBox5"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox5"
                          >
                            Account Debit
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="retentionRadio"
                            value="Mature"
                            id="customCheckBox6"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox6"
                          >
                            Cheque
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="retentionRadio"
                            value="Mature"
                            id="customCheckBox7"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox7"
                          >
                            Credit/DebitCard
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12 filter_sub_check_box_row">
                        <h3>Active</h3>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="retentionRadio"
                            value="Mature"
                            id="customCheckBox5"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox5"
                          >
                            Today
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="retentionRadio"
                            value="Mature"
                            id="customCheckBox"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox5"
                          >
                            Last Week
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="retentionRadio"
                            value="Mature"
                            id="customCheckBox7"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox7"
                          >
                            Last 30 days
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12 filter_sub_check_box_row">
                        <h3>Grace</h3>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="retentionRadio"
                            value="Mature"
                            id="customCheckBox5"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox5"
                          >
                            Today
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="retentionRadio"
                            value="Mature"
                            id="customCheckBox"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox5"
                          >
                            Last Week
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="retentionRadio"
                            value="Mature"
                            id="customCheckBox7"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox7"
                          >
                            Last 30 days
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12 filter_sub_check_box_row">
                        <h3>Lapsed</h3>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="retentionRadio"
                            value="Mature"
                            id="customCheckBox5"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox5"
                          >
                            Today
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="retentionRadio"
                            value="Mature"
                            id="customCheckBox"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox5"
                          >
                            Last Week
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="retentionRadio"
                            value="Mature"
                            id="customCheckBox7"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox7"
                          >
                            Last 30 days
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
                                    placeholder="Search by customer name, policy no., PAN, Mobile No."
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
                              <li
                                className="nav-item w-50-p"
                                role="presentation"
                              >
                                <a
                                  className="nav-link"
                                  id="profile-tab"
                                  data-toggle="tab"
                                  href="#next-week"
                                  role="tab"
                                  aria-controls="profile"
                                  aria-selected="false"
                                ></a>
                              </li>
                              <li
                                className="nav-item w-50-p"
                                role="presentation"
                              >
                                <a
                                  className="nav-link"
                                  id="profile-tab"
                                  data-toggle="tab"
                                  href="#later"
                                  role="tab"
                                  aria-controls="profile"
                                  aria-selected="false"
                                ></a>
                              </li>
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
                                    <div className="col-md-1 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
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
                                    <div className="col-lg-3 pad-0">
                                      <label>Payment Failure Type</label>
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
                                    <div className="col-lg-1 col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                      <p>9876543213</p>
                                    </div>
                                    {/* Hidden sm xs */}
                                    <div className="col-lg-4 col-md-4">
                                      <p>
                                        129129229 &nbsp;|&nbsp; 28/Dec/2020
                                        &nbsp;|&nbsp; 1,50,000.00
                                      </p>
                                    </div>
                                    <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                      <p className="float-left">
                                        Credit Card Expiry
                                      </p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
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
                                            className="btn btn-outline-s disabled-btn"
                                          >
                                            Send Reminder
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
                                    <div className="col-lg-1 col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                      <p>9876543213</p>
                                    </div>
                                    {/* Hidden sm xs */}
                                    <div className="col-lg-4 col-md-4">
                                      <p>
                                        129129229 &nbsp;|&nbsp; 28/Dec/2020
                                        &nbsp;|&nbsp; 1,50,000.00
                                      </p>
                                    </div>
                                    <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                      <p className="float-left">
                                        Cheque Dishonour
                                      </p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
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
                                            className="btn btn-outline-s disabled-btn"
                                          >
                                            Send Reminder
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
                                    <div className="col-lg-1 col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                      <p>9876543213</p>
                                    </div>
                                    {/* Hidden sm xs */}
                                    <div className="col-lg-4 col-md-4">
                                      <p>
                                        129129229 &nbsp;|&nbsp; 28/Dec/2020
                                        &nbsp;|&nbsp; 1,50,000.00
                                      </p>
                                    </div>
                                    <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                      <p className="float-left">
                                        Insufficient Funds{" "}
                                      </p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
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
                                          >
                                            Send Payment Link
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
                                    <div className="col-lg-1 col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                      <p>9876543213</p>
                                    </div>
                                    {/* Hidden sm xs */}
                                    <div className="col-lg-4 col-md-4">
                                      <p>
                                        129129229 &nbsp;|&nbsp; 28/Dec/2020
                                        &nbsp;|&nbsp; 1,50,000.00
                                      </p>
                                    </div>
                                    <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                      <p className="float-left">
                                        Credit Card Expiry
                                      </p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
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
                                          >
                                            Send Payment Link
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
                                    <div className="col-lg-1 col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                      <p>9876543213</p>
                                    </div>
                                    {/* Hidden sm xs */}
                                    <div className="col-lg-4 col-md-4">
                                      <p>
                                        129129229 &nbsp;|&nbsp; 28/Dec/2020
                                        &nbsp;|&nbsp; 1,50,000.00
                                      </p>
                                    </div>
                                    <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                      <p className="float-left">
                                        insufficient funds
                                      </p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
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
                                          >
                                            Send Payment Link
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
                                        <div className="name_circle color-5">
                                          F
                                        </div>
                                        <label>Fohn Crockett</label>
                                      </div>
                                      <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                        <div className="row">
                                          <div className="p-3 bd-highlight">
                                            <div className="name_circle color-5">
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
                                    <div className="col-lg-1 col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                      <p>9876543213</p>
                                    </div>
                                    {/* Hidden sm xs */}
                                    <div className="col-lg-4 col-md-4">
                                      <p>
                                        129129229 &nbsp;|&nbsp; 28/Dec/2020
                                        &nbsp;|&nbsp; 1,50,000.00
                                      </p>
                                    </div>
                                    <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                      <p className="float-left">
                                        Cheque Dishonour{" "}
                                      </p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
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
                                          >
                                            Send Payment Link
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
                                        <div className="name_circle color-6">
                                          F
                                        </div>
                                        <label>Fohn Crockett</label>
                                      </div>
                                      <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                        <div className="row">
                                          <div className="p-3 bd-highlight">
                                            <div className="name_circle color-6">
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
                                    <div className="col-lg-1 col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                      <p>9876543213</p>
                                    </div>
                                    {/* Hidden sm xs */}
                                    <div className="col-lg-4 col-md-4">
                                      <p>
                                        129129229 &nbsp;|&nbsp; 28/Dec/2020
                                        &nbsp;|&nbsp; 1,50,000.00
                                      </p>
                                    </div>
                                    <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                      <p className="float-left">
                                        Insufficient Funds
                                      </p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
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
                                          >
                                            Send Payment Link
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Block */}
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
        </main>
        {/* <footer class="text-muted">
  <div class="sample-footer">
              
  </div>
</footer> */}
      </div>
      ); );
    </div>
  );
}

export default Overdue;
