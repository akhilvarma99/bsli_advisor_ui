import React from "react";
import { Route } from "react-router-dom";
import login from '../components/login.js';
import CustomerList from "./CustomerList";
import Allcustomers from "./Allcustomers";
import Recommendations from "./Recommendations";
import PendingQueries from "./PendingQueries";
import Payouts from "./Payouts";
import BirthdayWishes from "./BirthdayWishes";
import Allcustomersresultnotfound from "./Allcustomersresultnotfound";
import Renewalpaymentdue from "./Renewalpaymentdue";
import Overdue from "./Overdue";
import Customerdetails from "./Customerdetails";
import PolicyDetails from "./Policydetails";
import Customerdetailsaddfamily from "./Customerdetailsfamily";
import Trouble from './trouble';
function Approuter() {
  return (
    <div className="portal-wrapper">
      <Route exact path="/" component={login} />
      <Route path='/troubleLogin' component={Trouble} />
      <Route exact path="/CustomerList" component={CustomerList} />
      <Route exact path="/Allcustomers" component={Allcustomers} />
      <Route exact path="/Recommendations" component={Recommendations} />
      <Route exact path="/PendingQueries" component={PendingQueries} />
      <Route exact path="/Payouts" component={Payouts} />
      <Route exact path="/Overdue" component={Overdue} />
      <Route exact path="/BirthdayWishes" component={BirthdayWishes} />
      <Route exact path="/BirthdayWishes" component={BirthdayWishes} />

      <Route
        exact
        path="/Allcustomersnotfound"
        component={Allcustomersresultnotfound}
      />
      <Route exact path="/Renewalpaymentdue" component={Renewalpaymentdue} />
      <Route exact path="/Customerdetails" component={Customerdetails} />
      <Route exact path="/Policydetails" component={PolicyDetails} />
      <Route
        exact
        path="/customerdetailsfamily"
        component={Customerdetailsaddfamily}
      />
    </div>
  );
}

export default Approuter;
