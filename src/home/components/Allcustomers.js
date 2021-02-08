import React from "react";
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
function Allcustomers() {
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
                      <img src={breadcrumbs} alt="breadcrumbs" />
                    </li>
                    <li>Customer List</li>
                    <li>
                      <img src={breadcrumbs} alt="breadcrumbs" />
                    </li>
                    <li className="active-li">All Customer</li>
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
            </div>
            {/* Heading Ends  */}
            <div className="f_Div_outer">
              <div className="f_Div_c1 d-none d-lg-block">
                <div className="filter-div-l shadow-normal">
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
                        <h3>Product</h3>
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
                        <h3>Premium Due Date (1)</h3>
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
                        <h3>lapse date</h3>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="retentionRadio"
                            value="Mature"
                            id="customCheckBox8"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox8"
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
                            id="customCheckBox10"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox10"
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
                            id="customCheckBox5"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox5"
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
                        <h3>Mature date</h3>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="retentionRadio"
                            value="Mature"
                            id="customCheckBox11"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox11"
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
                            id="customCheckBox13"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox13"
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
                            id="customCheckBox5"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox5"
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
                        <h3>Paid up date</h3>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="retentionRadio"
                            value="Mature"
                            id="customCheckBox14"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox14"
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
                            id="customCheckBox15"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox15"
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
                            id="customCheckBox16"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox16"
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
                        <h3>Surrendered</h3>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="retentionRadio"
                            value="Mature"
                            id="customCheckBox17"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox17"
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
                            id="customCheckBox18"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox18"
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
                            id="customCheckBox19"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox19"
                          >
                            Last 30 Days
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
                        <h3>terminated</h3>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="retentionRadio"
                            value="Mature"
                            id="customCheckBox20"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox20"
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
                            id="customCheckBox21"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheckBox21"
                          >
                            Last 30 Days
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
                                {/* <img src={search} alt="search" /> */}
                                <input
                                  type="email"
                                  className="form-control data-search-box"
                                  id="search"
                                  aria-describedby="data-search"
                                  placeholder="Search by Customer Name, Policy No,Mobile No."
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
                            <li className="nav-item w-50-p" role="presentation">
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
                            <li className="nav-item w-50-p" role="presentation">
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
                            <li className="nav-item w-50-p" role="presentation">
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
                              <div className="g-footer text-center">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  <img src={load} alt="load" />
                                  See More
                                </button>
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
                              <div className="g-footer text-center">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  <img src={load} alt="load" />
                                  See More
                                </button>
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
                                            alt="starEmpty"
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
                                            alt="starEmpty"
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
                                            alt="starEmpty"
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
                                            alt="starEmpty"
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
                                            alt="starEmpty"
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
                              <div className="g-footer text-center">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  <img src={load} alt="load" />
                                  See More
                                </button>
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
      </div>
    </div>
  );
}

export default Allcustomers;
