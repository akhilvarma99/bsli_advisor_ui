import React from 'react';
import { NavLink } from 'react-router-dom';
import ABCLOGO_2x from '../assets/img/ABCLOGO_2x.png';
import phone from '../assets/img/phone.svg';
import home from '../assets/img/home.svg';
import bigHome from '../assets/img/big-home.svg';
import biglogin from '../assets/img/big-log-in.svg';
import bigphone from '../assets/img/big-phone.svg';
import '../assets/css/masthead-personal.css';


function Header() {
    return (
        <div>
            <div className="bodywrapper">
                <div className="overlay hidden-xs hidden-lg hidden-md hidden-sm" />

                <div className="abc-menu-wrap">
                    <div className="container mast_head">
                        <header className="header-static ">
                            <div className="header-top-new">
                                <div className="div_head">
                                    <div className="col-md-6 topnavhidden hidden-sm">
                                    </div>
                                    <div className="col-md-6 topnavlist hidden-xs hidden-sm">
                                        <div className="pull-right">
                                            <ul className="nav navbar-nav" id="header-dropdown">
                                                <li className="nav-item scnd_center selected-menu" id="TopMenu0">
                                                    <NavLink to='/' onClick={(e) => { e.preventDefault() }} className="dropdown-toggle ico-drop no-pad selected-option">
                                                        Personal
                    </NavLink>
                                                    <span />
                                                </li>
                                                <li className="nav-item scnd_center vertical-line" id="TopMenu1">
                                                    <NavLink to='/' onClick={(e) => { e.preventDefault() }} className="dropdown-toggle ico-drop no-pad " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                        Corporates
                    </NavLink>
                                                    <ul className="dropdown-menu dropdown-menu-top dropdown-menu-right drop-menu-nav" id="childmenu02">
                                                        <li>
                                                            <div className="col-section-container">
                                                                <div className="col-section protecting-section">
                                                                    <h4 className="protecting-heading">Protecting</h4>
                                                                    <ul className="list-unstyled">
                                                                        <li className="normal_drp">
                                                                            <a href="https://corporategeneralinsurance.adityabirlacapital.com/products/overview">Corporate General Insurance </a>
                                                                        </li>
                                                                        <li className="normal_drp">
                                                                            <a href="https://lifeinsurance.adityabirlacapital.com/group-insurance/overview">Group Life Insurance </a>
                                                                        </li>
                                                                        <li className="normal_drp">
                                                                            <a href="https://www.adityabirlacapital.com/healthinsurance/#!/group-health-insurance-products">Group Health Insurance </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-section investing-section">
                                                                    <h4 className="investing-heading">Investing</h4>
                                                                    <ul className="list-unstyled">
                                                                        <li className="normal_drp">
                                                                            <a href="https://privateequity.adityabirlacapital.com/Pages/Individual/Funds-Under-Management/Overview.aspx">Private Equity </a>
                                                                        </li>
                                                                        <li className="normal_drp">
                                                                            <a href="https://mutualfund.adityabirlacapital.com/investor-solution-corporate">Mutual Funds </a>
                                                                        </li>
                                                                        <li className="normal_drp">
                                                                            <a href="https://stocksandsecurities.adityabirlacapital.com/">Stock and Securities </a>
                                                                        </li>
                                                                        <li className="normal_drp">
                                                                            <a href="https://portfoliomanagementservices.adityabirlacapital.com/">Portfolio Management Services </a>
                                                                        </li>
                                                                        <li className="normal_drp">
                                                                            <a href="https://pensionfund.adityabirlacapital.com/">Pension Funds </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-section financing-section">
                                                                    <h4 className="financing-heading">Financing</h4>
                                                                    <ul className="list-unstyled">
                                                                        <li className="normal_drp">
                                                                            <a href="https://corporatefinance.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">Corporate Finance</a>
                                                                        </li>
                                                                        <li className="normal_drp">
                                                                            <a href="https://mortgagefinance.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">Mortgage Finance </a>
                                                                        </li>
                                                                        <li className="normal_drp">
                                                                            <a href="https://loanagainstsecurities.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">Loans Against Securities </a>
                                                                        </li>
                                                                        <li className="normal_drp">
                                                                            <a href="https://dcmandsyndication.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">DCM &amp; Loan Syndication </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-section advising-section">
                                                                    <h4 className="advising-heading">Advising</h4>
                                                                    <ul className="list-unstyled">
                                                                        <li className="normal_drp">
                                                                            <a href="https://advising.adityabirlacapital.com/money-for-life-planner">MoneyforLife Planner </a>
                                                                        </li>
                                                                        <li className="normal_drp">
                                                                            <a href="https://www.adityabirlacapital.com/abc-of-money">ABC of Money </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <span />
                                                </li>
                                                <li className="nav-item scnd_center" id="TopMenu2">
                                                    <NavLink to='/' onClick={(e) => { e.preventDefault() }} className="dropdown-toggle ico-drop no-pad " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                        Advisors
                    </NavLink>
                                                    <ul className="dropdown-menu dropdown-menu-top dropdown-menu-right drop-menu-nav" id="childmenu03">
                                                        <li>
                                                            <div className="col-section-container">
                                                                <div className="col-section protecting-section">
                                                                    <h4 className="protecting-heading">Protecting</h4>
                                                                    <ul className="list-unstyled">
                                                                        <li className="normal_drp">
                                                                            <a href="https://lipartners.adityabirlacapital.com/New/">Life Insurance Advisors</a>
                                                                        </li>
                                                                        <li className="normal_drp">
                                                                            <a href="https://www.adityabirlacapital.com/healthinsurance/#!/hs-our-network">Health Insurance Advisors </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-section investing-section">
                                                                    <h4 className="investing-heading">Investing</h4>
                                                                    <ul className="list-unstyled">
                                                                        <li className="normal_drp">
                                                                            <a href="https://mf.adityabirlacapital.com/Pages/Advisor/Advisor-Portal.aspx">Mutual Funds Advisors </a>
                                                                        </li>
                                                                        <li className="normal_drp">
                                                                            <a href="https://stocksandsecurities.adityabirlacapital.com/partner">Stocks &amp; Securities Advisors </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-section financing-section">
                                                                    <h4 className="financing-heading">Financing</h4>
                                                                    <ul className="list-unstyled">
                                                                        <li className="normal_drp">
                                                                            <a href="https://abfl.adityabirlacapital.com/partners/">Financing Advisors</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-section advising-section">
                                                                    <h4 className="advising-heading">Advising</h4>
                                                                    <ul className="list-unstyled">
                                                                        <li className="normal_drp">
                                                                            <a href="https://select.adityabirlacapital.com/Forms_Birla/LandingPage.aspx">Select Advisor</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <span />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*--------------------------Menu-Start---------------------*/}
                            <nav className="navbar navbar-default navbar-static custom-nav" id="mainNavbar">
                                <div className="navigation_div">
                                    <div className="navbar-left">
                                        <button type="button" className="navbar-toggle pull-right collapsed menu-icon" data-toggle="collapse-side" data-target=".side-collapse" data-target-2=".side-collapse-container ">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                        </button>
                                        {/*-----------======================Logo-Start============----------*/}
                                        <div className="logo">
                                            {/* start Header-logo*/}
                                            <a itemProp="url" href="/" className>
                                                <span className="hidden-md hidden-lg">
                                                    <img src={ABCLOGO_2x} className="logostyle" alt="ABGBirla MOBILE2x" width={516} height={124} haschildren="True" />
                                                </span>
                                                <span className="hidden-sm hidden-xs">
                                                    <img src={ABCLOGO_2x} className="logostyle" alt="ABC Logo" width={388} height={90} haschildren="True" />
                                                </span>
                                            </a>
                                            {/* end Header-logo*/}
                                        </div>
                                        {/*-----------======================Logo-End============----------*/}
                                    </div>
                                    {/*---------Primary Menu-Start-----*/}
                                    <div className="navbar-center pos-nav hidden-xs hidden-sm">
                                        <div className="collapse navbar-collapse ">
                                            {/*----------======Desktop-Primary-menu-Start========-------*/}
                                            <ul className="nav navbar-nav custom-sub-nav" id="Mainmenu-dropdown">
                                                <li className="nav-item scnd_center" id="ParentMenu0">
                                                    <NavLink to='/' onClick={(e) => { e.preventDefault() }} className="dropdown-toggle ico-drop no-pad" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                        PROTECTING
                    </NavLink>
                                                    <ul className="dropdown-menu drop-menu-nav" id="menu01">
                                                        <li className="normal_drp">
                                                            <a href="https://lifeinsurance.adityabirlacapital.com/">Life Insurance </a>
                                                        </li>
                                                        <li className="normal_drp">
                                                            <a href="https://www.adityabirlacapital.com/healthinsurance/#!/homepage">Health Insurance </a>
                                                        </li>
                                                        <li className="normal_drp">
                                                            <a href="https://www.adityabirlacapital.com/multiply-wellness/#!/home">Multiply Wellness </a>
                                                        </li>
                                                        <li className="normal_drp">
                                                            <a href="https://motorinsurance.adityabirlacapital.com/Pages/Individual/Products/Motor-Insurance.aspx">Motor Insurance </a>
                                                        </li>
                                                        <li className="normal_drp">
                                                            <a href="https://travelinsurance.adityabirlacapital.com/Pages/Individual/Products/Overseas-Travel.aspx">Travel Insurance </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item scnd_center" id="ParentMenu1">
                                                    <NavLink to='/' onClick={(e) => { e.preventDefault() }} className="dropdown-toggle ico-drop no-pad" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                        INVESTING
                    </NavLink>
                                                    <ul className="dropdown-menu drop-menu-nav" id="menu02">
                                                        <li className="normal_drp">
                                                            <a href="https://mutualfund.adityabirlacapital.com/">Mutual Funds </a>
                                                        </li>
                                                        <li className="normal_drp">
                                                            <a href="https://stocksandsecurities.adityabirlacapital.com/">Stock and Securities </a>
                                                        </li>
                                                        <li className="normal_drp">
                                                            <a href="https://wealthmanagement.adityabirlacapital.com/">Wealth Management </a>
                                                        </li>
                                                        <li className="normal_drp">
                                                            <a href="https://portfoliomanagementservices.adityabirlacapital.com/">Portfolio Management Services </a>
                                                        </li>
                                                        <li className="normal_drp">
                                                            <a href="https://pensionfund.adityabirlacapital.com/">Pension Funds </a>
                                                        </li>
                                                        <li className="normal_drp">
                                                            <a href="http://realestateinvestment.adityabirlacapital.com/">Real Estate Investments </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item scnd_center" id="ParentMenu2">
                                                    <NavLink to='/' onClick={(e) => { e.preventDefault() }} className="dropdown-toggle ico-drop no-pad" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                        FINANCING
                    </NavLink>
                                                    <ul className="dropdown-menu drop-menu-nav" id="menu03">
                                                        <li className="normal_drp">
                                                            <a href="https://homefinance.adityabirlacapital.com/">Home Finance </a>
                                                        </li>
                                                        <li className="normal_drp">
                                                            <a href="https://personalfinance.adityabirlacapital.com/">Personal Finance </a>
                                                        </li>
                                                        <li className="normal_drp">
                                                            <a href="https://smefinance.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">SME Finance </a>
                                                        </li>
                                                        <li className="normal_drp">
                                                            <a href="https://loanagainstsecurities.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">Loan Against Securities </a>
                                                        </li>
                                                        <li className="normal_drp">
                                                            <a href="https://mortgagefinance.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">Real Estate Finance </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item scnd_center" id="ParentMenu3">
                                                    <NavLink to='/' onClick={(e) => { e.preventDefault() }} className="dropdown-toggle ico-drop no-pad" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                        ADVISING
                    </NavLink>
                                                    <ul className="dropdown-menu drop-menu-nav" id="menu04">
                                                        <li className="normal_drp">
                                                            <a href="https://advising.adityabirlacapital.com/money-for-life-planner">MoneyforLife Planner </a>
                                                        </li>
                                                        <li className="normal_drp">
                                                            <a href="https://www.adityabirlacapital.com/abc-of-money">ABC of Money </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            {/*----------======Desktop-Primary-menu-End========-------*/}
                                        </div>
                                    </div>
                                    {/*---------Primary Menu-End-----*/}
                                    {/*---------Login- Menu-End-----*/}
                                    <a href="https://onelogin.adityabirlacapital.com/login" className="mob_hidden_icon"><span className="icon-icon-login abcicons cust-log-ico-mob hidden-md hidden-lg" /></a>
                                    <div className="navbar-right hide_desk_log ico_mob_pos">
                                        <div className="navbar-activity">
                                            <ul className="nav navbar-nav center-list">
                                                <li className="right-log">
                                                    <NavLink to='#' onClick={(e) => { e.preventDefault() }} className="text-uppercase user-log" >
                                                        <span>1800-270-7000</span>
                                                        <span className="hidden-xs hidden-sm"><img className="right-img" src={phone} alt='phone.svg' /></span>
                                                    </NavLink>
                                                </li>
                                                <li className="right-log">
                                                    <NavLink to='#' onClick={(e) => { e.preventDefault() }} className="text-uppercase user-log" >
                                                        <span>Home</span>
                                                        <span className="hidden-xs hidden-sm"><img className="right-img" src={home} alt='home.svg' /></span>
                                                    </NavLink>
                                                </li>
                                                <li className="right-log">
                                                    <a className="text-uppercase user-log" href="https://onelogin.adityabirlacapital.com/login">
                                                        <span>Login</span>
                                                        <span className="icon-icon-login abcicons cust-log-ico hidden-xs hidden-sm" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*---------Login-Menu-End-----*/}
                                    {/* mobile dropdown div starts here */}
                                    <div className="navbar-inverse side-collapse redbg in hidden-lg hidden-md  mob-nav">
                                        <nav role="navigation" className="navbar-collapse navbar-center">
                                            {/*Logo*/}
                                            <a itemProp="url" href="/" className="hidden-xs hidden-lg hidden-md tab-logo">
                                                <img src={ABCLOGO_2x} alt="ABC Logo" width={216} height={50} disablewebedit="False" />
                                            </a>
                                            {/*Logo*/}
                                            {/*------MObile-Primary-Menu-Start---*/}
                                            {/*----------======Desktop-Primary-menu-Start========-------*/}
                                            <div className="hidden-md hidden-lg">
                                                <a href="https://abcscstg.com">
                                                    <img src={ABCLOGO_2x} className="mob-logo" alt='abclogo_2x.png' />
                                                </a>
                                            </div>
                                            <ul className="nav navbar-nav mob-dropdown" id="mobile-header-dropdown">
                                                <li className="nav-item scnd_center selected-menu" id="MobileTopMenu0">
                                                    <NavLink to='/' onClick={(e) => { e.preventDefault() }} className="dropdown-toggle no-pad selected-option">
                                                        Personal
                    </NavLink>
                                                    <span />
                                                </li>
                                                <li className="nav-item scnd_center vertical-line" id="MobileTopMenu1">
                                                    <NavLink to='/' onClick={(e) => { e.preventDefault() }} className="dropdown-toggle no-pad " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                        Corporates
                    </NavLink>
                                                    <span />
                                                </li>
                                                <li className="nav-item scnd_center" id="MobileTopMenu2">
                                                    <NavLink to='/' onClick={(e) => { e.preventDefault() }} className="dropdown-toggle no-pad " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                        Advisors
                    </NavLink>
                                                    <span />
                                                </li>
                                            </ul>
                                            <div className="mob-top-images">
                                                <a href="/">
                                                    <img src={bigHome} alt='big-home.svg' height="&quot;25px&quot;" width="&quot;21px&quot;" />
                                                </a>
                                                <a href="tel:1800 270 7000">
                                                    <img src={bigphone} alt='big-phone.svg' height="&quot;25px&quot;" width="&quot;21px&quot;" />
                                                </a>
                                                <a href="https://onelogin.adityabirlacapital.com/login">
                                                    <img src={biglogin} alt='big-log-in.svg' height="&quot;25px&quot;" width="&quot;21px&quot;" />
                                                </a>
                                            </div>
                                            <div className=" lbl_fst mob-body">
                                                <div className="mobCard clearfix" id="PersonalMainMenu">
                                                    <ul>
                                                        <li className="clearfix marginBT">
                                                            <h3 className="protectingHd">PROTECTING</h3>
                                                            <ul>
                                                                <div className="column">
                                                                    <li>
                                                                        <a href="https://lifeinsurance.adityabirlacapital.com/">Life Insurance </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.adityabirlacapital.com/healthinsurance/#!/homepage">Health Insurance </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.adityabirlacapital.com/multiply-wellness/#!/home">Multiply Wellness </a>
                                                                    </li>
                                                                </div>
                                                                <div className="column">
                                                                    <li>
                                                                        <a href="https://motorinsurance.adityabirlacapital.com/Pages/Individual/Products/Motor-Insurance.aspx">Motor Insurance </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://travelinsurance.adityabirlacapital.com/Pages/Individual/Products/Overseas-Travel.aspx">Travel Insurance </a>
                                                                    </li>
                                                                </div>
                                                            </ul>
                                                        </li>
                                                        <li className="clearfix marginBT">
                                                            <h3 className="investingHd">INVESTING</h3>
                                                            <ul>
                                                                <div className="column">
                                                                    <li>
                                                                        <a href="https://mutualfund.adityabirlacapital.com/">Mutual Funds </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://wealthmanagement.adityabirlacapital.com/">Wealth Management </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://portfoliomanagementservices.adityabirlacapital.com/">Portfolio Management</a>
                                                                    </li>
                                                                </div>
                                                                <div className="column">
                                                                    <li>
                                                                        <a href="https://pensionfund.adityabirlacapital.com/">Pension Funds </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://stocksandsecurities.adityabirlacapital.com/">Stock and Securities </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="http://realestateinvestment.adityabirlacapital.com/">Real Estate Investments </a>
                                                                    </li>
                                                                </div>
                                                            </ul>
                                                        </li>
                                                        <li className="clearfix marginBT">
                                                            <h3 className="financeHd">FINANCING</h3>
                                                            <ul>
                                                                <div className="column">
                                                                    <li>
                                                                        <a href="https://homefinance.adityabirlacapital.com/">Home Finance </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://personalfinance.adityabirlacapital.com/">Personal Finance </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://smefinance.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">SME Finance </a>
                                                                    </li>
                                                                </div>
                                                                <div className="column">
                                                                    <li>
                                                                        <a href="https://loanagainstsecurities.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">Loan Against Securities </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://mortgagefinance.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">Real Estate Finance </a>
                                                                    </li>
                                                                </div>
                                                            </ul>
                                                        </li>
                                                        <li className="clearfix marginBT">
                                                            <h3 className="advisingHd">ADVISING</h3>
                                                            <ul>
                                                                <div className="column">
                                                                    <li>
                                                                        <a href="https://advising.adityabirlacapital.com/money-for-life-planner">MoneyforLife Planner </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.adityabirlacapital.com/abc-of-money">ABC of Money </a>
                                                                    </li>
                                                                </div>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="mobCard clearfix" id="CorporateMegaMenu">
                                                    <ul>
                                                        <li className="clearfix marginBT">
                                                            <h3 className="protectingHd">PROTECTING</h3>
                                                            <ul>
                                                                <div className="column">
                                                                    <li>
                                                                        <a href="https://corporategeneralinsurance.adityabirlacapital.com/products/overview">Corporate General Insurance </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://lifeinsurance.adityabirlacapital.com/group-insurance/overview">Group Life Insurance </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.adityabirlacapital.com/healthinsurance/#!/group-health-insurance-products">Group Health Insurance </a>
                                                                    </li>
                                                                </div>
                                                            </ul>
                                                        </li>
                                                        <li className="clearfix marginBT">
                                                            <h3 className="investingHd">INVESTING</h3>
                                                            <ul>
                                                                <div className="column">
                                                                    <li>
                                                                        <a href="https://privateequity.adityabirlacapital.com/Pages/Individual/Funds-Under-Management/Overview.aspx">Private Equity </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://pensionfund.adityabirlacapital.com/">Pension Funds </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://stocksandsecurities.adityabirlacapital.com/">Stock and Securities </a>
                                                                    </li>
                                                                </div>
                                                                <div className="column">
                                                                    <li>
                                                                        <a href="https://portfoliomanagementservices.adityabirlacapital.com/">Portfolio Management Services </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://mutualfund.adityabirlacapital.com/">Mutual Funds</a>
                                                                    </li>
                                                                </div>
                                                            </ul>
                                                        </li>
                                                        <li className="clearfix marginBT">
                                                            <h3 className="financeHd">FINANCING</h3>
                                                            <ul>
                                                                <div className="column">
                                                                    <li>
                                                                        <a href="https://corporatefinance.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">Corporate Finance</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://mortgagefinance.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">Mortgage Finance </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://loanagainstsecurities.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">Loans Against Securities </a>
                                                                    </li>
                                                                </div>
                                                                <div className="column">
                                                                    <li>
                                                                        <a href="https://dcmandsyndication.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx">DCM &amp; Loan Syndication </a>
                                                                    </li>
                                                                </div>
                                                            </ul>
                                                        </li>
                                                        <li className="clearfix marginBT">
                                                            <h3 className="advisingHd">ADVISING</h3>
                                                            <ul>
                                                                <div className="column">
                                                                    <li>
                                                                        <a href="https://advising.adityabirlacapital.com/money-for-life-planner">MoneyforLife Planner </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.adityabirlacapital.com/abc-of-money">ABC of Money </a>
                                                                    </li>
                                                                </div>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="mobCard clearfix" id="AdvisorMegaMenu">
                                                    <ul>
                                                        <li className="clearfix marginBT">
                                                            <h3 className="protectingHd">PROTECTING</h3>
                                                            <ul>
                                                                <div className="column">
                                                                    <li>
                                                                        <a href="https://lipartners.adityabirlacapital.com/New/">Life Insurance Advisors</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://www.adityabirlacapital.com/healthinsurance/#!/hs-our-network">Health Insurance Advisors </a>
                                                                    </li>
                                                                </div>
                                                            </ul>
                                                        </li>
                                                        <li className="clearfix marginBT">
                                                            <h3 className="investingHd">INVESTING</h3>
                                                            <ul>
                                                                <div className="column">
                                                                    <li>
                                                                        <a href="https://mf.adityabirlacapital.com/Pages/Advisor/Advisor-Portal.aspx">Mutual Funds Advisors </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="https://stocksandsecurities.adityabirlacapital.com/partner">Stocks &amp; Securities Advisors </a>
                                                                    </li>
                                                                </div>
                                                            </ul>
                                                        </li>
                                                        <li className="clearfix marginBT">
                                                            <h3 className="financeHd">FINANCING</h3>
                                                            <ul>
                                                                <div className="column">
                                                                    <li>
                                                                        <a href="https://abfl.adityabirlacapital.com/partners/">Financing Advisors</a>
                                                                    </li>
                                                                </div>
                                                            </ul>
                                                        </li>
                                                        <li className="clearfix marginBT">
                                                            <h3 className="advisingHd">ADVISING</h3>
                                                            <ul>
                                                                <div className="column">
                                                                    <li>
                                                                        <a href="https://select.adityabirlacapital.com/Forms_Birla/LandingPage.aspx">Select Advisor</a>
                                                                    </li>
                                                                </div>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <hr style={{ width: '85%', textAlign: 'center', border: '1px solid #ddd' }} />
                                                <ul>
                                                    <li>
                                                        <a href="/customer-services" target title="Customer Services">
                                                            Customer Services
                      </a>
                                                    </li>
                                                    <li>
                                                        <a href="/about-us/careers" target title="Careers">
                                                            Careers
                      </a>
                                                    </li>
                                                    <li>
                                                        <a href="/about-us" target title="About Us">
                                                            About Us
                      </a>
                                                    </li>
                                                </ul>
                                                <hr style={{ width: '85%', textAlign: 'center', border: '1px solid #ddd' }} />
                                                <ul className>
                                                    <li><NavLink to='/' onClick={(e) => { e.preventDefault() }} className="mob-others ico-drop">Others</NavLink></li>
                                                    <ul className="othersToggle" style={{ display: 'none' }}>
                                                        <li><a href="/about-us/our-solutions">Our Solutions</a></li>
                                                        <li><a href="/about-us/our-businesses">Our Business</a></li>
                                                        <li><a href="/about-us/financial-achievements">Our Achievements</a></li>
                                                        <li><a href="/about-us/csr-and-sustainability">CSR</a></li>
                                                        <li><a href="/investor-relations">Investor Relations</a></li>
                                                        <li><a href="/press-and-media">Press and Media</a></li>
                                                        <li><a href="/branch-locator">Locate Us</a></li>
                                                        <li><a href="/key-facts-on-tax-filing">ITR Filing</a></li>
                                                    </ul>
                                                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                                                    <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
                                                </ul>
                                            </div>
                                            {/*------MObile-Primary-Menu-End---*/}
                                            {/*------MObile-Login-Menu-Start---*/}
                                            <button type="button" className="mob-close-btn pull-right collapsed menu-icon" data-toggle="collapse-side" data-target=".side-collapse" data-target-2=".side-collapse-container" />
                                            {/*------MObile-Login-Menu-End---*/}
                                            {/*Start Header Footer */}
                                            <div className="header-top">
                                                <p className="secondary mob-copyright">
                                                    © 2019, Aditya Birla Capital Inc.
                                                    All Rights Reserved.
                  </p>
                                                {/*------MObile-Copyright-Start---*/}
                                                {/*------MObile-Copyright-End---*/}
                                            </div>
                                            {/*End Header Footer */}
                                        </nav>
                                    </div>
                                </div>
                            </nav>
                        </header>
                    </div>
                </div>
                <div className="absolute-banner">
                    <input type="hidden" name="mbImage" />
                    <div className="container-fluid hero-a-banner abc-hero hero-Home" data-moburl="Assets/hero-m-min.jpg" data-deskurl="Assets/hero-xl-min.jpg" style={{ background: 'url(Assets/hero-xl-min.jpg)' }}>
                        <div className="container">
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Header
