import React from "react";
import Approuter from "../components/approuter";
import "../../assets/css/vendor/bootstrap.min.css";
import Header from "../../header";
import Footer from "../../footer";
import BlankHeader from "../../blankheader";

function Layout() {
  return (
    <div>
      <Approuter />
      <Footer />
    </div>
  );
}

export default Layout;
