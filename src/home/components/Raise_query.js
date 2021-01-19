import React from "react";
import breadcrumbs from "../../assets/img/icons/breadcrumbs-arrow.png";
function Raise_query() {
  /*   var x = document.getElementById("");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  } */

  const ToggleFunction = (id1, id2, person) => {
    const self = document.getElementById("requestForSelf");
    const customer = document.getElementById("requestForCustomer");
    document.getElementById(id1).style.display = "block";
    document.getElementById(id2).style.display = "none";
    if (person == "self") {
      self.parentElement.classList.add("active");
      customer.parentElement.classList.remove("active");
    } else {
      customer.parentElement.classList.add("active");
      self.parentElement.classList.remove("active");
    }
  };
  const commission = (id4, id5, id6) => {
    const comm = document.getElementById("commissionRelated");
    document.getElementById(id4).style.display = "block";
  };
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
      <title>Raise a New</title>
      {/* Bootstrap core CSS */}
      <link href="./assets/css/vendor/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="./assets/css/custom/index.css" />
      <header>
        <div className="sample-header"></div>
      </header>
      <main className="bg-white pb-4" role="main">
        <div className="breadcrubs-div shadow-sm d-none d-lg-block d-md-block  d-sm-none">
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
            <div className="col-lg-8">
              <div className="col-lg-none col-md-none col-sm-block">
                <br />
              </div>
              <h1 className="p-header">Raise a New Query</h1>
            </div>
            <div className="col-lg-4 text-right d-none d-lg-block d-md-block  d-sm-none">
              <button className="btn btn-primary-s">Back to Query List</button>
            </div>
          </div>
          {/* Heading Ends  */}
          <div className="raise-query-div">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <h5 className="btnBlockLabel">
                        Choose for whom you want to raise a request
                      </h5>
                      <div className="radioBtnBlock">
                        <div className="custom-control custom-radio">
                          <input
                            id="requestForSelf"
                            type="radio"
                            className="custom-control-input"
                            defaultValue="self"
                            name="requestFor"
                            onClick={() => {
                              ToggleFunction(
                                "self-step2",
                                "cust-step2",
                                "self"
                              );
                            }}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="requestForSelf"
                          >
                            Self
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            id="requestForCustomer"
                            type="radio"
                            className="custom-control-input"
                            defaultValue="customer"
                            name="requestFor"
                            onClick={() =>
                              ToggleFunction(
                                "cust-step2",
                                "self-step2",
                                "customer"
                              )
                            }
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="requestForCustomer"
                          >
                            Customer
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row no-display"
                  id="cust-step2"
                  style={{ display: "none" }}
                >
                  <div className="col-lg-12">
                    <h3>Customer Related Steps to follow</h3>
                  </div>
                </div>
                <div
                  className="row no-display"
                  id="self-step2"
                  style={{ display: "none" }}
                >
                  <div className="col-lg-12">
                    <div className="form-group">
                      <h5 className="btnBlockLabel">
                        Help us to understand your concern regarding
                      </h5>
                      <div className="radioBtnBlock">
                        <div className="custom-control custom-radio">
                          <input
                            id="rewardsRecognition"
                            type="radio"
                            className="custom-control-input"
                            defaultValue="rewards"
                            name="concernRegarding"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="rewardsRecognition"
                          >
                            Rewards &amp; Recognition
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            id="commissionRelated"
                            type="radio"
                            className="custom-control-input"
                            defaultValue="commission"
                            name="concernRegarding"
                            onClick={() => commission("self-step3")}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="commissionRelated"
                          >
                            Commission Related
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row no-display" id="self-step3">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <h5 className="btnBlockLabel">
                        Is it for existing or new?
                      </h5>
                      <div className="radioBtnBlock">
                        <div className="custom-control custom-radio">
                          <input
                            id="newQuery"
                            type="radio"
                            className="custom-control-input"
                            defaultValue="new"
                            name="existingOrNewQuery"
                            id="self-step3"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="newQuery"
                            id="self-step3"
                          >
                            New
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            id="existingQuery"
                            type="radio"
                            className="custom-control-input"
                            defaultValue="existing"
                            name="existingOrNewQuery"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="existingQuery"
                          >
                            Existing
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="frq_box d-none d-sm-block  d-lg-block d-md-block">
                  <div className="row">
                    <div className="col-lg-12">
                      <h2>Frequently Raised Queries</h2>
                      <p>
                        {" "}
                        <span>1</span>Advisor code is Active now but renewal
                        commission is not paid yet
                      </p>
                      <p>
                        {" "}
                        <span>2</span>I want Renewal commission of Fortune Elite
                        policy
                      </p>
                      <p>
                        {" "}
                        <span>3</span>I do not want ABSLI to deduct profession
                        tax? What should I do?
                      </p>
                      <p>
                        {" "}
                        <span>4</span>What is mean by Cheque Dishonored Charges
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 text-right">
                      <button className="btn btn-outline-secondary">
                        View All
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row no-display" id="self-step4">
              <div className="col-lg-12">
                <div className="form-group">
                  <h5 className="btnBlockLabel">Select Query Type</h5>
                  <div className="radioBtnBlock">
                    <div className="custom-control custom-radio">
                      <input
                        id="queryTypePayment"
                        type="radio"
                        className="custom-control-input"
                        defaultValue="payment"
                        name="queryType"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="queryTypePayment"
                      >
                        Commission payment related
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        id="queryTypeHold"
                        type="radio"
                        className="custom-control-input"
                        defaultValue="hold"
                        name="queryType"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="queryTypeHold"
                      >
                        Commission hold / not released
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        id="queryTypeProvisions"
                        type="radio"
                        className="custom-control-input"
                        defaultValue="provisions"
                        name="queryType"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="queryTypeProvisions"
                      >
                        Commission Provisions Related
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        id="queryTypeTds"
                        type="radio"
                        className="custom-control-input"
                        defaultValue="tds"
                        name="queryType"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="queryTypeTds"
                      >
                        TDS Related
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row no-display" id="self-step5">
              <div className="col-lg-12">
                <div className="form-group">
                  <h5 className="btnBlockLabel">Select Sub Category</h5>
                  <div className="radioBtnBlock">
                    <div className="custom-control custom-radio">
                      <input
                        id="neftRejection"
                        type="radio"
                        className="custom-control-input"
                        defaultValue="neftrejection"
                        name="querySubCategory"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="neftRejection"
                      >
                        NEFT Rejection
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        id="chequeIssue"
                        type="radio"
                        className="custom-control-input"
                        defaultValue="chequeissue"
                        name="querySubCategory"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="chequeIssue"
                      >
                        Cheque Revalidation &amp; Re-issuance
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="no-display" id="self-step6">
              <div className="row">
                <div className="col-lg-12">
                  <br />
                  <p>Please Enter Distributor/BMN Code (Optional)</p>
                </div>
                <div className="col-lg-4">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="123H123"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <br />
                  <p>Please Enter Policy Number</p>
                </div>
                <div className="col-lg-4">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="123H123"
                  />
                </div>
                <div className="col-lg-2">
                  <button type="button" className="btn btn-outline-secondary">
                    View Policy Detail
                  </button>
                </div>
              </div>
              <div className="row query-customer-details">
                <div className="col-lg-12">
                  <br />
                  <p className="text-black">Customer Details</p>
                </div>
                <div className="col-lg-3 col-md-4 ">
                  <input
                    type="text"
                    defaultValue="Tanmoy Misra"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    disabled
                  />
                </div>
                <div className="col-lg-3 col-md-4">
                  <input
                    type="text"
                    defaultValue="tanmoy@gmail.com"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    disabled
                  />
                </div>
                <div className="col-lg-3 col-md-4">
                  <input
                    type="text"
                    defaultValue={9876543210}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    disabled
                  />
                </div>
                <div className="col-lg-3 ">
                  <button type="button" className="btn btn-outline-secondary">
                    View Customer Detail
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <br />
                  <p>Describe your query</p>
                </div>
                <div className="col-lg-6">
                  <textarea
                    id="textarea"
                    rows={5}
                    placeholder="Describe"
                    defaultValue={""}
                  />
                  <label className="float-right">Max 500 Characters</label>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <button
                    type="button"
                    className="btn btn-outline-secondary-lrg"
                  >
                    Reset
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary-lrg"
                    data-toggle="modal"
                    data-target="#raise-query"
                  >
                    Raise a Query
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      {/* raise_query  Modal */}
      <div
        className="modal fade"
        id="raise-query"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        aria-labelledby="forgot-password"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content modal-regular">
            <div className="modal-header">
              <h5 className="modal-title  bold" id="staticBackdropLabel">
                <img src="./assets/img/icons/red-tick.svg" /> &nbsp; Query
                Submitted Successfully
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
                Your query has been submitted successfully! You will be notified
                once it is assigned.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary">
                Back to Query List
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                View Query Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-muted">
        <div className="sample-footer"></div>
      </footer>
    </div>
  );
}
export default Raise_query;
