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
import starEmpty from "../../assets/img/icons/star-empty.svg";

function PendingQueries() {
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
                    <li>Customer list</li>
                    <li>
                      <img src={breadcrumbs} alt="breadcrumbs" />
                    </li>
                    <li className="active-li">Pending Queries</li>
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
                  Pending Queries
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
                        <h3>Raised By </h3>
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
                            Self
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
                            Customer
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 filter_sub_check_box_row">
                        <h3>Customer Query </h3>
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
                            Customer Servicing
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
                            RnR
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
                            className="nav nav-tabs h-scroll-s tabs tab"
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
                                Recent
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
                                Last Week
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
                                Older
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
                              <div className="g-header d-none d-lg-block d-md-none d-sm-none d-xs-none ">
                                <div className="row">
                                  <div className="col-md-3">
                                    <label>
                                      name
                                      <img src={sort} alt="sort" />
                                    </label>
                                  </div>
                                  <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                    <label>Contact</label>
                                  </div>
                                  <div className="col-md-7">
                                    <label>
                                      Query Type
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
                                      className="btn btn-outline-s "
                                    >
                                      View details
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
                                      View details
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
                                      View details
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
                                      View details
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
                                      View details
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
                                      View details
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
                                    <label>Contact</label>
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
                                      <img src={starEmpty} alt="starEmpty" />
                                    </p>
                                  </div>
                                  <div className="col-lg-2 col-md-3 text-right">
                                    <button
                                      type="button"
                                      className="btn btn-outline-s "
                                    >
                                      View details
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
                                      View details
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
                                      View details
                                    </button>
                                  </div>
                                  F
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
                                      View details
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
                                      View details
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
                                      View details
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
                                    <label>Contact</label>
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
                                      className="btn btn-outline-s"
                                    >
                                      View details
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
                                      View details
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
                                      View details
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
                                      View details
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
                                      View details
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
                                      View details
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
                            className="tab-pane fade"
                            id="fav"
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
                                    <label>Contact</label>
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
                                      View details
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
                                      View details
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
                                      View details
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
                                      View details
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
                                      View details
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
                                      View details
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

export default PendingQueries;
