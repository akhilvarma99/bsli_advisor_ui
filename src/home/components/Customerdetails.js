import React, { useState } from "react";
import axios from "axios";
import Header from "../../header";
import breadcrumbs from "../../assets/img/icons/breadcrumbs-arrow.png";
import backarrow from "../../assets/img/icons/back-arrow.svg";
import yellowstarfilled from "../../assets/img/icons/yellow-star-filled.svg";
import phonecall from "../../assets/img/icons/phone-call.svg";
import mail from "../../assets/img/icons/mail.svg";
import yellowflag from "../../assets/img/icons/yellow-flag.svg";
import premiumDueIcon from "../../assets/img/icons/premium.svg";
import user from "../../assets/img/icons/user.svg";
import hand from "../../assets/img/icons/hand_w.svg";
import wishlist from "../../assets/img/icons/wishlist_w.svg";
import help from "../../assets/img/icons/help_w.svg";
import gift from "../../assets/img/icons/gift.svg";
import greentick from "../../assets/img/icons/green-tick.svg";
import threedots from "../../assets/img/icons/three-dots.svg";
import circle from "../../assets/img/icons/circle.svg";
import creative from "../../assets/img/icons/creative.svg";
import taxcertIcon from "../../assets/img/icons/Taxcertificate.svg";
import tdscertIcon from "../../assets/img/icons/Tdscertificate.svg";
import salesillIcon from "../../assets/img/icons/SalesIllustration.svg";
import policycontractIcon from "../../assets/img/icons/Policycontract.svg";
import paymentAcknowledgeIcon from "../../assets/img/icons/form.svg";

import { NavLink } from "react-router-dom";
import Card from "../../utils/Card";
import Toasts from "../../utils/Toasts";
function Customerdetails() {
  function buttonText(accordionId, buttonId) {
    const accordionClass = document.getElementById(accordionId).classList;
    console.log(accordionClass);
    if (accordionClass[2] == "show") {
      console.log("conditin" + accordionClass);
      document.getElementById(buttonId).innerHTML = "Show More";
    } else {
      document.getElementById(buttonId).innerHTML = "Show Less";
    }
  }

  async function downloadPDF() {
    let policyresponse = await axios.post(
      "http://localhost:4000/api/v1/customer/policy/getPolicyAccountStatement",
      {
        PolicyID: "001572067",
        StartDate: "13-05-2019",
        EndDate: "25-05-2019",
        AgentCode: "a2p9i9",
        Email: "kamalnath.LP-v@adityabirlacapital.com",
        Mobileno: "9443385464",
      }
    );
    console.log(policyresponse.data.data.pdfBytes);

    const linkSource = `data:application/pdf;base64,${policyresponse.data.data.pdfBytes}`;
    const downloadLink = document.createElement("a");
    const fileName = "tax-certificate.pdf";

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  const cardInfo = [
    {
      id: "Wishes",
      headerTitle: "Today",
      cardTitle: "Birthday",
      icon: gift,
      bodyTitle: "John Fernando",
      body: "Relation . 20/Dec/2020",
      status: "",
      buttonText: "Send Wishes",
    },
    {
      id: "Payments",
      headerTitle: "Overdue",
      cardTitle: "Premium Due",
      icon: gift,
      bodyTitle: "Policy ID",
      body: "27.11.1990 . Rs.1,00,000",
      status: "Payment Failed",
      buttonText: "Send Payment Link",
    },
    {
      id: "Payments",
      headerTitle: "Tommorrow",
      cardTitle: "Credit Card/Debit Card Expiry",
      icon: gift,
      bodyTitle: "Policy ID",
      body: "XXXX XXXX XXXX 6077 . Rs.1,00,000",
      status: "",
      buttonText: "Send Payment Link",
    },
    {
      id: "Policy Status",
      headerTitle: "Today",
      cardTitle: "To Be Terminated",
      icon: gift,
      bodyTitle: "Policy ID",
      body: "27/Dec/1990",
      status: "",
      buttonText: "Contact Customer",
    },
    {
      id: "Policy Status",
      headerTitle: "Today",
      cardTitle: "To Be Discontinued",
      icon: gift,
      bodyTitle: "Policy ID",
      body: "27/Dec/1990",
      status: "Reason For Termination",
      buttonText: "Contact Customer",
    },
    {
      id: "Policy Status",
      headerTitle: "Today",
      cardTitle: "To Be Paid Up",
      icon: gift,
      bodyTitle: "₹ 1,00,000",
      body: "(Payout Type)",
      status: "",
      buttonText: "Contact Customer",
    },
    {
      id: "Policy Status",
      headerTitle: "Today",
      cardTitle: "Payouts Released",
      icon: gift,
      bodyTitle: "₹ 1,00,000",
      body: "27/Dec/1990",
      status: "",
      buttonText: "Contact Customer",
    },
    {
      id: "Policy Status",
      headerTitle: "Today",
      cardTitle: "Policy Matured Wishes",
      icon: gift,
      bodyTitle: "Policy ID",
      body: "27.11.1990 . Rs.1,00,000",
      status: "",
      buttonText: "Send Payment Link",
    },
    {
      id: "Policy Status",
      headerTitle: "",
      cardTitle: "Reinstatement Requirement",
      icon: gift,
      bodyTitle: "Policy ID",
      body: "27.11.1990 . Rs.1,00,000",
      status: "COI | COVID Questionaire | Medical",
      buttonText: "Send Payment Link",
    },
  ];
  let filterFunc = (arrayName, filterName) =>
    arrayName.filter(function (e) {
      return e.id == filterName;
    });

  const [filter, setFilter] = useState("Wishes");
  let filterFunction = (filter) => {
    setFilter(filter);
  };
  const [message, setMessage] = useState();

  const openToast = (message) => {
    if (message !== null) {
      document.getElementById("toastBlock").classList.add("showToast");
      setTimeout(function () {
        document.getElementById("toastBlock").classList.remove("showToast");
      }, 3000);
    } else {
      document.getElementById("toastBlock").classList.remove("showToast");
    }
    setMessage(message);
  };

  return (
    <div>
      <div>
        <Header />

        <main
          className="bg-white "
          role="main"
          style={{ paddingBottom: "20px" }}
        >
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
            <div className="row d-none d-lg-block d-sm-none">
              <div className="col">
                <h1 className="p-header">
                  <img src={backarrow} alt="backarrow" />
                  Customers Details
                </h1>
              </div>
              <Toasts message={message} />
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
                          <p style={{ color: "black" }}>
                            Category Name{"   "}
                            <img
                              src={yellowstarfilled}
                              alt="yellowstarfilled"
                            />
                          </p>
                        </div>
                        <label>John Fernando</label>
                        <p className="d-flex align-items-center">
                          <img src={phonecall} alt="phonecall" />
                          <a href="tel:9876543210">9876543210</a>
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
                  <div className="col-6">
                    <div className="card-div-lrge shadow-normal m-left-0">
                      <p>Total Active Policies</p>
                      <h2>02</h2>
                    </div>
                  </div>
                  {/* <div className="col-6">
                    <div className="card-div-lrge shadow-normal m-left-0">
                      <p>Premium Due</p>
                      <h2>01</h2>
                    </div>
                  </div> */}
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
                          Overview
                        </a>
                      </li>
                      <li className="nav-item w-50-p" role="presentation">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#policy_details"
                          role="tab"
                          aria-controls="policy_details"
                          aria-selected="false"
                        >
                          Policy Details
                        </a>
                      </li>
                      {/* <li className="nav-item w-50-p" role="presentation">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#policy_statements"
                          role="tab"
                          aria-controls="policy_statements"
                          aria-selected="false"
                        >
                          Policy Statements
                        </a>
                      </li> */}
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
                          Queries
                        </a>
                      </li>
                      <li className="nav-item w-50-p" role="presentation">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#policy_statements"
                          role="tab"
                          aria-controls="policy_statements"
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
                                  className="accordion-header-wrapper collapsed"
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
                                      <div className="col-md-12">
                                        <div className="quikc-links-card-cd">
                                          <div className="quick-links-inner h-scroll-s">
                                            <ul>
                                              <li
                                                onClick={() =>
                                                  filterFunction("Wishes")
                                                }
                                              >
                                                Wishes
                                              </li>
                                              <li
                                                onClick={() =>
                                                  filterFunction("Payments")
                                                }
                                              >
                                                Payments
                                              </li>
                                              <li
                                                onClick={() =>
                                                  filterFunction(
                                                    "Policy Status"
                                                  )
                                                }
                                              >
                                                Policy Status
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      {filterFunc(cardInfo, filter).map(
                                        (key, index) => (
                                          <div className="col-lg-4 col-md-6">
                                            <Card
                                              key={index}
                                              cardInfo={{
                                                headerTitle: key.headerTitle,
                                                cardTitle: key.cardTitle,
                                                icon: key.icon,
                                                bodyTitle: key.bodyTitle,
                                                body: key.body,
                                                status: key.status,
                                                buttonText: key.buttonText,
                                              }}
                                              openToast={openToast}
                                            />
                                          </div>
                                        )
                                      )}
                                    </div>

                                    {/* <div className="row">
                                      <div className="col-lg-4 col-md-6">
                                        <div className="smart-card shadow-normal">
                                          {/* <div className="yellow-flag">
                                            <img
                                              src={yellowflag}
                                              alt="yellowflag"
                                            />
                                          </div> 

                                          <div className="row ">
                                            <div className="col-lg-12">
                                              <h3>Birthday</h3>
                                            </div>
                                            <div className="today">Today</div>
                                          </div>
                                          <div className="row pad-10">
                                            <div className="col-2">
                                              <img src={gift} alt="gift" />
                                            </div>
                                            <div className="col-10">
                                              <p>
                                                John Fernando
                                                <br />{" "}
                                                <span>
                                                  Relation .20/Dec/2020
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
                                          {/* <div className="yellow-flag">
                                            <img
                                              src={premiumDueIcon}
                                              alt="premiumDueIcon"
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
                                                src={premiumDueIcon}
                                                alt="premiumDueIcon"
                                              />
                                            </div>
                                            <div className="col-10">
                                              <p>
                                                Policy ID
                                                <br />
                                                <span>
                                                  20/Dec/2020 | 1,50,000
                                                </span>
                                              </p>
                                            </div>
                                          </div>
                                          <div className="d-flex justify-content-between align-items-center">
                                            <p className="cardStatus mt-3">
                                              Payment Failed
                                            </p>
                                            <div className="row">
                                              <div className="col-lg-12 text-right">
                                                <button className="btn btn-outline-s">
                                                  Send Payment Link
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-lg-4 col-md-6">
                                        <div className="smart-card shadow-normal">
                                          {/* <div className="yellow-flag">
                                            <img
                                              src={paymentFailureIcon}
                                              alt="paymentFailureIcon"
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
                                                src={paymentFailureIcon}
                                                alt="paymentFailureIcon"
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
                                          {/* <div className="yellow-flag">
                                            <img
                                              src={paymentRenewalIcon}
                                              alt="paymentRenewalIcon"
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
                                                src={paymentRenewalIcon}
                                                alt="paymentRenewalIcon"
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
                                          {/* <div className="yellow-flag">
                                            <img
                                              src={yellowflag}
                                              alt="yellowflag"
                                            />
                                          </div> 
                                          <div className="today">Today</div>
                                          <div className="row">
                                            <div className="col-lg-12">
                                              <h3>To Be Terminated</h3>
                                            </div>
                                          </div>
                                          <div className="row pad-10">
                                            <div className="col-2">
                                              <img
                                                src={terminatedIcon}
                                                alt="terminatedIcon"
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
                                          {/* <div className="yellow-flag">
                                            <img
                                              src={yellowflag}
                                              alt="yellowflag"
                                            />
                                          </div> 
                                          <div className="today">Today</div>
                                          <div className="row">
                                            <div className="col-lg-12">
                                              <h3>To be Discontinued</h3>
                                            </div>
                                          </div>
                                          <div className="row pad-10">
                                            <div className="col-2">
                                              <img
                                                src={discontinueIcon}
                                                alt="discontinueIcon"
                                              />
                                            </div>
                                            <div className="col-10">
                                              <p>
                                                Policy ID
                                                <br /> <span>20/Dec/2020</span>
                                              </p>
                                            </div>
                                          </div>
                                          <br />
                                          <p
                                            className="cardStatus"
                                            style={{ color: "#6c7174" }}
                                          >
                                            Reason For Termination
                                          </p>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6">
                                        <div className="smart-card shadow-normal">
                                          {/* <div className="yellow-flag">
                                            <img
                                              src={yellowflag}
                                              alt="yellowflag"
                                            />
                                          </div>
                                          <div className="today">Next Week</div>
                                          <div className="row">
                                            <div className="col-lg-12">
                                              <h3>To Be Paid Up</h3>
                                            </div>
                                          </div>
                                          <div className="row pad-10">
                                            <div className="col-2">
                                              <img
                                                src={paidupIcon}
                                                alt="paidupIcon"
                                              />
                                            </div>
                                            <div className="col-10">
                                              <p>&#8377;3,33,333</p>
                                            </div>
                                          </div>
                                          <br />
                                          <p
                                            className="float-left"
                                            style={{ color: "grey" }}
                                          >
                                            status
                                          </p>

                                          {/* <div className="row">
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
                                          {/* <div className="yellow-flag">
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
                                                src={payoutIcon}
                                                alt="payoutIcon"
                                              />
                                            </div>
                                            <div className="col-10">
                                              <p>
                                                3,33,333
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
                                      <div className="col-lg-4 col-md-6">
                                        <div className="smart-card shadow-normal">
                                          {/* <div className="yellow-flag">
                                            <img
                                              src={yellowflag}
                                              alt="yellowflag"
                                            />
                                          </div> 
                                          <div className="today">Tomorrow</div>
                                          <div className="row">
                                            <div className="col-lg-12">
                                              <h3>
                                                Credit Card/Debit Card Expiry
                                              </h3>
                                            </div>
                                          </div>
                                          <div className="row pad-10">
                                            <div className="col-2">
                                              <img
                                                src={creditIcon}
                                                alt="creditIcon"
                                              />
                                            </div>
                                            <div className="col-10">
                                              <p>
                                                Policy ID
                                                <br />{" "}
                                                <span>
                                                  1234 **** **** ****
                                                  |20/Dec/2020
                                                </span>
                                              </p>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-lg-12 text-right">
                                              <button className="btn btn-outline-s">
                                                Send Remainder
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div> */}
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <div
                                  className="accordion-header-wrapper collapsed"
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
                                    Personal Details
                                  </h2>
                                  <i className="arrow-up" />
                                  <i className="arrow-down" />
                                </div>
                                <div
                                  id="flush-collapseTwo"
                                  className="accordion-collapse collapse"
                                >
                                  <div className="accordion-body">
                                    <div className="row">
                                      <div className="col-lg-12">
                                        <div className="personal-de-card shadow-normal">
                                          <div className="row">
                                            <div className="col-lg-6">
                                              <div className="value-div">
                                                <div className="row">
                                                  <div className="col-3">
                                                    <div className="name-c1 color-3">
                                                      <p>A</p>
                                                    </div>
                                                  </div>
                                                  <div className="col-9 name-c2">
                                                    <p>
                                                      Albert John
                                                      <br />
                                                      <label>
                                                        Client ID:123456
                                                      </label>
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="value-div">
                                                <div className="row">
                                                  <div className="col-lg-6 col-md-3 value">
                                                    <p>
                                                      <label>
                                                        Policy Owner DOB
                                                      </label>{" "}
                                                      <br />
                                                      20/Dec/2020
                                                    </p>
                                                  </div>
                                                  <div className="col-lg-6 col-md-3 value">
                                                    <p>
                                                      <label>PAN Number</label>{" "}
                                                      <br />
                                                      AKNBH1546E
                                                    </p>
                                                  </div>

                                                  <div className="col-lg-6 col-md-12 value mrgn-0">
                                                    <p>
                                                      <label>
                                                        WhatsApp Opt-in status
                                                      </label>{" "}
                                                      <br />{" "}
                                                      <img
                                                        src={greentick}
                                                        alt="greentick"
                                                        className="greentick"
                                                      />{" "}
                                                      &nbsp; Activated or{" "}
                                                      <button className="btn btn-primary-s">
                                                        Activate
                                                      </button>
                                                    </p>
                                                  </div>
                                                  {/* <div className="col-lg-6 col-md-12 value mrgn-0">
                                                    <p>
                                                      <label>
                                                        WhatsApp Opt-in status
                                                      </label>{" "}
                                                      <br />{" "}
                                                      <button
                                                        className="btn btn-primary-s"
                                                        data-toggle="modal"
                                                        data-target="#forgot-password"
                                                      >
                                                        Activate
                                                      </button>
                                                    </p>
                                                  </div> */}
                                                  <div className="col-lg-6 col-md-12 value mrgn-0">
                                                    <p>
                                                      <label>KYC Number</label>{" "}
                                                      <br />
                                                      1234 3445 3322
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-lg-6">
                                              <div className="grey-box">
                                                <div className="row">
                                                  <div className="col-lg-12">
                                                    <p>Address</p>
                                                  </div>
                                                  <div className="col-lg-12 value">
                                                    <label>
                                                      Communication Address:
                                                    </label>
                                                    <p>
                                                      Address Line 1 goes here,
                                                      Address Line 2 goes here
                                                    </p>
                                                  </div>
                                                  <div className="col-lg-12 value">
                                                    <label>
                                                      Permanent Address:
                                                    </label>
                                                    <p>
                                                      Address Line 1 goes here,
                                                      Address Line 2 goes here
                                                    </p>
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
                                className="tab-pane active show fade"
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
                                      className="accordion-header-wrapper collapsed"
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
                                      className="accordion-collapse collapse accordion-content"
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
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Today Content Ends Here */}
                      {/* Active Content Starts Here -------------------------------------------------------------------------------- */}
                      <div
                        className="tab-pane fade"
                        id="policy_details"
                        role="tabpanel"
                        aria-labelledby="next-week"
                      >
                        <div
                          className="accordion accordion-flush"
                          id="accordionFlushExample"
                        >
                          <div className="accordion-item">
                            <div
                              className="accordion-header-wrapper collapsed"
                              data-toggle="collapse"
                              href="#policy-owned-c"
                              role="button"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              <h2
                                className="accordion-header"
                                id="flush-headingOne"
                              >
                                Policies Owned by Customer
                              </h2>
                              <i className="arrow-up" />
                              <i className="arrow-down" />
                            </div>
                            <div
                              id="policy-owned-c"
                              className="accordion-collapse collapse show accordion-content"
                            >
                              <div className="accordion-body">
                                <div className="row">
                                  <div className="col-lg-12 text-right">
                                    <button className="btn btn-primary-s m-bottom-10">
                                      Download Policy Owned by customer
                                    </button>
                                  </div>
                                </div>
                                <div className="policy-grid-customer">
                                  <div className="policy-grid-header d-none d-lg-block d-sm-none">
                                    <div className="row">
                                      <div className="col-lg-2">
                                        <h3>Life Insured Name</h3>
                                      </div>
                                      <div className="col-lg-4">
                                        <h3>Plan Name</h3>
                                      </div>
                                      <div className="col-lg-2">
                                        <h3>Premium</h3>
                                      </div>
                                      <div className="col-lg-2">
                                        <h3>Next Premium Due Date</h3>
                                      </div>
                                      <div className="col-lg-2">
                                        <h3>{""}</h3>
                                      </div>
                                    </div>
                                  </div>
                                  {[1, 2, 3, 4, 5, 6].map((id, index) => (
                                    <div
                                      className="policy-grid-row"
                                      key={index}
                                    >
                                      <div className="row">
                                        <div
                                          className="m-menu-dots d-lg-none d-md-none d-sm-block"
                                          data-toggle="collapse"
                                          data-target="#collapseExample"
                                          aria-expanded="false"
                                          aria-controls="collapseExample"
                                        >
                                          <img
                                            src={threedots}
                                            alt="threedots"
                                          />
                                        </div>
                                        <div className="col-lg-2 col-md-2 d-none d-lg-block d-sm-none">
                                          <p className="color-b">Vijay Singa</p>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                          <p className="color-b">
                                            Sample text for plan name
                                          </p>
                                        </div>
                                        <div className="col-lg-2 d-none d-lg-block d-sm-none">
                                          <p className="color-b">
                                            Model Premium + Service Tax
                                          </p>
                                        </div>
                                        <div className="col-lg-2 col-md-2 d-lg-block d-sm-block">
                                          <p className="color-b">Paid Up</p>
                                        </div>
                                        <div className="col-lg-2 col-md-4 d-none d-lg-block d-md-block d-sm-none">
                                          <button
                                            type="button"
                                            className="btn btn-outline-s"
                                            data-toggle="collapse"
                                            data-target={`#collapseExample${index}`}
                                            aria-expanded="false"
                                            id={`button${index}`}
                                            aria-controls="collapseExample"
                                            onClick={() =>
                                              buttonText(
                                                `collapseExample${index}`,
                                                `button${index}`
                                              )
                                            }
                                          >
                                            Show More
                                          </button>
                                        </div>
                                      </div>
                                      <div
                                        className="row collapse"
                                        id={`collapseExample${index}`}
                                      >
                                        <div className="col-lg-12 m-pad-div">
                                          <div className="expanded-div">
                                            <div className="row">
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Policy Number
                                                  <br />
                                                  <span>123456798</span>
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Policy Status <br />
                                                  <span>Paid Up</span>
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Policy Term
                                                  <br />
                                                  <span>5</span>
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Modal Premium
                                                  <br />
                                                  <span>12000</span>
                                                </p>
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Premium Payment Term
                                                  <br />
                                                  <span>2</span>
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Premium Mode
                                                  <br />
                                                  <span>Monthly</span>
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  ECS Registration Status
                                                  <br />
                                                  <span>Inactive</span>
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Stale Cheque Conditional
                                                  Status
                                                  <br />
                                                  <span>Stale Cheque</span>
                                                </p>
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Next Premium Due Date
                                                  <br />
                                                  <span>DD/MM/YYYY</span>
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Base Sum Assured <br />
                                                  <span>20000</span>
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  <label className="dark-grey-text font16 line-ht-14 mb-0">
                                                    WhatsApp Opt-in status
                                                  </label>{" "}
                                                  <br />{" "}
                                                  <img
                                                    src={greentick}
                                                    alt="greentick"
                                                    className="greentick"
                                                  />{" "}
                                                  &nbsp; Activated
                                                </p>
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-lg-12">
                                                <ul className="chips-tag">
                                                  {/* <li>
                                                    Send ECS registration
                                                    request
                                                  </li>
                                                  <li>Send Payment Link</li> */}
                                                  <NavLink
                                                    class
                                                    to="/policydetails"
                                                    style={{
                                                      textDecoration: "none",
                                                    }}
                                                  >
                                                    <li className="active">
                                                      Go to Policy Details
                                                    </li>
                                                  </NavLink>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
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
                              className="accordion-header-wrapper collapsed"
                              data-toggle="collapse"
                              href="#policy-owned-f"
                              role="button"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              <h2
                                className="accordion-header"
                                id="flush-headingOne"
                              >
                                Policies Owned by Family
                              </h2>
                              <i className="arrow-up" />
                              <i className="arrow-down" />
                            </div>
                            <div
                              id="policy-owned-f"
                              className="accordion-collapse collapse show accordion-content"
                            >
                              <div className="accordion-body">
                                <div className="mt-card">
                                  <p>Start adding your family members</p>
                                  <button
                                    className="btn btn-primary-s"
                                    data-toggle="modal"
                                    data-target="#forgot-password"
                                  >
                                    Add Family
                                  </button>
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
                        id="policy_statements"
                        role="tabpanel"
                        aria-labelledby="later"
                      >
                        <div className="policy-statement-box">
                          <div className="row">
                            <div
                              className="col-lg-2 col-md-4 col-sm-6 col-6 pad-m-x"
                              data-toggle="modal"
                              data-target="#Tax-Certificate"
                              style={{ cursor: "pointer" }}
                            >
                              <div className="state-box shadow-normal">
                                <div className="row r1">
                                  <div className="col-lg-12 text-center">
                                    <img src={taxcertIcon} alt="taxcertIcon" />
                                  </div>
                                </div>

                                <div className="row r2">
                                  <div className="col-lg-12 text-center">
                                    <h3>Tax Certificate</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="col-lg-2 col-md-4 col-sm-6 col-6 pad-m-x"
                              data-toggle="modal"
                              data-target="#sales-illustration"
                              style={{ cursor: "pointer" }}
                            >
                              <div class="state-box shadow-normal">
                                <div class="row r1">
                                  <div class="col-lg-12 text-center">
                                    <img
                                      src={salesillIcon}
                                      alt="salesillIcon"
                                    />
                                  </div>
                                </div>

                                <div class="row r2">
                                  <div class="col-lg-12 text-center">
                                    <h3>Sales Illustration</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-lg-2 col-md-4 col-sm-6 col-6 pad-m-x"
                              style={{ cursor: "pointer" }}
                              data-toggle="modal"
                              data-target="#policy-contract"
                            >
                              <div className="state-box shadow-normal">
                                <div className="row r1">
                                  <div className="col-lg-12 text-center">
                                    <img
                                      src={policycontractIcon}
                                      alt="policycontractIcon"
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

                            <div
                              className="col-lg-2 col-md-4 col-sm-6 col-6 pad-m-x"
                              style={{ cursor: "pointer" }}
                              data-target="#tds-certificate"
                              data-toggle="modal"
                            >
                              <div className="state-box shadow-normal">
                                <div className="row r1">
                                  <div className="col-lg-12 text-center">
                                    <img
                                      src={tdscertIcon}
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
                              <div
                                className="state-box shadow-normal"
                                data-toggle="modal"
                                data-target="#Premium-Due-Certificate"
                                style={{ cursor: "pointer" }}
                              >
                                <div className="row r1">
                                  <div className="col-lg-12 text-center">
                                    <img
                                      src={premiumDueIcon}
                                      alt="premiumDueIcon"
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
                            <div
                              className="col-lg-2 col-md-4 col-sm-6 col-6 pad-m-x"
                              style={{ cursor: "pointer" }}
                              data-target="#payment-acknowledgement"
                              data-toggle="modal"
                            >
                              <div className="state-box shadow-normal">
                                <div className="row r1">
                                  <div className="col-lg-12 text-center">
                                    <img
                                      src={paymentAcknowledgeIcon}
                                      alt="paymentAcknowledgeIcon"
                                    />
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
                                  <h3>PASA Offer</h3>
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
                                  <p className="m-top-12">Product name</p>
                                  <p>&#8377;3,73,000</p>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-lg-12 text-left">
                                  <span>
                                    The customer will not be required to (PASA
                                    Offer Value)
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="smart-card shadow-normal">
                              <div className="yellow-flag">
                                <img src={yellowflag} alt="yellowflag" />
                              </div>
                              {/* <div className="today">Today</div> */}
                              <div className="row">
                                <div className="col-lg-12">
                                  <h3>Next Best Offer</h3>
                                </div>
                              </div>
                              <div className="row pad-10">
                                <div className="col-2">
                                  <img src={circle} alt="circle" />
                                </div>
                                <div className="col-10">
                                  <p className="m-top-12">Product name</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12 text-left">
                                  <span>
                                    Based on data, your customer is likely to
                                    buy this product. You should pitch this to
                                    the customer
                                  </span>
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
                        <div
                          className="accordion accordion-flush"
                          id="accordionFlushExample"
                        >
                          <div className="accordion-item">
                            <div
                              className="accordion-header-wrapper collapsed"
                              data-toggle="collapse"
                              href="#pending-queries"
                              role="button"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              <h2
                                className="accordion-header"
                                id="flush-headingOne"
                              >
                                Pending Queries (Self)
                              </h2>
                              <i className="arrow-up" />
                              <i className="arrow-down" />
                            </div>
                            <div
                              id="pending-queries"
                              className="accordion-collapse collapse show accordion-content"
                            >
                              <div className="accordion-body">
                                <div className="row">
                                  <div className="col-lg-12 text-right">
                                    <button className="btn btn-primary-s m-bottom-10">
                                      Download Policy Owned by customer
                                    </button>
                                  </div>
                                </div>
                                <div className="policy-grid-customer">
                                  <div className="policy-grid-header d-none d-lg-block d-sm-none">
                                    <div className="row">
                                      <div className="col-lg-3">
                                        <h3>Created Date &amp; Time</h3>
                                      </div>
                                      <div className="col-lg-4">
                                        <h3>Plan Name</h3>
                                      </div>
                                      <div className="col-lg-5">
                                        <h3>Details</h3>
                                      </div>
                                    </div>
                                  </div>
                                  {[1, 2, 3].map((id, index) => (
                                    <div className="policy-grid-row">
                                      <div className="row">
                                        <div
                                          className="m-menu-dots d-lg-none d-md-none d-sm-block"
                                          data-toggle="collapse"
                                          data-target="#collapseExample"
                                          aria-expanded="false"
                                          aria-controls="collapseExample"
                                        >
                                          <img
                                            src={threedots}
                                            alt="threedots"
                                          />
                                        </div>
                                        <div className="col-lg-3 col-md-3 d-none d-lg-block d-sm-none">
                                          <p className="color-b">
                                            20/Dec/2020 . 12:23:00 AM
                                          </p>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                          <label className="d-lg-none d-sm-block">
                                            Plan name
                                          </label>
                                          <p className="color-b">
                                            Sample text for plan name
                                          </p>
                                        </div>
                                        <div className="col-lg-3">
                                          <label className="d-lg-none d-sm-block">
                                            Details
                                          </label>
                                          <p className="color-b">
                                            1234354ABSdk
                                          </p>
                                        </div>
                                        <div className="col-lg-2 col-md-4 d-none d-lg-block d-md-block d-sm-none">
                                          <button
                                            type="button"
                                            className="btn btn-outline-s"
                                            data-toggle="collapse"
                                            data-target={`#collapseExample${index}`}
                                            aria-expanded="false"
                                            id={`buttons${index}`}
                                            aria-controls="collapseExample"
                                            onClick={() =>
                                              buttonText(
                                                `collapseExample${index}`,
                                                `buttons${index}`
                                              )
                                            }
                                          >
                                            Show More
                                          </button>
                                        </div>
                                      </div>
                                      <div
                                        className="row collapse"
                                        id={`collapseExample${index}`}
                                      >
                                        <div className="col-lg-12 m-pad-div">
                                          <div className="expanded-div">
                                            <div className="row">
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Policy ID
                                                  <br />
                                                  <span>123456798</span>
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Application No. <br />
                                                  <span>12343563</span>
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  PInteraction ID
                                                  <br />
                                                  <span>123456789</span>
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Source of Interaction
                                                  <br />
                                                  <span>Phone</span>
                                                </p>
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Processing department
                                                  <br />
                                                  <span>
                                                    Processing department name
                                                  </span>
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Call Category
                                                  <br />
                                                  <span>
                                                    Call category name
                                                  </span>
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Call Types
                                                  <br />
                                                  <span>Call type name</span>
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Sub Type
                                                  <br />
                                                  <span>Sub type name</span>
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
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
                              className="accordion-header-wrapper collapsed"
                              data-toggle="collapse"
                              href="#pending-query-customer"
                              role="button"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              <h2
                                className="accordion-header"
                                id="flush-headingOne"
                              >
                                Pending Queries (Customer)
                              </h2>
                              <i className="arrow-up" />
                              <i className="arrow-down" />
                            </div>
                            <div
                              id="pending-query-customer"
                              className="accordion-collapse collapse show accordion-content"
                            >
                              <div className="accordion-body">
                                <div className="mt-card">
                                  <p>Currently No Customer Queries</p>
                                  <button
                                    className="btn btn-primary-s"
                                    data-toggle="modal"
                                    data-target="#"
                                  >
                                    Raise a New Query
                                  </button>
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
                      {/*  <div className="row">
                        <div className="col-lg-12">
                          <p>*Policy detail open in new tab</p>
                        </div>
                      </div> */}
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
            <div
              className="modal fade"
              id="Tax-Certificate"
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
                    <h3>Tax Certificate</h3>
                    <hr />
                    <div className="row">
                      <div className="col-lg-4 col-md-5 col-12">
                        <div className="form-group">
                          <label htmlFor="exampleFormControlSelect1">
                            Select Financial Year
                          </label>
                          <select
                            className="form-control "
                            id="exampleFormControlSelect1"
                          >
                            <option>2019-2020</option>
                            <option>2020-2021</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 mt-2">
                        <div className="data-card">
                          <div className="data_card_body">
                            <div className="row">
                              <div className="col-md-12" />
                              <div className="col-md-12 pad-0 ">
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
                                          <div className="col-md-4 text-left ">
                                            <label className="ml-4">
                                              Policy No.
                                            </label>
                                          </div>
                                          <div className="col-md-4 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                            <label>Policy Owner Name</label>
                                          </div>
                                          <div className="col-md-4">
                                            <label>Plan Name</label>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="g-row">
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 text-left ">
                                            <div className="pl-3">
                                              <input
                                                className="form-check-input "
                                                type="radio"
                                                name="retentionRadio"
                                                value="Mature"
                                                id="customCheckBox5"
                                              />

                                              <div
                                                className="form-check-label ml-1 "
                                                htmlFor="customCheckBox5"
                                              >
                                                12345678
                                              </div>
                                            </div>
                                          </div>
                                          {/* Hidden sm xs */}
                                          <div className="col-lg-4 col-md-4">
                                            Sangeetha
                                          </div>
                                          <div className="col-lg-4 col-md-4">
                                            Plan Name goes here
                                          </div>
                                          {/* Hidden sm xs */}
                                        </div>
                                      </div>
                                      {/* Block */}
                                      {/* Block */}

                                      <div className="g-row">
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 text-left ">
                                            <div className="pl-3">
                                              <input
                                                className="form-check-input "
                                                type="radio"
                                                name="retentionRadio"
                                                value="Mature"
                                                id="customCheckBox5"
                                              />

                                              <div
                                                className="form-check-label ml-1 "
                                                htmlFor="customCheckBox5"
                                              >
                                                12345678
                                              </div>
                                            </div>
                                          </div>
                                          {/* Hidden sm xs */}
                                          <div className="col-lg-4 col-md-4">
                                            Sangeetha
                                          </div>
                                          <div className="col-lg-4 col-md-4">
                                            Plan Name goes here
                                          </div>
                                          {/* Hidden sm xs */}
                                        </div>
                                      </div>
                                      {/* Block */}
                                      {/* Block */}

                                      <div className="g-row">
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 text-left ">
                                            <div className="pl-3">
                                              <input
                                                className="form-check-input "
                                                type="radio"
                                                name="retentionRadio"
                                                value="Mature"
                                                id="customCheckBox5"
                                              />

                                              <div
                                                className="form-check-label ml-1 "
                                                htmlFor="customCheckBox5"
                                              >
                                                12345678
                                              </div>
                                            </div>
                                          </div>
                                          {/* Hidden sm xs */}
                                          <div className="col-lg-4 col-md-4">
                                            Sangeetha
                                          </div>
                                          <div className="col-lg-4 col-md-4">
                                            Plan Name goes here
                                          </div>
                                          {/* Hidden sm xs */}
                                        </div>
                                      </div>
                                      {/* Block */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row modal-cta">
                      <div className="col-lg-12 text-right">
                        <button className="btn btn-outline-s">Cancel</button>{" "}
                        <button
                          onClick={downloadPDF}
                          className="btn btn-primary"
                          style={{ width: "200px" }}
                        >
                          Download Tax Certificate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="sales-illustration"
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
                    <h3>Sales Illustration</h3>
                    <hr />

                    {/* <div className="row">
                      <div className="col-lg-4 col-md-5 col-12">
                        <div className="form-group">
                          <label htmlFor="exampleFormControlSelect1">
                            Select Policy
                          </label>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                          >
                            <option>Policy 01</option>
                            <option>Policy 02</option>
                          </select>
                        </div>
                      </div>
                    </div> */}
                    <div className="row">
                      <div className="col-md-12 mt-2">
                        <div className="data-card">
                          <div className="data_card_body">
                            <div className="row">
                              <div className="col-md-12" />
                              <div className="col-md-12 pad-0 ">
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
                                          <div className="col-md-4 text-left ">
                                            <label className="ml-4">
                                              Policy No.
                                            </label>
                                          </div>
                                          <div className="col-md-4 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                            <label>Policy Owner Name</label>
                                          </div>
                                          <div className="col-md-4">
                                            <label>Plan Name</label>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="g-row">
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 text-left ">
                                            <div className="pl-3">
                                              <input
                                                className="form-check-input "
                                                type="radio"
                                                name="retentionRadio"
                                                value="Mature"
                                                id="customCheckBox5"
                                              />

                                              <div
                                                className="form-check-label ml-1 "
                                                htmlFor="customCheckBox5"
                                              >
                                                12345678
                                              </div>
                                            </div>
                                          </div>
                                          {/* Hidden sm xs */}
                                          <div className="col-lg-4 col-md-4">
                                            Sangeetha
                                          </div>
                                          <div className="col-lg-4 col-md-4">
                                            Plan Name goes here
                                          </div>
                                          {/* Hidden sm xs */}
                                        </div>
                                      </div>
                                      {/* Block */}
                                      {/* Block */}

                                      <div className="g-row">
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 text-left ">
                                            <div className="pl-3">
                                              <input
                                                className="form-check-input "
                                                type="radio"
                                                name="retentionRadio"
                                                value="Mature"
                                                id="customCheckBox5"
                                              />

                                              <div
                                                className="form-check-label ml-1 "
                                                htmlFor="customCheckBox5"
                                              >
                                                12345678
                                              </div>
                                            </div>
                                          </div>
                                          {/* Hidden sm xs */}
                                          <div className="col-lg-4 col-md-4">
                                            Sangeetha
                                          </div>
                                          <div className="col-lg-4 col-md-4">
                                            Plan Name goes here
                                          </div>
                                          {/* Hidden sm xs */}
                                        </div>
                                      </div>
                                      {/* Block */}
                                      {/* Block */}

                                      <div className="g-row">
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 text-left ">
                                            <div className="pl-3">
                                              <input
                                                className="form-check-input "
                                                type="radio"
                                                name="retentionRadio"
                                                value="Mature"
                                                id="customCheckBox5"
                                              />

                                              <div
                                                className="form-check-label ml-1 "
                                                htmlFor="customCheckBox5"
                                              >
                                                12345678
                                              </div>
                                            </div>
                                          </div>
                                          {/* Hidden sm xs */}
                                          <div className="col-lg-4 col-md-4">
                                            Sangeetha
                                          </div>
                                          <div className="col-lg-4 col-md-4">
                                            Plan Name goes here
                                          </div>
                                          {/* Hidden sm xs */}
                                        </div>
                                      </div>
                                      {/* Block */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row modal-cta">
                      <div className="col-lg-12 text-right">
                        <button className="btn btn-outline-s">Cancel</button>{" "}
                        <button
                          onClick={downloadPDF}
                          className="btn btn-primary"
                          style={{ width: "300px" }}
                        >
                          Download Sales Illustration
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="policy-contract"
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
                    <h3>Policy Contract</h3>
                    <hr />

                    <div className="row">
                      <div className="col-md-12 mt-2">
                        <div className="data-card">
                          <div className="data_card_body">
                            <div className="row">
                              <div className="col-md-12" />
                              <div className="col-md-12 pad-0 ">
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
                                          <div className="col-md-4 text-left ">
                                            <label className="ml-4">
                                              Policy No.
                                            </label>
                                          </div>
                                          <div className="col-md-4 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                            <label>Policy Owner Name</label>
                                          </div>
                                          <div className="col-md-4">
                                            <label>Plan Name</label>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="g-row">
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 text-left ">
                                            <div className="pl-3">
                                              <input
                                                className="form-check-input "
                                                type="radio"
                                                name="retentionRadio"
                                                value="Mature"
                                                id="customCheckBox5"
                                              />

                                              <div
                                                className="form-check-label ml-1 "
                                                htmlFor="customCheckBox5"
                                              >
                                                12345678
                                              </div>
                                            </div>
                                          </div>
                                          {/* Hidden sm xs */}
                                          <div className="col-lg-4 col-md-4">
                                            Sangeetha
                                          </div>
                                          <div className="col-lg-4 col-md-4">
                                            Plan Name goes here
                                          </div>
                                          {/* Hidden sm xs */}
                                        </div>
                                      </div>
                                      {/* Block */}
                                      {/* Block */}

                                      <div className="g-row">
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 text-left ">
                                            <div className="pl-3">
                                              <input
                                                className="form-check-input "
                                                type="radio"
                                                name="retentionRadio"
                                                value="Mature"
                                                id="customCheckBox5"
                                              />

                                              <div
                                                className="form-check-label ml-1 "
                                                htmlFor="customCheckBox5"
                                              >
                                                12345678
                                              </div>
                                            </div>
                                          </div>
                                          {/* Hidden sm xs */}
                                          <div className="col-lg-4 col-md-4">
                                            Sangeetha
                                          </div>
                                          <div className="col-lg-4 col-md-4">
                                            Plan Name goes here
                                          </div>
                                          {/* Hidden sm xs */}
                                        </div>
                                      </div>
                                      {/* Block */}
                                      {/* Block */}

                                      <div className="g-row">
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 text-left ">
                                            <div className="pl-3">
                                              <input
                                                className="form-check-input "
                                                type="radio"
                                                name="retentionRadio"
                                                value="Mature"
                                                id="customCheckBox5"
                                              />

                                              <div
                                                className="form-check-label ml-1 "
                                                htmlFor="customCheckBox5"
                                              >
                                                12345678
                                              </div>
                                            </div>
                                          </div>
                                          {/* Hidden sm xs */}
                                          <div className="col-lg-4 col-md-4">
                                            Sangeetha
                                          </div>
                                          <div className="col-lg-4 col-md-4">
                                            Plan Name goes here
                                          </div>
                                          {/* Hidden sm xs */}
                                        </div>
                                      </div>
                                      {/* Block */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row modal-cta">
                      <div className="col-lg-12 text-right">
                        <button className="btn btn-outline-s">Cancel</button>{" "}
                        <button
                          onClick={downloadPDF}
                          className="btn btn-primary"
                          style={{ width: "300px" }}
                        >
                          Download Policy Contract
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="tds-certificate"
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
                    <h3>TDS Certificate</h3>
                    <hr />

                    <div className="row">
                      <div className="col-md-12 mt-2">
                        <div className="data-card">
                          <div className="data_card_body">
                            <div className="row">
                              <div className="col-md-12" />
                              <div className="col-md-12 pad-0 ">
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
                                          <div className="col-md-4 text-left ">
                                            <label className="ml-4">
                                              Policy No.
                                            </label>
                                          </div>
                                          <div className="col-md-4 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                            <label>Policy Owner Name</label>
                                          </div>
                                          <div className="col-md-4">
                                            <label>Plan Name</label>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="g-row">
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 text-left ">
                                            <div className="pl-3">
                                              <input
                                                className="form-check-input "
                                                type="radio"
                                                name="retentionRadio"
                                                value="Mature"
                                                id="customCheckBox5"
                                              />

                                              <div
                                                className="form-check-label ml-1 "
                                                htmlFor="customCheckBox5"
                                              >
                                                12345678
                                              </div>
                                            </div>
                                          </div>
                                          {/* Hidden sm xs */}
                                          <div className="col-lg-4 col-md-4">
                                            Sangeetha
                                          </div>
                                          <div className="col-lg-4 col-md-4">
                                            Plan Name goes here
                                          </div>
                                          {/* Hidden sm xs */}
                                        </div>
                                      </div>
                                      {/* Block */}
                                      {/* Block */}

                                      <div className="g-row">
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 text-left ">
                                            <div className="pl-3">
                                              <input
                                                className="form-check-input "
                                                type="radio"
                                                name="retentionRadio"
                                                value="Mature"
                                                id="customCheckBox5"
                                              />

                                              <div
                                                className="form-check-label ml-1 "
                                                htmlFor="customCheckBox5"
                                              >
                                                12345678
                                              </div>
                                            </div>
                                          </div>
                                          {/* Hidden sm xs */}
                                          <div className="col-lg-4 col-md-4">
                                            Sangeetha
                                          </div>
                                          <div className="col-lg-4 col-md-4">
                                            Plan Name goes here
                                          </div>
                                          {/* Hidden sm xs */}
                                        </div>
                                      </div>
                                      {/* Block */}
                                      {/* Block */}

                                      <div className="g-row">
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 text-left ">
                                            <div className="pl-3">
                                              <input
                                                className="form-check-input "
                                                type="radio"
                                                name="retentionRadio"
                                                value="Mature"
                                                id="customCheckBox5"
                                              />

                                              <div
                                                className="form-check-label ml-1 "
                                                htmlFor="customCheckBox5"
                                              >
                                                12345678
                                              </div>
                                            </div>
                                          </div>
                                          {/* Hidden sm xs */}
                                          <div className="col-lg-4 col-md-4">
                                            Sangeetha
                                          </div>
                                          <div className="col-lg-4 col-md-4">
                                            Plan Name goes here
                                          </div>
                                          {/* Hidden sm xs */}
                                        </div>
                                      </div>
                                      {/* Block */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row modal-cta">
                      <div className="col-lg-12 text-right">
                        <button className="btn btn-outline-s">Cancel</button>{" "}
                        <button
                          onClick={downloadPDF}
                          className="btn btn-primary"
                          style={{ width: "250px" }}
                        >
                          Download TDS Certificate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="payment-acknowledgement"
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
                    <h3>policy-acknowledgement</h3>
                    <hr />

                    <div className="row">
                      <div className="col-md-12 mt-2">
                        <div className="data-card">
                          <div className="data_card_body">
                            <div className="row">
                              <div className="col-md-12" />
                              <div className="col-md-12 pad-0 ">
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
                                          <div className="col-md-4 text-left ">
                                            <label className="ml-4">
                                              Policy No.
                                            </label>
                                          </div>
                                          <div className="col-md-4 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                            <label>Policy Owner Name</label>
                                          </div>
                                          <div className="col-md-4">
                                            <label>Plan Name</label>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="g-row">
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 text-left ">
                                            <div className="pl-3">
                                              <input
                                                className="form-check-input "
                                                type="radio"
                                                name="retentionRadio"
                                                value="Mature"
                                                id="customCheckBox5"
                                              />

                                              <div
                                                className="form-check-label ml-1 "
                                                htmlFor="customCheckBox5"
                                              >
                                                12345678
                                              </div>
                                            </div>
                                          </div>
                                          {/* Hidden sm xs */}
                                          <div className="col-lg-4 col-md-4">
                                            Sangeetha
                                          </div>
                                          <div className="col-lg-4 col-md-4">
                                            Plan Name goes here
                                          </div>
                                          {/* Hidden sm xs */}
                                        </div>
                                      </div>
                                      {/* Block */}
                                      {/* Block */}

                                      <div className="g-row">
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 text-left ">
                                            <div className="pl-3">
                                              <input
                                                className="form-check-input "
                                                type="radio"
                                                name="retentionRadio"
                                                value="Mature"
                                                id="customCheckBox5"
                                              />

                                              <div
                                                className="form-check-label ml-1 "
                                                htmlFor="customCheckBox5"
                                              >
                                                12345678
                                              </div>
                                            </div>
                                          </div>
                                          {/* Hidden sm xs */}
                                          <div className="col-lg-4 col-md-4">
                                            Sangeetha
                                          </div>
                                          <div className="col-lg-4 col-md-4">
                                            Plan Name goes here
                                          </div>
                                          {/* Hidden sm xs */}
                                        </div>
                                      </div>
                                      {/* Block */}
                                      {/* Block */}

                                      <div className="g-row">
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 text-left ">
                                            <div className="pl-3">
                                              <input
                                                className="form-check-input "
                                                type="radio"
                                                name="retentionRadio"
                                                value="Mature"
                                                id="customCheckBox5"
                                              />

                                              <div
                                                className="form-check-label ml-1 "
                                                htmlFor="customCheckBox5"
                                              >
                                                12345678
                                              </div>
                                            </div>
                                          </div>
                                          {/* Hidden sm xs */}
                                          <div className="col-lg-4 col-md-4">
                                            Sangeetha
                                          </div>
                                          <div className="col-lg-4 col-md-4">
                                            Plan Name goes here
                                          </div>
                                          {/* Hidden sm xs */}
                                        </div>
                                      </div>
                                      {/* Block */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row modal-cta">
                      <div className="col-lg-12 text-right">
                        <button className="btn btn-outline-s">Cancel</button>{" "}
                        <button
                          onClick={downloadPDF}
                          className="btn btn-primary"
                          style={{ width: "300px" }}
                        >
                          Download policy-acknowledgement
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="Premium-Due-Certificate"
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
                    <h3>Premium Due Certificate</h3>
                    <hr />

                    <div className="row">
                      <div className="col-md-12 mt-2">
                        <div className="data-card">
                          <div className="data_card_body">
                            <div className="row">
                              <div className="col-md-12" />
                              <div className="col-md-12 pad-0 ">
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
                                          <div className="col-md-4 text-left ">
                                            <label className="ml-4">
                                              Policy No.
                                            </label>
                                          </div>
                                          <div className="col-md-4 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                            <label>Policy Owner Name</label>
                                          </div>
                                          <div className="col-md-4">
                                            <label>Plan Name</label>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="g-row">
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 text-left ">
                                            <div className="pl-3">
                                              <input
                                                className="form-check-input "
                                                type="radio"
                                                name="retentionRadio"
                                                value="Mature"
                                                id="customCheckBox5"
                                              />

                                              <div
                                                className="form-check-label ml-1 "
                                                htmlFor="customCheckBox5"
                                              >
                                                12345678
                                              </div>
                                            </div>
                                          </div>
                                          {/* Hidden sm xs */}
                                          <div className="col-lg-4 col-md-4">
                                            Sangeetha
                                          </div>
                                          <div className="col-lg-4 col-md-4">
                                            Plan Name goes here
                                          </div>
                                          {/* Hidden sm xs */}
                                        </div>
                                      </div>
                                      {/* Block */}
                                      {/* Block */}

                                      <div className="g-row">
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 text-left ">
                                            <div className="pl-3">
                                              <input
                                                className="form-check-input "
                                                type="radio"
                                                name="retentionRadio"
                                                value="Mature"
                                                id="customCheckBox5"
                                              />

                                              <div
                                                className="form-check-label ml-1 "
                                                htmlFor="customCheckBox5"
                                              >
                                                12345678
                                              </div>
                                            </div>
                                          </div>
                                          {/* Hidden sm xs */}
                                          <div className="col-lg-4 col-md-4">
                                            Sangeetha
                                          </div>
                                          <div className="col-lg-4 col-md-4">
                                            Plan Name goes here
                                          </div>
                                          {/* Hidden sm xs */}
                                        </div>
                                      </div>
                                      {/* Block */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row modal-cta">
                      <div className="col-lg-12 text-right">
                        <button className="btn btn-outline-s">Cancel</button>{" "}
                        <button
                          onClick={downloadPDF}
                          className="btn btn-primary"
                          style={{ width: "300px" }}
                        >
                          Download Premium Due Certificate
                        </button>
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

export default Customerdetails;
