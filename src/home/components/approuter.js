import React from 'react';
import { Route } from 'react-router-dom';
import Login from './login';
import Password from './password';
import Users from './users';
import Trouble from './trouble';


function Approuter() {
    return (
        <div>
            <Route exact path="/" component={Login} />
            <Route path="/password" component={Password} />
            <Route path="/users" component={Users} />
            <Route path='/troubleLogin' component={Trouble} />
        </div>
    )
}

export default Approuter
