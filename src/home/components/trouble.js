import React from 'react';
import closeIcon from '../../assets/img/icons/close.svg';
import lockIcon from '../../assets/img/icons/lock.svg';
import keyIcon from '../../assets/img/icons/key.svg';


function Trouble() {
    return (
        <main role="main">
            <section className="grey-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="cardz shadow-sm">
                                <p className="h4 bold">Problem Sign In?</p>
                                <p className="font-size-18">Potential problems a user can face at the time of logging in. Explained below is the appropriate action which has to be taken in each case</p>
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
                            <p className="h4 bold"><img className="mrgn-right-10" src={closeIcon} alt='closeIcon' />Your user ID or password is incorrect.</p>
                            <p className="font-size-18">a) Please check the user ID entered by you.</p>
                            <p className="font-size-18">b) Your Business Code is the user id e.g. if you are an Insurance Advisor, please enter your advisor code. if you are a Corporate Agent, please enter your Corporate Agency Code. If you are Business Mentor, please enter your Business Mentor Code</p>
                            <p className="font-size-18">c) Password is case sensitive.</p>
                            <p className="font-size-18">d) Please check the password entered by you.</p>
                            <p className="font-size-18">e) Password is case sensitive.</p>
                            <p className="font-size-18">f) If you have forgotten your password, please click on Generate Password link.</p>
                            <p className="font-size-18">g) If you enter incorrect password 5 times, your account will be locked.</p>
                            <br />
                            <p className="h4 bold"><img className="mrgn-right-10" src={lockIcon} alt='lockIcon' />Your account is locked</p>
                            <p className="font-size-18">If your Account is locked, kindly <a className="link-m" href>Generate Password to unlock </a>it or call our toll free no. 1800 270 7000.</p>
                            <br />
                            <p className="h4 bold"><img className="mrgn-right-10" src={keyIcon} alt='keyIcon' />Change password</p>
                            <p className="font-size-18">Login with your user ID and password.<a className="link-m" href>Go to Change Password link</a> available at the bottom of the page. Change your password.</p>
                            <p className="font-size-18 color-red bold">NOTE: In case you face any other problem or need assistance, please call our toll free no. 1800 270 7000</p>
                            <br /><br />
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Trouble
