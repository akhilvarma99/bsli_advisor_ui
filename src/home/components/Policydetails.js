import React from "react";
import Header from "../../header";
import breadcrumbsarrow from "../../assets/img/icons/breadcrumbs-arrow.png";
import backarrow from "../../assets/img/icons/back-arrow.svg";
import yellowstarfilled from "../../assets/img/icons/yellow-star-filled.svg";
import phonecall from "../../assets/img/icons/phone-call.svg";
import mail from "../../assets/img/icons/mail.svg";
import yellowflag from "../../assets/img/icons/yellow-flag.svg";
import dollar from "../../assets/img/icons/dollar-icon.svg";
import creative from "../../assets/img/icons/creative.svg";
import circle from "../../assets/img/icons/circle.svg";
import taxcertificate from "../../assets/img/icons/tax-certificate.svg";
import sales from "../../assets/img/icons/sales.svg";
import policycontract from "../../assets/img/icons/policy-contract.svg";
import tdscertificate from "../../assets/img/icons/tds-certificate.svg";
import acknowledge from "../../assets/img/icons/payment-acknolodge.svg";
import policyid from "../../assets/img/icons/policy-id.svg";
import gift from "../../assets/img/icons/gift.svg";

function policydetails() {
  return (
    <div>
      <div>
        <Header />
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
        <title>Policy Details</title>
        {/* Bootstrap core CSS */}
        <link href="./assets/css/vendor/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/css/custom/index.css" />

        <main className="bg-white " role="main">
          <div className="breadcrubs-div shadow-sm h-100">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <ul>
                    <li>Dashboard</li>
                    <li>
                      <img src={breadcrumbsarrow} alt="breadcrumbsarrow" />
                    </li>
                    <li>Customer List</li>
                    <li>
                      <img src={breadcrumbsarrow} alt="breadcrumbsarrow" />
                    </li>
                    <li>Customer Details</li>
                    <li>
                      <img src={breadcrumbsarrow} alt="breadcrumbsarrow" />
                    </li>
                    <li className="active-li">Policy Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {/* Heading Starts  */}
            <div className="d-flex justify-content-between">
              <div className="row d-none d-lg-block d-sm-none">
                <div className="col">
                  <h1 className="p-header">
                    <img src={backarrow} alt="backarrow" />
                    Policy Details
                  </h1>
                </div>
              </div>
              <select
                className="form-control selectPolicy"
                id="exampleFormControlSelect1"
              >
                <option>ABSLI Life Shield Plan (Policy ID)</option>
                <option>ABSLI Life Shield Plan (Policy ID) - 2</option>
              </select>
            </div>
            <div className="row">
              <div className="col-lg-6 box-saperation">
                <div className="custmr-card shadow-normal">
                  <div className="row">
                    <div className="col-lg-2 col-md-2">
                      <div className="name_circle_large color-2">
                        <p>A</p>
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-10">
                      <div className="name-details">
                        <div className="category-div">
                          <p>
                            Category Name{" "}
                            <img
                              src={yellowstarfilled}
                              alt="yellowstarfilled"
                            />
                          </p>
                        </div>
                        <label>Sangeetha</label>
                        <p className="d-flex align-items-center">
                          <img src={phonecall} alt="phonecall" />
                          9876543213
                        </p>
                        <p className="pad-btnm d-flex align-items-center">
                          <img src={mail} alt="mail" />
                          sangeetha@adityabirlacapital.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-12">
                    <div className="card-div-lrge shadow-normal m-left-0">
                      <div className="row">
                        <div className="col-6 mb-3">
                          <div className="dark-grey-text font18 line-ht-14">
                            Policy ID
                          </div>
                          <div className="font20 line-ht-11">2034LK899</div>
                        </div>
                        <div className="col-6 mb-3">
                          <div className="dark-grey-text font18 line-ht-14">
                            Premium Amount (with Taxes)
                          </div>
                          <div className="font20 line-ht-11">12,000.00</div>
                        </div>
                        <div className="col-6 mb-3">
                          <div className="dark-grey-text font18 line-ht-14">
                            Premium Due Date
                          </div>
                          <div className="font20 line-ht-11">20/Dec/2020</div>
                        </div>
                        <div className="col-6 mb-3">
                          <div className="dark-grey-text font18 line-ht-14">
                            Policy Status
                          </div>
                          <div className="font20 line-ht-11">Active</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tabs-div" />
            <div className="tabs-div">
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
                          Policy Overview
                        </a>
                      </li>
                      <li className="nav-item w-50-p" role="presentation">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#transactions"
                          role="tab"
                          aria-controls="transactions"
                          aria-selected="false"
                        >
                          Transactions
                        </a>
                      </li>
                      <li className="nav-item w-50-p" role="presentation">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#customer_and_nominee"
                          role="tab"
                          aria-controls="customer_and_nominee"
                          aria-selected="false"
                        >
                          Customer And Nominee Details
                        </a>
                      </li>
                      <li className="nav-item w-50-p" role="presentation">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#reccomendation"
                          role="tab"
                          aria-controls="reccomendation"
                          aria-selected="false"
                        >
                          Recommendations
                        </a>
                      </li>
                      <li className="nav-item w-50-p" role="presentation">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#queries"
                          role="tab"
                          aria-controls="queries"
                          aria-selected="false"
                        >
                          Policy Statements
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
                                          <div className="today">overdue</div>
                                          <div className="row">
                                            <div className="col-lg-12">
                                              <h3>Premium Due</h3>
                                            </div>
                                          </div>
                                          <div className="row pad-10">
                                            <div className="col-2">
                                              <img
                                                src={policyid}
                                                alt="policyid"
                                              />
                                            </div>
                                            <div className="col-10">
                                              <p>
                                                Policy ID
                                                <br />{" "}
                                                <span>
                                                  20/Dec/2020 | 1,50,000
                                                </span>
                                              </p>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-lg-12 text-right">
                                              <button className="btn btn-outline-s">
                                                Send Payment Link
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

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
                                              <h3>Payment Failures</h3>
                                            </div>
                                          </div>
                                          <div className="row pad-10">
                                            <div className="col-2">
                                              <img
                                                src={policyid}
                                                alt="policyid"
                                              />
                                            </div>
                                            <div className="col-10">
                                              <p>
                                                Policy ID
                                                <br />{" "}
                                                <span>
                                                  20/Dec/2020 | Cheque |1,50,000
                                                </span>
                                              </p>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-lg-12 text-right">
                                              <button className="btn btn-outline-s">
                                                Send Payment Link
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-lg-4 col-md-6">
                                        <div className="smart-card shadow-normal">
                                          <div className="yellow-flag">
                                            <img
                                              src={yellowflag}
                                              alt="yellowflag"
                                            />
                                          </div>
                                          <div className="today">Tomorrow</div>
                                          <div className="row">
                                            <div className="col-lg-12">
                                              <h3>To be Matured</h3>
                                            </div>
                                          </div>
                                          <div className="row pad-10">
                                            <div className="col-2">
                                              <img
                                                src={policyid}
                                                alt="policyid"
                                              />
                                            </div>
                                            <div className="col-10">
                                              <p>
                                                Policy ID
                                                <br />{" "}
                                                <span>
                                                  20/Dec/2020|1,50,000
                                                </span>
                                              </p>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-lg-12 text-right">
                                              <button className="btn btn-outline-s">
                                                Send Wishes
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
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
                                              <h3>
                                                To Be Terminated/Discontinued
                                              </h3>
                                            </div>
                                          </div>
                                          <div className="row pad-10">
                                            <div className="col-2">
                                              <img
                                                src={policyid}
                                                alt="policyid"
                                              />
                                            </div>
                                            <div className="col-10">
                                              <p>
                                                Policy ID
                                                <br /> <span>20/Dec/2020</span>
                                              </p>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-lg-12 text-right">
                                              <button className="btn btn-outline-s">
                                                Contact Customer
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6">
                                        <div className="smart-card shadow-normal">
                                          <div className="yellow-flag">
                                            <img
                                              src={yellowflag}
                                              alt="yellowflag"
                                            />
                                          </div>
                                          <div className="today">Next Week</div>
                                          <div className="row">
                                            <div className="col-lg-12">
                                              <h3>Paid Up Policies</h3>
                                            </div>
                                          </div>
                                          <div className="row pad-10">
                                            <div className="col-2">
                                              <img
                                                src={policyid}
                                                alt="policyid"
                                              />
                                            </div>
                                            <div className="col-10">
                                              <p>
                                                Policy ID
                                                <br /> <span>20/Dec/2020</span>
                                              </p>
                                            </div>
                                          </div>
                                          {/* <div className="row">
                                            <div className="col-lg-12 text-right">
                                              <button className="btn btn-outline-s">
                                                Send Payment Link
                                              </button>
                                            </div>
                                          </div> */}
                                        </div>
                                      </div>
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
                                              <h3>Payouts Released</h3>
                                            </div>
                                          </div>
                                          <div className="row pad-10">
                                            <div className="col-2">
                                              <img
                                                src={policyid}
                                                alt="policyid"
                                              />
                                            </div>
                                            <div className="col-10">
                                              <p>
                                                Policy ID
                                                <br /> <span>20/Dec/2020</span>
                                              </p>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-lg-12 text-right">
                                              <button className="btn btn-outline-s">
                                                Send Wishes
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* <div className="col-lg-4 col-md-6"> */}
                                      {/* <div className="smart-card shadow-normal"></div> */}
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
                                    Policy Details
                                  </h2>
                                  <i className="arrow-up" />
                                  <i className="arrow-down" />
                                </div>
                                <div
                                  id="flush-collapseTwo"
                                  className="accordion-collapse collapse "
                                >
                                  <div className="accordion-body">
                                    <div className="row">
                                      <div className="col-lg-12">
                                        <div className="personal-de-card shadow-normal">
                                          <div className="row">
                                            <div className="col-md-3 mb-3">
                                              <label className="dark-grey-text font16 line-ht-14 mb-0">
                                                Policy Number
                                              </label>
                                              <div className="font18 line-ht-11">
                                                123456798
                                              </div>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                              <label className="dark-grey-text font16 line-ht-14 mb-0">
                                                Policy Status
                                              </label>
                                              <div className="font18 line-ht-11">
                                                Paid Up
                                              </div>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                              <label className="dark-grey-text font16 line-ht-14 mb-0">
                                                Policy Term
                                              </label>
                                              <div className="font18 line-ht-11">
                                                5
                                              </div>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                              <label className="dark-grey-text font16 line-ht-14 mb-0">
                                                Modal Premium
                                              </label>
                                              <div className="font18 line-ht-11">
                                                12000
                                              </div>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                              <label className="dark-grey-text font16 line-ht-14 mb-0">
                                                Premium Payment Term
                                              </label>
                                              <div className="font18 line-ht-11">
                                                2
                                              </div>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                              <label className="dark-grey-text font16 line-ht-14 mb-0">
                                                Premium Mode
                                              </label>
                                              <div className="font18 line-ht-11">
                                                Monthly
                                              </div>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                              <label className="dark-grey-text font16 line-ht-14 mb-0">
                                                ECS Registration Status
                                              </label>
                                              <div className="font18 line-ht-11">
                                                Inactive
                                              </div>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                              <label className="dark-grey-text font16 line-ht-14 mb-0">
                                                Stale Cheque Conditional Status
                                              </label>
                                              <div className="font18 line-ht-11">
                                                Stale Cheque
                                              </div>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                              <label className="dark-grey-text font16 line-ht-14 mb-0">
                                                Next Premium Due Date
                                              </label>
                                              <div className="font18 line-ht-11">
                                                DD/MM/YYYY
                                              </div>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                              <label className="dark-grey-text font16 line-ht-14 mb-0">
                                                Base Sum Assured
                                              </label>
                                              <div className="font18 line-ht-11">
                                                20000
                                              </div>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                              <label className="dark-grey-text font16 line-ht-14 mb-0">
                                                Cease Date
                                              </label>
                                              <div className="font18 line-ht-11">
                                                DD/MM/YYYY
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
                      </div>
                      {/* Today Content Ends Here */}
                      {/* Active Content Starts Here -------------------------------------------------------------------------------- */}
                      <div
                        className="tab-pane fade"
                        id="transactions"
                        role="tabpanel"
                        aria-labelledby="next-week"
                      >
                        <div
                          className="accordion accordion-flush"
                          id="accordionFlushExample"
                        >
                          <div className="accordion-item">
                            <div
                              className="accordion-header-wrapper"
                              data-toggle="collapse"
                              href="#premium-related-details"
                              role="button"
                              aria-expanded="false"
                              aria-controls="premium-related-details"
                            >
                              <h2
                                className="accordion-header"
                                id="flush-headingOne"
                              >
                                Premium Related Details
                              </h2>
                              <i className="arrow-up" />
                              <i className="arrow-down" />
                            </div>
                            <div
                              id="premium-related-details"
                              className="accordion-collapse collapse show accordion-content"
                            >
                              <div className="accordion-body">
                                <div className="row">
                                  <div className="col-lg-12 text-right">
                                    <button className="btn btn-primary-s m-bottom-10">
                                      Download Premium Related Details
                                    </button>
                                  </div>
                                </div>
                                <div className="personal-de-card shadow-normal">
                                  <div className="row">
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Policy Id
                                      </label>
                                      <div className="font18 line-ht-11">
                                        1234567
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Policy Issue Date
                                      </label>
                                      <div className="font18 line-ht-11">
                                        20/Dec/2020
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Premium Mode
                                      </label>
                                      <div className="font18 line-ht-11">
                                        Annual
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Billing Method
                                      </label>
                                      <div className="font18 line-ht-11">
                                        Direct Bill
                                      </div>
                                    </div>
                                    {/* <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Last Premium Due Date
                                      </label>
                                      <div className="font18 line-ht-11">
                                        DD/MM/YYYY
                                      </div>
                                    </div> */}
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Modal Premium
                                      </label>
                                      <div className="font18 line-ht-11">
                                        20,000
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Service Tax
                                      </label>
                                      <div className="font18 line-ht-11">
                                        1,000
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Model Premium with Service Tax
                                      </label>
                                      <div className="font18 line-ht-11">
                                        21,000
                                      </div>
                                    </div>
                                    {/* <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        First Year Premium
                                      </label>
                                      <div className="font18 line-ht-11">
                                        12,000
                                      </div>
                                    </div> */}
                                    {/* <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Annual Premium
                                      </label>
                                      <div className="font18 line-ht-11">
                                        20,000
                                      </div>
                                    </div> */}
                                    {/*                                     <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Gross Annual Premium
                                      </label>
                                      <div className="font18 line-ht-11">
                                        21,000
                                      </div>
                                    </div> */}
                                    {/*  <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        G.A.P with Service Tax and Cess
                                      </label>
                                      <div className="font18 line-ht-11">
                                        22,343
                                      </div>
                                    </div> */}
                                    {/*  <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Total Premium Paid
                                      </label>
                                      <div className="font18 line-ht-11">
                                        22,343
                                      </div>
                                    </div> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Active Week Content Ends Here */}
                      {/* Fav Content Starts Here ----------------------------------------------------------------------------------------------*/}
                      <div
                        className="tab-pane fade"
                        id="customer_and_nominee"
                        role="tabpanel"
                        aria-labelledby="later"
                      >
                        <div
                          className="accordion accordion-flush"
                          id="accordionFlushExample"
                        >
                          <div className="accordion-item">
                            <div
                              className="accordion-header-wrapper"
                              data-toggle="collapse"
                              href="#policy-owner-details"
                              role="button"
                              aria-expanded="false"
                              aria-controls="policy-owner-details"
                            >
                              <h2
                                className="accordion-header"
                                id="flush-headingOne"
                              >
                                Policy Owner Details
                              </h2>
                              <i className="arrow-up" />
                              <i className="arrow-down" />
                            </div>
                            <div
                              id="policy-owner-details"
                              className="accordion-collapse collapse show accordion-content"
                            >
                              <div className="accordion-body">
                                <div className="personal-de-card shadow-normal">
                                  <div className="row">
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Proposer Name
                                      </label>
                                      <div className="font18 line-ht-11">
                                        Sangeetha
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Policy Owner DOB
                                      </label>
                                      <div className="font18 line-ht-11">
                                        DD/MM/YYYY
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Proposer DOB
                                      </label>
                                      <div className="font18 line-ht-11">
                                        DD/MM/YYYY
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        CKYC No
                                      </label>
                                      <div className="font18 line-ht-11">
                                        XXXXX
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Cellular Phone
                                      </label>
                                      <div className="font18 line-ht-11">
                                        XXXXXXXXXX
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Email
                                      </label>
                                      <div className="font18 line-ht-11">
                                        sangeetha@example.com
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Address
                                      </label>
                                      <div className="font18 line-ht-11">
                                        Address Line1
                                      </div>
                                      <div className="font18 line-ht-11">
                                        Address Line2
                                      </div>
                                    </div>
                                  </div>
                                  <div className="grey-horizontal-separator mb-3 mt-2" />
                                  <section>
                                    <div className="section-header font20 line-ht-14 mb-2">
                                      Nominee Details
                                    </div>
                                    <div className="row">
                                      <div className="col-md-3 mb-3">
                                        <div className="d-flex align-items-center">
                                          <div className="circle40 bg-color6 font24 text-white d-flex justify-content-center align-items-center">
                                            B
                                          </div>
                                          <div className="ml-2">
                                            <label className="dark-grey-text font16 line-ht-14 mb-0">
                                              Nominee Name
                                            </label>
                                            <div className="font18 line-ht-11">
                                              Banumathy
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-3 mb-3">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          Nominee DOB
                                        </label>
                                        <div className="font18 line-ht-11">
                                          DD/MM/YYYY
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                  <div className="grey-horizontal-separator mb-3 mt-2" />
                                  <section>
                                    <div className="section-header font20 line-ht-14 mb-2">
                                      Relationship Details
                                    </div>
                                    <div className="row">
                                      <div className="col-md-3 mb-3">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          Client Number
                                        </label>
                                        <div className="font18 line-ht-11">
                                          XXXXXX
                                        </div>
                                      </div>
                                      <div className="col-md-3 mb-3">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          Name
                                        </label>
                                        <div className="font18 line-ht-11">
                                          Sangeetha
                                        </div>
                                      </div>
                                      <div className="col-md-3 mb-3">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          Life Insured Name
                                        </label>
                                        <div className="font18 line-ht-11">
                                          Sangeetha
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="accordion accordion-flush"
                          id="accordionFlushExample"
                        >
                          <div className="accordion-item">
                            <div
                              className="accordion-header-wrapper"
                              data-toggle="collapse"
                              href="#bank-details"
                              role="button"
                              aria-expanded="false"
                              aria-controls="bank-details"
                            >
                              <h2
                                className="accordion-header"
                                id="flush-headingOne"
                              >
                                Bank Details
                              </h2>
                              <i className="arrow-up" />
                              <i className="arrow-down" />
                            </div>
                            <div
                              id="bank-details"
                              className="accordion-collapse collapse show accordion-content"
                            >
                              <div className="accordion-body">
                                <div className="personal-de-card shadow-normal">
                                  <div className="row">
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Account Holder Name
                                      </label>
                                      <div className="font18 line-ht-11">
                                        Sangeetha
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Account Number
                                      </label>
                                      <div className="font18 line-ht-11">
                                        XXXXXX
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Bank Name
                                      </label>
                                      <div className="font18 line-ht-11">
                                        ICICI Bank Pvt. Ltd
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Branch Name
                                      </label>
                                      <div className="font18 line-ht-11">
                                        Anna Nagar West
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        IFSC Code
                                      </label>
                                      <div className="font18 line-ht-11">
                                        ICICXXXXX
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Account Type
                                      </label>
                                      <div className="font18 line-ht-11">
                                        Savings
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        ECS Registration Status
                                      </label>
                                      <div className="font18 line-ht-11">
                                        Activated
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        MICR Code
                                      </label>
                                      <div className="font18 line-ht-11">
                                        XXXXXX
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Payment Mode
                                      </label>
                                      <div className="font18 line-ht-11">
                                        **************
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="accordion accordion-flush"
                          id="accordionFlushExample"
                        >
                          <div className="accordion-item">
                            <div
                              className="accordion-header-wrapper"
                              data-toggle="collapse"
                              href="#other-details"
                              role="button"
                              aria-expanded="false"
                              aria-controls="other-details"
                            >
                              <h2
                                className="accordion-header"
                                id="flush-headingOne"
                              >
                                Other Details
                              </h2>
                              <i className="arrow-up" />
                              <i className="arrow-down" />
                            </div>
                            <div
                              id="other-details"
                              className="accordion-collapse collapse show accordion-content"
                            >
                              <div className="accordion-body">
                                <div className="personal-de-card shadow-normal">
                                  <section>
                                    <div className="section-header font20 line-ht-14 mb-2">
                                      Coverage Information
                                    </div>
                                    <div className="row">
                                      <div className="col-md-3 mb-3">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          Coverage Status
                                        </label>
                                        <div className="font18 line-ht-11">
                                          Inforce
                                        </div>
                                      </div>
                                      <div className="col-md-3 mb-3">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          Base Sum Assured
                                        </label>
                                        <div className="font18 line-ht-11">
                                          2,10,000
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                  <div className="grey-horizontal-separator mb-3 mt-2" />
                                  <section>
                                    <div className="section-header font20 line-ht-14 mb-2">
                                      Other Information
                                    </div>
                                    <div className="row">
                                      <div className="col-md-3 mb-3">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          Application Number
                                        </label>
                                        <div className="font18 line-ht-11">
                                          XXXXXX
                                        </div>
                                      </div>
                                      <div className="col-md-3 mb-3">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          Policy Issue Date
                                        </label>
                                        <div className="font18 line-ht-11">
                                          DD/MM/YYYY
                                        </div>
                                      </div>
                                      <div className="col-md-3 mb-3">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          EIA ID
                                        </label>
                                        <div className="font18 line-ht-11">
                                          XXXXXX
                                        </div>
                                      </div>
                                      <div className="col-md-3 mb-3">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          Branch Received Date
                                        </label>
                                        <div className="font18 line-ht-11">
                                          DD/MM/YYYY
                                        </div>
                                      </div>
                                      <div className="col-md-3 mb-3">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          Policy Paid Up Date
                                        </label>
                                        <div className="font18 line-ht-11">
                                          DD/MM/YYYY
                                        </div>
                                      </div>
                                      <div className="col-md-3 mb-3">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          Maturity Date
                                        </label>
                                        <div className="font18 line-ht-11">
                                          DD/MM/YYYY
                                        </div>
                                      </div>
                                      <div className="col-md-3 mb-3">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          Partial Withdrawal Amount
                                        </label>
                                        <div className="font18 line-ht-11">
                                          -
                                        </div>
                                      </div>
                                      <div className="col-md-3 mb-3">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          Advisor Code
                                        </label>
                                        <div className="font18 line-ht-11">
                                          Code goes here
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Fav Content Ends Here */}
                      {/* Fav Content Starts Here ----------------------------------------------------------------------------------------------*/}
                      <div
                        className="tab-pane fade"
                        id="reccomendation"
                        role="tabpanel"
                        aria-labelledby="later"
                      >
                        <br />
                        <div className="row">
                          <div className="col-lg-4 col-md-6">
                            <div className="smart-card shadow-normal">
                              <div className="yellow-flag">
                                <img src={yellowflag} alt="yellowflag" />
                              </div>
                              <div className="today">Today</div>
                              <div className="row">
                                <div className="col-lg-12">
                                  <h3>Upsell Opportunity</h3>
                                </div>
                              </div>
                              <div className="row pad-10">
                                <div className="col-2">
                                  <img
                                    className="m-bottom-6"
                                    src={creative}
                                    alt="creative"
                                  />
                                </div>
                                <div className="col-10">
                                  <p className="m-top-12">
                                    Plan Name Goes here
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12 text-right">
                                  <button className="btn btn-outline-s">
                                    Send Details
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="smart-card shadow-normal">
                              <div className="yellow-flag">
                                <img src={yellowflag} alt="yellowflag" />
                              </div>
                              <div className="today">Today</div>
                              <div className="row">
                                <div className="col-lg-12">
                                  <h3>Set Up ECS</h3>
                                </div>
                              </div>
                              <div className="row pad-10">
                                <div className="col-2">
                                  <img src={circle} alt="circle" />
                                </div>
                                <div className="col-10">
                                  <p className="m-top-12">Policy ID</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12 text-right">
                                  <button className="btn btn-outline-s">
                                    Send Register Request
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Fav Content Ends Here */}
                      {/* Fav Content Starts Here ----------------------------------------------------------------------------------------------*/}
                      <div
                        className="tab-pane fade"
                        id="queries"
                        role="tabpanel"
                        aria-labelledby="later"
                      >
                        <div className="policy-statement-box">
                          <div className="row">
                            <div className="col-lg-2 col-md-4 col-sm-6 col-6 pad-m-x">
                              <div className="state-box shadow-normal">
                                <div className="row r1">
                                  <div className="col-lg-12 text-center">
                                    <img
                                      src={taxcertificate}
                                      alt="taxcertificate"
                                    />
                                  </div>
                                </div>
                                <div className="row r2">
                                  <div className="col-lg-12 text-center">
                                    <h3>Tax Certificate</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-6 pad-m-x">
                              <div className="state-box shadow-normal">
                                <div className="row r1">
                                  <div className="col-lg-12 text-center">
                                    <img src={policycontract} alt="sales" />
                                  </div>
                                </div>
                                <div className="row r2">
                                  <div className="col-lg-12 text-center">
                                    <h3>Policy Account Statement</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-6 pad-m-x">
                              <div className="state-box shadow-normal">
                                <div className="row r1">
                                  <div className="col-lg-12 text-center">
                                    <img src={sales} alt="sales" />
                                  </div>
                                </div>
                                <div className="row r2">
                                  <div className="col-lg-12 text-center">
                                    <h3>Sales Illustration</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-6 pad-m-x">
                              <div className="state-box shadow-normal">
                                <div className="row r1">
                                  <div className="col-lg-12 text-center">
                                    <img src={policycontract} alt="sales" />
                                  </div>
                                </div>
                                <div className="row r2">
                                  <div className="col-lg-12 text-center">
                                    <h3> Reinstatement Quotation</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-6 pad-m-x">
                              <div className="state-box shadow-normal">
                                <div className="row r1">
                                  <div className="col-lg-12 text-center">
                                    <img
                                      src={policycontract}
                                      alt="policycontract"
                                    />
                                  </div>
                                </div>
                                <div className="row r2">
                                  <div className="col-lg-12 text-center">
                                    <h3>Policy Contract</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-6 pad-m-x">
                              <div className="state-box shadow-normal">
                                <div className="row r1">
                                  <div className="col-lg-12 text-center">
                                    <img
                                      src={tdscertificate}
                                      alt="tdscertificate"
                                    />
                                  </div>
                                </div>
                                <div className="row r2">
                                  <div className="col-lg-12 text-center">
                                    <h3>TDS Certificate</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-6 pad-m-x">
                              <div className="state-box shadow-normal">
                                <div className="row r1">
                                  <div className="col-lg-12 text-center">
                                    <img
                                      src={tdscertificate}
                                      alt="tdscertificate"
                                    />
                                  </div>
                                </div>
                                <div className="row r2">
                                  <div className="col-lg-12 text-center">
                                    <h3>Premium Due Certificate</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-6 pad-m-x">
                              <div className="state-box shadow-normal">
                                <div className="row r1">
                                  <div className="col-lg-12 text-center">
                                    <img src={acknowledge} alt="acknowledge" />
                                  </div>
                                </div>
                                <div className="row r2">
                                  <div className="col-lg-12 text-center">
                                    <h3>Payment Acknowledgement</h3>
                                  </div>
                                </div>
                              </div>
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
            {/* Add Familty Tag Password Modal */}
            <div
              className="modal fade"
              id="forgot-password"
              data-backdrop="static"
              data-keyboard="false"
              tabIndex={-1}
              aria-labelledby="forgot-password"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-width-family-tag">
                <div className="modal-content">
                  <div className="modal-header brdr-none">
                    {/* <h5 class="modal-title  bold" id="staticBackdropLabel">Forgot Password</h5> */}
                    <button
                      type="button"
                      className="close modal-close-button"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body moda-family-tag-body">
                    <h3>Add Family Tag</h3>
                    <hr />
                    <div className="row">
                      <div className="col-lg-12">
                        <label htmlFor="exampleInputEmail1">
                          Search Policy
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-9 col-md-8 col-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="policy"
                            placeholder="Policy Number"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-12">
                        <button className="btn btn-primary">Search</button>
                      </div>
                    </div>
                    <div className="family-policy-details">
                      <div className="row">
                        <div className="col-lg-3">
                          <p>
                            Policy No. <br />
                            <label>123456789</label>
                          </p>
                        </div>
                        <div className="col-lg-4">
                          <p>
                            Policy Holder Name <br />
                            <label>Rajesh Kanna</label>
                          </p>
                        </div>
                        <div className="col-lg-5">
                          <p>
                            Plan Name <br />
                            <label>Plan Name goes here</label>
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <p>*Policy detail open in new tab</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4 col-md-5 col-12">
                          <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">
                              Tag as
                            </label>
                            <select
                              className="form-control "
                              id="exampleFormControlSelect1"
                            >
                              <option>Brother</option>
                              <option>Sister</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row modal-cta">
                      <div className="col-lg-12 text-right">
                        <button className="btn btn-outline-s">Cancel</button>{" "}
                        <button className="btn btn-primary">Add</button>
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
    </div>
  );
}

export default policydetails;
