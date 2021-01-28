import react from "react";
import abclogo2x from "./assets/img/images/ABCLOGO_2x.png";

function BlankHeader() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg abc-navbar">
        <a
          className="navbar-brand logo"
          href="https://www.adityabirlacapital.com/"
        >
          <img
            className="d-none d-xs-none d-sm-none d-md-none d-lg-block d-xl-block"
            alt="abclogo2x.png"
            src={abclogo2x}
          />
          <img
            className="d-block d-xs-block d-sm-block d-md-block d-lg-none d-xl-none"
            alt="abcabcmobile2x.png"
            src={abclogo2x}
          />
        </a>
      </nav>
    </header>
  );
}

export default BlankHeader;
