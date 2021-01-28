import React from "react";
import Header from "../../header";
import breadcrumbsarrow from "../../assets/img/icons/breadcrumbs-arrow.png";
import backarrow from "../../assets/img/icons/back-arrow.svg";
import yellowflag from "../../assets/img/icons/yellow-flag.svg";
import policyid from "../../assets/img/icons/policy-id.svg";
function Query_details() {
  return (
    <div>
      <div>
        <Header />
        <main className="bg-white " role="main">
          <div className="breadcrubs-div shadow-sm d-none d-lg-block d-md-block  d-sm-none">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <ul>
                    <li>Dashboard</li>
                    <li>
                      <img src={breadcrumbsarrow} alt="breadcrumbsarrow" />
                    </li>
                    <li>Query Management System</li>
                    <li>
                      <img src={breadcrumbsarrow} alt="breadcrumbsarrow" />
                    </li>
                    <li className="active-li">Query Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {/* Heading Starts  */}
            <div className="row">
              <div className="col-md-12">
                <div className="col-lg-none col-md-none col-sm-block">
                  <br />
                </div>
                <h1 className="p-header">
                  <img src={backarrow} alt="backarrow" />
                  Query Details
                </h1>
              </div>
            </div>
            {/* Heading Ends  */}
            <div className="qd-card shadow-normal">
              <div className="row">
                <div className="qd-detail-block col-md-4">
                  <div className="row">
                    <div className="col-3">
                      <div className="name-c1 color-1 float-right">S</div>
                    </div>
                    <div className="col-9 px-0 sm-flex">
                      <div className="qd-detail mb-3">
                        <div className="dark-grey-text font18 line-ht-14">
                          Advisor Name
                        </div>
                        <div className="font20 line-ht-11">Sangeetha</div>
                      </div>
                      <div className="qd-detail mb-3">
                        <div className="dark-grey-text font18 line-ht-14">
                          Advisor Code
                        </div>
                        <div className="font20 line-ht-11">274327</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="qd-detail-block col-md-4">
                  <div className="mb-3">
                    <div className="dark-grey-text font18 line-ht-14">
                      Created By
                    </div>
                    <div className="font20 line-ht-11">Santosh Boyni</div>
                  </div>
                  <div className="mb-3">
                    <div className="dark-grey-text font18 line-ht-14">
                      Created Date
                    </div>
                    <div className="font20 line-ht-11">
                      DD/MMM/YYYY 12:10 AM
                    </div>
                  </div>
                </div>
                <div className="qd-detail-block col-md-4">
                  <div className="mb-3">
                    <div className="dark-grey-text font18 line-ht-14">
                      Query Type
                    </div>
                    <div className="font20 line-ht-11">
                      Commission Payment Related
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="dark-grey-text font18 line-ht-14">
                      Status
                    </div>
                    <div className="font20 line-ht-11">Pending</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tabs-div mt-4">
              <div className="row">
                <div className="col-lg-12">
                  <div className="sidebar">
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
                          href="#overview"
                          role="tab"
                          aria-controls="overview"
                          aria-selected="true"
                        >
                          Overview
                        </a>
                      </li>
                      <li className="nav-item w-50-p" role="presentation">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#queryDetails"
                          role="tab"
                          aria-controls="queryDetails"
                          aria-selected="false"
                        >
                          Query Details
                        </a>
                      </li>
                      <li className="nav-item w-50-p" role="presentation">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#documents"
                          role="tab"
                          aria-controls="documents"
                          aria-selected="false"
                        >
                          Documents
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-12 pad-0">
                    <div className="tab-content" id="myTabContent">
                      {/* All Content Starts Here */}
                      <div
                        className="tab-pane fade show active "
                        id="overview"
                        role="tabpanel"
                        aria-labelledby={1}
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <div
                              className="accordion accordion-flush"
                              id="accordionFlushExample"
                            >
                              <div className="accordion-item">
                                <div
                                  className="accordion-header-wrapper"
                                  data-toggle="collapse"
                                  href="#flush-collapseOne"
                                  role="button"
                                  aria-expanded="false"
                                  aria-controls="flush-collapseOne"
                                >
                                  <h2
                                    className="accordion-header"
                                    id="flush-headingOne"
                                  >
                                    Action Required
                                  </h2>
                                  <i className="arrow-up" />
                                  <i className="arrow-down" />
                                </div>
                                <div
                                  id="flush-collapseOne"
                                  className="accordion-collapse collapse show accordion-content"
                                >
                                  <div className="accordion-body">
                                    <div className="row">
                                      <div className="col-lg-4 col-md-6">
                                        <div className="smart-card shadow-normal">
                                          <div className="yellow-flag">
                                            <img
                                              src={yellowflag}
                                              alt="yellowflag"
                                            />
                                          </div>
                                          <div className="today">Today</div>
                                          <div className="row">
                                            <div className="col-lg-12">
                                              <h3>Feedback</h3>
                                            </div>
                                          </div>
                                          <div className="row pad-10 d-flex align-items-center">
                                            <div className="col-2">
                                              <img
                                                src={policyid}
                                                alt="policyid"
                                              />
                                            </div>
                                            <div className="col-10 pl-4">
                                              <div className="font20 line-ht-11">
                                                12345678AB123456
                                              </div>
                                              <div className="d-flex align-items-center dark-grey-text font18">
                                                Customer Servicing
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-lg-12 text-right">
                                              <button className="btn btn-outline-s">
                                                Send Feedback
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <div
                                  className="accordion-header-wrapper"
                                  data-toggle="collapse"
                                  href="#flush-collapseTwo"
                                  role="button"
                                  aria-expanded="false"
                                  aria-controls="flush-collapseTwo"
                                >
                                  <h2
                                    className="accordion-header"
                                    id="flush-headingTwo"
                                  >
                                    Query Status
                                  </h2>
                                  <i className="arrow-up" />
                                  <i className="arrow-down" />
                                </div>
                                <div
                                  id="flush-collapseTwo"
                                  className="accordion-collapse collapse show"
                                >
                                  <div className="accordion-body">
                                    <div className="row">
                                      <div className="col-lg-12">
                                        <div className="qd-card shadow-normal query_status_card">
                                          <div className="row row1">
                                            <div className="col-lg-12">
                                              <p>Query Status</p>
                                              <label>Pending</label>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-lg-12">
                                              <div className="row2"> </div>
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
                        </div>
                      </div>
                      <div
                        className="tab-pane fade mb-4"
                        id="queryDetails"
                        role="tabpanel"
                        aria-labelledby="queryDetails"
                      >
                        <div className="qd-card shadow-normal my-4">
                          <section>
                            <div className="row">
                              <div className="col-md-4 mb-3">
                                <label className="dark-grey-text font16 line-ht-14 mb-0">
                                  Policy Number
                                </label>
                                <div className="font18 line-ht-11">
                                  123456789
                                </div>
                              </div>
                              <div className="col-md-4 mb-3">
                                <label className="dark-grey-text font16 line-ht-14 mb-0">
                                  Query Type
                                </label>
                                <div className="font18 line-ht-11">
                                  Policy Related
                                </div>
                              </div>
                              <div className="col-md-4 mb-3">
                                <label className="dark-grey-text font16 line-ht-14 mb-0">
                                  Query
                                </label>
                                <div className="font18 line-ht-11">
                                  Sample query text goes here..
                                </div>
                              </div>
                              <div className="col-md-4 mb-3">
                                <label className="dark-grey-text font16 line-ht-14 mb-0">
                                  Policy Holder
                                </label>
                                <div className="font18 line-ht-11">
                                  Sangeetha
                                </div>
                              </div>
                              <div className="col-md-4 mb-3">
                                <label className="dark-grey-text font16 line-ht-14 mb-0">
                                  Sub Type
                                </label>
                                <div className="font18 line-ht-11">-</div>
                              </div>
                              <div className="col-md-4 mb-3">
                                <label className="dark-grey-text font16 line-ht-14 mb-0">
                                  Query Status
                                </label>
                                <div className="font18 line-ht-11">Pending</div>
                              </div>
                              <div className="col-md-4 mb-3">
                                <label className="dark-grey-text font16 line-ht-14 mb-0">
                                  Processing Department
                                </label>
                                <div className="font18 line-ht-11">
                                  Department
                                </div>
                              </div>
                              <div className="col-md-4 mb-3">
                                <label className="dark-grey-text font16 line-ht-14 mb-0">
                                  Call Type
                                </label>
                                <div className="font18 line-ht-11">-</div>
                              </div>
                            </div>
                          </section>
                          <div className="grey-horizontal-separator mb-3 mt-2" />
                          <section>
                            <div className="mb-3">
                              <label className="dark-grey-text font16 line-ht-14 mb-0">
                                Resolution Date
                              </label>
                              <div className="font18 line-ht-11">
                                DD/MMM/YYYY
                              </div>
                            </div>
                            <div>
                              <label className="dark-grey-text font16 line-ht-14 mb-0">
                                Resolution Comment
                              </label>
                              <div className="font18 line-ht-11">-</div>
                            </div>
                          </section>
                        </div>
                        <div
                          className="accordion accordion-flush"
                          id="accordionFlushExample"
                        >
                          <div className="accordion-item">
                            <div
                              className="accordion-header-wrapper"
                              data-toggle="collapse"
                              href="#comments"
                              role="button"
                              aria-expanded="false"
                              aria-controls="comments"
                            >
                              <h2
                                className="accordion-header"
                                id="flush-headingOne"
                              >
                                Comments
                              </h2>
                              <i className="arrow-up" />
                              <i className="arrow-down" />
                            </div>
                            <div
                              id="comments"
                              className="accordion-collapse collapse show accordion-content"
                            >
                              <div className="accordion-body">
                                <div className="mt-card">
                                  <p>Start adding your comments</p>
                                  <button className="btn btn-primary-s">
                                    Add Comments
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="documents"
                        role="tabpanel"
                        aria-labelledby="documents"
                      >
                        <div className="policy-grid-customer my-4">
                          <div className="policy-grid-header d-none d-lg-block d-sm-none">
                            <div className="row">
                              <div className="col-lg-3">
                                <h3>Document Name</h3>
                              </div>
                            </div>
                          </div>
                          <div className="policy-grid-row">
                            <div className="row">
                              <div className="download-icon d-lg-none d-md-none d-sm-block">
                                <img src="./assets/img/icons/download-small.svg" />
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <span className="d-sm-block d-md-none d-lg-none">
                                  Document Name
                                </span>
                                <p className="color-b query-download-txt">
                                  Advisor Document 01
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-4">
                                <p className="color-b query-download-txt">
                                  Advisor_document01.pdf
                                </p>
                              </div>
                              <div className="col-lg-2 col-md-4 d-none d-lg-block d-md-block d-sm-none">
                                <button
                                  type="button"
                                  className="btn btn-outline-s px-4"
                                >
                                  Download
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="policy-grid-row">
                            <div className="row">
                              <div className="download-icon d-lg-none d-md-none d-sm-block">
                                <img src="./assets/img/icons/download-small.svg" />
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <span className="d-sm-block d-md-none d-lg-none">
                                  Document Name
                                </span>
                                <p className="color-b query-download-txt">
                                  Advisor Document 01
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-4">
                                <p className="color-b query-download-txt">
                                  Advisor_document01.pdf
                                </p>
                              </div>
                              <div className="col-lg-2 col-md-4 d-none d-lg-block d-md-block d-sm-none">
                                <button
                                  type="button"
                                  className="btn btn-outline-s px-4"
                                >
                                  Download
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="policy-grid-row brdr-none">
                            <div className="row">
                              <div className="download-icon d-lg-none d-md-none d-sm-block">
                                <img src="./assets/img/icons/download-small.svg" />
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <span className="d-sm-block d-md-none d-lg-none">
                                  Document Name
                                </span>
                                <p className="color-b query-download-txt">
                                  Advisor Document 01
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-4">
                                <p className="color-b query-download-txt">
                                  Advisor_document01.pdf
                                </p>
                              </div>
                              <div className="col-lg-2 col-md-4 d-none d-lg-block d-md-block d-sm-none">
                                <button
                                  type="button"
                                  className="btn btn-outline-s px-4"
                                >
                                  Download
                                </button>
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
          </div>
        </main>
      </div>
    </div>
  );
}
export default Query_details;
