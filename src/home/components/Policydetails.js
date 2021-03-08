import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../header";
import breadcrumbsarrow from "../../assets/img/icons/breadcrumbs-arrow.png";
import backarrow from "../../assets/img/icons/back-arrow.svg";
import yellowstarfilled from "../../assets/img/icons/yellow-star-filled.svg";
import phonecall from "../../assets/img/icons/phone-call.svg";
import mail from "../../assets/img/icons/mail.svg";
import yellowflag from "../../assets/img/icons/yellow-flag.svg";
import dollar from "../../assets/img/icons/dollar-icon.svg";
import Upsell from "../../assets/img/icons/Upsell opportunity.svg";
import Setup from "../../assets/img/icons/Setup ECS.svg";
import taxcertificate from "../../assets/img/icons/tax-certificate.svg";
import sales from "../../assets/img/icons/sales.svg";
import policycontract from "../../assets/img/icons/policy-contract.svg";
import tdscertificate from "../../assets/img/icons/tds-certificate.svg";
import acknowledge from "../../assets/img/icons/payment-acknolodge.svg";
import policyid from "../../assets/img/icons/policy-id.svg";
import gift from "../../assets/img/icons/gift.svg";
import greentick from "../../assets/img/icons/green-tick.svg";
import dateicon from "../../assets/img/icons/date-icon.svg";
import threedots from "../../assets/img/icons/three-dots.svg";
import taxcertIcon from "../../assets/img/icons/Taxcertificate.svg";
import tdscertIcon from "../../assets/img/icons/Tdscertificate.svg";
import salesillIcon from "../../assets/img/icons/SalesIllustration.svg";
import policycontractIcon from "../../assets/img/icons/Policycontract.svg";
import paymentAcknowledgeIcon from "../../assets/img/icons/form.svg";
import premiumDueIcon from "../../assets/img/icons/premium.svg";
import paymentFailureIcon from "../../assets/img/icons/payment-failed.svg";
import paymentRenewalIcon from "../../assets/img/icons/Payment-renewal.svg";
import creditIcon from "../../assets/img/icons/credit-card.svg";
import terminatedIcon from "../../assets/img/icons/Terminated.svg";
import discontinueIcon from "../../assets/img/icons/Discontinue.svg";
import paidupIcon from "../../assets/img/icons/Paidup.svg";
import payoutIcon from "../../assets/img/icons/payout.svg";
import Dropdown from "../../utils/Dropdown";
import Toasts from "../../utils/Toasts";
import Card from "../../utils/Card";

function Policydetails() {
  const [activeState, setActivestate] = useState("wishes");
  const [forgotmodal, setforgotmodal] = useState(false);
  const [switchFundmodal, setswitchFundmodal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function buttonText(accordionId, buttonId) {
    const accordionClass = document.getElementById(accordionId).classList;
    console.log(accordionClass);
    if (accordionClass[2] == "show") {
      console.log("conditin" + accordionClass);
      document.getElementById(buttonId).innerHTML = "View More";
      document.getElementById(buttonId).classList.remove("checked-state");
    } else {
      document.getElementById(buttonId).innerHTML = "View Less";
      document.getElementById(buttonId).classList.add("checked-state");
    }
  }

  const cardInfo = [
    {
      id: "Wishes",
      headerTitle: "Today",
      cardTitle: "Birthday",
      icon: gift,
      bodyTitle: "John Fernando",
      body: "Relation | 20-dec-2020",
      status: "",
      buttonText: "Send Wishes",
    },
    {
      id: "Payments",
      headerTitle: "Overdue",
      cardTitle: "Premium Due",
      icon: premiumDueIcon,
      bodyTitle: "Policy ID",
      body: "20-dec-2020 | ₹ 2,22,222",
      status: "Payment Failed",
      buttonText: "Send Payment Link",
    },
    {
      id: "Policy Status",
      headerTitle: "Today",
      cardTitle: "To Be Terminated",
      icon: terminatedIcon,
      bodyTitle: "Policy ID",
      body: "27-dec-2020",
      status: "",
      buttonText: "Send Reminder",
    },

    {
      id: "Policy Status",
      headerTitle: "Success",
      cardTitle: "Payouts Released",
      icon: payoutIcon,
      bodyTitle: "Policy ID",
      body: "27-dec-2020 | Type | ₹ 2,22,222",
      // status: "Payouts Released",
      buttonText: "Send Congratulations",
    },
    {
      id: "Policy Status",
      cardTitle: "Payouts To Be Released",
      icon: payoutIcon,
      bodyTitle: "Policy ID",
      body: "27-dec-2020 | Type ",
      // status: "Payouts Released",
      buttonText: "Send Congratulations",
    },
    {
      id: "Policy Status",
      headerTitle: "Today",
      cardTitle: "Policy Matured",
      icon: paymentRenewalIcon,
      bodyTitle: "Policy ID",
      body: "27-dec-2020 | ₹ 2,22,222",
      status: "",
      buttonText: "Send Wishes",
    },
    {
      id: "Policy Status",
      headerTitle: "Today",
      cardTitle: "To Be Matured",
      icon: paymentRenewalIcon,
      bodyTitle: "Policy ID",
      body: "27-dec-2020",
      status: "",
      buttonText: "Send Wishes",
    },
    {
      id: "Policy Status",
      headerTitle: "Today",
      cardTitle: "To Be Matured",
      icon: paymentRenewalIcon,
      bodyTitle: "Policy ID",
      body: "27-dec-2020 | ₹ 2,22,222",
      status: "",
      buttonText: "Send Wishes",
    },
    {
      id: "Policy Status",
      headerTitle: "Today",
      cardTitle: "To Be Matured",
      icon: paymentRenewalIcon,
      bodyTitle: "Policy ID",
      body: "27-dec-2020 | ₹ 2,22,222",
      status: "",
      buttonText: "Send Wishes",
    },
    {
      id: "Policy Status",
      headerTitle: "Today",
      cardTitle: "To Be Matured",
      icon: paymentRenewalIcon,
      bodyTitle: "Policy ID",
      body: "27-dec-2020 | ₹ 2,22,222",
      status: "",
      buttonText: "Send Wishes",
    },
    {
      id: "Policy Status",
      headerTitle: "Today",
      cardTitle: "To Be Matured",
      icon: paymentRenewalIcon,
      bodyTitle: "Policy ID",
      body: "27-dec-2020 | ₹ 2,22,222",
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
      <Header />

      <main className="bg-white " role="main" style={{ paddingBottom: "25px" }}>
        <div className="breadcrubs-div shadow-sm h-100">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul>
                  <li>Home</li>
                  {/* <li>
                    <img src={breadcrumbsarrow} alt="breadcrumbsarrow" />
                  </li>
                  <li>Customer List</li> */}
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
        <div autofocus className="container">
          {/* Heading Starts  */}
          <div className="d-flex justify-content-between">
            <div className="row d-none d-lg-block d-sm-none">
              <div className="col">
                <h1 className="p-header">
                  <img src={backarrow} alt="backarrow" />
                  Policy Details
                </h1>
              </div>
              <Toasts message={message} />
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
                      <div className="category-div">
                        <p style={{ color: "black" }}>Category Name</p>
                      </div>
                      <div className="category-div-star">
                        <p style={{ color: "black" }}>
                          <img src={yellowstarfilled} alt="yellowstarfilled" />
                        </p>
                      </div>
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
                          Premium Amount
                        </div>
                        <div className="font20 line-ht-11">
                          {" "}
                          &#8377;12,000.00
                        </div>
                      </div>
                      <div className="col-6 mb-3">
                        <div className="dark-grey-text font18 line-ht-14">
                          Premium Due Date
                        </div>
                        <div className="font20 line-ht-11">20-dec-2020</div>
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
                        More Details
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

                                <div className="accordion-header text-right">
                                  <span className="pr-2">
                                    As on Date 18-dec-2020{" "}
                                  </span>
                                  <i className="arrow-up" />
                                  <i className="arrow-down" />
                                </div>
                              </div>
                              <div
                                id="flush-collapseOne"
                                className="accordion-collapse collapse show accordion-content"
                              >
                                <div className="accordion-body">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="quikc-links-card padding-none margin-bottom-none box-shadow-none">
                                        <div className="quick-links-inner h-scroll-s">
                                          <ul>
                                            <li
                                              className={
                                                filter === "Payments"
                                                  ? "background-red quicklinks-padding"
                                                  : "quicklinks-padding"
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
                                                  ? "background-red quicklinks-padding"
                                                  : "quicklinks-padding"
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
                                                  ? "background-red quicklinks-padding"
                                                  : "quicklinks-padding"
                                              }
                                              onClick={() =>
                                                filterFunction("Policy Status")
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
                                              Product Type
                                            </label>
                                            <div className="font18 line-ht-11">
                                              Term
                                            </div>
                                          </div>
                                          <div className="col-md-3 mb-3">
                                            <label className="dark-grey-text font16 line-ht-14 mb-0">
                                              Policy Issuance Date
                                            </label>
                                            <div className="font18 line-ht-11">
                                              20-dec-2020
                                            </div>
                                          </div>
                                          <div className="col-md-3 mb-3">
                                            <label className="dark-grey-text font16 line-ht-14 mb-0">
                                              Premium Payment Term
                                            </label>
                                            <div className="font18 line-ht-11">
                                              5
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
                                              ECS registation status
                                            </label>
                                            <div className="font18 line-ht-11">
                                              Paid-up
                                            </div>
                                          </div>
                                          <div className="col-md-3 mb-3">
                                            <label className="dark-grey-text font16 line-ht-14 mb-0">
                                              Total Sum Assured
                                            </label>
                                            <div className="font18 line-ht-11">
                                              &#8377; 3,33,333
                                            </div>
                                          </div>

                                          {/* <div className="col-md-3 mb-3">
                                            <div className="font18 line-ht-11">
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
                                          </div> */}
                                          {/*                                           <div className="col-md-3 mb-3">
                                            <label className="dark-grey-text font16 line-ht-14 mb-0">
                                              Cease Date
                                            </label>
                                            <div className="font18 line-ht-11">
                                              28-dec-2020
                                            </div>
                                          </div> */}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <div className="accordion-item">
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
                                          20-dec-2020
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
                                        28-dec-2020
                                      </div>
                                    </div> 
                            <div className="col-md-3 mb-3">
                              <label className="dark-grey-text font16 line-ht-14 mb-0">
                                Modal Premium
                              </label>
                              <div className="font18 line-ht-11">20,000</div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <label className="dark-grey-text font16 line-ht-14 mb-0">
                                Service Tax
                              </label>
                              <div className="font18 line-ht-11">1,000</div>
                            </div>
                            <div className="col-md-3 mb-3">
                              <label className="dark-grey-text font16 line-ht-14 mb-0">
                                Model Premium with Service Tax
                              </label>
                              <div className="font18 line-ht-11">21,000</div>
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
                                    </div> 
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div> */}
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
                                  Premium Details
                                </h2>
                                <i className="arrow-up" />
                                <i className="arrow-down" />
                              </div>
                              <div
                                id="premium-related-details"
                                className="accordion-collapse collapse  accordion-content"
                              >
                                <div className="accordion-body">
                                  <div className="row">
                                    {/* <div className="col-lg-12 text-right">
                                      <button className="btn btn-primary-s m-bottom-10">
                                        download transaction history
                                      </button>
                                    </div> */}
                                  </div>
                                  <div className="personal-de-card shadow-normal">
                                    <div className="row">
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
                                      <div className="col-md-3 mb-3">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          Modal Premium
                                        </label>
                                        <div className="font18 line-ht-11">
                                          &#8377; 20,000
                                        </div>
                                      </div>
                                      <div className="col-md-3 mb-3">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          GST
                                        </label>
                                        <div className="font18 line-ht-11">
                                          &#8377; 1,000
                                        </div>
                                      </div>
                                      <div className="col-md-3 mb-3">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          Total Instalment Premium
                                        </label>
                                        <div className="font18 line-ht-11">
                                          &#8377; 21,000
                                        </div>
                                      </div>

                                      <div className="col-md-3 mb-3">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          Annualized Premium
                                        </label>
                                        <div className="font18 line-ht-11">
                                          &#8377; 12,000
                                        </div>
                                      </div>
                                      <div className="col-md-3 mb-3">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          Next Premium Due Date
                                        </label>
                                        <div className="font18 line-ht-11">
                                          28-dec-2020
                                        </div>
                                      </div>
                                      <div className="col-md-3 mb-3">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          Total Amount Paid
                                        </label>
                                        <div className="font18 line-ht-11">
                                          &#8377; 20,000
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="accordion-item">
                              <div
                                className="accordion-header-wrapper collapsed"
                                data-toggle="collapse"
                                href="#Portfolio-Details"
                                role="button"
                                aria-expanded="false"
                                aria-controls="premium-related-details"
                              >
                                <h2
                                  className="accordion-header"
                                  id="flush-headingOne"
                                >
                                  Benefit Details
                                </h2>
                                <div className="accordion-header text-right">
                                  <span className="pr-2">
                                    As on Date 18-dec-2020{" "}
                                  </span>
                                  <i className="arrow-up" />
                                  <i className="arrow-down" />
                                </div>
                              </div>
                              <div
                                id="Portfolio-Details"
                                className="accordion-collapse collapse  accordion-content"
                              >
                                <div className="accordion-body">
                                  <div className="row">
                                    <div className="col-lg-12 text-right">
                                      <button
                                        data-toggle="modal"
                                        data-target="#switch-fund"
                                        className="btn btn-primary-s m-bottom-10"
                                      >
                                        Switch Fund
                                      </button>
                                    </div>
                                  </div>
                                  <div className="personal-de-card shadow-normal">
                                    <div className="row">
                                      <div className="col-md-2 mb-2">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          Total Fund Value
                                        </label>
                                        <div className="font18 line-ht-11">
                                          &#8377; 2,22,223
                                        </div>
                                      </div>
                                      <div className="col-md-2 mb-2">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          Fund Name
                                        </label>
                                        <div className="font18 line-ht-11">
                                          Fund Name
                                        </div>
                                      </div>
                                      <div className="col-md-2 mb-2">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          Allocation %
                                        </label>
                                        <div className="font18 line-ht-11">
                                          3
                                        </div>
                                      </div>
                                      <div className="col-md-2 mb-2">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          Unit Fund Value
                                        </label>
                                        <div className="font18 line-ht-11">
                                          &#8377; 2,22,223
                                        </div>
                                      </div>
                                      <div className="col-md-2 mb-2">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          Unit price
                                        </label>
                                        <div className="font18 line-ht-11">
                                          &#8377; 2,22,223
                                        </div>
                                      </div>

                                      <div className="col-md-2 mb-2">
                                        <label className="dark-grey-text font16 line-ht-14 mb-0">
                                          No. of Units
                                        </label>
                                        <div className="font18 line-ht-11">
                                          2
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
                        <div className="accordion-item d-none">
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
                              Transaction History
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
                                <div className="col-lg-1">
                                  <span>from Date</span>
                                  <div className="date-box">
                                    <input
                                      type="date"
                                      className="form-control data-search-box"
                                      id="search"
                                      aria-describedby="data-search"
                                      placeholder="28-dec-2020"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-1">
                                  <span>To Date</span>
                                  <div className="date-box">
                                    <input
                                      type="date"
                                      className="form-control data-search-box"
                                      id="search"
                                      aria-describedby="data-search"
                                      placeholder="28-dec-2020"
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-10 text-right">
                                  <button className="btn btn-primary-s m-bottom-10">
                                    download transaction history
                                  </button>
                                </div>
                              </div>

                              <div className="policy-grid-customer">
                                <div className="policy-grid-header d-none d-lg-block d-sm-none">
                                  <div className="row">
                                    <div className="col-lg-2">
                                      <h3>Deposit Date</h3>
                                    </div>
                                    <div className="col-lg-3">
                                      <h3>Total Amount Due</h3>
                                    </div>
                                    <div className="col-lg-2">
                                      <h3>Total Amount Paid</h3>
                                    </div>
                                    <div className="col-lg-2">
                                      <h3>Payment Status</h3>
                                    </div>
                                    <div className="col-lg-2">
                                      <h3>{""}</h3>
                                    </div>
                                  </div>
                                </div>
                                {[1].map((id, index) => (
                                  <div className="policy-grid-row" key={index}>
                                    <div className="row">
                                      <div
                                        className="m-menu-dots d-lg-none d-md-none d-sm-block"
                                        data-toggle="collapse"
                                        data-target="#collapseExample"
                                        aria-expanded="false"
                                        aria-controls="collapseExample"
                                      >
                                        <img src={threedots} alt="threedots" />
                                      </div>
                                      <div className="col-lg-2 col-md-2 d-none d-lg-block d-sm-none">
                                        <p className="color-b">28-dec-2020</p>
                                      </div>
                                      <div className="col-lg-3 col-md-3">
                                        <p className="color-b">
                                          &#8377; 2,22,222
                                        </p>
                                      </div>
                                      <div className="col-lg-2 d-none d-lg-block d-sm-none">
                                        <p className="color-b">
                                          &#8377; 2,22,222
                                        </p>
                                      </div>
                                      <div className="col-lg-2 col-md-2 d-lg-block d-sm-block">
                                        <p className="color-b">Failed</p>
                                      </div>
                                      <div className="col-lg-2 col-md-4 d-none d-lg-block d-md-block d-sm-none">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                          data-toggle="collapse"
                                          data-target={`#collapseExample${index}`}
                                          aria-expanded="false"
                                          id={`buttonel${index}`}
                                          aria-controls="collapseExample"
                                          onClick={() =>
                                            buttonText(
                                              `collapseExample${index}`,
                                              `buttonel${index}`
                                            )
                                          }
                                        >
                                          View More
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
                                            <p className="grey-text">Reason</p>
                                            <p>
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed
                                              do eiusmod tempor incididunt ut
                                              labore et dolore magna aliqua. Ut
                                              enim ad minim veniam, quis nostrud
                                              exercitation ullamco laboris nisi
                                              ut aliquip ex ea commodo
                                              consequat. Duis aute irure dolor
                                              in reprehenderit in voluptate
                                              velit esse cillum dolore eu fugiat
                                              nulla pariatur.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}

                                <div className="policy-grid-row">
                                  <div className="row">
                                    <div
                                      className="m-menu-dots d-lg-none d-md-none d-sm-block"
                                      data-toggle="collapse"
                                      data-target="#collapseExample"
                                      aria-expanded="false"
                                      aria-controls="collapseExample"
                                    >
                                      <img src={threedots} alt="threedots" />
                                    </div>
                                    <div className="col-lg-2 col-md-2 d-none d-lg-block d-sm-none">
                                      <p className="color-b">28-dec-2020</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                      <p className="color-b">Credit Card</p>
                                    </div>
                                    <div className="col-lg-2 d-none d-lg-block d-sm-none">
                                      <p className="color-b">
                                        &#8377; 2,22,222
                                      </p>
                                    </div>
                                    <div className="col-lg-2 col-md-2 d-lg-block d-sm-block">
                                      <p className="color-b">Success</p>
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
                            href="#premium-related-details"
                            role="button"
                            aria-expanded="false"
                            aria-controls="premium-related-details"
                          >
                            <h2
                              className="accordion-header"
                              id="flush-headingOne"
                            >
                              Transaction History
                            </h2>
                            <i className="arrow-up" />
                            <i className="arrow-down" />
                          </div>
                          <div
                            id="premium-related-details"
                            className="accordion-collapse collapse show accordion-content"
                          >
                            <div className="accordion-body pt-0">
                              <div className="row mb-19">
                                {/* <div className="col-lg-1">
                                  <span>from Date</span>
                                  <div className="date-box">
                                    <input
                                      type="email"
                                      className="form-control data-search-box"
                                      id="search"
                                      aria-describedby="data-search"
                                      placeholder="28-dec-2020"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-1">
                                  <span>To Date</span>
                                  <div className="date-box">
                                    <input
                                      type="email"
                                      className="form-control data-search-box"
                                      id="search"
                                      aria-describedby="data-search"
                                      placeholder="28-dec-2020"
                                    />
                                  </div>
                                </div> */}
                                <div className=" col col-lg-2 pr-0 py-1">
                                  <span>From Date </span>
                                  <input className="height-10" type="date" />
                                </div>
                                <div className="col col-lg-2  height-10 py-1">
                                  <span> To Date</span>
                                  <span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  </span>
                                  <input className="height-10" type="date" />
                                </div>

                                {/* <div className="col-lg-8  text-right">
                                  <button className="btn btn-primary-s m-bottom-10">
                                    download transaction history
                                  </button>
                                </div> */}
                              </div>

                              <div className="policy-grid-customer">
                                <div className="policy-grid-header d-none d-lg-block d-sm-none">
                                  <div className="row">
                                    <div className="col-lg-3">
                                      <h3>Transaction Date</h3>
                                    </div>
                                    <div className="col-lg-3">
                                      <h3>Payment Type</h3>
                                    </div>
                                    <div className="col-lg-2">
                                      <h3> Amount </h3>
                                    </div>
                                    <div className="col-lg-2">
                                      <h3>Payment Status</h3>
                                    </div>
                                    <div className="col-lg-2">
                                      <h3>{""}</h3>
                                    </div>
                                  </div>
                                </div>
                                {[1, 2, 3, 4].map((id, index) => (
                                  <div className="policy-grid-row" key={index}>
                                    <div className="row">
                                      <div
                                        className="m-menu-dots d-lg-none d-md-none d-sm-block"
                                        data-toggle="collapse"
                                        data-target={`#collapseExample${index}`}
                                        aria-expanded="false"
                                        aria-controls="collapseExample"
                                        id={`button${index}`}
                                      >
                                        <img src={threedots} alt="threedots" />
                                      </div>
                                      <div className="col-lg-3 col-md-3">
                                      <label className="d-lg-none" style={{color:"#6c7174"}}>Transaction Date</label>
                                        <p className="color-b">28-dec-2020</p>
                                      </div>
                                      <div className="col-lg-3 col-md-3">
                                      <label className="d-lg-none" style={{color:"#6c7174"}}>Payment Type</label>
                                        <p className="color-b">Credit Card</p>
                                      </div>
                                      <div className="col-lg-2">
                                      <label className="d-lg-none" style={{color:"#6c7174"}}>Amount</label>
                                        <p className="color-b">
                                          &#8377; 2,22,222
                                        </p>
                                      </div>
                                      <div className="col-lg-2 col-md-2 d-lg-block d-sm-block">
                                      <label className="d-lg-none" style={{color:"#6c7174"}}>Payment Status</label>
                                        <p className="color-b">Failed</p>
                                      </div>
                                      <div className="col-lg-2 col-md-4 d-none d-lg-block d-md-block d-sm-none">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s w-92"
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
                                          View More
                                        </button>
                                      </div>
                                    </div>
                                    <div
                                      className="row collapse"
                                      id={`collapseExample${index}`}
                                    >
                                      <div className="col-lg-12 m-pad-div">
                                        <div className="expanded-div">
                                          <div className="row px-2">
                                            <p className="grey-text">Reason</p>
                                            <p className="text-justify">
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed
                                              do eiusmod tempor incididunt ut
                                              labore et dolore magna aliqua. Ut
                                              enim ad minim veniam, quis nostrud
                                              exercitation ullamco laboris nisi
                                              ut aliquip ex ea commodo
                                              consequat. Duis aute irure dolor
                                              in reprehenderit in voluptate
                                              velit esse cillum dolore eu fugiat
                                              nulla pariatur.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                                <div className="policy-grid-row">
                                  <div className="row">
                                    {/* <div
                                      className="m-menu-dots d-lg-none d-md-none d-sm-block"
                                      data-toggle="collapse"
                                      data-target="#collapseExample"
                                      aria-expanded="false"
                                      aria-controls="collapseExample"
                                      id="button"
                                    >
                                      <img src={threedots} alt="threedots" />
                                    </div> */}
                                    <div className="col-lg-3 col-md-3">
                                    <label className="d-lg-none" style={{color:"#6c7174"}}>Transaction Date</label>
                                      <p className="color-b">28-dec-2020</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                    <label className="d-lg-none" style={{color:"#6c7174"}}>Payment Type</label>
                                      <p className="color-b">Credit Card</p>
                                    </div>
                                    <div className="col-lg-2">
                                    <label className="d-lg-none" style={{color:"#6c7174"}}>Amount</label>
                                      <p className="color-b">
                                        &#8377; 2,22,222
                                      </p>
                                    </div>
                                    <div className="col-lg-2 col-md-2 d-lg-block d-sm-block">
                                    <label className="d-lg-none" style={{color:"#6c7174"}}>Payment Status</label>           
                                      <p className="color-b">Success</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="g-footer text-center top-padding">
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                  >
                                    Show More
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <div
                            className="accordion-header-wrapper collapsed"
                            data-toggle="collapse"
                            href="#Unit-Allocation-Period-Wise"
                            role="button"
                            aria-expanded="false"
                            aria-controls="premium-related-details"
                          >
                            <h2
                              className="accordion-header"
                              id="flush-headingOne"
                            >
                              Unit Allocation Period Wise
                            </h2>
                            <i className="arrow-up" />
                            <i className="arrow-down" />
                          </div>
                          <div
                            id="Unit-Allocation-Period-Wise"
                            className="accordion-collapse collapse accordion-content"
                          >
                            <div className="accordion-body">
                              <div className="policy-grid-customer">
                                <div className="policy-grid-header d-none d-lg-block d-sm-none">
                                  <div className="row">
                                    <div className="col-lg-3">
                                      <h3>Date of Transaction</h3>
                                    </div>
                                    <div className="col-lg-3">
                                      <h3>Amount Allocated To Fund</h3>
                                    </div>
                                    <div className="col-lg-2">
                                      <h3>Total Deductions</h3>
                                    </div>
                                    <div className="col-lg-3">
                                      <h3>Fund Name/Option</h3>
                                    </div>
                                    <div className="col-lg-2">
                                      <h3>{""}</h3>
                                    </div>
                                  </div>
                                </div>
                                {[1, 2, 3, 4, 5].map((id, index) => (
                                  <div className="policy-grid-row" key={index}>
                                    <div className="row">
                                      <div
                                        className="m-menu-dots d-lg-none d-md-none d-sm-block"
                                        data-toggle="collapse"
                                        data-target={`#collapsed${index}`}
                                        aria-expanded="false"
                                        aria-controls="collapsed"
                                        id={`buttons${index}`}
                                      >
                                        <img src={threedots} alt="threedots" />
                                      </div>
                                      <div className="col-lg3 col-md-3">
                                      <label className="d-lg-none" style={{color:"#6c7174"}}>Date of Transaction</label> 
                                        <p className="color-b">28-dec-2020</p>
                                      </div>
                                      <div className="col-lg-3 col-md-3">
                                      <label className="d-lg-none" style={{color:"#6c7174"}}>Amount Allocated To Fund</label> 
                                        <p className="color-b">
                                          &#8377;4,00,000
                                        </p>
                                      </div>
                                      <div className="col-lg-2">
                                      <label className="d-lg-none" style={{color:"#6c7174"}}>Total Deductions</label> 
                                        <p className="color-b">
                                          &#8377; 2,22,222
                                        </p>
                                      </div>
                                      <div className="col-lg-2 col-md-2 d-lg-block d-sm-block">
                                      <label className="d-lg-none" style={{color:"#6c7174"}}>Fund Name/Option</label> 
                                        <p className="color-b">Fund Name</p>
                                      </div>
                                      <div className="col-lg-2 col-md-2 d-none d-lg-block d-md-block d-sm-none">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s w-92"
                                          data-toggle="collapse"
                                          data-target={`#collapsed${index}`}
                                          aria-expanded="false"
                                          id={`buttons${index}`}
                                          aria-controls="collapseExample"
                                          onClick={() =>
                                            buttonText(
                                              `collapsed${index}`,
                                              `buttons${index}`
                                            )
                                          }
                                        >
                                          View More
                                        </button>
                                      </div>
                                    </div>
                                    <div
                                      className="row collapse"
                                      id={`collapsed${index}`}
                                    >
                                      <div className="col-lg-12 m-pad-div">
                                        <div className="expanded-div">
                                          <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-12">
                                              <p>
                                                Fund Values
                                                <br />
                                                <span>&#8377; 2,22,222</span>
                                              </p>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12">
                                              <p>
                                                Unit Price <br />
                                                <span>3</span>
                                              </p>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12">
                                              <p>
                                                No of Units <br />
                                                <span>1000</span>
                                              </p>
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

                        <div className="accordion-item">
                          <div
                            className="accordion-header-wrapper collapsed"
                            data-toggle="collapse"
                            href="#Payouts"
                            role="button"
                            aria-expanded="false"
                            aria-controls="premium-related-details"
                          >
                            <h2
                              className="accordion-header"
                              id="flush-headingOne"
                            >
                              Payouts
                            </h2>
                            <i className="arrow-up" />
                            <i className="arrow-down" />
                          </div>
                          <div
                            id="Payouts"
                            className="accordion-collapse collapse accordion-content"
                          >
                            <div className="accordion-body">
                              <div className="policy-grid-customer">
                                <div className="policy-grid-header d-none d-lg-block d-sm-none">
                                  <div className="row">
                                    <div className="col-lg-3">
                                      <h3>Transaction Date</h3>
                                    </div>
                                    <div className="col-lg-3">
                                      <h3>Payout Type</h3>
                                    </div>
                                    <div className="col-lg-3">
                                      <h3>Amount</h3>
                                    </div>
                                    <div className="col-lg-3">
                                      <h3>Status</h3>
                                    </div>
                                  </div>
                                </div>
                                {[1, 2, 3, 4].map((id, index) => (
                                  <div className="policy-grid-row" key={index}>
                                    <div className="row">
                                      {/* <div
                                        className="m-menu-dots d-lg-none d-md-none d-sm-block"
                                        data-toggle="collapse"
                                        data-target={`#collapse${index}`}
                                        aria-expanded="false"
                                        aria-controls="collapse"
                                        id={`button${index}`}
                                      >
                                        <img src={threedots} alt="threedots" />
                                      </div> */}
                                      <div className="col-lg-3 col-md-3">
                                      <label className="d-lg-none" style={{color:"#6c7174"}}>Transaction Date</label> 
                                        <p className="color-b">28-dec-2020</p>
                                      </div>
                                      <div className="col-lg-3 col-md-3">
                                      <label className="d-lg-none" style={{color:"#6c7174"}}>Payout Type</label> 
                                        <p className="color-b">payout type</p>
                                      </div>
                                      <div className="col-lg-3">
                                      <label className="d-lg-none" style={{color:"#6c7174"}}>Amount</label> 
                                        <p className="color-b">
                                          &#8377; 2,22,222
                                        </p>
                                      </div>
                                      <div className="col-lg-3 col-md-3">
                                      <label className="d-lg-none" style={{color:"#6c7174"}}>Status</label> 
                                        <p className="color-b">Failed</p>
                                      </div>
                                      {/* <div className="col-lg-3 col-md-3 d-none d-lg-block d-md-block d-sm-none">
                                        <button
                                          type="button"
                                          className="btn btn-outline-s"
                                          data-toggle="collapse"
                                          data-target={`#collapse${index}`}
                                          aria-expanded="false"
                                          id={`buttoner${index}`}
                                          aria-controls="collapseExample"
                                          onClick={() =>
                                            buttonText(
                                              `collapseExample${index}`,
                                              `buttoner${index}`
                                            )
                                          }
                                        >
                                          View More
                                        </button>
                                      </div> */}
                                    </div>
                                    <div
                                      className="row collapse"
                                      id={`collapse${index}`}
                                    >
                                      <div className="col-lg-12 m-pad-div">
                                        <div className="expanded-div">
                                          <div className="row">
                                            <p className="grey-text">Reason</p>
                                            <p>
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed
                                              do eiusmod tempor incididunt ut
                                              labore et dolore magna aliqua. Ut
                                              enim ad minim veniam, quis nostrud
                                              exercitation ullamco laboris nisi
                                              ut aliquip ex ea commodo
                                              consequat. Duis aute irure dolor
                                              in reprehenderit in voluptate
                                              velit esse cillum dolore eu fugiat
                                              nulla pariatur.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}

                                <div className="policy-grid-row">
                                  <div className="row">
                                    {/* <div
                                      className="m-menu-dots d-lg-none d-md-none d-sm-block"
                                      data-toggle="collapse"
                                      data-target="#collapseExample"
                                      aria-expanded="false"
                                      aria-controls="collapseExample"
                                    >
                                      <img src={threedots} alt="threedots" />
                                    </div> */}
                                    <div className="col-lg-3 col-md-3">
                                    <label className="d-lg-none" style={{color:"#6c7174"}}>Transaction Date</label> 
                                      <p className="color-b">28-dec-2020</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                    <label className="d-lg-none" style={{color:"#6c7174"}}>Payout Type</label> 
                                    <p className="color-b">payout type</p>
                                    </div>
                                    <div className="col-lg-3">
                                    <label className="d-lg-none" style={{color:"#6c7174"}}>Amount</label> 
                                      <p className="color-b">
                                        &#8377; 2,22,222
                                      </p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 d-lg-block d-sm-block">
                                    <label className="d-lg-none" style={{color:"#6c7174"}}>Status</label> 
                                      <p className="color-b">Success</p>
                                    </div>
                                  </div>
                                </div>
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
                                {/* <div className="row">
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
                                      28-dec-2020
                                    </div>
                                  </div>
                                  <div className="col-md-3 mb-3">
                                    <label className="dark-grey-text font16 line-ht-14 mb-0">
                                      Proposer DOB
                                    </label>
                                    <div className="font18 line-ht-11">
                                      28-dec-2020
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
                                </div> */}
                                <section>
                                  <div className="section-header font20 line-ht-14 mb-2">
                                    Policy Owner
                                  </div>
                                  <div className="row">
                                    {/* <div className="col-md-3 mb-3">
                                      <div className="d-flex align-items-center">
                                        <div className="circle40 bg-color6 font24 text-white d-flex justify-content-center align-items-center">
                                          B
                                        </div>
                                        <div className="ml-2">
                                          <label className="dark-grey-text font16 line-ht-14 mb-0">
                                            Name
                                          </label>
                                          <div className="font18 line-ht-11">
                                            Banumathy
                                          </div>
                                        </div>
                                      </div>
                                    </div> */}
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Name
                                      </label>
                                      <div className="font18 line-ht-11">
                                        Angelina Julie
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Mobile Number
                                      </label>
                                      <div className="font18 line-ht-11">
                                        8939291194
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        DOB
                                      </label>
                                      <div className="font18 line-ht-11">
                                        28-dec-2020
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Email ID
                                      </label>
                                      <div className="font18 line-ht-11">
                                        postman@gmail.com
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                  </div>
                                </section>
                                <div className="grey-horizontal-separator mb-3 mt-2" />
                                <section>
                                  <div className="section-header font20 line-ht-14 mb-2">
                                    Life Insured
                                  </div>
                                  <div className="row">
                                    {/* <div className="col-md-3 mb-3">
                                      <div className="d-flex align-items-center">
                                        <div className="circle40 bg-color6 font24 text-white d-flex justify-content-center align-items-center">
                                          B
                                        </div>
                                        <div className="ml-2">
                                          <label className="dark-grey-text font16 line-ht-14 mb-0">
                                            Name
                                          </label>
                                          <div className="font18 line-ht-11">
                                            Banumathy
                                          </div>
                                        </div>
                                      </div>
                                    </div> */}
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Name
                                      </label>
                                      <div className="font18 line-ht-11">
                                        Angelina Julie
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Mobile Number
                                      </label>
                                      <div className="font18 line-ht-11">
                                        8939291194
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        DOB
                                      </label>
                                      <div className="font18 line-ht-11">
                                        28-dec-2020
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Email ID
                                      </label>
                                      <div className="font18 line-ht-11">
                                        postman@gmail.com
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                  <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Relation
                                      </label>
                                      <div className="font18 line-ht-11">
                                        Father
                                      </div>
                                    </div>
                                  </div>
                                </section>
                                <div className="grey-horizontal-separator mb-3 mt-2" />
                                <section>
                                  <div className="section-header font20 line-ht-14 mb-2">
                                    Nominee Details
                                  </div>
                                  <div className="row">
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Name
                                      </label>
                                      <div className="font18 line-ht-11">
                                        Angelina Julie
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Mobile Number
                                      </label>
                                      <div className="font18 line-ht-11">
                                        8939291194
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        DOB
                                      </label>
                                      <div className="font18 line-ht-11">
                                        28-dec-2020
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Email ID
                                      </label>
                                      <div className="font18 line-ht-11">
                                        postman@gmail.com
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                      Relation
                                      </label>
                                      <div className="font18 line-ht-11">
                                        Father
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Allocation %
                                      </label>
                                      <div className="font18 line-ht-11">
                                        22
                                      </div>
                                    </div>
                                  </div>
                                </section>
                                <div className="grey-horizontal-separator mb-3 mt-2" />
                                <section>
                                  <div className="section-header font20 line-ht-14 mb-2">
                                    Nominee Details
                                  </div>
                                  <div className="row">
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Name
                                      </label>
                                      <div className="font18 line-ht-11">
                                        Angelina Julie
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Mobile Number
                                      </label>
                                      <div className="font18 line-ht-11">
                                        8939291194
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        DOB
                                      </label>
                                      <div className="font18 line-ht-11">
                                        28-dec-2020
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Email ID
                                      </label>
                                      <div className="font18 line-ht-11">
                                        postman@gmail.com
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                      Relation
                                      </label>
                                      <div className="font18 line-ht-11">
                                        Father
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Allocation %
                                      </label>
                                      <div className="font18 line-ht-11">
                                        22
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
                            className="accordion-header-wrapper collapsed"
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
                            className="accordion-collapse collapse accordion-content"
                          >
                            <div className="accordion-body">
                              <div className="personal-de-card shadow-normal">
                                <section>
                                  <div className="section-header font20 line-ht-14 mb-2">
                                    Other Information
                                  </div>
                                  <div className="row">
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Client ID
                                      </label>
                                      <div className="font18 line-ht-11">
                                        UI767777
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        E-insurance number
                                      </label>
                                      <div className="font18 line-ht-11">
                                        12345678
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Coverage Status
                                      </label>
                                      <div className="font18 line-ht-11">
                                        XXXX
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Base Sum Assured
                                      </label>
                                      <div className="font18 line-ht-11">
                                        &#8377; 2,22,222
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Maturity Date
                                      </label>
                                      <div className="font18 line-ht-11">
                                        28-dec-2020
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Surrender Amount
                                      </label>
                                      <div className="font18 line-ht-11">
                                        &#8377; 2,22,222
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Policy Issuance Date
                                      </label>
                                      <div className="font18 line-ht-11">
                                        28-dec-2020
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Purpose of Insurance
                                      </label>
                                      <div className="font18 line-ht-11"></div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Total instalment premium
                                      </label>
                                      <div className="font18 line-ht-11">
                                        &#8377; 2,22,222
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Partial Withdrawal Amount
                                      </label>
                                      <div className="font18 line-ht-11">
                                        &#8377; 2,22,222
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Last premium Paid Date
                                      </label>
                                      <div className="font18 line-ht-11">
                                        28-dec-2020
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Total Premium Paid
                                      </label>
                                      <div className="font18 line-ht-11">
                                        &#8377; 2,22,222
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Final premium due date
                                      </label>
                                      <div className="font18 line-ht-11">
                                        28-dec-2020
                                      </div>
                                    </div>
                                  </div>
                                </section>
                                <div className="grey-horizontal-separator mb-3 mt-2" />
                                <section>
                                  <div className="section-header font20 line-ht-14 mb-2">
                                    Coverage Information
                                  </div>
                                  <div className="row">
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Plan
                                      </label>
                                      <div className="font18 line-ht-11">
                                        ABC
                                      </div>
                                    </div>
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
                                        Modal Premium
                                      </label>
                                      <div className="font18 line-ht-11">
                                        &#8377; 2,10,000
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Face Amount
                                      </label>
                                      <div className="font18 line-ht-11">
                                        &#8377; 2,10,000
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Issue Date
                                      </label>
                                      <div className="font18 line-ht-11">
                                        28-dec-2020
                                      </div>
                                    </div>
                                  </div>
                                </section>
                                <div className="grey-horizontal-separator mb-3 mt-2" />
                                <section>
                                  <div className="section-header font20 line-ht-14 mb-2">
                                    Rider Details
                                  </div>
                                  <div className="row">
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Rider status
                                      </label>
                                      <div className="font18 line-ht-11">
                                        xxx
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Rider Name
                                      </label>
                                      <div className="font18 line-ht-11">
                                        Akhil
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Rider sum assured
                                      </label>
                                      <div className="font18 line-ht-11">
                                        &#8377; 2,10,000
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Rider Premium
                                      </label>
                                      <div className="font18 line-ht-11">
                                        &#8377; 2,10,000
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Rider Premium Term
                                      </label>
                                      <div className="font18 line-ht-11">
                                        XXXXX
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Rider Benefit Term
                                      </label>
                                      <div className="font18 line-ht-11">3</div>
                                    </div>
                                  </div>
                                </section>
                                <div className="grey-horizontal-separator mb-3 mt-2" />
                                <section>
                                  <div className="section-header font20 line-ht-14 mb-2">
                                    Annuity Details
                                  </div>
                                  <div className="row">
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Purchase Price
                                      </label>
                                      <div className="font18 line-ht-11">
                                        &#8377; 2,10,000
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Annuity Amount
                                      </label>
                                      <div className="font18 line-ht-11">
                                        Akhil
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Annuity Frequency
                                      </label>
                                      <div className="font18 line-ht-11">3</div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Next Payout Date
                                      </label>
                                      <div className="font18 line-ht-11">
                                        28-dec-2020
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Annuity Option
                                      </label>
                                      <div className="font18 line-ht-11">
                                        XXX
                                      </div>
                                    </div>
                                  </div>
                                </section>
                                <div className="grey-horizontal-separator mb-3 mt-2" />
                                <section>
                                  <div className="section-header font20 line-ht-14 mb-2">
                                    Loan Availed
                                  </div>
                                  <div className="row">
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Total loan amount
                                      </label>
                                      <div className="font18 line-ht-11">
                                        &#8377; 2,10,000
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Outstanding loan amount
                                      </label>
                                      <div className="font18 line-ht-11">
                                        &#8377; 2,10,000
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Current rate of interest
                                      </label>
                                      <div className="font18 line-ht-11">
                                        3%
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <label className="dark-grey-text font16 line-ht-14 mb-0">
                                        Installment
                                      </label>
                                      <div className="font18 line-ht-11">
                                        XXX
                                      </div>
                                    </div>
                                  </div>
                                </section>
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
                              className="accordion-collapse collapse accordion-content"
                            >
                              <div className="accordion-body">
                                <div className="row">
                                  <div className="col-lg-12 text-right">
                                    <button
                                      data-toggle="modal"
                                      data-target="update-bank-details"
                                      className="btn btn-primary-s m-bottom-10"
                                    >
                                      Update Bank Details
                                    </button>
                                  </div>
                                </div>
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
                                        Account number
                                      </label>
                                      <div className="font18 line-ht-11">
                                        233232XXXXX
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
                                        xxxx8788
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
                                        MICR CODE
                                      </label>
                                      <div className="font18 line-ht-11">
                                        xxxx
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
                                <h3>Pre-Approved Offers</h3>
                                <div className="today">Term</div>
                              </div>
                            </div>
                            <div className="row pad-10 card-body">
                              <div className="col-2" style={{ padding: "0px" }}>
                                <img
                                  className="m-bottom-6 bottom-26"
                                  src={Upsell}
                                  alt="creative"
                                />
                              </div>
                              <div
                                className="col-10"
                                style={{ paddingLeft: "0px" }}
                              >
                                <p className="m-top-12">&#8377; 2,22,222</p>
                                <span className="grey">
                                  Recommended Products: 'Product Name'
                                </span>
                              </div>
                            </div>
                            <div className="row">
                              {/* <div className="col-lg-6 text-right">
                                  <button className="btn btn-outline-s">
                                    Send Details
                                  </button>
                                </div> */}
                              <div className="col-lg-12 text-right">
                                <button
                                  type="button"
                                  class="btn btn-outline-s width-153"
                                  data-toggle="modal"
                                  data-target="#pasaKnowMore"
                                >
                                  Know More
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
                                <h3>Pre-Approved Offers</h3>
                                <div className="today">Non-Term</div>
                              </div>
                            </div>
                            <div className="row pad-10 card-body">
                              <div className="col-2" style={{ padding: "0px" }}>
                                <img
                                  className="m-bottom-6 bottom-26"
                                  src={Upsell}
                                  alt="creative"
                                />
                              </div>
                              <div
                                className="col-10"
                                style={{ paddingLeft: "0px" }}
                              >
                                <p className="m-top-12">&#8377; 2,22,222</p>
                                <span className="grey">
                                  Recommended Products: 'Product Name'
                                </span>
                              </div>
                            </div>
                            <div className="row">
                              {/* <div className="col-lg-6 text-right">
                                  <button className="btn btn-outline-s">
                                    Send Details
                                  </button>
                                </div> */}
                              <div className="col-lg-12 text-right">
                                <button
                                  type="button"
                                  class="btn btn-outline-s width-153"
                                  data-toggle="modal"
                                  data-target="#pasaKnowMore2"
                                >
                                  Know More
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
                                    src={policycontractIcon}
                                    alt="policycontractIcon"
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
                          <div
                            className="col-lg-2 col-md-4 col-sm-6 col-6 pad-m-x"
                            data-toggle="modal"
                            data-target="#sales-illustration"
                            style={{ cursor: "pointer" }}
                          >
                            <div className="state-box shadow-normal">
                              <div className="row r1">
                                <div className="col-lg-12 text-center">
                                  <img src={salesillIcon} alt="salesillIcon" />
                                </div>
                              </div>
                              <div className="row r2">
                                <div className="col-lg-12 text-center">
                                  <h3>Sales Illustration</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <div className="col-lg-2 col-md-4 col-sm-6 col-6 pad-m-x">
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
                                  <h3> Reinstatement Quotation</h3>
                                </div>
                              </div>
                            </div>
                          </div> */}
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
                          {/* <div className="col-lg-2 col-md-4 col-sm-6 col-6 pad-m-x">
                            <div className="state-box shadow-normal">
                              <div className="row r1">
                                <div className="col-lg-12 text-center">
                                  <img src={tdscertIcon} alt="tdscertIcon" />
                                </div>
                              </div>
                              <div className="row r2">
                                <div className="col-lg-12 text-center">
                                  <h3>TDS Certificate</h3>
                                </div>
                              </div>
                            </div>
                          </div> */}
                          <div
                            className="col-lg-2 col-md-4 col-sm-6 col-6 pad-m-x"
                            data-toggle="modal"
                            data-target="#Premium-Due-Certificate"
                            style={{ cursor: "pointer" }}
                          >
                            <div className="state-box shadow-normal">
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
                                  <h3>Premium Due certificate</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <div className="col-lg-2 col-md-4 col-sm-6 col-6 pad-m-x">
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
                          </div> */}
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
                      <label htmlFor="exampleInputEmail1">Search Policy</label>
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
                    {/* <div className="row">
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
          <div className="row">
            <div className="col-lg-3"></div>
          </div>

          <div
            className={forgotmodal ? `modal fade show` : "modal fade"}
            style={forgotmodal ? { display: "block" } : { display: "none" }}
            id="forgot-userid"
            data-backdrop="static"
            data-keyboard="false"
            tabIndex={-1}
            aria-labelledby="forgot-password"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title  bold" id="staticBackdropLabel">
                    Switch Fund
                  </h5>
                  <button
                    type="button"
                    className="close modal-close-button"
                    data-dismiss="modal"
                    onClick={(e) => {
                      e.preventDefault();
                      setforgotmodal(false);
                    }}
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>
                    Clicking on switch fund option will redirect you to customer
                    portal
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      setforgotmodal(false);
                    }}
                    data-dismiss="modal"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="switch-fund"
            data-backdrop="static"
            data-keyboard="false"
            tabIndex={-1}
            aria-labelledby="forgot-password"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-width-family-tag">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title  bold" id="staticBackdropLabel">
                      Switch Fund
                    </h5>
                    <button
                      type="button"
                      className="close modal-close-button"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>
                      Clicking on switch fund option will redirect you to
                      Customer Portal
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-dismiss="modal"
                    >
                      OK
                    </button>
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
                                <div className="g-container">
                                  {/* Block */}
                                  <div className="g-header d-nones d-lg-block d-md-none d-sm-none d-xs-none ">
                                    <div className="row">
                                      <div className="col-md-4 d-none d-lg-block d-md-none d-sm-none d-xs-none ">
                                        <label className="ml-4">
                                          Policy ID
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
                                        <div>
                                          <div
                                            className="form-check-label"
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
                    <button className="btn btn-primary" data-dismiss="modal">
                      Download
                    </button>
                    <button
                      onClick={() => {
                        openToast(
                          "Tax Certificate has been successfully sent to xxx mobile number and xxx email ID"
                        );
                      }}
                      className="btn btn-outline-s"
                      data-dismiss="modal"
                    >
                      Share
                    </button>{" "}
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
                  You can only download statements for last 3 Financial Years
                  from portal. To download older statement, please raise a query
                  in CRM.
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
                                <div className="g-container ">
                                  {/* Block */}
                                  <div className="g-header d-nones d-lg-block d-md-none d-sm-none d-xs-none ">
                                    <div className="row">
                                      <div className="col-md-4 d-none d-lg-block d-md-none d-sm-none d-xs-none ">
                                        <label className="ml-4">
                                          Policy ID
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
                                        <div>
                                          <div
                                            className="form-check-label"
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

                                  {/* Block */}
                                  {/* Block */}

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
                    <button className="btn btn-primary">Download</button>
                    <button className="btn btn-outline-s">Share</button>{" "}
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
                                        <div>
                                          <div
                                            className="form-check-label"
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
                    <button className="btn btn-primary">Download</button>
                    <button className="btn btn-outline-s">Share</button>{" "}
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
                                          Policy ID
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
                                        <div>

                                          <div
                                            className="form-check-label"
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
                    <button className="btn btn-primary">Download</button>
                    <button className="btn btn-outline-s">Share</button>{" "}
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
                <div className="grey">
                  Policy contract are only available for Policies issued after
                  Apr 2017. Please raise a query to get older documents.
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
                                      <div className="col-md-4 d-none d-lg-block d-md-none d-sm-none d-xs-none ">
                                        <label className="ml-4">
                                          Policy ID
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
                                        <div>
                                          <div
                                            className="form-check-label"
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
                    <button className="btn btn-primary">Download</button>
                    <button className="btn btn-outline-s">Share</button>{" "}
                  </div>
                </div>
              </div>
            </div>
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
                <h5 class="modal-title bold " id="exampleModalLabel">
                  Pasa Offer
                </h5>
                <button
                  type="button"
                  className="close modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body">
                <p className="font-18 color-black">
                  Pre Approved Offers (PASA) are available for Akhil
                  <br />
                  • No Medicals <br />• No Income Proof
                </p>
                <p className="font-18 color-black">
                  You can offer any Term Product to Akhil up to a Sum Assured of
                  ₹ 2,22,222. Recommended Products for this Customer - 'Product
                  Name'
                </p>
                <p className="dark-grey-text font-15">
                  <b> Disclaimer:</b> Subject to Underwriting approvals based on
                  actual information provided in the application form.
                  <br />
                </p>
              </div>
              {/* <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div> */}
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
                  Pasa Offer
                </h5>
                <button
                  type="button"
                  className="close modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body">
                <p className="font-18 color-black">
                  Pre Approved Offers (PASA) are available for Akhil
                  <br />
                  • No Medicals <br />• No Income Proof
                </p>

                <p className="font-18 color-black">
                  You can offer any Non-Term Product to Akhil up to a Sum
                  Assured of ₹ 2,22,222. Recommended Products for this Customer
                  - 'Product Name'.
                </p>
                {/* <p>
                      Term PASA available, You can offer any Term Product to **
                      up to a Sum Assured of **. Recommended Products for this
                      Customer - ****
                    </p> */}
                <p className="dark-grey-text font-15">
                  <b> Disclaimer:</b> Subject to Underwriting approvals based on
                  actual information provided in the application form.
                  <br />
                </p>
              </div>
              {/* <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Policydetails;
