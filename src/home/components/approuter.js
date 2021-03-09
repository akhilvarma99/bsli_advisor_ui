import React from "react";
import { Route } from "react-router-dom";
import login from "../components/login.js";
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
import Query_details from "./Query_details";
import Querymanagementsystem from "./Querymanagementsystem";
import Query_list from "./Query_list";
import Raise_query from "./Raise_query";
import Dashboard from "../containers/dashboard";
import Password from "./password";
import Trouble from "./trouble";
import Users from "./users";
import Terms from "./terms";
import Privacy from "./privacy";
import Navigation from "./navigation";
import Login from "../components/login.js";

function Approuter() {
  return (
    <div className="portal-wrapper">
      <Route exact path="/" component={Navigation} />
      <Route exact path="/login" component={Login} />
      <Route path="/troubleLogin" component={Trouble} />
      <Route path="/password" component={Password} />
      <Route path="/users" component={Users} />
      <Route path="/terms" component={Terms} />
      <Route path="/Privacy" component={Privacy} />
      <Route exact path="/CustomerList" component={CustomerList} />
      <Route exact path="/Allcustomers" component={Allcustomers} />
      <Route exact path="/Recommendations" component={Recommendations} />
      <Route exact path="/PendingQueries" component={PendingQueries} />
      <Route exact path="/Payouts" component={Payouts} />
      <Route exact path="/Overdue" component={Overdue} />
      <Route exact path="/BirthdayWishes" component={BirthdayWishes} />
      {/* <Route exact path="/Navigation" component={Navigation} /> */}
      <Route
        exact
        path="/Allcustomersresultnotfound"
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
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/Query_details" component={Query_details} />
      <Route
        exact
        path="/Querymanagementsystem"
        component={Querymanagementsystem}
      />
      <Route exact path="/Query_list" component={Query_list} />
      <Route exact path="/Raise_query" component={Raise_query} />
    </div>
  );
}

export default Approuter;
