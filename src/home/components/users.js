import React from 'react';
import userIcon from '../../assets/img/icons/user-icon.svg';
import { NavLink } from 'react-router-dom';

function Users() {
    return (
        <div>
            <main role="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="login-card shadow-sm">
                                <span className="back-a"><NavLink to='/password'>Back</NavLink></span>
                                <p className="h3 text-center">Choose an Account</p>
                                <br />
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="select-user-id">
                                            <ul>
                                                <li>
                                                    <span></span>
                                                    <NavLink to='/' ><img src={userIcon} alt={userIcon} />User ID 123456</NavLink>
                                                </li>
                                                <li className="brdr-none">
                                                    <NavLink to='/' className="bold" >Add Another Account</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <br /><br /><br />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-md-8 hide">
                                        <NavLink to='/troubleLogin' className="float-left m-top-10" data-toggle="modal" data-target="#staticBackdrop" >Having problem signing in?</NavLink>
                                    </div>
                                    <div className="col-md-8 show-xs">
                                        <br />
                                        <NavLink to='/troubleLogin' className="float-left m-top-10" data-toggle="modal" data-target="#staticBackdrop" >Having problem signing in?</NavLink>
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
