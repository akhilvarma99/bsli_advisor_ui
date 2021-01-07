import React from "react";
import breadcrumbs from "../../assets/img/icons/breadcrumbs-arrow.png";
import backarrow from "../../assets/img/icons/back-arrow.svg";
import sort from "../../assets/img/icons/sort.svg";
import starempty from "../../assets/img/icons/star-empty.svg";
function BirthdayWishes() {
  return (
    <div>
      <header>
        <div className="sample-header"></div>
      </header>
      <main className="bg-white " role="main">
        <div className="breadcrubs-div shadow-sm">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul>
                  <li>Dashboard</li>
                  <li>
                    <img src={breadcrumbs} alt="breadcrumbs" />
                  </li>
                  <li className>Customer List</li>
                  <li>
                    <img src={breadcrumbs} alt="breadcrumbs" />
                  </li>
                  <li className="active-li">Birthday Wishes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {/* Heading Starts  */}
          <div className="row">
            <div className="col-md-12">
              <h1 className="p-header">
                <img src={backarrow} alt="backarrow" />
                Birthday Wishes (10)
              </h1>
            </div>
          </div>
          {/* Heading Ends  */}
          <div className="row">
            <div className="col-lg-12">
              {/* Data Cards */}
              <div className="data-card">
                {/* d-none d-lg-block d-md-block d-sm-none  */}
                <div className="data_card_body">
                  <div className="row">
                    <div className="col-md-12" />
                    <div className="col-md-12 pad-0">
                      <div className="sidebar m-pad">
                        <div className="date-search-outer d-search d-none d-lg-block">
                          <br />
                        </div>
                        <ul
                          className="nav nav-tabs h-scroll-s "
                          id="myTab"
                          role="tablist"
                        >
                          <li className="nav-item w-50-p" role="presentation">
                            <a
                              className="nav-link active"
                              id="home-tab"
                              data-toggle="tab"
                              href="#today"
                              role="tab"
                              aria-controls="home"
                              aria-selected="true"
                            >
                              Today
                            </a>
                          </li>
                          <li className="nav-item w-50-p" role="presentation">
                            <a
                              className="nav-link"
                              id="profile-tab"
                              data-toggle="tab"
                              href="#next-week"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="false"
                            >
                              Next Week
                            </a>
                          </li>
                          <li className="nav-item w-50-p" role="presentation">
                            <a
                              className="nav-link"
                              id="profile-tab"
                              data-toggle="tab"
                              href="#later"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="false"
                            >
                              Later
                            </a>
                          </li>
                        </ul>
                        {/* <div class="date-search-outer">
                  
                </div> */}
                      </div>
                      <div
                        className="tab-content m-pad-normal"
                        id="myTabContent"
                      >
                        {/* Today Content Starts Here */}
                        <div
                          className="tab-pane fade show active"
                          id="today"
                          role="tabpanel"
                          aria-labelledby="today"
                        >
                          <div className="g-container">
                            {/* Block */}
                            <div className="g-header d-none d-lg-block d-md-none d-sm-none d-xs-none ">
                              <div className="row">
                                <div className="col-md-3">
                                  <label>
                                    name
                                    <img src={sort} alt="sort" />
                                  </label>
                                </div>
                                <div className="col-md-1 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                  <label>
                                    Contact
                                    <img src={sort} alt="sort" />
                                  </label>
                                </div>
                                <div className="col-md-4">
                                  <label>
                                    Policy Details
                                    <img src={sort} alt="sort" />
                                    <br />
                                    <span>Sorted by due date</span>
                                  </label>
                                </div>
                                <div className="col-lg-3 pad-0">
                                  <label>Payment Mode</label>
                                </div>
                              </div>
                            </div>
                            {/* Block */}
                            {/* Block */}
                            <div className="g-row">
                              <div className="row">
                                <div className="col-lg-3 col-md-4">
                                  <div className="v-lg d-none d-lg-block">
                                    <div className="ini-gap" />
                                    <div className="name_circle color-4">F</div>
                                    <label>Fohn Crockett</label>
                                  </div>
                                  <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                    <div className="row">
                                      <div className="p-3 bd-highlight">
                                        <div className="name_circle color-4">
                                          F
                                        </div>
                                      </div>
                                      <div className="p-9 bd-highlight">
                                        <label>
                                          Fohn Crockett
                                          <br /> 9876543213
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-1 col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-4 col-md-4">
                                  <p>
                                    129129229 &nbsp;|&nbsp; 28/12/2020
                                    &nbsp;|&nbsp; 1,50,000.00
                                  </p>
                                </div>
                                <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                  <p className="float-left">Credit Card</p>
                                </div>
                                <div className="col-lg-3 col-md-3">
                                  <div className="row">
                                    <div className="col-lg-2 col-md-1 text-center">
                                      <p>
                                        <img src={starempty} alt="starempty" />
                                      </p>
                                    </div>
                                    <div className="col-lg-10 col-md-3 text-right">
                                      <button
                                        type="button"
                                        className="btn btn-outline-s disabled-btn"
                                      >
                                        Premium Already Paid
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Block */}
                            {/* Block */}
                            <div className="g-row">
                              <div className="row">
                                <div className="col-lg-3 col-md-4">
                                  <div className="v-lg d-none d-lg-block">
                                    <div className="ini-gap" />
                                    <div className="name_circle color-1">F</div>
                                    <label>Fohn Crockett</label>
                                  </div>
                                  <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                    <div className="row">
                                      <div className="p-3 bd-highlight">
                                        <div className="name_circle color-1">
                                          F
                                        </div>
                                      </div>
                                      <div className="p-9 bd-highlight">
                                        <label>
                                          Fohn Crockett
                                          <br /> 9876543213
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-1 col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-4 col-md-4">
                                  <p>
                                    129129229 &nbsp;|&nbsp; 28/12/2020
                                    &nbsp;|&nbsp; 1,50,000.00
                                  </p>
                                </div>
                                <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                  <p className="float-left">Credit Card</p>
                                </div>
                                <div className="col-lg-3 col-md-3">
                                  <div className="row">
                                    <div className="col-lg-2 col-md-1 text-center">
                                      <p>
                                        <img src={starempty} alt="starempty" />
                                      </p>
                                    </div>
                                    <div className="col-lg-10 col-md-3 text-right">
                                      <button
                                        type="button"
                                        className="btn btn-outline-s disabled-btn"
                                      >
                                        Premium Already Paid
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Block */}
                            {/* Block */}
                            <div className="g-row">
                              <div className="row">
                                <div className="col-lg-3 col-md-4">
                                  <div className="v-lg d-none d-lg-block">
                                    <div className="ini-gap" />
                                    <div className="name_circle color-2">F</div>
                                    <label>Fohn Crockett</label>
                                  </div>
                                  <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                    <div className="row">
                                      <div className="p-3 bd-highlight">
                                        <div className="name_circle color-2">
                                          F
                                        </div>
                                      </div>
                                      <div className="p-9 bd-highlight">
                                        <label>
                                          Fohn Crockett
                                          <br /> 9876543213
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-1 col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-4 col-md-4">
                                  <p>
                                    129129229 &nbsp;|&nbsp; 28/12/2020
                                    &nbsp;|&nbsp; 1,50,000.00
                                  </p>
                                </div>
                                <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                  <p className="float-left">Credit Card</p>
                                </div>
                                <div className="col-lg-3 col-md-3">
                                  <div className="row">
                                    <div className="col-lg-2 col-md-1 text-center">
                                      <p>
                                        <img src={starempty} alt="starempty" />
                                      </p>
                                    </div>
                                    <div className="col-lg-10 col-md-3 text-right">
                                      <button
                                        type="button"
                                        className="btn btn-outline-s"
                                      >
                                        Send Payment Link
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Block */}
                            {/* Block */}
                            <div className="g-row">
                              <div className="row">
                                <div className="col-lg-3 col-md-4">
                                  <div className="v-lg d-none d-lg-block">
                                    <div className="ini-gap" />
                                    <div className="name_circle color-3">F</div>
                                    <label>Fohn Crockett</label>
                                  </div>
                                  <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                    <div className="row">
                                      <div className="p-3 bd-highlight">
                                        <div className="name_circle color-3">
                                          F
                                        </div>
                                      </div>
                                      <div className="p-9 bd-highlight">
                                        <label>
                                          Fohn Crockett
                                          <br /> 9876543213
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-1 col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-4 col-md-4">
                                  <p>
                                    129129229 &nbsp;|&nbsp; 28/12/2020
                                    &nbsp;|&nbsp; 1,50,000.00
                                  </p>
                                </div>
                                <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                  <p className="float-left">Credit Card</p>
                                </div>
                                <div className="col-lg-3 col-md-3">
                                  <div className="row">
                                    <div className="col-lg-2 col-md-1 text-center">
                                      <p>
                                        <img src={starempty} alt="starempty" />
                                      </p>
                                    </div>
                                    <div className="col-lg-10 col-md-3 text-right">
                                      <button
                                        type="button"
                                        className="btn btn-outline-s"
                                      >
                                        Send Payment Link
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Block */}
                            {/* Block */}
                            <div className="g-row">
                              <div className="row">
                                <div className="col-lg-3 col-md-4">
                                  <div className="v-lg d-none d-lg-block">
                                    <div className="ini-gap" />
                                    <div className="name_circle color-4">F</div>
                                    <label>Fohn Crockett</label>
                                  </div>
                                  <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                    <div className="row">
                                      <div className="p-3 bd-highlight">
                                        <div className="name_circle color-4">
                                          F
                                        </div>
                                      </div>
                                      <div className="p-9 bd-highlight">
                                        <label>
                                          Fohn Crockett
                                          <br /> 9876543213
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-1 col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-4 col-md-4">
                                  <p>
                                    129129229 &nbsp;|&nbsp; 28/12/2020
                                    &nbsp;|&nbsp; 1,50,000.00
                                  </p>
                                </div>
                                <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                  <p className="float-left">Credit Card</p>
                                </div>
                                <div className="col-lg-3 col-md-3">
                                  <div className="row">
                                    <div className="col-lg-2 col-md-1 text-center">
                                      <p>
                                        <img src={starempty} alt="starempty" />
                                      </p>
                                    </div>
                                    <div className="col-lg-10 col-md-3 text-right">
                                      <button
                                        type="button"
                                        className="btn btn-outline-s"
                                      >
                                        Send Payment Link
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Block */}
                            {/* Block */}
                            <div className="g-row">
                              <div className="row">
                                <div className="col-lg-3 col-md-4">
                                  <div className="v-lg d-none d-lg-block">
                                    <div className="ini-gap" />
                                    <div className="name_circle color-5">F</div>
                                    <label>Fohn Crockett</label>
                                  </div>
                                  <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                    <div className="row">
                                      <div className="p-3 bd-highlight">
                                        <div className="name_circle color-5">
                                          F
                                        </div>
                                      </div>
                                      <div className="p-9 bd-highlight">
                                        <label>
                                          Fohn Crockett
                                          <br /> 9876543213
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-1 col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-4 col-md-4">
                                  <p>
                                    129129229 &nbsp;|&nbsp; 28/12/2020
                                    &nbsp;|&nbsp; 1,50,000.00
                                  </p>
                                </div>
                                <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                  <p className="float-left">Credit Card</p>
                                </div>
                                <div className="col-lg-3 col-md-3">
                                  <div className="row">
                                    <div className="col-lg-2 col-md-1 text-center">
                                      <p>
                                        <img src={starempty} alt="starempty" />
                                      </p>
                                    </div>
                                    <div className="col-lg-10 col-md-3 text-right">
                                      <button
                                        type="button"
                                        className="btn btn-outline-s"
                                      >
                                        Send Payment Link
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Block */}
                            {/* Block */}
                            <div className="g-row">
                              <div className="row">
                                <div className="col-lg-3 col-md-4">
                                  <div className="v-lg d-none d-lg-block">
                                    <div className="ini-gap" />
                                    <div className="name_circle color-6">F</div>
                                    <label>Fohn Crockett</label>
                                  </div>
                                  <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                    <div className="row">
                                      <div className="p-3 bd-highlight">
                                        <div className="name_circle color-6">
                                          F
                                        </div>
                                      </div>
                                      <div className="p-9 bd-highlight">
                                        <label>
                                          Fohn Crockett
                                          <br /> 9876543213
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-1 col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none pad-0">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-4 col-md-4">
                                  <p>
                                    129129229 &nbsp;|&nbsp; 28/12/2020
                                    &nbsp;|&nbsp; 1,50,000.00
                                  </p>
                                </div>
                                <div className="col-lg-1 col-md-1 text-center pad-0 d-none d-lg-block">
                                  <p className="float-left">Credit Card</p>
                                </div>
                                <div className="col-lg-3 col-md-3">
                                  <div className="row">
                                    <div className="col-lg-2 col-md-1 text-center">
                                      <p>
                                        <img src={starempty} alt="starempty" />
                                      </p>
                                    </div>
                                    <div className="col-lg-10 col-md-3 text-right">
                                      <button
                                        type="button"
                                        className="btn btn-outline-s"
                                      >
                                        Send Payment Link
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Block */}
                            {/* <div class="g-footer text-center">
                        <button type="button" class="btn btn-primary"><img src="./assets/img/icons/load-more.svg">Load More</button>
                      </div> */}
                          </div>
                        </div>
                        {/* Today Content Ends Here */}
                        {/* Next Week Content Starts Here -------------------------------------------------------------------------------- */}
                        <div
                          className="tab-pane fade"
                          id="next-week"
                          role="tabpanel"
                          aria-labelledby="next-week"
                        >
                          <h1>2</h1>
                        </div>
                        {/* Next Week Content Ends Here */}
                        {/* Later Content Starts Here ----------------------------------------------------------------------------------------------*/}
                        <div
                          className="tab-pane fade"
                          id="later"
                          role="tabpanel"
                          aria-labelledby="later"
                        >
                          <h1>3</h1>
                        </div>
                        {/* Later Content Ends Here */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="text-muted">
        <div className="sample-footer"></div>
      </footer>
      );
    </div>
  );
}

export default BirthdayWishes;
