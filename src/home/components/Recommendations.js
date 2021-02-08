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
                  All Customers
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
                <h1>As on: 26 Jan 2021</h1>
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
                        <div className="col-lg-12"></div>
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
                <div className="f_Div_c1 d-none d-lg-block ">
                  {/*                   <div className="filter-div-l shadow-normal ">
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
                        <div className="col-lg-12 filter_sub_check_box_row">
                          <h3>All</h3>
                          <div className="data-search">
                            <img src={search} alt="search" />
                            <input
                              type="email"
                              className="form-control data-search-box"
                              id="search"
                              aria-describedby="data-search"
                              placeholder="Search Product"
                            />
                          </div>
                          <div className="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheckBox1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckBox1"
                            >
                              Product Name 01
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheckBox2"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckBox2"
                            >
                              Product Name 02
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheckBox3"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckBox3"
                            >
                              Product Name 03
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheckBox4"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckBox4"
                            >
                              Product Name 04
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 filter_sub_check_box_row">
                          <h3>PASA</h3>
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
                              Next Week
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
                              Next 30 Days
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
                          <h3>Hot Leads</h3>
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
                              High
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
                              Medium
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
                              Low
                            </label>
                          </div>
                        </div>

                        {/* <div className="col-lg-6"> 
                        
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
                          <h3>PASA AVAILABLE</h3>
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
                              Next Week
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
                              Next 30 Days
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-12 filter_sub_check_box_row">
                          <h3>Recommended Product</h3>
                          <div className="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheckBox5"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckBox5"
                            >
                              Product 1
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheckBox6"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckBox6"
                            >
                              Product 2
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheckBox7"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckBox7"
                            >
                              Product 3
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
                </div> */}
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
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-12 filter_sub_check_box_row">
                          <select class="custom-select custom-select-sm m-bottom-10">
                            <option selected>- Select -</option>
                            <option value="1">PASA</option>
                            <option value="2">Hot Leads</option>
                            <option value="3">PASA Available</option>
                            <option value="4">Recommendations</option>
                            <option value="4">Products</option>
                          </select>

                          <div class="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheckBox5"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheckBox5"
                            >
                              Today
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheckBox6"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheckBox6"
                            >
                              Next Week
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox check-box-row">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheckBox7"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheckBox7"
                            >
                              Next 30 Days
                            </label>
                          </div>
                        </div>

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
                        </div>

                        <div class="col-lg-6">
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
                                {/* <img src={search} alt="search" /> */}
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
                                Upsell
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
                                  <div className="col-md-7">
                                    <label>
                                      Next Best Offer
                                      {/* <img src={sort} alt="sort" />*/}
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
                                  <div className="col-lg-3 col-md-4">
                                    <p>PASA/Product</p>
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
                                      Send Message
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
                                    <p>PASA/Product</p>
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
                                      Send Message
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
                                    <p>PASA/Product</p>
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
                                      Send Message
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
                                    <p>PASA/Product</p>
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
                                      Send Message
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
                                    <p>PASA/Product</p>
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
                                      Send Message
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
                                    <p>PASA/Product</p>
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
                                      Send Message
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                  <div className="col-md-1 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                    <label>
                                      Contact
                                      {/* <img src={sort} alt="sort" /> */}
                                    </label>
                                  </div>
                                  <div className="col-md-4">
                                    <label>
                                      Date of PPT ending/PayoutAmount
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      {/* <div className="col-lg-10 col-md-3 text-right">
                                        <button
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
                                    PASA/Product Name
                                  </p>
                                </div>
                                <div className="col-lg-3 col-md-3">
                                  <div className="row">
                                    <div className="col-lg-2 col-md-1 text-center">
                                      <p>
                                        <img src={starempty} alt="starempty" />
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
                                    <div className="name_circle color-5">F</div>
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
                                    129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                        <img src={starempty} alt="starempty" />
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
                                    <div className="name_circle color-6">F</div>
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
                                    129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                        <img src={starempty} alt="starempty" />
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                      129129229 &nbsp;|&nbsp; 28/Dec/2020
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
            <div className="row">
              <div className="col-lg-3"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Recommendations;
