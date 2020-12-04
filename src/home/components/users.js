import React from 'react';
import userIcon from '../../assets/img/icons/user-icon.svg';
import { Link } from 'react-router-dom';

function Users() {
    return (
        <div>
            <main role="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="login-card shadow-sm">
                                <span className="back-a"><Link to='/password'>Back</Link></span>
                                <p className="h3 text-center">Choose an Account</p>
                                <br />
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="select-user-id">
                                            <ul>
                                                <li>
                                                    <a href><img src={userIcon} alt={userIcon} />User ID 123456</a>
                                                </li>
                                                <li className="brdr-none">
                                                    <a className="bold" href>Add Another Account</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <br /><br /><br />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-md-8 hide">
                                        <a className="float-left m-top-10" data-toggle="modal" data-target="#staticBackdrop" href="/">Having problem signing in?</a>
                                    </div>
                                    <div className="col-md-8 show-xs">
                                        <br />
                                        <a className="float-left m-top-10" data-toggle="modal" data-target="#staticBackdrop" href="/">Having problem signing in?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Users
