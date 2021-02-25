import React from "react";
import Header from "../../header";
import breadcrumbs from "../../assets/img/icons/breadcrumbs-arrow.png";
import backarrow from "../../assets/img/icons/back-arrow.svg";
import downloadxcel from "../../assets/img/icons/dlownload-excel.svg";
import downloadpdf from "../../assets/img/icons/dlownload-pdf.svg";
import filter from "../../assets/img/icons/filter.svg";
import searchbox from "../../assets/img/icons/search-bx.svg";
import dateicon from "../../assets/img/icons/date-icon.svg";
import sort from "../../assets/img/icons/sort.svg";
import zoom from "../../assets/img/icons/zoom.svg";

function Allcustomersresultnotfound() {
  return (
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
                All Customers
              </h1>
            </div>
            <div className="col">
              <ul className="download-report">
                <li>Export as:</li>
                <li>
                  <img src={downloadxcel} alt="downloadxcel" />
                </li>
                <li>
                  <img src={downloadpdf} alt="downloadpdf" />
                </li>
              </ul>
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
                        <img src={searchbox} alt="searchbox" />
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
                          Next 30 days
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
                          30 days
                        </label>{" "}
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
                          id="customCheckBox5"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox5"
                        >
                          Last 30 days
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
                          This Week
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
                          Next 30 days
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
                          id="customCheckBox5"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox5"
                        >
                          Last 30 days
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
                          This Week
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
                          Next 30 days
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
                          id="customCheckBox5"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox5"
                        >
                          Last 30 days
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
                          This Week
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
                          Next 30 days
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
                          id="customCheckBox5"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox5"
                        >
                          Last 30 days
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
                          This Week
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
                          Next 30 days
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
                              {/* <img src={searchbox} alt="serarchbox" /> */}
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
                            <div className="search-empty-state">
                              <img src={zoom} alt="zoom" />
                              <h3>Search result not found</h3>
                            </div>
                            <div className="g-footer text-center">
                              {/* <button type="button" class="btn btn-primary"><img src="./assets/img/icons/load-more.svg">Load More</button> */}
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
                          <div className="search-empty-state">
                            <img src={zoom} alt="zoom" />
                            <h3>Search result not found</h3>
                          </div>
                          <div className="g-footer text-center"></div>
                        </div>
                        {/* Active Week Content Ends Here */}
                        {/* Fav Content Starts Here ----------------------------------------------------------------------------------------------*/}
                        <div
                          className="tab-pane fade"
                          id="fav"
                          role="tabpanel"
                          aria-labelledby="later"
                        >
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
                          <div className="search-empty-state">
                            <img src={zoom} alt="zoom" />
                            <h3>Search result not found</h3>
                          </div>
                          <div className="g-footer text-center"></div>
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
            <div className="col-lg-12 d-none d-md-block"></div>
          </div>
        </div>
      </main>
      <footer className="text-muted">
        <div className="sample-footer"></div>
      </footer>
    </div>
  );
}

export default Allcustomersresultnotfound;
