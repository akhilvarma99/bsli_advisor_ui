import React from "react";
import closeIcon from "../../assets/img/icons/close.svg";
import lockIcon from "../../assets/img/icons/lock.svg";
import keyIcon from "../../assets/img/icons/key.svg";
import BlankHeader from "../../blankheader";

function Trouble() {
  return (
    <>
      <BlankHeader />
      <main role="main">
        <section className="grey-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="cardz shadow-sm">
                  <p className="h4 bold">Can't sign in to your account </p>
                  <p className="font-size-18">
                    If you can't sign in to your Account, select the issue that
                    most closely applies to you. Follow the instructions for
                    help getting back in to your account.
                    {/* <strong>Select the issue:</strong> */}
                  </p>
                  {/* <ul className="font-size-18">
                    <li>You forgot your password. </li>
                    <li>Your Account is locked</li>
                    <li>You know your username and password, but you can't sign in. </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="white-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <div
                      className="accordion-header-wrapper collapsed"
                      data-toggle="collapse"
                      href="#forgot-password"
                      role="button"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <h2 className="accordion-header" id="flush-headingOne">
                        You forgot your password
                      </h2>
                      <i className="arrow-up" />
                      <i className="arrow-down" />
                    </div>
                    <div
                      id="forgot-password"
                      className="accordion-collapse collapse show accordion-content"
                    >
                      <div className="accordion-body">
                        <div className="tr-card">
                          <p className="h4 bold">
                            <img
                              className="mrgn-right-10"
                              src={keyIcon}
                              alt="keyIcon"
                            />
                          </p>
                          <p className="font-size-18">
                            Step 1: Go to{" "}
                            <a href="https://selfhelp.abfsg.com">
                              https://selfhelp.abfsg.com/{" "}
                            </a>
                          </p>
                          <p className="font-size-18">
                            Step 2: Use “AD account unlock and password reset”
                            option at bottom left.{" "}
                          </p>
                          <p className="font-size-18">
                            Step 3: Reset your password when prompted. Choose a
                            strong password that you haven't already used with
                            this account.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <div
                      className="accordion-header-wrapper collapsed"
                      data-toggle="collapse"
                      href="#account_lock"
                      role="button"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <h2 className="accordion-header" id="flush-headingOne">
                        Your account is locked
                      </h2>
                      <i className="arrow-up" />
                      <i className="arrow-down" />
                    </div>
                    <div
                      id="account_lock"
                      className="accordion-collapse collapse accordion-content"
                    >
                      <div className="accordion-body">
                        <div className="tr-card">
                          <p className="h4 bold">
                            <img
                              className="mrgn-right-10"
                              src={lockIcon}
                              alt="lockIcon"
                            />
                          </p>

                          <p className="font-size-18">
                            Step 1: Go to{" "}
                            <a href="https://selfhelp.abfsg.com">
                              https://selfhelp.abfsg.com/{" "}
                            </a>
                          </p>
                          <p className="font-size-18">
                            Step 2: Use “AD account unlock and password reset”
                            option at bottom left.{" "}
                          </p>
                          <p className="font-size-18">
                            Step 3: Reset your password when prompted. Choose a
                            strong password that you haven't already used with
                            this account.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <div
                      className="accordion-header-wrapper collapsed"
                      data-toggle="collapse"
                      href="#you_know"
                      role="button"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <h2 className="accordion-header" id="flush-headingOne">
                        You know your username and password, but you can't sign
                        in.
                      </h2>
                      <i className="arrow-up" />
                      <i className="arrow-down" />
                    </div>
                    <div
                      id="you_know"
                      className="accordion-collapse collapse accordion-content"
                    >
                      <div className="accordion-body">
                        <div className="tr-card">
                          <p className="h4 bold">
                            <img
                              className="mrgn-right-10"
                              src={closeIcon}
                              alt="closeIcone"
                            />
                          </p>

                          <p className="font-size-18">
                            You get an error message. (Username or password is
                            wrong, invalid, or unrecognized)
                          </p>
                          <p />
                          <p className="font-size-18 bold">Make sure that:</p>
                          <p className="font-size-18">
                            a. There isn't a typo in your username or password.{" "}
                          </p>
                          <p className="font-size-18">
                            b. You've entered your correct UserID{" "}
                          </p>
                          <p className="font-size-18">
                            c. Caps lock is turned off{" "}
                          </p>
                          <p className="font-size-18">
                            d. Your keyboard is in the right language.
                          </p>
                          <p className="font-size-18 bold">
                            Refresh your browser and try signing in again.{" "}
                          </p>
                          <p className="font-size-18 bold">
                            If you're still getting the error message, 
                            <span className="underline">
                              follow the steps to recover your account.
                            </span>
                          </p>
                          <p className="font-size-18">
                            Step 1: Go to{" "}
                            <a href="https://selfhelp.abfsg.com">
                              https://selfhelp.abfsg.com/{" "}
                            </a>
                          </p>
                          <p className="font-size-18">
                            Step 2: Use “AD account unlock and password reset”
                            option at bottom left.{" "}
                          </p>
                          <p className="font-size-18">
                            Step 3: Reset your password when prompted. Choose a
                            strong password that you haven't already used with
                            this account.{" "}
                          </p>
                          <p className="font-size-18 color-red bold">
                            NOTE: In case you face any other problem or need
                            assistance, please call our toll free no. 1800 270
                            7000
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Trouble;
