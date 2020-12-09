import React from 'react'

import footerLogo from './assets/img/footerlogo.png';


export default function Footer() {
    return (
        <footer>
            <div class="footer-container">
                <div class="container">
                    <div class="upper-div">
                        <div class="logo">
                            <a itemprop="url" href="/">
                                <img src={footerLogo} alt="Footer Logo" disablewebedit="False" />
                            </a>
                        </div>
                        <div class="footer-menu-section">
                            <div class="lcol">
                                <ul class="no-mar no-pad">
                                    <li>
                                        <a href="https://www.adityabirlacapital.com/about-us" title="About Us">
                                            <span>About Us</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.adityabirlacapital.com/about-us/careers" title="Careers">
                                            <span>Careers</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.adityabirlacapital.com/customer-services" title="Customer Services">
                                            <span>Customer Services</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="lcol">
                                <ul class="no-mar no-pad">
                                    <li>
                                        <a href="https://www.adityabirlacapital.com/about-us/our-solutions" title="Our Solutions">
                                            <span>Our Solutions</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.adityabirlacapital.com/investor-relations" title="Investor Relations">
                                            <span>Investor Relations</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.adityabirlacapital.com/press-and-media" title="Press and Media">
                                            <span>Press and Media</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="lcol">
                                <ul class="no-mar no-pad">
                                    <li>
                                        <a href="https://www.adityabirlacapital.com/about-us/our-businesses" title="Our Businesses">
                                            <span>Our Businesses</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.adityabirlacapital.com/about-us/financial-achievements" title="Our Achievements">
                                            <span>Our Achievements</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.adityabirlacapital.com/about-us/csr-and-sustainability" title="CSR">
                                            <span>CSR and Sustainability</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="lcol">
                                <ul class="no-mar no-pad">
                                    <li>
                                        <a href="https://www.adityabirlacapital.com/branch-locator" title="Locate Us">
                                            <span>Locate Us</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.adityabirlacapital.com/privacy-policy" title="Privacy Policy">
                                            <span>Privacy Policy</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.adityabirlacapital.com/terms-and-conditions" title="Terms and Conditions">
                                            <span>Terms and Conditions</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="smcopyright">
                            <p class="caption">&copy; 2020, Aditya Birla Capital Ltd. All Rights Reserved. </p>
                            <div class="contacttext">
                                <p class="caption">Call us toll free: </p><span class="abcicons icon-icon-phone iconspan"></span>
                                <p class="caption"><a href="tel:1800 270 7000" class="phone-link"> 1800 270 7000</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="lower-div">
                        <div class="copyright">
                            <p class="caption">&copy; 2020, Aditya Birla Capital Ltd. All Rights Reserved.</p>
                        </div>
                        <div class="socialicons">
                            <div class="contacttext">
                                <p class="caption">Call us toll free: </p>
                                <span class="abcicons icon-icon-phone iconspan"></span>
                                <p class="caption"><a href="tel:1800 270 7000" class="phone-link"> 1800 270 7000</a></p>
                            </div>
                            <ul class="no-mar">
                                <li class="">
                                    <a href="https://www.facebook.com/AdityaBirlaCapital/" title="" class="btn-social-icon btn-facebook">
                                        <span class="abcicons icon-icon-facebook"></span>
                                    </a>
                                </li>
                                <li class="">
                                    <a href="https://www.instagram.com/adityabirlacapital/" title="Instagram" class="btn-social-icon btn-instagram">
                                        <span class="abcicons icon-icon-instagram"></span>
                                    </a>
                                </li>
                                <li class="">
                                    <a href="https://www.linkedin.com/company/aditya-birla-capital" title="Linked In" class="btn-social-icon btn-linkedin">
                                        <span class="abcicons icon-icon-linkedin"></span>
                                    </a>
                                </li>
                                <li class="">
                                    <a href="https://twitter.com/abcapital" title="" class="btn-social-icon btn-twitter">
                                        <span class="abcicons icon-icon-twitter"></span>
                                    </a>
                                </li>
                                <li class="">
                                    <a href="https://www.youtube.com/channel/UCSki2tX_5kadIdz3m8Q4Fvg/" title="Youtube" class="btn-social-icon btn-youtube">
                                        <span class="abcicons icon-icon-youtube"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
