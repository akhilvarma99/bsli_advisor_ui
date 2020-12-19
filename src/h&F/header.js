import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import abclogo2x from '../assets/img/ABCLOGO_2x.png';
import abgmobile2x from '../assets/img/ABGBirla MOBILE2x.png';
import logo from '../assets/img/logo.png';
import bigHome from '../assets/img/big-home.svg';
import bigPhone from '../assets/img/big-phone.svg';
import bigLogIn from '../assets/img/big-log-in.svg';
import phone from '../assets/img/phone.svg';
import home from '../assets/img/home.svg'

const loadProtectingMenu = (globalMenuSelected) => {

    if (globalMenuSelected === 'advisors') {
        return (
            <div className="dropdown-menu">
                <a className="dropdown-item" href="https://lipartners.adityabirlacapital.com/New/">Life
                Insurance Advisors</a>
                <a className="dropdown-item"
                    href="https://www.adityabirlacapital.com/healthinsurance/#!/advisors-councel">Health
                Insurance Advisors </a>
            </div>
        )
    } else if (globalMenuSelected === 'personal') {
        return (
            <div className="dropdown-menu">
                <a className="dropdown-item" href="https://lifeinsurance.adityabirlacapital.com/">Life
    Insurance</a>
                <a className="dropdown-item"
                    href="https://www.adityabirlacapital.com/healthinsurance/#!/homepage">Health
    Insurance</a>
                <a className="dropdown-item"
                    href="https://www.adityabirlacapital.com/multiply-wellness/#!/home">Multiply
    Welness</a>
                <a className="dropdown-item"
                    href="https://motorinsurance.adityabirlacapital.com/Pages/Individual/Products/Motor-Insurance.aspx">Motor
    Insurance</a>
                <a className="dropdown-item"
                    href="https://travelinsurance.adityabirlacapital.com/Pages/Individual/Products/Overseas-Travel.aspx">Travel
    Insurance</a>
            </div>
        )
        // } else if (globalMenuSelected === 'corporates') {
    } else {
        return (
            <div className="dropdown-menu">
                <a href="https://corporategeneralinsurance.adityabirlacapital.com/products/overview">Corporate
    General Insurance </a>
                <a href="https://lifeinsurance.adityabirlacapital.com/group-insurance/overview">Group
    Life Insurance </a>
                <a
                    href="https://www.adityabirlacapital.com/healthinsurance/#!/group-health-insurance-products">Group
    Health Insurance </a>
            </div>
        )
    }
}

const loadInvestingMenu = (globalMenuSelected) => {
    if (globalMenuSelected === 'advisors') {
        return (
            <div className="dropdown-menu">
                <a className="dropdown-item"
                    href="https://mf.adityabirlacapital.com/Pages/Advisor/Advisor-Portal.aspx">Mutual
    Funds Advisors </a>
                <a className="dropdown-item"
                    href="https://stocksandsecurities.adityabirlacapital.com/partner">Stocks &amp;
    Securities Advisors </a>
            </div>
        )
    } else if (globalMenuSelected === 'personal') {
        return (
            <div className="dropdown-menu">
                <a className="dropdown-item" href="https://mutualfund.adityabirlacapital.com/">Mutual Funds
</a>
                <a className="dropdown-item"
                    href="https://stocksandsecurities.adityabirlacapital.com/">Stock and Securities </a>
                <a className="dropdown-item" href="https://wealthmanagement.adityabirlacapital.com/">Wealth
    Management </a>
                <a className="dropdown-item"
                    href="https://portfoliomanagementservices.adityabirlacapital.com/">Portfolio
    Management Services </a>
                <a className="dropdown-item" href="https://pensionfund.adityabirlacapital.com/">Pension
    Funds </a>
                <a className="dropdown-item" href="http://realestateinvestment.adityabirlacapital.com/">Real
    Estate Investments </a>
            </div>
        )
    } else if (globalMenuSelected === 'corporates') {
        return (
            <div className="dropdown-menu">
                <a
                    href="https://privateequity.adityabirlacapital.com/Pages/Individual/Funds-Under-Management/Overview.aspx">Private
    Equity </a>
                <a href="https://mutualfund.adityabirlacapital.com/investor-solution-corporate">Mutual
    Funds </a>
                <a href="https://stocksandsecurities.adityabirlacapital.com/">Stock and Securities </a>
                <a href="https://portfoliomanagementservices.adityabirlacapital.com/">Portfolio
    Management Services </a>
                <a href="https://pensionfund.adityabirlacapital.com/">Pension Funds </a>
            </div>
        )
    }
}

const loadFinancingMenu = (globalMenuSelected) => {
    if (globalMenuSelected === 'advisors') {
        return (
            <div className="dropdown-menu">

                <a className="dropdown-item" href="https://abfl.adityabirlacapital.com/partners/">Financing
    Advisors</a>
            </div>
        )
    } else if (globalMenuSelected === 'personal') {
        return (
            <div className="dropdown-menu" >
                <a className="dropdown-item" href="https://homefinance.adityabirlacapital.com/">Home Finance
</a>
                <a className="dropdown-item" href="https://personalfinance.adityabirlacapital.com/">Personal
    Finance </a>
                <a className="dropdown-item"
                    href="https://smefinance.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">SME
    Finance </a>
                <a className="dropdown-item"
                    href="https://loanagainstsecurities.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">Loan
    Against Securities </a>
                <a className="dropdown-item"
                    href="https://mortgagefinance.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">Mortgage
    Finance </a>
            </div >
        )
    } else if (globalMenuSelected === 'corporates') {
        return (
            <div className="dropdown-menu" >
                <a
                    href="https://corporatefinance.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">Corporate
    Finance</a>
                <a
                    href="https://mortgagefinance.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">Mortgage
    Finance </a>
                <a
                    href="https://loanagainstsecurities.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">Loans
    Against Securities </a>
                <a
                    href="https://dcmandsyndication.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">DCM
    &amp; Loan Syndication </a>
            </div >
        )
    }
}

const loadAdvisingMenu = (globalMenuSelected) => {
    if (globalMenuSelected === 'advisors') {
        return (
            <div className="dropdown-menu">

                <a className="dropdown-item"
                    href="https://www.abcselect.adityabirlacapital.com/?ref=abc-homepage">Select
    Advisor</a>
            </div>
        )
    } else if (globalMenuSelected === 'personal') {
        return (
            <div className="dropdown-menu" >
                <a className="dropdown-item"
                    href="https://advising.adityabirlacapital.com/money-for-life-planner">MoneyforLife
    Planner </a>
                <a className="dropdown-item" href="https://www.adityabirlacapital.com/abc-of-money">ABC of
    Money </a>
            </div >
        )
    } else if (globalMenuSelected === 'corporates') {
        return (
            <div className="dropdown-menu" >
                <a href="https://advising.adityabirlacapital.com/money-for-life-planner">MoneyforLife
    Planner </a>
                <a href="https://www.adityabirlacapital.com/abc-of-money">ABC of Money </a>
            </div >
        )
    }
}

function Header() {


    const [globalMenuSelected, setGlobalMenuSelected] = useState('advisors');

    return (
        <header>
            <div className="top-global-nav">
                <div className="top-bg pull-right">
                    <ul className="nav header-dropdown" id="header-dropdown">
                        <li id="personal-topmenu" className="scnd_center">
                            <NavLink to="#" title="Personal">Personal
                                <i className="arrow-down arrow-closed arrow-white mglb2"></i>
                                <i className="arrow-up arrow-opened arrow-red mglb2"></i>
                            </NavLink>
                            <span id="line" className="vertical-line"></span>
                            <ul className="dropdown-menu global-nav-dropdown-menu" id="corporate-childmenu">
                                <ul className="col-section-container">
                                    <li className="level1 pink-link-section">
                                        <span className="pink-link-heading">Protecting</span>
                                        <ul className="list-unstyled">
                                            <li className="level2">
                                                <a href="https://lifeinsurance.adityabirlacapital.com/">Life Insurance</a>
                                            </li>
                                            <li className="level2">
                                                <a href="https://www.adityabirlacapital.com/healthinsurance/#!/homepage">Health
                                                Insurance</a>
                                            </li>
                                            <li className="level2">
                                                <a href="https://www.adityabirlacapital.com/multiply-wellness/#!/home">Multiply
                                                Welness</a>
                                            </li>
                                            <li className="level2">
                                                <a
                                                    href="https://motorinsurance.adityabirlacapital.com/Pages/Individual/Products/Motor-Insurance.aspx">Motor
                                                Insurance</a>
                                            </li>
                                            <li className="level2">
                                                <a
                                                    href="https://travelinsurance.adityabirlacapital.com/Pages/Individual/Products/Overseas-Travel.aspx">Travel
                                                Insurance</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="level1 green-link-section">
                                        <span className="green-link-heading">Investing</span>
                                        <ul className="list-unstyled">
                                            <li className="level2">
                                                <a href="https://mutualfund.adityabirlacapital.com/">Mutual Funds </a>
                                            </li>
                                            <li className="level2">
                                                <a href="https://stocksandsecurities.adityabirlacapital.com/">Stock and
                                                Securities </a>
                                            </li>
                                            <li className="level2">
                                                <a href="https://wealthmanagement.adityabirlacapital.com/">Wealth Management
                                            </a>
                                            </li>
                                            <li className="level2">
                                                <a href="https://portfoliomanagementservices.adityabirlacapital.com/">Portfolio
                                                Management Services </a>
                                            </li>
                                            <li className="level2">
                                                <a href="https://pensionfund.adityabirlacapital.com/">Pension Funds </a>
                                            </li>
                                            <li className="level2">
                                                <a href="http://realestateinvestment.adityabirlacapital.com/">Real Estate
                                                Investments </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="level1 yellow-link-section">
                                        <span className="yellow-link-heading">Financing</span>
                                        <ul className="list-unstyled">
                                            <li className="level2">
                                                <a href="https://homefinance.adityabirlacapital.com/">Home Finance </a>
                                            </li>
                                            <li className="level2">
                                                <a href="https://personalfinance.adityabirlacapital.com/">Personal Finance
                                            </a>
                                            </li>
                                            <li className="level2">
                                                <a
                                                    href="https://smefinance.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">SME
                                                Finance </a>
                                            </li>
                                            <li className="level2">
                                                <a
                                                    href="https://loanagainstsecurities.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">Loan
                                                Against Securities </a>
                                            </li>
                                            <li className="level2">
                                                <a
                                                    href="https://mortgagefinance.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">Mortgage
                                                Finance </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="level1 red-link-section">
                                        <span className="red-link-heading">Advising</span>
                                        <ul className="list-unstyled">
                                            <li className="level2">
                                                <a href="https://advising.adityabirlacapital.com/money-for-life-planner">MoneyforLife
                                                Planner </a>
                                            </li>
                                            <li className="level2">
                                                <a href="https://www.adityabirlacapital.com/abc-of-money">ABC of Money </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>

                            </ul>
                        </li>
                        <li id="corporate-topmenu" className="scnd_center">
                            <NavLink to="#" title="Corporates">Corporates
                                <i className="arrow-down arrow-closed arrow-white mglb2"></i>
                                <i className="arrow-up arrow-opened arrow-red mglb2"></i>
                            </NavLink>

                            <ul className="dropdown-menu global-nav-dropdown-menu" id="corporate-childmenu">

                                <ul className="col-section-container">
                                    <li className="level1 pink-link-section">
                                        <span className="pink-link-heading">Protecting</span>
                                        <ul className="list-unstyled">
                                            <li className="level2">
                                                <a
                                                    href="https://corporategeneralinsurance.adityabirlacapital.com/products/overview">Corporate
                                                General Insurance </a>
                                            </li>
                                            <li className="level2">
                                                <a
                                                    href="https://lifeinsurance.adityabirlacapital.com/group-insurance/overview">Group
                                                    Life
                                                Insurance </a>
                                            </li>
                                            <li className="level2">
                                                <a
                                                    href="https://www.adityabirlacapital.com/healthinsurance/#!/group-health-insurance-products">Group
                                                Health Insurance </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="level1 green-link-section">
                                        <span className="green-link-heading">Investing</span>
                                        <ul className="list-unstyled">
                                            <li className="level2">
                                                <a
                                                    href="https://privateequity.adityabirlacapital.com/Pages/Individual/Funds-Under-Management/Overview.aspx">Private
                                                Equity </a>
                                            </li>
                                            <li className="level2">
                                                <a
                                                    href="https://mutualfund.adityabirlacapital.com/investor-solution-corporate">Mutual
                                                Funds </a>
                                            </li>
                                            <li className="level2">
                                                <a href="https://stocksandsecurities.adityabirlacapital.com/">Stock and
                                                Securities </a>
                                            </li>

                                            <li className="level2">
                                                <a href="https://portfoliomanagementservices.adityabirlacapital.com/">Portfolio
                                                Management
                                                Services </a>
                                            </li>
                                            <li className="level2">
                                                <a href="https://pensionfund.adityabirlacapital.com/">Pension Funds </a>
                                            </li>

                                        </ul>
                                    </li>
                                    <li className="level1 yellow-link-section">
                                        <span className="yellow-link-heading">Financing</span>
                                        <ul className="list-unstyled">
                                            <li className="level2">
                                                <a
                                                    href="https://corporatefinance.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">Corporate
                                                Finance</a>
                                            </li>
                                            <li className="level2">
                                                <a
                                                    href="https://mortgagefinance.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">Mortgage
                                                Finance </a>
                                            </li>
                                            <li className="level2">
                                                <a
                                                    href="https://loanagainstsecurities.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">Loans
                                                Against Securities </a>
                                            </li>
                                            <li className="level2">
                                                <a
                                                    href="https://dcmandsyndication.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">DCM
                                                &amp; Loan Syndication </a>
                                            </li>

                                        </ul>
                                    </li>
                                    <li className="level1 red-link-section">
                                        <span className="red-link-heading">Advising</span>
                                        <ul className="list-unstyled">
                                            <li className="level2">
                                                <a href="https://advising.adityabirlacapital.com/money-for-life-planner">MoneyforLife
                                                Planner </a>
                                            </li>
                                            <li className="level2">
                                                <a href="https://www.adityabirlacapital.com/abc-of-money">ABC of Money </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>

                            </ul>

                        </li>
                        <li id="advisor-topmenu" className="selected-menu" >
                            <NavLink to="#" title="Advisors">Advisors</NavLink>
                            <span></span>

                        </li>

                    </ul>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg abc-navbar">
                <a className="navbar-brand logo" href="https://www.adityabirlacapital.com/" >
                    <img className="d-none d-xs-none d-sm-none d-md-none d-lg-block d-xl-block"
                        alt='abclogo2x.png' src={abclogo2x} />
                    <img className="d-block d-xs-block d-sm-block d-md-block d-lg-none d-xl-none"
                        alt='abcabcmobile2x.png' src={abgmobile2x} />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbarLinks">
                        <div className="mobile-logo-section">
                            <div className="mobile-logo">
                                <NavLink to='#'>
                                    <img alt='logo.png' src={logo} className="mob-logo" />
                                </NavLink>
                                <button className="close" data-toggle="collapse" data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="utility-links-global-nav">
                                <ul>
                                    <li id="personal-mobile-topmenu" className={globalMenuSelected === 'personal' ? 'selected-menu' : ''} onClick={() => setGlobalMenuSelected("personal")}>
                                        <NavLink to='#'>
                                            Personal
                                    </NavLink>
                                        <span></span>
                                    </li>
                                    <li id="corporate-mobile-topmenu" className={globalMenuSelected === 'corporates' ? 'selected-menu' : ''} onClick={() => setGlobalMenuSelected("corporates")}>
                                        <NavLink to='#'>
                                            Corporates
                                            </NavLink>
                                        <span></span>
                                    </li>
                                    <li id="advisor-mobile-topmenu" className={globalMenuSelected === 'advisors' ? 'selected-menu' : ''} onClick={() => setGlobalMenuSelected("advisors")}>
                                        <NavLink to='#'>
                                            Advisors
                                            </NavLink>
                                        <span></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="correction-div">

                            </div>
                            <div className="mob-top-images">
                                <a href="https://www.adityabirlacapital.com/">
                                    <img alt='big-home.svg' src={bigHome} height="25" width="25" />
                                </a>
                                <a href="tel:022-61302505">
                                    <img alt='big-phone.svg' src={bigPhone} height="25" width="25" />
                                </a>
                                <a href="/">
                                    <img alt='big-log-in.svg' src={bigLogIn} height="25" width="21" />
                                </a>
                            </div>
                        </div>
                        <ul className="navbar-nav mr-auto menu-ul">
                            <li className="nav-item adv">
                                <a className="nav-link menu_label adv home" href="https://www.adityabirlacapital.com/">
                                    Home
                                                <i className="arrow-down"></i>
                                </a>
                            </li>
                            <li className="nav-item prt">
                                <div className="nav-link menu_label">
                                    Protecting
                                <i className="arrow-down"></i>
                                </div>
                                {loadProtectingMenu(globalMenuSelected)}
                            </li>
                            <li className="nav-item ins">
                                <NavLink to='#' className="nav-link menu_label" >
                                    Investing
                                <i className="arrow-down"></i>
                                </NavLink>
                                {loadInvestingMenu(globalMenuSelected)}
                            </li >
                            <li className="nav-item fin">
                                <NavLink to='#' className="nav-link menu_label" >
                                    Financing
                                <i className="arrow-down"></i>
                                </NavLink>
                                {loadFinancingMenu(globalMenuSelected)}
                            </li >
                            <li className="nav-item adv">
                                <NavLink to='#' className="nav-link menu_label adv" >
                                    Advising
                                <i className="arrow-down"></i>
                                </NavLink>
                                {loadAdvisingMenu(globalMenuSelected)}
                            </li >
                        </ul >
                        <div className="horizontal-separator"></div>
                        <ul className="footer-links-wrapper">
                            <li><a href="https://www.adityabirlacapital.com/About-Us"
                                className="footer-link">About Us</a></li>
                            <li><a href="https://www.adityabirlacapital.com/About-Us/Careers"
                                className="footer-link">Careers</a></li>
                            <li><a href="https://www.adityabirlacapital.com/Customer-Services"
                                className="footer-link">Customer Service</a></li>
                            <li><a href="https://www.adityabirlacapital.com/corporate"
                                className="footer-link">Corporates</a></li>
                            <li><a href="https://www.adityabirlacapital.com/Advisors"
                                className="footer-link">Advisors</a></li>
                        </ul>
                        <div className="horizontal-separator"></div>
                        <ul className="footer-links-wrapper">
                            <li>
                                <a className="footer-link accordion collapsed" href="#otherDropdownMenu" data-toggle="collapse"
                                    role="button" aria-expanded="false">
                                    Others
                                <i className="arrow-down"></i>
                                </a>
                            </li>
                            <div id="otherDropdownMenu" className="collapse">
                                <ul className="footer-links-wrapper">
                                    <li><a className="footer-link"
                                        href="https://www.adityabirlacapital.com/about-us/our-solutions">Our
                                        Solutions</a></li>
                                    <li><a className="footer-link"
                                        href="https://www.adityabirlacapital.com/about-us/our-businesses">Our
                                        Business</a></li>
                                    <li><a className="footer-link"
                                        href="https://www.adityabirlacapital.com/about-us/financial-achievements">Our
                                        Achievements</a></li>
                                    <li><a className="footer-link"
                                        href="https://www.adityabirlacapital.com/about-us/csr-and-sustainability">CSR
                                        and Sustainability</a></li>
                                    <li><a className="footer-link"
                                        href="https://www.adityabirlacapital.com/investor-relations">Investor
                                        Relations</a></li>
                                    <li><a className="footer-link"
                                        href="https://www.adityabirlacapital.com/press-and-media">Press and Media</a>
                                    </li>
                                    <li><a className="footer-link"
                                        href="https://www.adityabirlacapital.com/branch-locator">Locate Us</a></li>
                                </ul>
                            </div>
                            <li><a href="https://www.adityabirlacapital.com/privacy-policy"
                                className="footer-link">Privacy Policy</a></li>
                            <li><a href="https://www.adityabirlacapital.com/terms-and-conditions"
                                className="footer-link">Terms and Conditions</a></li>
                        </ul>
                        <ul className="navbar-nav menu-ul right-menu-ul">
                            <li className="nav-item">

                                <NavLink to='#' className="nav-link menu_label" id="navbarDropdown" role="button"
                                    aria-haspopup="true" aria-expanded="false">
                                    022-61302505
                                            <img className="right-img" alt='phone.svg' src={phone} />
                                </NavLink>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu_label menu_hover" href="https://www.adityabirlacapital.com"
                                    id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    Home
                                <img className="right-img" alt='home.svg' src={home} />
                                </a>
                            </li>


                        </ul >
                        <div className="mobile-menu-footer">

                            <p className="secondary mob-cop">
                                &copy; 2020, Aditya Birla Capital Ltd. All Rights Reserved.
                        </p>
                        </div>
                    </div >
                </div >
            </nav >

            <div className="container-fluid p-0">

                <div className="bs-pink-header">
                    <div className="content-wrapper">
                        <button type="button" className="life-insurance-btn">Life Insurance</button>
                    </div>
                </div>
                <div className="bs-brown-header">
                    <div className="content-wrapper">
                        <p className="tagline">Aditya Birla Sun Life Insurance Company LTD.</p>
                    </div>
                </div>
            </div>


        </header >
    )
}

export default Header
