import React from "react";
import Dropdown from "./Dropdown";

export default function Card(props) {
  return (
    <div>
      <div className="smart-card shadow-normal">
        {/* <div className="yellow-flag">
                <img
                    src={premiumDueIcon}
                    alt="premiumDueIcon"
                />
            </div> */}
        <div className="row ">
          <div className="col-lg-12 d-flex justify-content-between">
            <h3>{props.cardInfo.cardTitle}</h3>
            <div className="today">{props.cardInfo.headerTitle}</div>
          </div>
        </div>
        <div className="row pad-10 card-body">
          <div className="col-2" style={{ padding: "0px" }}>
            <img src={props.cardInfo.icon} alt="premiumDueIcon" />
          </div>
          <div className="col-10" style={{ paddingLeft: "0px" }}>
            <p>
              {props.cardInfo.bodyTitle}
              <br />
              <span>{props.cardInfo.body}</span>
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p className="cardStatus mt-0">{props.cardInfo.status}</p>
          <div className="row">
            <div className="col-lg-12 text-right">
              {props.cardInfo.buttonText == "Send Payment Link" ? (
                <Dropdown
                  title={props.cardInfo.buttonText}
                  items={[
                    {
                      logo: "",
                      title: "Copy link",
                      anvesh: props.openToast,
                      message: "Success: Link copied",
                    },
                    {
                      logo: "",
                      title: "Send Email",
                      anvesh: props.openToast,
                      message: "Success: Payment Link sent",
                    },
                  ]}
                />
              ) : (
                <button className="btn btn-outline-s">
                  {props.cardInfo.buttonText}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
