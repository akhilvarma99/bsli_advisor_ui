import React, { useState } from "react";


const Footer = (props) => {
    const [menuExpandState, setMenuExpandState] = useState(0);
    const expandCatHandler = (e, indexVal) => {
        e.preventDefault()
        if (menuExpandState === indexVal) {
            setMenuExpandState(0);
        } else {
            setMenuExpandState(indexVal);
        }

    }
    return (
        <>

            <div className="container-fluid">
                <div className="bs-footer">
                    <div className="content-wrapper">
                        <div className="outerpadding">
                            <div className="link-list-col">
                                <div className="link-list-item">
                                    <div className={`list-item ${(menuExpandState === 1) ? 'active' : ''}`}>
                                        <h4 className="list-title">
                                            <a href=" #" className="title">Term Insurance <span className="icon icon-chevron-down" onClick={(e) => { expandCatHandler(e, 1) }}></span></a>
                                        </h4>
                                        <div className="list-cont">
                                            <ul className="sub-list">
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Life Shield Plan</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Income Shield Plan</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={`list-item ${(menuExpandState === 2) ? 'active' : ''}`}>
                                        <h4 className="list-title">
                                            <a href=" #" className="title">(ULIP) Wealth with Protection Plans <span className="icon icon-chevron-down" onClick={(e) => { expandCatHandler(e, 2) }}></span></a>
                                        </h4>
                                        <div className="list-cont">
                                            <ul className="sub-list">
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Wealth Max Plan</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Wealth Secure Plan</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Wealth Assure Plus</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Fortune Elite Plan</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Wealth Aspire Plan</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={`list-item ${(menuExpandState === 3) ? 'active' : ''}`}>
                                        <h4 className="list-title">
                                            <a href=" #" className="title">Savings with protection <span className="icon icon-chevron-down" onClick={(e) => { expandCatHandler(e, 3) }}></span></a>
                                        </h4>
                                        <div className="list-cont">
                                            <ul className="sub-list">
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI SecurePlus Plan</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Vision MoneyBack Plus Plan</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Vision LifeIncome Plan</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Savings Plan</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Vision LifeSecure Plan</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Income Assured Plan</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Vision Endowment Plus Plan</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Guaranteed Milestone Plan</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI - Jeevan Bachat Plan</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Monthly Income Plan</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={`list-item ${(menuExpandState === 4) ? 'active' : ''}`}>
                                        <h4 className="list-title">
                                            <a href=" #" className="title">Group Insurance <span className="icon icon-chevron-down" onClick={(e) => { expandCatHandler(e, 4) }}></span></a>
                                        </h4>
                                        <div className="list-cont">
                                            <h5 className="sub-title">Protection Solution</h5>
                                            <ul className="sub-list typ-sub-list">
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Employer Employee</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Non Employer Employee</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Credit Life</a>
                                                </li>
                                            </ul>
                                            <h5 className="sub-title">Retirement Solution</h5>
                                            <ul className="sub-list typ-sub-list">
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Gratuity</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Leave Encashment</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">PRMBS</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Superannuation</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Group Anuity</a>
                                                </li>
                                            </ul>
                                            <a href=" #" title="dummy title text" className="link bold">Group Anuity</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="link-list-item">
                                    <div className={`list-item ${(menuExpandState === 5) ? 'active' : ''}`}>
                                        <h4 className="list-title">
                                            <a href=" #" className="title">Retirement Plan <span className="icon icon-chevron-down" onClick={(e) => { expandCatHandler(e, 5) }}></span></a>
                                        </h4>
                                        <div className="list-cont">
                                            <ul className="sub-list">
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Empower Pension Plan</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Immediate Annuity Plan</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Empower Pension- SP Plan</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={`list-item ${(menuExpandState === 6) ? 'active' : ''}`}>
                                        <h4 className="list-title">
                                            <a href=" #" className="title">Health Insurance <span className="icon icon-chevron-down" onClick={(e) => { expandCatHandler(e, 6) }}></span></a>
                                        </h4>
                                        <div className="list-cont">
                                            <ul className="sub-list">
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Cancer Shield Plan</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI CritiShield Plan</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Hospital Plus Plan</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Wealth Aspire Plan</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={`list-item ${(menuExpandState === 7) ? 'active' : ''}`}>
                                        <h4 className="list-title">
                                            <a href=" #" className="title">Child Plans <span className="icon icon-chevron-down" onClick={(e) => { expandCatHandler(e, 7) }}></span></a>
                                        </h4>
                                        <div className="list-cont">
                                            <ul className="sub-list">
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Vision Star Plan</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={`list-item ${(menuExpandState === 8) ? 'active' : ''}`}>
                                        <h4 className="list-title">
                                            <a href=" #" className="title">Discontinued Plans <span className="icon icon-chevron-down" onClick={(e) => { expandCatHandler(e, 8) }}></span></a>
                                        </h4>
                                        <div className="list-cont">
                                            <ul className="sub-list">
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Ultima</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">ABSLI Ultima</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={`list-item ${(menuExpandState === 9) ? 'active' : ''}`}>
                                        <h4 className="list-title">
                                            <a href=" #" className="title">Pay Premium <span className="icon icon-chevron-down" onClick={(e) => { expandCatHandler(e, 9) }}></span></a>
                                        </h4>
                                        <div className="list-cont">
                                            <ul className="sub-list">
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Initial</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Renewal</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Loan Payment</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={`list-item ${(menuExpandState === 10) ? 'active' : ''}`}>
                                        <h4 className="list-title">
                                            <a href=" #" className="title">Insurance Calculators <span className="icon icon-chevron-down" onClick={(e) => { expandCatHandler(e, 10) }}></span></a>
                                        </h4>
                                        <div className="list-cont">
                                            <ul className="sub-list">
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Human Life Value Calculator</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Retirement Calculator</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Wealth Calculator</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Child Calculator</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Health Insurance Calculator</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Tax Savings Calculator</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={`list-item ${(menuExpandState === 11) ? 'active' : ''}`}>
                                        <h4 className="list-title">
                                            <a href=" #" className="title">About Us <span className="icon icon-chevron-down" onClick={(e) => { expandCatHandler(e, 11) }}></span></a>
                                        </h4>
                                        <div className="list-cont">
                                            <ul className="sub-list">
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Who Are We</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Company Profile</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Public Disclosure</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="link-list-item">
                                    <div className={`list-item ${(menuExpandState === 12) ? 'active' : ''}`}>
                                        <h4 className="list-title">
                                            <a href=" #" className="title">Our Funds <span className="icon icon-chevron-down" onClick={(e) => { expandCatHandler(e, 12) }}></span></a>
                                        </h4>
                                        <div className="list-cont">
                                            <ul className="sub-list">
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">NAV Performance</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Fund Portfolio & Benchmark</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Market Outlook</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={`list-item ${(menuExpandState === 13) ? 'active' : ''}`}>
                                        <h4 className="list-title">
                                            <a href=" #" className="title">How Do I? <span className="icon icon-chevron-down" onClick={(e) => { expandCatHandler(e, 13) }}></span></a>
                                        </h4>
                                        <div className="list-cont">
                                            <ul className="sub-list">
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Manage My Policy</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Manage Claims</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Register for One ABD ID</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Download Forms</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">FAQs</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Read Articles</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Contact Us</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Feedback</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Insurance Dictionary</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={`list-item ${(menuExpandState === 14) ? 'active' : ''}`}>
                                        <h4 className="list-title">
                                            <a href=" #" className="title">Quick Links <span className="icon icon-chevron-down" onClick={(e) => { expandCatHandler(e, 14) }}></span></a>
                                        </h4>
                                        <div className="list-cont">
                                            <ul className="sub-list">
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Download Policy Contract</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Contact Salahkar</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Premium Paid Certificate</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">SI Registration</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Tax Benefits</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Unclaimed Amount</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Riders</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Rural</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">NRI</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={`list-item ${(menuExpandState === 15) ? 'active' : ''}`}>
                                        <h4 className="list-title">
                                            <a href=" #" className="title">Public Disclosure <span className="icon icon-chevron-down" onClick={(e) => { expandCatHandler(e, 15) }}></span></a>
                                        </h4>
                                        <div className="list-cont">
                                            <ul className="sub-list">
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">RDAI Circular</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">NAV Formula</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">IRDAI Consumer Education</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Environmental Management System</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link"> IRDAI Public Notice on Spurious Phone Calls and Fictitious/Fraudulent Offers</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="link-list-item">
                                    <div className={`list-item ${(menuExpandState === 16) ? 'active' : ''}`}>
                                        <h4 className="list-title">
                                            <a href=" #" className="title">Tax Planning <span className="icon icon-chevron-down" onClick={(e) => { expandCatHandler(e, 16) }}></span></a>
                                        </h4>
                                        <div className="list-cont">
                                            <ul className="sub-list lyt-tax">
                                                <li className="sub-item">
                                                    <div className="img-link-block">
                                                        <img src="../assets/images/footer/footer-link.png" alt="footer link" className="img" />
                                                        <a href=" #" title="dummy title text" className="link">Choosing term insurance the right way</a>
                                                    </div>
                                                </li>
                                                <li className="sub-item">
                                                    <div className="img-link-block">
                                                        <img src="../assets/images/footer/footer-link.png" alt="footer link" className="img " />
                                                        <a href=" #" title="dummy title text" className="link">The most important article that a 25-year…</a>
                                                    </div>
                                                </li>
                                                <li className="sub-item">
                                                    <div className="img-link-block">
                                                        <img src="../assets/images/footer/footer-link.png" alt="footer link" className="img" />
                                                        <a href=" #" title="dummy title text" className="link">How much should be the adequate budget…</a>
                                                    </div>
                                                </li>
                                                <li className="sub-item">
                                                    <div className="img-link-block">
                                                        <img src="../assets/images/footer/footer-link.png" alt="footer link" className="img" />
                                                        <a href=" #" title="dummy title text" className="link">How is term insurance different from life…</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={`list-item ${(menuExpandState === 17) ? 'active' : ''}`}>
                                        <h4 className="list-title">
                                            <a href=" #" className="title">Governing Bodies <span className="icon icon-chevron-down" onClick={(e) => { expandCatHandler(e, 17) }}></span></a>
                                        </h4>
                                        <div className="list-cont">
                                            <ul className="sub-list">
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">IRDAI</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Life Insurance Council</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Insurance Ombudsman</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={`list-item ${(menuExpandState === 18) ? 'active' : ''}`}>
                                        <h4 className="list-title">
                                            <a href=" #" className="title">Support <span className="icon icon-chevron-down" onClick={(e) => { expandCatHandler(e, 18) }}></span></a>
                                        </h4>
                                        <div className="list-cont">
                                            <ul className="sub-list">
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Pay Now</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Grievance Redressal</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Do Not Call Registry</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Corporate Agent</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Insurance Advisory</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={`list-item ${(menuExpandState === 19) ? 'active' : ''}`}>
                                        <h4 className="list-title">
                                            <a href=" #" className="title">Copyright & Usage <span className="icon icon-chevron-down" onClick={(e) => { expandCatHandler(e, 19) }}></span></a>
                                        </h4>
                                        <div className="list-cont">
                                            <ul className="sub-list">
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Privacy Policy</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Terms of Use</a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">Sitemap</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="list-item">
                                        <h4 className="list-title">
                                            <a href=" #" className="title">Connect with us</a>
                                        </h4>
                                        <div className="list-cont social-show">
                                            <ul className="sub-list typ-social">
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">
                                                        <span className="link link-social">
                                                            <i className="hf hf-fb"></i>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">
                                                        <span className="link link-social">
                                                            <i className="hf hf-in"></i>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">
                                                        <span className="link link-social">
                                                            <i className="hf hf-tw"></i>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">
                                                        <span className="link link-social icon">
                                                            <i className="hf hf-insta"></i>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="sub-item">
                                                    <a href=" #" title="dummy title text" className="link">
                                                        <span className="link link-social">
                                                            <i className="hf hf-yt"></i>
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="reg-office">
                                <h4 className="title">Aditya Birla Sun Life Insurance Company Limited, Registered with Insurance Regulatory & Development Authority of India (IRDAI) as Life Insurance Company.</h4>
                                <h4 className="title">Registered Office:</h4>
                                <p className="desc">One Indiabulls Centre Tower 1, 16th Floor, Jupiter Mill Compound, 841, Senapati Bapat Marg, Elphinstone Road, Mumbai - 400013. CIN: U99999MH2000PLC128110 Registration No. 109.</p>
                                <p className="desc">Trade Logo "Aditya Birla Capital" displayed above is owned by ADITYA BIRLA MANAGEMENT CORPORATION PRIVATE LIMITED (Trademark Owner) and used by ADITYA BIRLA SUN LIFE INSURANCE COMPANY LIMITED (ABSLI) under the license.</p>
                                <p className="desc">Aditya Birla Sun Life Insurance Company Limited, Registered with Insurance Regulatory & Development Authority of India (IRDAI) as Life Insurance Company.</p>
                                <p className="desc">For more details on risk factors, terms and conditions please read sales brochure carefully before concluding the sale.</p>
                            </div>

                            <div className="aware-block">
                                <h4 className="title">BEWARE OF SPURIOUS / FRAUD PHONE CALLS!</h4>
                                <p className="desc">IRDAI is not involved in activities like selling insurance policies, announcing bonus or investment of premiums. Public receiving such phone calls are requested to lodge a police complaint.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bs-footer-bottom">
                    <div className="content-wrapper">
                        <div className="footer-bottom">
                            <div className="row footer-row">
                                <div className="col-sm-12 col-md-3 col-lg-2 logo-sc">
                                    <div className="logo">
                                        <a href="/">
                                            <img src="/assets/images/footer/footer-logo.png" alt="logo" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-3 col-lg-2 desktop">
                                    <ul className="bottomLink">
                                        <li>

                                        </li><li><a href="/_layouts/ABFSG.LI.SEC/AuthenticationPreLoginABC.aspx?FUNC=OS">Our Solutions</a> </li>

                                        <li>
                                            <a href="/_layouts/ABFSG.LI.SEC/AuthenticationPreLoginABC.aspx?FUNC=IR">Investor Relations</a>
                                        </li>
                                        <li>
                                            <a href="/_layouts/ABFSG.LI.SEC/AuthenticationPreLoginABC.aspx?FUNC=PAM">Press &amp; Media</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-12 col-md-3 col-lg-2  desktop">
                                    <ul className="bottomLink padding_left">
                                        <li><a href="/_layouts/ABFSG.LI.SEC/AuthenticationPreLoginABC.aspx?FUNC=OB">Our Businesses</a> </li>
                                        <li><a href="/_layouts/ABFSG.LI.SEC/AuthenticationPreLoginABC.aspx?FUNC=FA">Our Achievements</a> </li>
                                        <li><a href="/_layouts/ABFSG.LI.SEC/AuthenticationPreLoginABC.aspx?FUNC=CSR">CSR</a> </li>
                                    </ul>
                                </div>
                                <div className="col-sm-12 col-md-3 col-lg-2 desktop">
                                    <ul className="bottomLink">
                                        <li><a href="/_layouts/ABFSG.LI.SEC/AuthenticationPreLoginABC.aspx?FUNC=PP">Privacy Policy</a> </li>
                                        <li><a href="/_layouts/ABFSG.LI.SEC/AuthenticationPreLoginABC.aspx?FUNC=TNC">Terms &amp; Conditions</a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row border-line">
                                <div className="col-lg-12">
                                    <p>&nbsp;</p>
                                </div>
                            </div>
                            <div className="row copyright">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <p>© 2019, Aditya Birla Capital Inc. All Rights Reserved.</p>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 desktop">
                                    <div className="contacttext">
                                        <p className="caption">Call us toll free: <span className="abcicons icon-icon-phone iconspan" ></span>  1800 270 7000</p>
                                    </div>
                                    <div className="socIcon">
                                        <ul>
                                            <li>
                                                <a title="Facebook" href="https://www.facebook.com/AdityaBirlaCapital/" rel="noopener noreferrer" target="_blank">
                                                    <i className="hf hf-fb"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a title="Instagram" href="https://www.instagram.com/adityabirlacapital/" rel="noopener noreferrer" target="_blank">
                                                    <i className="hf hf-insta"></i>
                                                </a>
                                            </li>

                                            <li>
                                                <a title="Twitter" href="https://twitter.com/abcapital" rel="noopener noreferrer" target="_blank">
                                                    <i id="I1" className="hf hf-tw"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a title="Youtube" href="https://www.youtube.com/channel/UCSki2tX_5kadIdz3m8Q4Fvg/" className="SSO" rel="noopener noreferrer" target="_blank">
                                                    <i className="hf hf-yt"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Footer;
