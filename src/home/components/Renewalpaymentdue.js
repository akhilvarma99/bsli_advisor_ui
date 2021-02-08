import React from "react";
import Header from "../../header";
import breadcrumbs from "../../assets/img/icons/breadcrumbs-arrow.png";
import backarrow from "../../assets/img/icons/back-arrow.svg";
import searchbox from "../../assets/img/icons/search-bx.svg";
import sort from "../../assets/img/icons/sort.svg";
import filter from "../../assets/img/icons/filter.svg";
import starempty from "../../assets/img/icons/star-empty.svg";
import loadmore from "../../assets/img/icons/load-more.svg";
function Renewalpaymentdue() {
  return (
    <div>
      <Header />
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
                  <li className>Customer List</li>{" "}
                  <li>
                    <img src={breadcrumbs} alt="breadcrumbs" />
                  </li>
                  <li className="active-li">Renewal Payment Due</li>
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
                Renewal Payment Due (10)
              </h1>
            </div>
          </div>
          {/* Heading Ends  */}
          <div className="f_Div_outer">
            <div className="f_Div_c1 d-none d-lg-block">
              <div className="filter-div-l shadow-normal">
                <div className="filter_header">
                  <div className="row">
                    <div className="col-lg-12 filter_sub_heading">
                      <h2>
                        <img src={filter} alt="filter" />
                        Filter (1)
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="filter_body" id="style-3">
                  <div className="filter-body-inner">
                    <div className="row">
                      <div className="col-lg-12 filter_sub_check_box_row">
                        <h3>Billing Method</h3>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheckBox1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheckBox1"
                          >
                            Direct Bill
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox check-box-row">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheckBox2"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheckBox2"
                          >
                            ECS
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div class="row">
                <div class="col-lg-6">
                  <button type="button" class="btn btn-outline-s-secondary">Reset</button>
                </div>
                <div class="col-lg-6">
                  <button type="button" class="btn btn-primary-s">Apply</button>
                </div>
              </div> */}
                </div>
                <div className="filter-footer">
                  <div className="row">
                    <div className="col-lg-12">
                      <button
                        type="button"
                        className="btn btn-outline-s-secondary"
                      >
                        Reset
                      </button>{" "}
                      <button
                        type="button"
                        className="btn btn-primary-s mrgn-0"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="f_Div_c2">
              <div className="data-card">
                {/* d-none d-lg-block d-md-block d-sm-none  */}
                <div className="data_card_body">
                  <div className="row">
                    <div className="col-md-12" />
                    <div className="col-md-12 pad-0">
                      <div className="sidebar m-pad">
                        <div className="date-search-outer d-search d-none d-lg-block">
                          <div className="data-search-inner">
                            <div className="data-search">
                              {/* <img src={searchbox} alt="searchbox" /> */}
                              <input
                                type="email"
                                className="form-control data-search-box"
                                id="search"
                                aria-describedby="data-search"
                                placeholder="Search by customer name, policy no., PAN, Mobile No."
                              />
                              <button
                                type="button"
                                className="btn btn-primary-s"
                              >
                                Search
                              </button>
                            </div>
                          </div>
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
                                    {/* <img src={sort} alt="sort" /> */}
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
                                    129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                    129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                    129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                    129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                    129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                    129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                                    129129229 &nbsp;|&nbsp; 28/Dec/2020
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
                            <div className="g-footer text-center">
                              <button type="button" className="btn btn-primary">
                                <img src={loadmore} alt="loadmore" />
                                See More
                              </button>
                            </div>
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
          <div className="row">
            <div className="col-lg-3 d-none d-md-block"></div>
            <div className="col-lg-9"></div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="f_Div_outer">
                <div className="f_Div_c1 d-none d-lg-block"></div>
                <div className="f_Div_c2"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-9"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Renewalpaymentdue;
