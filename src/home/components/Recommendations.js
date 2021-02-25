import React, { useState } from "react";
import Header from "../../header";
import breadcrumbs from "../../assets/img/icons/breadcrumbs-arrow.png";
import backarrow from "../../assets/img/icons/back-arrow.svg";
import downloadexcel from "../../assets/img/icons/dlownload-excel.svg";
import downloadpdf from "../../assets/img/icons/dlownload-pdf.svg";
import filter from "../../assets/img/icons/filter.svg";
import search from "../../assets/img/icons/search-bx.svg";
import dateicon from "../../assets/img/icons/date-icon.svg";
import starempty from "../../assets/img/icons/star-empty.svg";
import load from "../../assets/img/icons/load-more.svg";
import sort from "../../assets/img/icons/sort.svg";
import starEmpty from "../../assets/img/icons/star-empty.svg";
import moment from "moment";
import closeIcon from "../../assets/img/icons/f_close.svg";

function Recommendations() {
  const [tabHandler, setTabHandler] = useState(false);
  let [subTabHandler, setSubTabHandler] = useState(0);
  const [matureHandler, setMatureHandler] = useState(false);
  const [paidUp, setPaidUp] = useState(false);
  const [std, setStd] = useState(false);
  const [upsellHandler, setUpsellHandler] = useState(true);
  const [retentionHandler, setRetentionHandler] = useState(false);

  function applyFunc() {
    var ele = document.getElementsByName("retentionRadio");

    for (let i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        if (ele[i].value === "Mature") {
          setMatureHandler(true);
          setPaidUp(false);
          setStd(false);
        }
        if (ele[i].value === "Paid-Up") {
          setPaidUp(true);
          setMatureHandler(false);
          setStd(false);
        }
        if (ele[i].value === "STD") {
          setStd(true);
          setMatureHandler(false);
          setPaidUp(false);
        }
      }
    }
  }

  return (
    <div>
      <Header />
      <div>
        <main className="bg-white " role="main">
          <div className="breadcrubs-div shadow-sm">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <ul>
                    <li>Dashboard</li>
                    <li>
                      <img src={breadcrumbs} alt="breadcrumbs" />{" "}
                    </li>
                    <li>Customer List</li>
                    <li>
                      <img src={breadcrumbs} alt="breadcrumbs" />{" "}
                    </li>
                    <li className="active-li">Recommendations</li>
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
                  Recommendations
                </h1>
              </div>
              {/* <div className="col">
                <ul className="download-report">
                  <li>Export as:</li>
                  <li>
                    <img src={downloadexcel} alt="downloadexcel" />
                  </li>
                  <li>
                    <img src={downloadpdf} alt="downloadpdf" />
                  </li>
                </ul>
              </div> */}
              <div className="asOn verticalAlign mr-3">
                <h1>As on: 26-Jan-2021</h1>
              </div>
            </div>
            {/* Heading Ends  */}
            <div className="f_Div_outer">
              {tabHandler ? (
                <div className="f_Div_c1 d-none d-lg-block ">
                  <div className="filter-div-l shadow-normal ">
                    <div className="filter_header">
                      <div className="row">
                        <div className="col-lg-12 filter_sub_heading">
                          <h2>
                            <img src={filter} alt="filter" />
                            Filter
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="filter_body" id="style-3">
                      <div className="row">
                        {/* <div className="col-lg-12"></div> */}
                        <div className="col-lg-12 filter_sub_check_box_row">
                          <h3>Type</h3>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="retentionRadio"
                              value="Mature"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Matured
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="retentionRadio"
                              value="Paid-Up"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Paid-Up
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="retentionRadio"
                              value="STD"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Surrendered
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="retentionRadio"
                              value="STD"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Terminated
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="retentionRadio"
                              value="STD"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Discontinued
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 filter_sub_check_box_row">
                          <h3>Date</h3>
                        </div>
                        <div className="col-lg-12 ">
                          <span className="font-12">from Date</span>

                          <div className="date-box">
                            {/* <img src={dateicon} alt="dateicon" /> */}
                            <input
                              type="date"
                              className="form-control data-search-box"
                              id="search"
                              aria-describedby="data-search"
                              placeholder="dd/mm/yyyy"
                              min={moment()
                                .subtract(5, "years")

                                .format("YYYY-MM-DD")}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <span className="font-12"> To Date</span>
                          <div className="date-box">
                            {/* <img src={dateicon} alt="dateicon" /> */}
                            <input
                              type="date"
                              className="form-control data-search-box"
                              id="search"
                              aria-describedby="data-search"
                              placeholder="dd/mm/yyyy"
                              max={moment()
                                .add(2, "years")

                                .format("YYYY-MM-DD")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>{" "}
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
                            onClick={applyFunc}
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className={tabHandler ? "f_Div_c2" : ""}>
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
                                <img src={search} alt="search" />
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
                              onClick={() => {
                                setTabHandler(false);
                                setMatureHandler(false);
                                setPaidUp(false);
                                setStd(false);
                                setUpsellHandler(true);
                              }}
                            >
                              <a
                                href="#"
                                className="nav-link active"
                                id="home-tab"
                                data-toggle="tab"
                                role="tab"
                                aria-controls="all"
                                aria-selected="true"
                              >
                                Pre-Approved Offers
                              </a>
                            </li>
                            <li
                              className="nav-item w-50-p"
                              role="presentation"
                              onClick={() => {
                                setTabHandler(true);
                                setMatureHandler(true);
                                setUpsellHandler(false);
                                setStd(false);
                                setPaidUp(false);
                              }}
                            >
                              <a
                                href="#"
                                className="nav-link"
                                id="profile-tab"
                                data-toggle="tab"
                                role="tab"
                                aria-controls="active"
                                aria-selected="false"
                              >
                                Retention
                              </a>
                              {tabHandler && (
                                <img
                                  className="filter-image d-lg-none"
                                  src={filter}
                                  alt="filter"
                                  data-toggle="modal"
                                  data-target="#bottom_modal_success"
                                />
                              )}
                            </li>
                          </ul>
                        </div>

                        <div
                          className="tab-content m-pad-normal"
                          id="myTabContent"
                        >
                          {/* All Content Starts Here */}
                          <div
                            className={
                              upsellHandler
                                ? "tab-pane fade active show"
                                : "tab-pane fade"
                            }
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
                                      {/* <img src={sort} alt="sort" /> */}
                                    </label>
                                  </div>
                                  <div className="col-md-2">
                                    <label>
                                      Sum Assured Term
                                      <img src={sort} alt="sort" />
                                      <br />
                                      {/*<span>Sorted by due date</span>*/}
                                    </label>
                                  </div>
                                  <div className="col-md-2">
                                    <label>
                                      Sum Assured Non-Term
                                      <img src={sort} alt="sort" />
                                      <br />
                                      {/*<span>Sorted by due date</span>*/}
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
                                  <div className="col-lg-2 col-md-2">
                                    <p>₹ 2,22,222</p>
                                  </div>
                                  <div className="col-lg-2 col-md-2">
                                    <p>₹ 2,22,222</p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starempty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                      data-toggle="modal"
                                      data-target="#pasaKnowMore"
                                    >
                                      Know More
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
                                  <div className="col-lg-2 col-md-2">
                                    <p>₹ 2,22,222</p>
                                  </div>
                                  <div className="col-lg-2 col-md-2">
                                    <p>₹ 2,22,222</p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starempty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Know More
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
                                  <div className="col-lg-2 col-md-2">
                                    <p>₹ 2,22,222</p>
                                  </div>
                                  <div className="col-lg-2 col-md-2">
                                    <p>₹ 2,22,222</p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starempty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Know More
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
                                  <div className="col-lg-2 col-md-2">
                                    <p>₹ 2,22,222</p>
                                  </div>
                                  <div className="col-lg-2 col-md-2">
                                    <p>₹ 2,22,222</p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starempty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Know More
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
                                  <div className="col-lg-2 col-md-2">
                                    <p>₹ 2,22,222</p>
                                  </div>
                                  <div className="col-lg-2 col-md-2">
                                    <p>₹ 2,22,222</p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starempty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s"
                                    >
                                      Know More
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}

                              {/* Block */}
                              <div className="g-footer text-center loadingText">
                                {/* <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  See More
                                </button> */}
                                <img src={load} />
                                <h1>Loading...</h1>
                              </div>
                            </div>
                          </div>

                          {/* Today Content Ends Here */}
                          {/* Next Week Content Starts Here -------------------------------------------------------------------------------- */}
                          <div
                            className="tab-pane fade"
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
                                      {/* <img src={sort} alt="sort" /> */}
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starempty" />
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starempty" />
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starempty" />
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starempty" />
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starempty" />
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starempty" />
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
                              <div className="g-footer text-center loadingText">
                                {/* <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  See More
                                </button> */}
                                <img src={load} />
                                <h1>Loading...</h1>
                              </div>
                            </div>
                          </div>
                          {/* Today Content Ends Here */}
                          {/* Active Content Starts Here -------------------------------------------------------------------------------- */}
                          <div
                            className="tab-pane fade"
                            id="active"
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
                                      {/* <img src={sort} alt="sort" /> */}
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starempty" />
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starempty" />
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starempty" />
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starempty" />
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starempty" />
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starempty" />
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
                              <div className="g-footer text-center loadingText">
                                {/* <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  See More
                                </button> */}
                                <img src={load} />
                                <h1>Loading...</h1>
                              </div>
                            </div>
                          </div>
                          {/* Active Week Content Ends Here */}

                          {/* Fav Content Starts Here ----------------------------------------------------------------------------------------------*/}

                          <div
                            className={
                              matureHandler
                                ? "tab-pane fade active show"
                                : "tab-pane fade"
                            }
                            id="matured"
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
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                    <label>
                                      Contact
                                      {/* <img src={sort} alt="sort" /> */}
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label>
                                      Policy ID | Date
                                      {/* <img src={sort} alt="sort" /> */}
                                    </label>
                                  </div>
                                  <div className="col-lg-3 pad-0">
                                    <label>
                                      Policy Status{" "}
                                      <img src={sort} alt="sort" />
                                    </label>
                                  </div>
                                </div>
                              </div>
                              {/* Block */} {/* Block */}
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
                                            <br />
                                            9876543213
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
                                  <div className="col-lg-3 col-md-4">
                                    <p>129129229 &nbsp;|&nbsp; 28-dec-2020</p>
                                  </div>
                                  <div className="col-lg-3 col-md-3 text-center pad-0 d-none d-lg-block">
                                    <p className="float-left">Paid up</p>
                                  </div>

                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starempty} alt="starempty" />
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Block */} {/* Block */}
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
                                            <br />
                                            9876543213
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
                                  <div className="col-lg-3 col-md-4">
                                    <p>129129229 &nbsp;|&nbsp; 28-dec-2020</p>
                                  </div>
                                  <div className="col-lg-3 col-md-3 text-center pad-0 d-none d-lg-block">
                                    <p className="float-left">Paid up</p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starempty} alt="starempty" />
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Block */} {/* Block */}
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
                                            <br />
                                            9876543213
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
                                  <div className="col-lg-3 col-md-4">
                                    <p>129129229 &nbsp;|&nbsp; 28-dec-2020</p>
                                  </div>
                                  <div className="col-lg-3 col-md-3 text-center pad-0 d-none d-lg-block">
                                    <p className="float-left">Paid up</p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starempty} alt="starempty" />
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Block */} {/* Block */}
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
                                            <br />
                                            9876543213
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
                                  <div className="col-lg-3 col-md-4">
                                    <p>129129229 &nbsp;|&nbsp; 28-dec-2020</p>
                                  </div>
                                  <div className="col-lg-3 col-md-3 text-center pad-0 d-none d-lg-block">
                                    <p className="float-left">Paid up</p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starempty} alt="starempty" />
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Block */} {/* Block */}
                            <div className="g-row">
                              <div className="row">
                                <div className="col-lg-3 col-md-4">
                                  <div className="v-lg d-none d-lg-block">
                                    <div className="ini-gap" />
                                    <div className="name_circle color-4">F</div>
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
                                          <br />
                                          9876543213
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
                                <div className="col-lg-3 col-md-4">
                                  <p>129129229 &nbsp;|&nbsp; 28-dec-2020</p>
                                </div>
                                <div className="col-lg-3 col-md-3 text-center pad-0 d-none d-lg-block">
                                  <p className="float-left">Paid up</p>
                                </div>
                                <div className="col-lg-1 col-md-1 text-center">
                                  <p>
                                    <img src={starempty} alt="starempty" />
                                  </p>
                                </div>
                              </div>
                            </div>
                            {/* Block */} {/* Block */}
                            {/* Block */} {/* Block */}
                            {/* Block */}
                            <div className="g-footer text-center loadingText">
                              {/* <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  See More
                                </button> */}
                              <img src={load} />
                              <h1>Loading...</h1>
                            </div>
                          </div>

                          <div
                            className={
                              paidUp
                                ? "tab-pane fade active show"
                                : "tab-pane fade"
                            }
                            id="paidup"
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
                                  <div className="col-md-1 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                    <label>
                                      Contact
                                      {/* <img src={sort} alt="sort" /> */}
                                    </label>
                                  </div>
                                  <div className="col-md-4">
                                    <label>
                                      Date of PPT ending/Premium
                                      <img src={sort} alt="sort" />
                                    </label>
                                  </div>
                                  <div className="col-lg-3 pad-0">
                                    <label>Next Best Offer</label>
                                  </div>
                                </div>
                              </div>
                              {/* Block */} {/* Block */}
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
                                            <br />
                                            9876543213
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                    <p className="float-left">
                                      PASA/Product Name
                                    </p>
                                  </div>
                                  <div className="col-lg-3 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-2 col-md-1 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right">
                                        {/* <button
                                          type="button"
                                          className="btn btn-outline-s disabled-btn"
                                        >
                                          Send Congratulations
                                        </button> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Block */} {/* Block */}
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
                                            <br />
                                            9876543213
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                    <p className="float-left">
                                      PASA/Product Name
                                    </p>
                                  </div>
                                  <div className="col-lg-3 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-2 col-md-1 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right">
                                        {/* <button
                                          type="button"
                                          className="btn btn-outline-s disabled-btn"
                                        >
                                          Send Congratulations
                                        </button> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Block */} {/* Block */}
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
                                            <br />
                                            9876543213
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                    <p className="float-left">
                                      PASA/Product Name
                                    </p>
                                  </div>
                                  <div className="col-lg-3 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-2 col-md-1 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right">
                                        {/* <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Send Congratulations
                                        </button> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Block */} {/* Block */}
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
                                            <br />
                                            9876543213
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                    <p className="float-left">
                                      PASA/Product Name
                                    </p>
                                  </div>
                                  <div className="col-lg-3 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-2 col-md-1 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right">
                                        {/* <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Send Congratulations
                                        </button> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Block */} {/* Block */}
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
                                            <br />
                                            9876543213
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                    <p className="float-left">
                                      PASA/Product Name
                                    </p>
                                  </div>
                                  <div className="col-lg-3 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-2 col-md-1 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right">
                                        {/* <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Send Congratulations
                                        </button> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Block */} {/* Block */}
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
                                            <br />
                                            9876543213
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                    <p className="float-left">
                                      PASA/Product Name
                                    </p>
                                  </div>
                                  <div className="col-lg-3 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-2 col-md-1 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right">
                                        {/* <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Send Congratulations
                                        </button> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Block */} {/* Block */}
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
                                            <br />
                                            9876543213
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                    <p className="float-left">
                                      PASA/Product Name
                                    </p>
                                  </div>
                                  <div className="col-lg-3 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-2 col-md-1 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right">
                                        {/* <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Send Congratulations
                                        </button> */}
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
                                  <img src={load} alt="loadmore" />
                                  Load More
                                </button>
                              </div>
                            </div>
                          </div>

                          <div
                            className={
                              std
                                ? "tab-pane fade active show"
                                : "tab-pane fade"
                            }
                            id="surrendered"
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
                                  <div className="col-md-1 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                    <label>
                                      Contact
                                      {/* <img src={sort} alt="sort" /> */}
                                    </label>
                                  </div>
                                  <div className="col-md-4">
                                    <label>
                                      Termination/Surrender/discontinuance
                                      <img src={sort} alt="sort" />
                                    </label>
                                  </div>
                                  <div className="col-lg-3 pad-0">
                                    <label>Decision Support System</label>
                                  </div>
                                </div>
                              </div>
                              {/* Block */} {/* Block */}
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
                                            <br />
                                            9876543213
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                    <p className="float-left">
                                      PASA/Product Name
                                    </p>
                                  </div>

                                  <div className="col-lg-3 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-10 col-md-3 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                          />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Block */} {/* Block */}
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
                                            <br />
                                            9876543213
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                    <p className="float-left">
                                      PASA/Product Name
                                    </p>
                                  </div>
                                  <div className="col-lg-3 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-10 col-md-3 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                          />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Block */} {/* Block */}
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
                                            <br />
                                            9876543213
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                    <p className="float-left">
                                      PASA/Product Name
                                    </p>
                                  </div>
                                  <div className="col-lg-3 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-10 col-md-3 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                          />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Block */} {/* Block */}
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
                                            <br />
                                            9876543213
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                    <p className="float-left">
                                      PASA/Product Name
                                    </p>
                                  </div>
                                  <div className="col-lg-3 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-10 col-md-3 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                          />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Block */} {/* Block */}
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
                                            <br />
                                            9876543213
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                    <p className="float-left">
                                      PASA/Product Name
                                    </p>
                                  </div>
                                  <div className="col-lg-3 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-10 col-md-3 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                          />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Block */} {/* Block */}
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
                                            <br />
                                            9876543213
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                    <p className="float-left">
                                      PASA/Product Name
                                    </p>
                                  </div>
                                  <div className="col-lg-3 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-10 col-md-3 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                          />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Block */} {/* Block */}
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
                                            <br />
                                            9876543213
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                    <p className="float-left">
                                      PASA/Product Name
                                    </p>
                                  </div>
                                  <div className="col-lg-3 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-10 col-md-3 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                          />
                                        </p>
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
                                  <img src={load} alt="loadmore" />
                                  Load More
                                </button>
                              </div>
                            </div>
                          </div>

                          <div
                            className="tab-pane fade"
                            id="ff"
                            role="tabpanel"
                            aria-labelledby="later"
                          >
                            <div className="g-container">
                              {/* Block */}
                              <div className="g-header d-none d-lg-block d-md-none d-sm-none d-xs-none ">
                                <div className="row">
                                  <div className="col-md-3">
                                    <label>
                                      matured content
                                      <img src={sort} alt="sort" />
                                    </label>
                                  </div>
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <label>
                                      Contact
                                      {/* <img src={sort} alt="sort" /> */}
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starempty" />
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starempty" />
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starempty" />
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starempty" />
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starempty" />
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
                                      129129229 &nbsp;|&nbsp; 28-dec-2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  <div className="col-lg-1 col-md-1 text-center">
                                    <p>
                                      <img src={starEmpty} alt="starempty" />
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
                              <div className="g-footer text-center loadingText">
                                {/* <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  See More
                                </button> */}
                                <img src={load} />
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

            <div
              class="modal fade"
              id="pasaKnowMore"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Pasa Offer
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Pre Approved Offers (PASA) are available for Akhil
                    <br />
                    • No Medicals <br />• No Income Proof
                    <p>
                      <p>&nbsp;</p>
                      Non-Term PASA available, You can offer any Non-Term
                      Product to Akhil up to a Sum Assured of ****. Recommended
                      Products for this Customer - *****" If Term PASA available
                    </p>
                    <p>
                      Term PASA available, You can offer any Term Product to **
                      up to a Sum Assured of **. Recommended Products for this
                      Customer - ****
                    </p>
                    <p className="dark-grey-text font-12">
                      <b> Disclaimer:</b> Subject to Underwriting approvals
                      based on actual information provided in the application
                      form.
                      <br />
                    </p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
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
                              Matured
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
                              Paid-up
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
                              Surrendered
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
                              Terminated
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
                              Discontinued
                            </label>
                          </div>
                          <br />
                        </div>
                      </div>
                      <div className="col-lg-12  padding-left-none">
                        <span>from Date</span>

                        <div className="date-box">
                          {/* <img src={dateicon} alt="dateicon" /> */}
                          <input
                            type="date"
                            className="form-control data-search-box"
                            id="search"
                            aria-describedby="data-search"
                            placeholder="dd/mm/yyyy"
                            min={moment()
                              .subtract(5, "years")

                              .format("YYYY-MM-DD")}
                          />
                        </div>
                        <br />
                      </div>
                      <div className="col-lg-12 padding-left-none">
                        <span> To Date</span>
                        <div className="date-box">
                          {/* <img src={dateicon} alt="dateicon" /> */}
                          <input
                            type="date"
                            className="form-control data-search-box"
                            id="search"
                            aria-describedby="data-search"
                            placeholder="dd/mm/yyyy"
                            max={moment()
                              .add(2, "years")

                              .format("YYYY-MM-DD")}
                          />
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
      </div>
    </div>
  );
}

export default Recommendations;
