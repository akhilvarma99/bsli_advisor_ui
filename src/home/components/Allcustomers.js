import React, { useState } from "react";
import Header from "../../header";
import breadcrumbs from "../../assets/img/icons/breadcrumbs-arrow.png";
import backarrow from "../../assets/img/icons/back-arrow.svg";
import downloadexcel from "../../assets/img/icons/dlownload-excel.svg";
import downloadpdf from "../../assets/img/icons/dlownload-pdf.svg";
import filter from "../../assets/img/icons/filter.svg";
import search from "../../assets/img/icons/search-bx.svg";
import dateicon from "../../assets/img/icons/date-icon.svg";
import closeIcon from "../../assets/img/icons/f_close.svg";
import starempty from "../../assets/img/icons/star-empty.svg";
import load from "../../assets/img/icons/load-more.svg";
import sort from "../../assets/img/icons/sort.svg";
import FilterDropdown from "../../utils/FilterDropdown";
import Calendar from "react-calendar";
import yellowstarfilled from "../../assets/img/icons/yellow-star-filled.svg";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function Allcustomers() {
  const [policystatus, setPolicystatus] = useState("default");
  const [tabs, settabs] = useState("all");
  const classes = useStyles();

  const today = new Date();

  const datelist = {
    default: [
      "Premium due date",
      "Issuance date",
      "Paid Up",
      "Maturity date",
      "Surrender date",
      "Terminated date",
    ],
    active: ["Premium due date", "Issuance date", "Paid Up", "Maturity date"],
    lapsed: ["Issuance date", "Paid Up date", "Lapse date", "maturity date"],
    matured: ["Issuance date", "Paid up date", "Maturity date"],
    surrendered: ["Issuance date", "Surrender date"],
    terminated: ["Issuance date", "Terminated date"],
    paidup: ["Issuance date", "Maturity date"],
  };
  const dropdownlist = (policystatus) => {
    if (policystatus === "default") {
      return datelist.default.map((value) => (
        <option value={value}>{value}</option>
      ));
    } else if (policystatus === "active") {
      return datelist.active.map((value) => (
        <option value={value}>{value}</option>
      ));
    } else if (policystatus === "lapsed") {
      return datelist.lapsed.map((value) => (
        <option value={value}>{value}</option>
      ));
    } else if (policystatus === "matured") {
      return datelist.matured.map((value) => (
        <option value={value}>{value}</option>
      ));
    } else if (policystatus === "surrendered") {
      return datelist.surrendered.map((value) => (
        <option value={value}>{value}</option>
      ));
    } else if (policystatus === "terminated") {
      return datelist.terminated.map((value) => (
        <option value={value}>{value}</option>
      ));
    } else if (policystatus === "paidup") {
      return datelist.paidup.map((value) => (
        <option value={value}>{value}</option>
      ));
    }
  };

  function applyFunc() {
    var ele = document.getElementsByName("retentionRadio");

    for (let i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        if (ele[i].value === "default") {
          console.log("default");
        }
        if (ele[i].value === "active") {
          console.log("active");
          setPolicystatus("active");
        }
        if (ele[i].value === "lapsed") {
          console.log("lapsed");
          setPolicystatus("lapsed");
        }
        if (ele[i].value === "matured") {
          console.log("matured");
          setPolicystatus("matured");
        }
        if (ele[i].value === "surrendered") {
          console.log("surrendered");
          setPolicystatus("surrendered");
        }
        if (ele[i].value === "terminated") {
          console.log("terminated");
          setPolicystatus("terminated");
        }
        if (ele[i].value === "paidup") {
          console.log("paidup");
          setPolicystatus("paidup");
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
                    <li>Home</li>
                    <li>
                      <img src={breadcrumbs} alt="breadcrumbs" />
                    </li>

                    {/* <li>Customer List</li>
                    <li>
                      <img src={breadcrumbs} alt="breadcrumbs" />
                    </li> */}
                    <li className="active-li">All Customers</li>
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
                  All Customers(3456)
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
              {tabs === "all" ? (
                <div class="f_Div_c1 d-none d-lg-block">
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
                    <div class="filter_body">
                      <div class="row">
                        <div class="col-lg-12"></div>
                        <div class="col-lg-12 filter_sub_check_box_row">
                          <h3>Product</h3>
                          <div class="data-search">
                            <img src={search} alt="search" />

                            <input
                              type="email"
                              class="form-control data-search-box"
                              id="search"
                              aria-describedby="data-search"
                              placeholder="Search Product"
                            />
                          </div>

                          <div class="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheckBox1"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheckBox1"
                            >
                              Product Name 01
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheckBox2"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheckBox2"
                            >
                              Product Name 02
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheckBox3"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheckBox3"
                            >
                              Product Name 03
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheckBox4"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheckBox4"
                            >
                              Product Name 04
                            </label>
                          </div>
                          <div className="col-12">
                            <div className=" font-18 float-right cursor-pointer text-right text-danger">
                              Show More
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        {/* <div className="col-lg-12"></div> */}
                        <div className="col-lg-12 filter_sub_check_box_row">
                          <h3>Policy Status</h3>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="retentionRadio"
                              value="active"
                              id="flexRadioDefault1"
                              onChange={applyFunc}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Active
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="retentionRadio"
                              value="lapsed"
                              id="flexRadioDefault1"
                              onChange={applyFunc}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Lapsed
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="retentionRadio"
                              value="matured"
                              id="flexRadioDefault1"
                              onChange={applyFunc}
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
                              value="surrendered"
                              id="flexRadioDefault1"
                              onChange={applyFunc}
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
                              value="terminated"
                              id="flexRadioDefault1"
                              onChange={applyFunc}
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
                              value="paidup"
                              id="flexRadioDefault1"
                              onChange={applyFunc}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Paid up
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-12 filter_sub_check_box_row">
                          <h3>By Date</h3>
                          <select class="custom-select custom-select-sm m-bottom-10">
                            <option selected>- Date Type -</option>

                            {dropdownlist(policystatus)}
                            {/* {(() => {
                            if (policystatus === "active") {
                              dropDown.active.map((value) => (
                                <option value={value}>value</option>
                              ));
                            }
                          })()} */}

                            {/* <option value="1">Premium Due Date</option>
                          <option value="2">Lapse Date</option>
                          <option value="3">Mature Date</option>
                          <option value="4">Paid up Date</option>
                          <option value="4">Surrendered</option>
                          <option value="4">Terminated</option> */}
                          </select>

                          <h3>Date Range</h3>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="dateRadio"
                              value="active"
                              id="flexRadioDefault1"
                              onChange={applyFunc}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              This Month
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="dateRadio"
                              value="lapsed"
                              id="flexRadioDefault1"
                              onChange={applyFunc}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              This Year
                            </label>
                          </div>
                        </div>
                        {/* <Calendar /> */}
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
                    </div>

                    <div class="filter-footer">
                      <div class="row">
                        <div class="col-lg-12">
                          <button type="button" class="btn btn-outline-s">
                            Reset
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary-s mrgn-0"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div class="f_Div_c1 d-none d-lg-block">
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
                    <div class="filter_body">
                      <div class="row">
                        <div class="col-lg-12"></div>
                        <div class="col-lg-12 filter_sub_check_box_row">
                          <h3>Product</h3>
                          <div class="data-search">
                            <img src={search} alt="search" />

                            <input
                              type="email"
                              class="form-control data-search-box"
                              id="search"
                              aria-describedby="data-search"
                              placeholder="Search Product"
                            />
                          </div>

                          <div class="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheckBox1"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheckBox1"
                            >
                              Product Name 01
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheckBox2"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheckBox2"
                            >
                              Product Name 02
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheckBox3"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheckBox3"
                            >
                              Product Name 03
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheckBox4"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheckBox4"
                            >
                              Product Name 04
                            </label>
                          </div>
                          <div className="col-12">
                            <div className="font-18 float-right cursor-pointer text-right text-danger">
                              Show More
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        {/* <div className="col-lg-12"></div> */}
                        <div className="col-lg-12 filter_sub_check_box_row">
                          <h3>Policy Status</h3>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="retentionRadio"
                              value="active"
                              id="flexRadioDefault1"
                              defaultChecked
                              onChange={applyFunc}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Active
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-12 filter_sub_check_box_row">
                          <select class="custom-select custom-select-sm m-bottom-10">
                            <option selected>- Date Type -</option>

                            {/* {(() => {
                            if (policystatus === "active") {
                              dropDown.active.map((value) => (
                                <option value={value}>value</option>
                              ));
                            }
                          })()} */}

                            <option value="1">Premium Due Date</option>
                            <option value="2">Issuance Date</option>
                            <option value="3">Maturity Date</option>
                            <option value="4">Paid up Date</option>
                          </select>

                          <h3>Date Range</h3>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="dateRadio"
                              value="active"
                              id="flexRadioDefault1"
                              onChange={applyFunc}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              This Month
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="dateRadio"
                              value="lapsed"
                              id="flexRadioDefault1"
                              onChange={applyFunc}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              This Year
                            </label>
                          </div>
                        </div>
                        {/* <Calendar /> */}
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
                              min="2016-02-17"
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
                              max="2021-02-17"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="filter-footer">
                      <div class="row">
                        <div class="col-lg-12">
                          <button
                            type="button"
                            class="btn btn-outline-s-secondary"
                          >
                            Reset
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary-s mrgn-0"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

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
                                <img src={search} alt="search" />
                                <input
                                  type="email"
                                  className="form-control data-search-box"
                                  id="search"
                                  aria-describedby="data-search"
                                  placeholder="Search by customer name, policy no, mobile no."
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
                                settabs("all");
                              }}
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
                                All
                              </a>
                            </li>
                            <li
                              className="nav-item w-50-p"
                              role="presentation"
                              onClick={() => {
                                settabs("active");
                              }}
                            >
                              <a
                                className="nav-link"
                                id="profile-tab"
                                data-toggle="tab"
                                href="#active"
                                role="tab"
                                aria-controls="active"
                                aria-selected="false"
                              >
                                Active
                              </a>
                            </li>
                            <li
                              className="nav-item w-50-p"
                              role="presentation"
                              onClick={() => {
                                settabs("all");
                              }}
                            >
                              <a
                                className="nav-link"
                                id="profile-tab"
                                data-toggle="tab"
                                href="#fav"
                                role="tab"
                                aria-controls="fav"
                                aria-selected="false"
                              >
                                Favourites
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
                          {/* All Content Starts Here */}
                          <div
                            className="tab-pane fade show active"
                            id="all"
                            role="tabpanel"
                            aria-labelledby="today"
                          >
                            <div className="g-container">
                              {/* Block */}
                              <div className="g-header d-none d-lg-block d-md-block d-sm-none d-xs-none ">
                                <div className="row">
                                  <div className="col-lg-5 col-md-4">
                                    <label>
                                      name
                                      <img src={sort} alt="sort" />
                                    </label>
                                  </div>
                                  <div className="col-lg-7 col-md-6">
                                    <label>Contact</label>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-5 col-md-4">
                                    <div className="v-lg d-none d-lg-block d-md-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-1">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-none d-sm-block">
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
                                  <div className="col-lg-5 col-md-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  {/* Visible SM */}
                                  <div className="col-lg-4 col-md-4 d-lg-none d-md-none d-sm-block">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  {/* Visible SM */}
                                  <div className="col-lg-2 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                            className="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right d-lg-none d-md-none d-sm-block">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Premium Already Paid
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
                                  <div className="col-lg-5 col-md-4">
                                    <div className="v-lg d-none d-lg-block d-md-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-2">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-none d-sm-block">
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
                                  <div className="col-lg-5 col-md-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  {/* Visible SM */}
                                  <div className="col-lg-4 col-md-4 d-lg-none d-md-none d-sm-block">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  {/* Visible SM */}
                                  <div className="col-lg-2 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                            className="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right d-lg-none d-md-none d-sm-block">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Premium Already Paid
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-5 col-md-4">
                                    <div className="v-lg d-none d-lg-block d-md-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-2">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-none d-sm-block">
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
                                  <div className="col-lg-5 col-md-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  {/* Visible SM */}
                                  <div className="col-lg-4 col-md-4 d-lg-none d-md-none d-sm-block">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  {/* Visible SM */}
                                  <div className="col-lg-2 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                            className="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right d-lg-none d-md-none d-sm-block">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Premium Already Paid
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-5 col-md-4">
                                    <div className="v-lg d-none d-lg-block d-md-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-2">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-none d-sm-block">
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
                                  <div className="col-lg-5 col-md-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  {/* Visible SM */}
                                  <div className="col-lg-4 col-md-4 d-lg-none d-md-none d-sm-block">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  {/* Visible SM */}
                                  <div className="col-lg-2 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                            className="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right d-lg-none d-md-none d-sm-block">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Premium Already Paid
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-5 col-md-4">
                                    <div className="v-lg d-none d-lg-block d-md-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-2">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-none d-sm-block">
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
                                  <div className="col-lg-5 col-md-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  {/* Visible SM */}
                                  <div className="col-lg-4 col-md-4 d-lg-none d-md-none d-sm-block">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  {/* Visible SM */}
                                  <div className="col-lg-2 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                            className="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right d-lg-none d-md-none d-sm-block">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Premium Already Paid
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-5 col-md-4">
                                    <div className="v-lg d-none d-lg-block d-md-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-2">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-none d-sm-block">
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
                                  <div className="col-lg-5 col-md-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  {/* Visible SM */}
                                  <div className="col-lg-4 col-md-4 d-lg-none d-md-none d-sm-block">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  {/* Visible SM */}
                                  <div className="col-lg-2 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                            className="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right d-lg-none d-md-none d-sm-block">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Premium Already Paid
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-5 col-md-4">
                                    <div className="v-lg d-none d-lg-block d-md-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-3">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-none d-sm-block">
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
                                  <div className="col-lg-5 col-md-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  {/* Visible SM */}
                                  <div className="col-lg-4 col-md-4 d-lg-none d-md-none d-sm-block">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  {/* Visible SM */}
                                  <div className="col-lg-2 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                            className="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right d-lg-none d-md-none d-sm-block">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Premium Already Paid
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
                                  <div className="col-lg-5 col-md-4">
                                    <div className="v-lg d-none d-lg-block d-md-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-4">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-none d-sm-block">
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
                                  <div className="col-lg-5 col-md-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  {/* Visible SM */}
                                  <div className="col-lg-4 col-md-4 d-lg-none d-md-none d-sm-block">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  {/* Visible SM */}
                                  <div className="col-lg-2 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                            className="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right d-lg-none d-md-none d-sm-block">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Premium Already Paid
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
                                  <div className="col-lg-5 col-md-4">
                                    <div className="v-lg d-none d-lg-block d-md-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-5">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-none d-sm-block">
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
                                  <div className="col-lg-5 col-md-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  {/* Visible SM */}
                                  <div className="col-lg-4 col-md-4 d-lg-none d-md-none d-sm-block">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  {/* Visible SM */}
                                  <div className="col-lg-2 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                            className="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right d-lg-none d-md-none d-sm-block">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Premium Already Paid
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
                                  <div className="col-lg-5 col-md-4">
                                    <div className="v-lg d-none d-lg-block d-md-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-6">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-none d-sm-block">
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
                                  <div className="col-lg-5 col-md-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  {/* Visible SM */}
                                  <div className="col-lg-4 col-md-4 d-lg-none d-md-none d-sm-block">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  {/* Visible SM */}
                                  <div className="col-lg-2 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                            className="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right d-lg-none d-md-none d-sm-block">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Premium Already Paid
                                        </button>
                                      </div>
                                    </div>
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
                              <div className="g-header d-none d-lg-block d-md-block d-sm-none d-xs-none ">
                                <div className="row">
                                  <div className="col-lg-5 col-md-4">
                                    <label>
                                      name
                                      <img src={sort} alt="sort" />
                                    </label>
                                  </div>
                                  <div className="col-lg-7 col-md-6">
                                    <label>Contact</label>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-5 col-md-4">
                                    <div className="v-lg d-none d-lg-block d-md-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-1">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-none d-sm-block">
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
                                  <div className="col-lg-5 col-md-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  {/* Visible SM */}
                                  <div className="col-lg-4 col-md-4 d-lg-none d-md-none d-sm-block">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  {/* Visible SM */}
                                  <div className="col-lg-2 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                            className="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right d-lg-none d-md-none d-sm-block">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Premium Already Paid
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
                                  <div className="col-lg-5 col-md-4">
                                    <div className="v-lg d-none d-lg-block d-md-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-2">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-none d-sm-block">
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
                                  <div className="col-lg-5 col-md-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  {/* Visible SM */}
                                  <div className="col-lg-4 col-md-4 d-lg-none d-md-none d-sm-block">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  {/* Visible SM */}
                                  <div className="col-lg-2 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                            className="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right d-lg-none d-md-none d-sm-block">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Premium Already Paid
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
                                  <div className="col-lg-5 col-md-4">
                                    <div className="v-lg d-none d-lg-block d-md-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-3">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-none d-sm-block">
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
                                  <div className="col-lg-5 col-md-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  {/* Visible SM */}
                                  <div className="col-lg-4 col-md-4 d-lg-none d-md-none d-sm-block">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  {/* Visible SM */}
                                  <div className="col-lg-2 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                            className="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right d-lg-none d-md-none d-sm-block">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Premium Already Paid
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
                                  <div className="col-lg-5 col-md-4">
                                    <div className="v-lg d-none d-lg-block d-md-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-4">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-none d-sm-block">
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
                                  <div className="col-lg-5 col-md-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  {/* Visible SM */}
                                  <div className="col-lg-4 col-md-4 d-lg-none d-md-none d-sm-block">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  {/* Visible SM */}
                                  <div className="col-lg-2 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                            className="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right d-lg-none d-md-none d-sm-block">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Premium Already Paid
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
                                  <div className="col-lg-5 col-md-4">
                                    <div className="v-lg d-none d-lg-block d-md-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-5">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-none d-sm-block">
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
                                  <div className="col-lg-5 col-md-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  {/* Visible SM */}
                                  <div className="col-lg-4 col-md-4 d-lg-none d-md-none d-sm-block">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  {/* Visible SM */}
                                  <div className="col-lg-2 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                            className="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right d-lg-none d-md-none d-sm-block">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Premium Already Paid
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
                                  <div className="col-lg-5 col-md-4">
                                    <div className="v-lg d-none d-lg-block d-md-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-6">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-none d-sm-block">
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
                                  <div className="col-lg-5 col-md-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  {/* Visible SM */}
                                  <div className="col-lg-4 col-md-4 d-lg-none d-md-none d-sm-block">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  {/* Visible SM */}
                                  <div className="col-lg-2 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 text-center">
                                        <p>
                                          <img
                                            src={starempty}
                                            alt="starempty"
                                            className="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right d-lg-none d-md-none d-sm-block">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Premium Already Paid
                                        </button>
                                      </div>
                                    </div>
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
                            className="tab-pane fade"
                            id="fav"
                            role="tabpanel"
                            aria-labelledby="later"
                          >
                            <div className="g-container">
                              {/* Block */}
                              <div className="g-header d-none d-lg-block d-md-block d-sm-none d-xs-none ">
                                <div className="row">
                                  <div className="col-lg-5 col-md-4">
                                    <label>
                                      name
                                      <img src={sort} alt="sort" />
                                    </label>
                                  </div>
                                  <div className="col-lg-7 col-md-6">
                                    <label>Contact</label>
                                  </div>
                                </div>
                              </div>
                              {/* Block */}
                              {/* Block */}
                              <div className="g-row">
                                <div className="row">
                                  <div className="col-lg-5 col-md-4">
                                    <div className="v-lg d-none d-lg-block d-md-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-1">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-none d-sm-block">
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
                                  <div className="col-lg-5 col-md-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  {/* Visible SM */}
                                  <div className="col-lg-4 col-md-4 d-lg-none d-md-none d-sm-block">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  {/* Visible SM */}
                                  <div className="col-lg-2 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 text-center">
                                        <p>
                                          <img
                                            src={yellowstarfilled}
                                            alt="yellowstarfilled"
                                            className="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right d-lg-none d-md-none d-sm-block">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Premium Already Paid
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
                                  <div className="col-lg-5 col-md-4">
                                    <div className="v-lg d-none d-lg-block d-md-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-2">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-none d-sm-block">
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
                                  <div className="col-lg-5 col-md-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  {/* Visible SM */}
                                  <div className="col-lg-4 col-md-4 d-lg-none d-md-none d-sm-block">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  {/* Visible SM */}
                                  <div className="col-lg-2 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 text-center">
                                        <p>
                                          <img
                                            src={yellowstarfilled}
                                            alt="yellowstarfilled"
                                            className="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right d-lg-none d-md-none d-sm-block">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Premium Already Paid
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
                                  <div className="col-lg-5 col-md-4">
                                    <div className="v-lg d-none d-lg-block d-md-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-3">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-none d-sm-block">
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
                                  <div className="col-lg-5 col-md-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  {/* Visible SM */}
                                  <div className="col-lg-4 col-md-4 d-lg-none d-md-none d-sm-block">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  {/* Visible SM */}
                                  <div className="col-lg-2 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 text-center">
                                        <p>
                                          <img
                                            src={yellowstarfilled}
                                            alt="yellowstarfilled"
                                            className="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right d-lg-none d-md-none d-sm-block">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Premium Already Paid
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
                                  <div className="col-lg-5 col-md-4">
                                    <div className="v-lg d-none d-lg-block d-md-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-4">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-none d-sm-block">
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
                                  <div className="col-lg-5 col-md-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  {/* Visible SM */}
                                  <div className="col-lg-4 col-md-4 d-lg-none d-md-none d-sm-block">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  {/* Visible SM */}
                                  <div className="col-lg-2 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 text-center">
                                        <p>
                                          <img
                                            src={yellowstarfilled}
                                            alt="yellowstarfilled"
                                            className="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right d-lg-none d-md-none d-sm-block">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Premium Already Paid
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
                                  <div className="col-lg-5 col-md-4">
                                    <div className="v-lg d-none d-lg-block d-md-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-5">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-none d-sm-block">
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
                                  <div className="col-lg-5 col-md-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  {/* Visible SM */}
                                  <div className="col-lg-4 col-md-4 d-lg-none d-md-none d-sm-block">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  {/* Visible SM */}
                                  <div className="col-lg-2 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 text-center">
                                        <p>
                                          <img
                                            src={yellowstarfilled}
                                            alt="yellowstarfilled"
                                            className="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right d-lg-none d-md-none d-sm-block">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Premium Already Paid
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
                                  <div className="col-lg-5 col-md-4">
                                    <div className="v-lg d-none d-lg-block d-md-block">
                                      <div className="ini-gap" />
                                      <div className="name_circle color-6">
                                        F
                                      </div>
                                      <label>Fohn Crockett</label>
                                    </div>
                                    <div className="v-md-sm-xs d-lg-none d-md-none d-sm-block">
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
                                  <div className="col-lg-5 col-md-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
                                    <p>9876543213</p>
                                  </div>
                                  {/* Hidden sm xs */}
                                  {/* Visible SM */}
                                  <div className="col-lg-4 col-md-4 d-lg-none d-md-none d-sm-block">
                                    <p>
                                      129129229 &nbsp;|&nbsp; 28/12/2020
                                      &nbsp;|&nbsp; 1,50,000.00
                                    </p>
                                  </div>
                                  {/* Visible SM */}
                                  <div className="col-lg-2 col-md-3">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12 text-center">
                                        <p>
                                          <img
                                            src={yellowstarfilled}
                                            alt="yellowstarfilled"
                                            className="starempty"
                                          />
                                        </p>
                                      </div>
                                      <div className="col-lg-10 col-md-3 text-right d-lg-none d-md-none d-sm-block">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                        >
                                          Premium Already Paid
                                        </button>
                                      </div>
                                    </div>
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
                          {/* <h3>Product</h3>
                          <div class="data-search">
                            <img src={search} alt="search" />

                            <input
                              type="email"
                              class="form-control data-search-box"
                              id="search"
                              aria-describedby="data-search"
                              placeholder="Search Product"
                            />
                          </div> */}
                          <div class="filter_body">
                            <div class="row">
                              <div class="col-lg-12"></div>
                              <div class="col-lg-12 filter_sub_check_box_row padding-none">
                                <h3>Product</h3>
                                <div class="data-search">
                                  <img
                                    className="search-allign"
                                    src={search}
                                    alt="search"
                                  />

                                  <input
                                    type="email"
                                    class="form-control data-search-box"
                                    id="search"
                                    aria-describedby="data-search"
                                    placeholder="Search Product"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheckBox1"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheckBox1"
                            >
                              Product Name 01
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheckBox2"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheckBox2"
                            >
                              Product Name 02
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheckBox3"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheckBox3"
                            >
                              Product Name 03
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheckBox4"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheckBox4"
                            >
                              Product Name 04
                            </label>
                          </div>
                          <div className="col-12">
                            <div className=" font-18 float-right cursor-pointer text-right text-danger">
                              Show More
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        {/* <div className="col-lg-12"></div> */}
                        <div className="col-lg-12 filter_sub_check_box_row">
                          <h3>Policy Status</h3>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="retentionRadio"
                              value="active"
                              id="flexRadioDefault1"
                              onChange={applyFunc}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Active
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="retentionRadio"
                              value="lapsed"
                              id="flexRadioDefault1"
                              onChange={applyFunc}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Lapsed
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="retentionRadio"
                              value="matured"
                              id="flexRadioDefault1"
                              onChange={applyFunc}
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
                              value="surrendered"
                              id="flexRadioDefault1"
                              onChange={applyFunc}
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
                              value="terminated"
                              id="flexRadioDefault1"
                              onChange={applyFunc}
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
                              value="paidup"
                              id="flexRadioDefault1"
                              onChange={applyFunc}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Paid up
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-12 filter_sub_check_box_row">
                          <h3>By Date</h3>
                          <select class="custom-select custom-select-sm m-bottom-10">
                            <option selected>- Date Type -</option>

                            {dropdownlist(policystatus)}
                            {/* {(() => {
                            if (policystatus === "active") {
                              dropDown.active.map((value) => (
                                <option value={value}>value</option>
                              ));
                            }
                          })()} */}

                            {/* <option value="1">Premium Due Date</option>
                          <option value="2">Lapse Date</option>
                          <option value="3">Mature Date</option>
                          <option value="4">Paid up Date</option>
                          <option value="4">Surrendered</option>
                          <option value="4">Terminated</option> */}
                          </select>

                          <h3>Date Range</h3>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="dateRadio"
                              value="active"
                              id="flexRadioDefault1"
                              onChange={applyFunc}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              This Month
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="dateRadio"
                              value="lapsed"
                              id="flexRadioDefault1"
                              onChange={applyFunc}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              This Year
                            </label>
                          </div>
                        </div>
                        {/* <Calendar /> */}
                        <div className="col-lg-12 ">
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
                        </div>
                        <div className="col-lg-12">
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
          </div>
        </main>
      </div>
    </div>
  );
}

export default Allcustomers;
