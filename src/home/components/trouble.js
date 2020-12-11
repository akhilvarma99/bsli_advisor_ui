import React from 'react';
import closeIcon from '../../assets/img/icons/close.svg';
import lockIcon from '../../assets/img/icons/lock.svg';
import keyIcon from '../../assets/img/icons/key.svg';
// import { NavLink } from 'react-router-dom';


function Trouble() {
    return (

        <main role="main">
            <section className="grey-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="cardz shadow-sm">
                                <p className="h4 bold">Can't sign in to your account </p>
                                <p className="font-size-18">If you can't sign in to your Account, select the issue that most closely applies to you. Follow the instructions for help getting back in to your account.</p>
                                <p className="font-size-18">Select the issue:</p>
                                <ul className="font-size-18" type="circle">
                                    <li>You forgot your password. </li>
                                    <li>Your Account is locked </li>
                                    <li>You know your username and password, but you can't sign in. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="white-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br /><br />
                            <p className="h4 bold"><img className="mrgn-right-10" alt='closeIcon' src={closeIcon} />You forgot your password. </p>
                            <p className="font-size-18">Step 1: Go to <a href="https://selfhelp.abfsg.com/ ">https://selfhelp.abfsg.com/ </a></p>
                            <p className="font-size-18">Step 2: Use “AD account unlock and password reset” option at bottom left. </p>
                            <p className="font-size-18">Step 3: Reset your password when prompted. Choose a strong password that you haven't already used with this account. </p>
                            <p className="h4 bold"><img className="mrgn-right-10" alt={lockIcon} src={lockIcon} />Your Account is locked </p>
                            <p className="font-size-18">Step 1: Go to <a href="https://selfhelp.abfsg.com/ ">https://selfhelp.abfsg.com/ </a></p>
                            <p className="font-size-18">Step 2: Use “AD account unlock and password reset” option at bottom left. </p>
                            <p className="font-size-18">Step 3: Reset your password when prompted. Choose a strong password that you haven't already used with this account. </p>
                            <p className="h4 bold"><img className="mrgn-right-10" alt={keyIcon} src={keyIcon} />You know your username and password, but you can't sign in.</p>
                            <ol className="font-size-18">
                                <li>You get an error message. <br /><p>Username or password is wrong, invalid, or unrecognized </p></li>
                                <ol>
                                    <li>
                                        Make sure that:
                      <ol type="a">
                                            <li>There isn't a typo in your username or password. </li>
                                            <li>You've entered your correct UserID </li>
                                            <li>Caps lock is turned off. </li>
                                            <li>Your keyboard is in the right language</li>
                                        </ol>
                                    </li>
                                    <li>Refresh your browser and try signing in again.</li>
                                    <li>If you're still getting the error message, follow the steps to recover your account.
                      <ul type="circle">
                                            <li>Step 1: Go to <a href="https://selfhelp.abfsg.com/ ">https://selfhelp.abfsg.com/ </a></li>
                                            <li>Step 2: Use “AD account unlock and password reset” option at bottom left. </li>
                                            <li>Step 3: Reset your password when prompted. Choose a strong password that you haven't already used with this account. </li>
                                        </ul>
                                    </li>
                                </ol>
                            </ol>
                            <br />
                            <p className="font-size-18 color-red bold">NOTE: In case you face any other problem or need assistance, please call our toll free no. 1800 270 7000</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Trouble
