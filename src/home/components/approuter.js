import React from 'react';
import { Route } from 'react-router-dom';
import Login from './login';
import Password from './password';
import Users from './users';
import Trouble from './trouble';
import Dashboard from '../containers/dashboard';




function Approuter() {
    return (
        <div className='portal-wrapper'>
            <Route exact path="/" component={Login} />
            <Route path="/password" component={Password} />
            <Route path="/users" component={Users} />
            <Route path='/troubleLogin' component={Trouble} />
            <Route path='/dashboard' component={Dashboard} />
        </div>
    )
}

export default Approuter
