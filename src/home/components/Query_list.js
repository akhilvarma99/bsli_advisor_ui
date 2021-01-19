import React from "react";
import breadcrumbs from "../../assets/img/icons/breadcrumbs-arrow.png";
import backarrow from "../../assets/img/icons/back-arrow.svg";
import filter from "../../assets/img/icons/filter.svg";
import searchbox from "../../assets/img/icons/search-bx.svg";
import sort from "../../assets/img/icons/sort.svg";
import loadmore from "../../assets/img/icons/load-more.svg";
function Query_list() {
  return (
    <div>
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
      <title>Customer List All</title>
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
                    <img src={breadcrumbs} alt="breadcrumbs" />
                  </li>
                  <li className>Customer List</li>{" "}
                  <li>
                    <img src={breadcrumbs} alt="breadcrumbs" />
                  </li>
                  <li className="active-li">Renewal Payment Due</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {/* Heading Starts  */}
          <div className="row">
            <div className="col-md-12">
              <h1 className="p-header">
                <img src={backarrow} alt="backarrow" />
                Query Management System
              </h1>
            </div>
          </div>
          {/* Heading Ends  */}
          <div className="row">
            <div className="col-lg-12">
              <div className="card-div m-left-0">
                <p>Total Queries Raised</p>
                <h2>100</h2>
              </div>
            </div>
          </div>
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
                <div className="filter_body">
                  <div className="filter-body-inner">
                    <div className="row">
                      <div className="col-lg-12 filter_sub_check_box_row">
                        <h3>Query Status</h3>
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
                            Pending
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
                            Resolved
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 filter_sub_check_box_row">
                        <h3>Raised By</h3>
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
                            Self
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
                  {/* <div class="row">
                <div class="col-lg-6">
                  <button type="button" class="btn btn-outline-s-secondary">Reset</button>
                </div>
                <div class="col-lg-6">
                  <button type="button" class="btn btn-primary-s">Apply</button>
                </div>
              </div> */}
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
                                  <label>Query For</label>
                                </div>
                                <div className="col-md-1">
                                  <label>Status</label>
                                </div>
                              </div>
                            </div>
                            {/* Block */}
                            {/* Block */}
                            <div className="g-row">
                              <div className="row">
                                <div className="col-md-2">
                                  <p>12345678AB123456</p>
                                </div>
                                <div className="col-md-2">
                                  <p>Customer Servicing</p>
                                </div>
                                <div className="col-md-2">
                                  <p>Customer</p>
                                </div>
                                <div className="col-md-3">
                                  <p>DD/MM/YYYY 12:10 AM</p>
                                </div>
                                <div className="col-md-2">
                                  <p>Tanmoy Misra</p>
                                </div>
                                <div className="col-md-1">
                                  <p>Pending</p>
                                </div>
                              </div>
                            </div>
                            {/* Block */}
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className="g-footer text-center">
                              <button type="button" className="btn btn-primary">
                                <img src={loadmore} />
                                Load More
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
                          <h1>2</h1>
                        </div>
                        {/* Next Week Content Ends Here */}
                        {/* Later Content Starts Here ----------------------------------------------------------------------------------------------*/}
                        <div
                          className="tab-pane fade"
                          id="later"
                          role="tabpanel"
                          aria-labelledby="later"
                        >
                          <h1>3</h1>
                        </div>
                        {/* Later Content Ends Here */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 d-none d-md-block"></div>
            <div className="col-lg-9"></div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="f_Div_outer">
                <div className="f_Div_c1 d-none d-lg-block"></div>
                <div className="f_Div_c2"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-9"></div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </main>
      <footer className="text-muted">
        <div className="sample-footer"></div>
      </footer>
    </div>
  );
}

export default Query_list;
