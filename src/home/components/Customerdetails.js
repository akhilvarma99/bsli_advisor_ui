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
import Upsell from "../../assets/img/icons/Upsell opportunity.svg";
import Setup from "../../assets/img/icons/Setup ECS.svg";
import { NavLink } from "react-router-dom";
import Card from "../../utils/Card";
import Toasts from "../../utils/Toasts";
import creditIcon from "../../assets/img/icons/credit-card.svg";
import terminatedIcon from "../../assets/img/icons/Terminated.svg";
import discontinueIcon from "../../assets/img/icons/Discontinue.svg";
import paidupIcon from "../../assets/img/icons/Paidup.svg";
import payoutIcon from "../../assets/img/icons/payout.svg";
import paymentRenewalIcon from "../../assets/img/icons/Payment-renewal.svg";
import reinstatementIcon from "../../assets/img/icons/Reinstatement.svg";

function Customerdetails() {
  const [activeState, setActivestate] = useState("wishes");

  function buttonText(accordionId, buttonId) {
    const accordionClass = document.getElementById(accordionId).classList;
    console.log(accordionClass);
    if (accordionClass[2] == "show") {
      console.log("conditin" + accordionClass);
      document.getElementById(buttonId).innerHTML = "Show More";
      document.getElementById(buttonId).classList.remove("background-red");
    } else {
      document.getElementById(buttonId).innerHTML = "Show Less";
      document.getElementById(buttonId).classList.add("background-red");
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
      icon: premiumDueIcon,
      bodyTitle: "Policy ID",
      body: "27.11.1990 . ₹ 1,00,000",
      status: "Payment Failed",
      buttonText: "Send Payment Link",
    },
    {
      id: "Policy Status",
      headerTitle: "Today",
      cardTitle: "To Be Terminated",
      icon: terminatedIcon,
      bodyTitle: "Policy ID",
      body: "27/Dec/1990",
      status: "",
      buttonText: "Send Remainder",
    },

    {
      id: "Policy Status",
      cardTitle: "Payouts Released",
      icon: payoutIcon,
      bodyTitle: "Policy ID",
      body: "27/Dec/1990 | Type | ₹ 1,00,000",
      status: "Payouts Released",
      buttonText: "Send Congratulations",
    },
    {
      id: "Policy Status",
      cardTitle: "Payouts To Be Released",
      icon: payoutIcon,
      bodyTitle: "Policy ID",
      body: "27/Dec/1990 | Type ",
      status: "Payouts Released",
      buttonText: "Send Congratulations",
    },
    {
      id: "Policy Status",
      headerTitle: "Today",
      cardTitle: "Policy Matured",
      icon: paymentRenewalIcon,
      bodyTitle: "Policy ID",
      body: "27.11.1990 | ₹ 1,00,000",
      status: "",
      buttonText: "Send Wishes",
    },
    {
      id: "Policy Status",
      headerTitle: "Today",
      cardTitle: "To Be Matured",
      icon: paymentRenewalIcon,
      bodyTitle: "Policy ID",
      body: "27.11.1990 | ₹ 1,00,000",
      status: "",
      buttonText: "Send Wishes",
    },
    {
      id: "Policy Status",
      headerTitle: "Today",
      cardTitle: "To Be Matured",
      icon: paymentRenewalIcon,
      bodyTitle: "Policy ID",
      body: "27.11.1990 | ₹ 1,00,000",
      status: "",
      buttonText: "Send Wishes",
    },
    {
      id: "Policy Status",
      headerTitle: "Today",
      cardTitle: "To Be Matured",
      icon: paymentRenewalIcon,
      bodyTitle: "Policy ID",
      body: "27.11.1990 | ₹ 1,00,000",
      status: "",
      buttonText: "Send Wishes",
    },
    {
      id: "Policy Status",
      headerTitle: "Today",
      cardTitle: "To Be Matured",
      icon: paymentRenewalIcon,
      bodyTitle: "Policy ID",
      body: "27.11.1990 | ₹ 1,00,000",
      status: "",
      buttonText: "Send Wishes",
    },
    {
      id: "Policy Status",
      headerTitle: "Today",
      cardTitle: "To Be Matured",
      icon: paymentRenewalIcon,
      bodyTitle: "Policy ID",
      body: "27.11.1990 | ₹ 1,00,000",
      status: "",
      buttonText: "Send Wishes",
    },
  ];
  let filterFunc = (arrayName, filterName) =>
    arrayName.filter(function (e) {
      return e.id == filterName;
    });

  const [filter, setFilter] = useState("Payments");
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
                    {/* <li>Dashboard</li> */}
                    <li>Customer List</li>
                    <li>
                      <img src={breadcrumbs} alt="breadcrumbs" />
                    </li>
                    <li className="active-li">All Customer</li>
                    <li>
                      <img src={breadcrumbs} alt="breadcrumbs" />
                    </li>
                    <li>Customer Details</li>
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
                          {window.screen.width < 600 ? (
                            <a className="anchor-style" href="tel:9876543210">
                              9876543210
                            </a>
                          ) : (
                            <span>9876543210</span>
                          )}
                        </p>
                        <p className="pad-btnm d-flex align-items-center">
                          <img src={mail} alt="mail" />
                          <a
                            className="anchor-style"
                            href="mailto:dakhilvarma@gmail.com"
                          >
                            dakhilvarma@gmail.com
                          </a>
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
                      {/* <li className="nav-item w-50-p" role="presentation">
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
                      </li> */}
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
                                  <div>
                                    <h2
                                      className="accordion-header text-left"
                                      id="flush-headingOne"
                                    >
                                      Action Required
                                    </h2>
                                    <div className="accordion-header text-right">
                                      As on Date 18/dec/2020
                                    </div>
                                  </div>

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
                                                className={
                                                  filter === "Payments"
                                                    ? "background-red"
                                                    : ""
                                                }
                                                onClick={() =>
                                                  filterFunction("Payments")
                                                }
                                              >
                                                Payments
                                              </li>
                                              <li
                                                className={
                                                  filter === "Wishes"
                                                    ? "background-red"
                                                    : ""
                                                }
                                                onClick={() =>
                                                  filterFunction("Wishes")
                                                }
                                              >
                                                Wishes
                                              </li>
                                              <li
                                                className={
                                                  filter === "Policy Status"
                                                    ? "background-red"
                                                    : ""
                                                }
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
                                    <div
                                      className="g-footer text-center top-padding"
                                      style={
                                        filter === "Policy Status"
                                          ? { display: "block" }
                                          : { display: "none" }
                                      }
                                    >
                                      <button
                                        type="button"
                                        className="btn btn-primary"
                                      >
                                        See More
                                      </button>
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
                                                      AKNBH1546E &nbsp;
                                                      <button className="btn btn-primary-s">
                                                        UPDATE
                                                      </button>
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
                                                      &nbsp; Activated or{"  "}
                                                      <button className="btn btn-primary-s">
                                                        Activate
                                                      </button>
                                                    </p>
                                                  </div>
                                                  {/* <div className="col-lg-6 col-md-12 value mrgn-0">
                                                    <p>
                                                      <label>Pan Details</label>{" "}
                                                      <br />{" "}
                                                      <button className="btn btn-primary-s">
                                                        Edit
                                                      </button>
                                                    </p>
                                                  </div> */}
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
                              <div>
                                <h2
                                  className="accordion-header text-left"
                                  id="flush-headingOne"
                                >
                                  Policies Owned by Customer
                                </h2>
                                <div className="accordion-header">
                                  As on Date 18/dec/2020
                                </div>
                              </div>

                              <i className="arrow-up" />
                              <i className="arrow-down" />
                            </div>
                            <div
                              id="policy-owned-c"
                              className="accordion-collapse collapse show accordion-content"
                            >
                              <div className="accordion-body">
                                <div className="policy-grid-customer">
                                  <div className="policy-grid-header d-none d-lg-block d-sm-none">
                                    <div className="row">
                                      <div className="col-lg-2">
                                        <h3>Life Insured Name</h3>
                                      </div>
                                      <div className="col-lg-2">
                                        <h3>Plan Name</h3>
                                      </div>
                                      <div className="col-lg-2">
                                        <h3>Premium</h3>
                                      </div>
                                      <div className="col-lg-2">
                                        <h3>Policy Status</h3>
                                      </div>
                                      <div className="col-lg-2">
                                        <h3>Next Premium Due Date</h3>
                                      </div>
                                    </div>
                                  </div>
                                  {[1, 2, 3, 4, 5].map((id, index) => (
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
                                        <div className="col-lg-2 col-md-2">
                                          <p className="color-b">
                                            Sample text for plan name
                                          </p>
                                        </div>
                                        <div className="col-lg-2 d-none d-lg-block d-sm-none">
                                          <p className="color-b">
                                            &#8377;1,22,222
                                          </p>
                                        </div>
                                        <div className="col-lg-2 d-none d-lg-block d-sm-none">
                                          <p className="color-b">Paid up</p>
                                        </div>
                                        <div className="col-lg-2 col-md-2 d-lg-block d-sm-block">
                                          <p className="color-b">28/Dec/2020</p>
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
                                                  Product Type <br />
                                                  <span>*****</span>
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Policy Insurance Date
                                                  <br />
                                                  <span>28/Dec/2020</span>
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Premium Payment Term
                                                  <br />
                                                  <span>*****</span>
                                                </p>
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Policy Term
                                                  <br />
                                                  <span>2</span>
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Auto Pay Status
                                                  <br />
                                                  <span>****</span>
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Total Sum Assured
                                                  <br />
                                                  <span>₹ 28,22,222</span>
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
                                  <div className="g-footer text-center top-padding">
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                    >
                                      See More
                                    </button>
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
                              className="accordion-header-wrapper collapsed"
                              data-toggle="collapse"
                              href="#policy-owned-f"
                              role="button"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              <div>
                                <h2
                                  className="accordion-header text-left"
                                  id="flush-headingOne"
                                >
                                  Policies Owned By Family
                                </h2>
                                <div className="accordion-header ">
                                  As on Date 18/dec/2020
                                </div>
                              </div>

                              <i className="arrow-up" />
                              <i className="arrow-down" />
                            </div>
                            <div
                              id="policy-owned-f"
                              className="accordion-collapse collapse  accordion-content"
                            >
                              <div className="accordion-body">
                                <div className="policy-grid-customer">
                                  <div className="policy-grid-header d-none d-lg-block d-sm-none">
                                    <div className="row">
                                      <div className="col-lg-2">
                                        <h3>Life Insured Name</h3>
                                      </div>
                                      <div className="col-lg-2">
                                        <h3>Plan Name</h3>
                                      </div>
                                      <div className="col-lg-2">
                                        <h3>Premium</h3>
                                      </div>
                                      <div className="col-lg-2">
                                        <h3>Policy Status</h3>
                                      </div>
                                      <div className="col-lg-2">
                                        <h3>Next Premium Due Date</h3>
                                      </div>
                                    </div>
                                  </div>
                                  {[1, 2, 3].map((id, index) => (
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
                                        <div className="col-lg-2 col-md-2">
                                          <p className="color-b">
                                            Sample text for plan name
                                          </p>
                                        </div>
                                        <div className="col-lg-2 d-none d-lg-block d-sm-none">
                                          <p className="color-b">
                                            &#8377;1,22,222
                                          </p>
                                        </div>
                                        <div className="col-lg-2 d-none d-lg-block d-sm-none">
                                          <p className="color-b">Paid up</p>
                                        </div>
                                        <div className="col-lg-2 col-md-2 d-lg-block d-sm-block">
                                          <p className="color-b">28/Dec/2020</p>
                                        </div>
                                        <div className="col-lg-2 col-md-4 d-none d-lg-block d-md-block d-sm-none">
                                          <button
                                            type="button"
                                            className="btn btn-outline-s"
                                            data-toggle="collapse"
                                            data-target={`#collapseExamplef${index}`}
                                            aria-expanded="false"
                                            id={`buttonf${index}`}
                                            aria-controls="collapseExample"
                                            onClick={() =>
                                              buttonText(
                                                `collapseExamplef${index}`,
                                                `buttonf${index}`
                                              )
                                            }
                                          >
                                            Show More
                                          </button>
                                        </div>
                                      </div>
                                      <div
                                        className="row collapse"
                                        id={`collapseExamplef${index}`}
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
                                                  Product Type <br />
                                                  <span>*****</span>
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Policy Insurance Date
                                                  <br />
                                                  <span>28/Dec/2020</span>
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Premium Payment Term
                                                  <br />
                                                  <span>*****</span>
                                                </p>
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Policy Term
                                                  <br />
                                                  <span>2</span>
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Auto Pay Status
                                                  <br />
                                                  <span>****</span>
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Total Sum Assured
                                                  <br />
                                                  <span>₹ 28,22,222</span>
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Customer Name
                                                  <br />
                                                  <span>John</span>
                                                </p>
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-lg-3 col-md-3 col-sm-12">
                                                <p>
                                                  Relation
                                                  <br />
                                                  <span>Father</span>
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
                                                    <li>
                                                      Go to Policy Details
                                                    </li>
                                                  </NavLink>
                                                  <li>Remove Family Tag</li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                  <div className="g-footer text-center top-padding">
                                    {/* <p>Start adding your family members</p> */}
                                    <button
                                      className="text-center btn btn-primary-s"
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
                              className="col-lg-2 col-md-4 col-sm-6 col-6 pad-m-x"
                              style={{ cursor: "pointer" }}
                              data-target="#policyAccountStatement"
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
                                    <h3>Policy Account Statement</h3>
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
                              <div className="row">
                                <div className="col-lg-12 d-flex justify-content-between">
                                  <h3>Upsell Opportunity</h3>
                                  <div className="today">Today</div>
                                </div>
                              </div>
                              <div className="row pad-10 card-body">
                                <div className="col-2">
                                  <img
                                    className="m-bottom-6 bottom-26"
                                    src={Upsell}
                                    alt="creative"
                                  />
                                </div>
                                <div className="col-10">
                                  <p className="m-top-12">
                                    Plan Name Goes here
                                  </p>
                                  <span className="grey">&#8377; 2,22,222</span>
                                </div>
                              </div>
                              <div className="row">
                                {/* <div className="col-lg-6 text-right">
                                  <button className="btn btn-outline-s">
                                    Send Details
                                  </button>
                                </div> */}
                                <div className="col-lg-6 text-left">
                                  <button
                                    type="button"
                                    class="btn btn-outline-s width-153"
                                    data-toggle="modal"
                                    data-target="#pasaKnowMore"
                                  >
                                    Know more
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
                              <div className="row">
                                <div className="col-lg-12 d-flex justify-content-between">
                                  <h3>Upsell Opportunity</h3>
                                  <div className="today">Today</div>
                                </div>
                              </div>
                              <div className="row pad-10 card-body">
                                <div className="col-2">
                                  <img
                                    className="m-bottom-6 bottom-26"
                                    src={Upsell}
                                    alt="creative"
                                  />
                                </div>
                                <div className="col-10">
                                  <p className="m-top-12">
                                    Plan Name Goes here
                                  </p>
                                  <span className="grey">&#8377; 2,22,222</span>
                                </div>
                              </div>
                              <div className="row">
                                {/* <div className="col-lg-6 text-right">
                                  <button className="btn btn-outline-s">
                                    Send Details
                                  </button>
                                </div> */}
                                <div className="col-lg-6 text-left">
                                  <button
                                    type="button"
                                    class="btn btn-outline-s width-153"
                                    data-toggle="modal"
                                    data-target="#pasaKnowMore2"
                                  >
                                    Know more
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Fav Content Ends Here */}
                      {/* Fav Content Starts Here ----------------------------------------------------------------------------------------------*/}
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
                    <span className="grey">
                      Tax Certificates are available only for last two Financial
                      Years. Please raise a query in CRM to get older Tax
                      Certificates
                    </span>
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
                                    <div className="g-container scroll-vertical">
                                      {/* Block */}
                                      <div className="g-header d-nones d-lg-block d-md-none d-sm-none d-xs-none ">
                                        <div className="row">
                                          <div className="col-md-4 d-none d-lg-block d-md-none d-sm-none d-xs-none ">
                                            <label className="ml-4">
                                              Policy No.
                                            </label>
                                          </div>
                                          <div className="col-md-4 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                            <label>Policy Owner Name</label>
                                          </div>
                                          <div className="col-md-4 d-none d-lg-block d-md-none d-sm-none d-xs-none">
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
                        <button
                          onClick={downloadPDF}
                          className="btn btn-primary"
                          style={{ width: "200px" }}
                        >
                          Download Tax Certificate
                        </button>
                        <button className="btn btn-primary">Share</button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="policyAccountStatement"
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
                    <h3>Policy Account Statement</h3>
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
                            <option>2018-2019</option>
                            <option>2019-2020</option>
                            <option>2020-2021</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <span className="grey">
                      Tax Certificates are available only for last 3 Financial
                      Years. Please raise a query in CRM to get older Tax
                      Certificates
                    </span>
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
                                    <div className="g-container scroll-vertical">
                                      {/* Block */}
                                      <div className="g-header d-nones d-lg-block d-md-none d-sm-none d-xs-none ">
                                        <div className="row">
                                          <div className="col-md-4 d-none d-lg-block d-md-none d-sm-none d-xs-none ">
                                            <label className="ml-4">
                                              Policy No.
                                            </label>
                                          </div>
                                          <div className="col-md-4 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                            <label>Policy Owner Name</label>
                                          </div>
                                          <div className="col-md-4 d-none d-lg-block d-md-none d-sm-none d-xs-none">
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
                        <button
                          onClick={downloadPDF}
                          className="btn btn-primary"
                          style={{ width: "200px" }}
                        >
                          Download Policy Statement
                        </button>
                        <button className="btn btn-primary">Share</button>{" "}
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
                                          <div className="col-md-4 d-none d-lg-block d-md-none d-sm-none d-xs-none ">
                                            <label className="ml-4">
                                              Policy No.
                                            </label>
                                          </div>
                                          <div className="col-md-4 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                            <label>Policy Owner Name</label>
                                          </div>
                                          <div className="col-md-4 d-none d-lg-block d-md-none d-sm-none d-xs-none">
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
                        <button
                          onClick={downloadPDF}
                          className="btn btn-primary"
                          style={{ width: "300px" }}
                        >
                          Download Sales Illustration
                        </button>
                        <button className="btn btn-primary">Share</button>{" "}
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
                                          <div className="col-md-4 d-none d-lg-block d-md-none d-sm-none d-xs-none ">
                                            <label className="ml-4">
                                              Policy No.
                                            </label>
                                          </div>
                                          <div className="col-md-4 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                            <label>Policy Owner Name</label>
                                          </div>
                                          <div className="col-md-4 d-none d-lg-block d-md-none d-sm-none d-xs-none">
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
                        <button
                          onClick={downloadPDF}
                          className="btn btn-primary"
                          style={{ width: "300px" }}
                        >
                          Download Policy Contract
                        </button>
                        <button className="btn btn-primary">Share</button>{" "}
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
                    <h3>Payment-acknowledgement</h3>
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
                          style={{ width: "248px" }}
                        >
                          Download Payment Acknowledgement
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
                        <button
                          onClick={downloadPDF}
                          className="btn btn-primary"
                          style={{ width: "248px" }}
                        >
                          Download Premium Due Certificate
                        </button>
                        <button className="btn btn-primary">Share</button>{" "}
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
                  Based on data, your customer does not need to undergo any
                  medicals or provide financial documentations to buy this plan
                  for a Sum Assured upto &#8377;2,22,222
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

          <div
            class="modal fade"
            id="pasaKnowMore2"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    High Propensity
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
                  Based on data, your customer is likely to buy this product.
                  You should pitch this to the customer
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
        </main>
      </div>
    </div>
  );
}

export default Customerdetails;
