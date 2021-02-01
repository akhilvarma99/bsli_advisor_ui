import React from "react";
import Header from "../../header";
import breadcrumbs from "../../assets/img/icons/breadcrumbs-arrow.png";
import backarrow from "../../assets/img/icons/back-arrow.svg";
import sort from "../../assets/img/icons/sort.svg";
import starEmpty from "../../assets/img/icons/star-empty.svg";
import load from "../../assets/img/icons/load-more.svg";
function BirthdayWishes() {
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
                              href="#today1"
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
                              href="#next-week1"
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
                              href="#later1"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="false"
                            >
                              Later
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="tab-content m-pad-normal"
                        id="myTabContent"
                      >
                        {/* Today Content Starts Here */}
                        <div
                          className="tab-pane fade show active"
                          id="today1"
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
                                <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                  <label>
                                    Contact
                                    {/* <img src={sort} alt="sort" /> */}
                                  </label>
                                </div>
                                <div className="col-md-7">
                                  <label>
                                    Details
                                    <img src={sort} alt="sort" />
                                  </label>
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
                                <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-3 col-md-4">
                                  <p>
                                    Sangeetha &nbsp;|&nbsp; Self &nbsp;|&nbsp;
                                    26/Dec/2020
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-1 text-center">
                                  <p>
                                    <img
                                      src={starEmpty}
                                      alt="starEmpty"
                                      className="starempty"
                                    />
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-3 text-right">
                                  <button
                                    type="button"
                                    className="btn btn-outline-s  disabled-btn"
                                  >
                                    Already Wished
                                  </button>
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
                                    <div className="name_circle color-2">E</div>
                                    <label>Elisha McFadden</label>
                                  </div>
                                  <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                    <div className="row">
                                      <div className="p-3 bd-highlight">
                                        <div className="name_circle color-2">
                                          E
                                        </div>
                                      </div>
                                      <div className="p-9 bd-highlight">
                                        <label>
                                          Elisha McFadden
                                          <br /> 9876543213
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-3 col-md-4">
                                  <p>
                                    Vijay Singa &nbsp;|&nbsp; Son &nbsp;|&nbsp;
                                    26/Dec/2020
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-1 text-center">
                                  <p>
                                    <img
                                      src={starEmpty}
                                      alt="starEmpty"
                                      className="starempty"
                                    />
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-3 text-right">
                                  <button
                                    type="button"
                                    className="btn btn-outline-s"
                                  >
                                    Send Wishes
                                  </button>
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
                                    <div className="name_circle color-3">A</div>
                                    <label>Abel Cunningham</label>
                                  </div>
                                  <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                    <div className="row">
                                      <div className="p-3 bd-highlight">
                                        <div className="name_circle color-3">
                                          A
                                        </div>
                                      </div>
                                      <div className="p-9 bd-highlight">
                                        <label>
                                          Abel Cunningham
                                          <br /> 9876543213
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-3 col-md-4">
                                  <p>
                                    Ayesha &nbsp;|&nbsp; Mother &nbsp;|&nbsp;
                                    26/Dec/2020
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-1 text-center">
                                  <p>
                                    <img
                                      src={starEmpty}
                                      alt="starEmpty"
                                      className="starempty"
                                    />
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-3 text-right">
                                  <button
                                    type="button"
                                    className="btn btn-outline-s"
                                  >
                                    Send Wishes
                                  </button>
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
                                    <div className="name_circle color-4">R</div>
                                    <label>Richard Nichol</label>
                                  </div>
                                  <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                    <div className="row">
                                      <div className="p-3 bd-highlight">
                                        <div className="name_circle color-4">
                                          R
                                        </div>
                                      </div>
                                      <div className="p-9 bd-highlight">
                                        <label>
                                          Richard Nichol
                                          <br /> 9876543213
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-3 col-md-4">
                                  <p>
                                    Randal Patel &nbsp;|&nbsp; Father
                                    &nbsp;|&nbsp; 26/Dec/2020
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-1 text-center">
                                  <p>
                                    <img
                                      src={starEmpty}
                                      alt="starEmpty"
                                      className="starempty"
                                    />
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-3 text-right">
                                  <button
                                    type="button"
                                    className="btn btn-outline-s"
                                  >
                                    Send Wishes
                                  </button>
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
                                    <div className="name_circle color-5">D</div>
                                    <label>Degory Kirk</label>
                                  </div>
                                  <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                    <div className="row">
                                      <div className="p-3 bd-highlight">
                                        <div className="name_circle color-5">
                                          D
                                        </div>
                                      </div>
                                      <div className="p-9 bd-highlight">
                                        <label>
                                          Degory Kirk <br /> 9876543213
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-3 col-md-4">
                                  <p>
                                    Santosh Boyini &nbsp;|&nbsp; Self
                                    &nbsp;|&nbsp; 26/Dec/2020
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-1 text-center">
                                  <p>
                                    <img
                                      src={starEmpty}
                                      alt="starEmpty"
                                      className="starempty"
                                    />
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-3 text-right">
                                  <button
                                    type="button"
                                    className="btn btn-outline-s"
                                  >
                                    Send Wishes
                                  </button>
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
                                    <div className="name_circle color-6">C</div>
                                    <label>Clement Ebaugh</label>
                                  </div>
                                  <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                    <div className="row">
                                      <div className="p-3 bd-highlight">
                                        <div className="name_circle color-6">
                                          C
                                        </div>
                                      </div>
                                      <div className="p-9 bd-highlight">
                                        <label>
                                          Clement Ebaugh <br /> 9876543213
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-3 col-md-4">
                                  <p>
                                    Digbijay &nbsp;|&nbsp; Self &nbsp;|&nbsp;
                                    26/Dec/2020
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-1 text-center">
                                  <p>
                                    <img
                                      src={starEmpty}
                                      alt="starEmpty"
                                      className="starempty"
                                    />
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-3 text-right">
                                  <button
                                    type="button"
                                    className="btn btn-outline-s"
                                  >
                                    Send Wishes
                                  </button>
                                </div>
                              </div>
                            </div>
                            {/* Block */}
                            <div className="g-footer text-center">
                              <button type="button" className="btn btn-primary">
                                <img src={load} alt="load" />
                                See More
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* Today Content Ends Here */}
                        {/* Next Week Content Starts Here -------------------------------------------------------------------------------- */}
                        <div
                          className="tab-pane fade"
                          id="next-week1"
                          role="tabpanel"
                          aria-labelledby="next-week"
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
                                <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                  <label>
                                    Contact
                                    {/* <img src={sort} alt="sort" /> */}
                                  </label>
                                </div>
                                <div className="col-md-7">
                                  <label>
                                    Details
                                    <img src={sort} alt="sort" />
                                  </label>
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
                                <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-3 col-md-4">
                                  <p>
                                    Sangeetha &nbsp;|&nbsp; Self &nbsp;|&nbsp;
                                    26/Dec/2020
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-1 text-center">
                                  <p>
                                    <img
                                      src={starEmpty}
                                      alt="starEmpty"
                                      className="starempty"
                                    />
                                  </p>
                                </div>
                                {/* <div className="col-lg-1 col-md-3 text-right">
                                  <button
                                    type="button"
                                    className="btn btn-outline-s"
                                  >
                                    Send Wishes
                                  </button>
                                </div> */}
                              </div>
                            </div>
                            {/* Block */}
                            {/* Block */}
                            <div className="g-row">
                              <div className="row">
                                <div className="col-lg-3 col-md-4">
                                  <div className="v-lg d-none d-lg-block">
                                    <div className="ini-gap" />
                                    <div className="name_circle color-2">E</div>
                                    <label>Elisha McFadden</label>
                                  </div>
                                  <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                    <div className="row">
                                      <div className="p-3 bd-highlight">
                                        <div className="name_circle color-2">
                                          E
                                        </div>
                                      </div>
                                      <div className="p-9 bd-highlight">
                                        <label>
                                          Elisha McFadden
                                          <br /> 9876543213
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-3 col-md-4">
                                  <p>
                                    Sanveetha &nbsp;|&nbsp; Mother &nbsp;|&nbsp;
                                    26/Dec/2020
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-1 text-center">
                                  <p>
                                    <img
                                      src={starEmpty}
                                      alt="starEmpty"
                                      className="starempty"
                                    />
                                  </p>
                                </div>
                                {/* <div className="col-lg-2 col-md-3 text-right">
                                  <button
                                    type="button"
                                    className="btn btn-outline-s"
                                  >
                                    Send Wishes
                                  </button>
                                </div> */}
                              </div>
                            </div>
                            {/* Block */}
                            {/* Block */}
                            <div className="g-row">
                              <div className="row">
                                <div className="col-lg-3 col-md-4">
                                  <div className="v-lg d-none d-lg-block">
                                    <div className="ini-gap" />
                                    <div className="name_circle color-3">A</div>
                                    <label>Abel Cunningham</label>
                                  </div>
                                  <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                    <div className="row">
                                      <div className="p-3 bd-highlight">
                                        <div className="name_circle color-3">
                                          A
                                        </div>
                                      </div>
                                      <div className="p-9 bd-highlight">
                                        <label>
                                          Abel Cunningham
                                          <br /> 9876543213
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-3 col-md-4">
                                  <p>
                                    Ayesha &nbsp;|&nbsp; Mother &nbsp;|&nbsp;
                                    26/Dec/2020
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-1 text-center">
                                  <p>
                                    <img
                                      src={starEmpty}
                                      alt="starEmpty"
                                      className="starempty"
                                    />
                                  </p>
                                </div>
                                {/* <div className="col-lg-2 col-md-3 text-right">
                                  <button
                                    type="button"
                                    className="btn btn-outline-s"
                                  >
                                    Send Wishes
                                  </button>
                                </div> */}
                              </div>
                            </div>
                            {/* Block */}
                            {/* Block */}
                            <div className="g-row">
                              <div className="row">
                                <div className="col-lg-3 col-md-4">
                                  <div className="v-lg d-none d-lg-block">
                                    <div className="ini-gap" />
                                    <div className="name_circle color-4">R</div>
                                    <label>Richard Nichol</label>
                                  </div>
                                  <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                    <div className="row">
                                      <div className="p-3 bd-highlight">
                                        <div className="name_circle color-4">
                                          R
                                        </div>
                                      </div>
                                      <div className="p-9 bd-highlight">
                                        <label>
                                          Richard Nichol
                                          <br /> 9876543213
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-3 col-md-4">
                                  <p>
                                    Randal Patel &nbsp;|&nbsp; Father
                                    &nbsp;|&nbsp; 26/Dec/2020
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-1 text-center">
                                  <p>
                                    <img
                                      src={starEmpty}
                                      alt="starEmpty"
                                      className="starempty"
                                    />
                                  </p>
                                </div>
                                {/* <div className="col-lg-2 col-md-3 text-right">
                                  <button
                                    type="button"
                                    className="btn btn-outline-s"
                                  >
                                    Send Wishes
                                  </button>
                                </div> */}
                              </div>
                            </div>
                            {/* Block */}
                            {/* Block */}
                            <div className="g-row">
                              <div className="row">
                                <div className="col-lg-3 col-md-4">
                                  <div className="v-lg d-none d-lg-block">
                                    <div className="ini-gap" />
                                    <div className="name_circle color-5">D</div>
                                    <label>Degory Kirk</label>
                                  </div>
                                  <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                    <div className="row">
                                      <div className="p-3 bd-highlight">
                                        <div className="name_circle color-5">
                                          D
                                        </div>
                                      </div>
                                      <div className="p-9 bd-highlight">
                                        <label>
                                          Degory Kirk <br /> 9876543213
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-3 col-md-4">
                                  <p>
                                    Santosh Boyini &nbsp;|&nbsp; Self
                                    &nbsp;|&nbsp; 26/Dec/2020
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-1 text-center">
                                  <p>
                                    <img
                                      src={starEmpty}
                                      alt="starEmpty"
                                      className="starempty"
                                    />
                                  </p>
                                </div>
                                {/* <div className="col-lg-2 col-md-3 text-right">
                                  <button
                                    type="button"
                                    className="btn btn-outline-s"
                                  >
                                    Send Wishes
                                  </button>
                                </div> */}
                              </div>
                            </div>
                            {/* Block */}
                            {/* Block */}
                            <div className="g-row">
                              <div className="row">
                                <div className="col-lg-3 col-md-4">
                                  <div className="v-lg d-none d-lg-block">
                                    <div className="ini-gap" />
                                    <div className="name_circle color-6">C</div>
                                    <label>Clement Ebaugh</label>
                                  </div>
                                  <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                    <div className="row">
                                      <div className="p-3 bd-highlight">
                                        <div className="name_circle color-6">
                                          C
                                        </div>
                                      </div>
                                      <div className="p-9 bd-highlight">
                                        <label>
                                          Clement Ebaugh <br /> 9876543213
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-3 col-md-4">
                                  <p>
                                    Digbijay &nbsp;|&nbsp; Self &nbsp;|&nbsp;
                                    26/Dec/2020
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-1 text-center">
                                  <p>
                                    <img
                                      src={starEmpty}
                                      alt="starEmpty"
                                      className="starempty"
                                    />
                                  </p>
                                </div>
                                {/* <div className="col-lg-2 col-md-3 text-right">
                                  <button
                                    type="button"
                                    className="btn btn-outline-s"
                                  >
                                    Send Wishes
                                  </button>
                                </div> */}
                              </div>
                            </div>
                            {/* Block */}
                            <div className="g-footer text-center">
                              <button type="button" className="btn btn-primary">
                                <img src={load} alt="load" />
                                See More
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* Next Week Content Ends Here */}
                        {/* Later Content Starts Here ----------------------------------------------------------------------------------------------*/}
                        <div
                          className="tab-pane fade"
                          id="later1"
                          role="tabpanel"
                          aria-labelledby="later"
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
                                <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                  <label>
                                    Contact
                                    {/* <img src={sort} alt="sort" /> */}
                                  </label>
                                </div>
                                <div className="col-md-7">
                                  <label>
                                    Details
                                    <img src={sort} alt="sort" />
                                  </label>
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
                                <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-3 col-md-4">
                                  <p>
                                    Sangeetha &nbsp;|&nbsp; Self &nbsp;|&nbsp;
                                    26/Dec/2020
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-1 text-center">
                                  <p>
                                    <img
                                      src={starEmpty}
                                      alt="starEmpty"
                                      className="starempty"
                                    />
                                  </p>
                                </div>
                                {/* <div className="col-lg-2 col-md-3 text-right">
                                  <button
                                    type="button"
                                    className="btn btn-outline-s"
                                  >
                                    Send Wishes
                                  </button>
                                </div> */}
                              </div>
                            </div>
                            {/* Block */}
                            {/* Block */}
                            <div className="g-row">
                              <div className="row">
                                <div className="col-lg-3 col-md-4">
                                  <div className="v-lg d-none d-lg-block">
                                    <div className="ini-gap" />
                                    <div className="name_circle color-2">E</div>
                                    <label>Elisha McFadden</label>
                                  </div>
                                  <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                    <div className="row">
                                      <div className="p-3 bd-highlight">
                                        <div className="name_circle color-2">
                                          E
                                        </div>
                                      </div>
                                      <div className="p-9 bd-highlight">
                                        <label>
                                          Elisha McFadden
                                          <br /> 9876543213
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-3 col-md-4">
                                  <p>
                                    Vijay Singa &nbsp;|&nbsp; Son &nbsp;|&nbsp;
                                    26/Dec/2020
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-1 text-center">
                                  <p>
                                    <img
                                      src={starEmpty}
                                      alt="starEmpty"
                                      className="starempty"
                                    />
                                  </p>
                                </div>
                                {/* <div className="col-lg-2 col-md-3 text-right">
                                  <button
                                    type="button"
                                    className="btn btn-outline-s"
                                  >
                                    Send Wishes
                                  </button>
                                </div> */}
                              </div>
                            </div>
                            {/* Block */}
                            {/* Block */}
                            <div className="g-row">
                              <div className="row">
                                <div className="col-lg-3 col-md-4">
                                  <div className="v-lg d-none d-lg-block">
                                    <div className="ini-gap" />
                                    <div className="name_circle color-3">A</div>
                                    <label>Abel Cunningham</label>
                                  </div>
                                  <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                    <div className="row">
                                      <div className="p-3 bd-highlight">
                                        <div className="name_circle color-3">
                                          A
                                        </div>
                                      </div>
                                      <div className="p-9 bd-highlight">
                                        <label>
                                          Abel Cunningham
                                          <br /> 9876543213
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-3 col-md-4">
                                  <p>
                                    Ayesha &nbsp;|&nbsp; Mother &nbsp;|&nbsp;
                                    26/Dec/2020
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-1 text-center">
                                  <p>
                                    <img
                                      src={starEmpty}
                                      alt="starEmpty"
                                      className="starempty"
                                    />
                                  </p>
                                </div>
                                {/* <div className="col-lg-2 col-md-3 text-right">
                                  <button
                                    type="button"
                                    className="btn btn-outline-s"
                                  >
                                    Send Wishes
                                  </button>
                                </div> */}
                              </div>
                            </div>
                            {/* Block */}
                            {/* Block */}
                            <div className="g-row">
                              <div className="row">
                                <div className="col-lg-3 col-md-4">
                                  <div className="v-lg d-none d-lg-block">
                                    <div className="ini-gap" />
                                    <div className="name_circle color-4">R</div>
                                    <label>Richard Nichol</label>
                                  </div>
                                  <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                    <div className="row">
                                      <div className="p-3 bd-highlight">
                                        <div className="name_circle color-4">
                                          R
                                        </div>
                                      </div>
                                      <div className="p-9 bd-highlight">
                                        <label>
                                          Richard Nichol
                                          <br /> 9876543213
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-3 col-md-4">
                                  <p>
                                    Randal Patel &nbsp;|&nbsp; Father
                                    &nbsp;|&nbsp; 26/Dec/2020
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-1 text-center">
                                  <p>
                                    <img
                                      src={starEmpty}
                                      alt="starEmpty"
                                      className="starempty"
                                    />
                                  </p>
                                </div>
                                {/* <div className="col-lg-2 col-md-3 text-right">
                                  <button
                                    type="button"
                                    className="btn btn-outline-s"
                                  >
                                    Send Wishes
                                  </button>
                                </div> */}
                              </div>
                            </div>
                            {/* Block */}
                            {/* Block */}
                            <div className="g-row">
                              <div className="row">
                                <div className="col-lg-3 col-md-4">
                                  <div className="v-lg d-none d-lg-block">
                                    <div className="ini-gap" />
                                    <div className="name_circle color-5">D</div>
                                    <label>Degory Kirk</label>
                                  </div>
                                  <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                    <div className="row">
                                      <div className="p-3 bd-highlight">
                                        <div className="name_circle color-5">
                                          D
                                        </div>
                                      </div>
                                      <div className="p-9 bd-highlight">
                                        <label>
                                          Degory Kirk <br /> 9876543213
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-3 col-md-4">
                                  <p>
                                    Santosh Boyini &nbsp;|&nbsp; Self
                                    &nbsp;|&nbsp; 26/Dec/2020
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-1 text-center">
                                  <p>
                                    <img
                                      src={starEmpty}
                                      alt="starEmpty"
                                      className="starempty"
                                    />
                                  </p>
                                </div>
                                {/* <div className="col-lg-2 col-md-3 text-right">
                                  <button
                                    type="button"
                                    className="btn btn-outline-s"
                                  >
                                    Send Wishes
                                  </button>
                                </div> */}
                              </div>
                            </div>
                            {/* Block */}
                            {/* Block */}
                            <div className="g-row">
                              <div className="row">
                                <div className="col-lg-3 col-md-4">
                                  <div className="v-lg d-none d-lg-block">
                                    <div className="ini-gap" />
                                    <div className="name_circle color-6">C</div>
                                    <label>Clement Ebaugh</label>
                                  </div>
                                  <div className="v-md-sm-xs d-lg-none d-md-block d-sm-block">
                                    <div className="row">
                                      <div className="p-3 bd-highlight">
                                        <div className="name_circle color-6">
                                          C
                                        </div>
                                      </div>
                                      <div className="p-9 bd-highlight">
                                        <label>
                                          Clement Ebaugh <br /> 9876543213
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-md-2 d-none d-lg-block d-md-none d-sm-none d-xs-none">
                                  <p>9876543213</p>
                                </div>
                                {/* Hidden sm xs */}
                                <div className="col-lg-3 col-md-4">
                                  <p>
                                    Digbijay &nbsp;|&nbsp; Self &nbsp;|&nbsp;
                                    26/Dec/2020
                                  </p>
                                </div>
                                <div className="col-lg-2 col-md-1 text-center">
                                  <p>
                                    <img
                                      src={starEmpty}
                                      alt="starEmpty"
                                      className="starempty"
                                    />
                                  </p>
                                </div>
                                {/* <div className="col-lg-2 col-md-3 text-right">
                                  <button
                                    type="button"
                                    className="btn btn-outline-s"
                                  >
                                    Send Wishes
                                  </button>
                                </div> */}
                              </div>
                            </div>
                            {/* Block */}
                            <div className="g-footer text-center">
                              <button type="button" className="btn btn-primary">
                                <img src={load} alt="load" />
                                See More
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Later Content Ends Here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BirthdayWishes;
