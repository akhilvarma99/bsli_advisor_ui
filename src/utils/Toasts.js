import React from "react";
export default function Toasts(props) {
  const closeButton = () => {
    document.getElementById("toastBlock").classList.remove("showToast");
  };
  return (
    /*  <div
      aria-live="polite"
      aria-atomic="true"
      style={{ position: "relative", minHeight: "200px" }}
    > */
    <div id="toastBlock" className="toast">
      {/* <img src= className="rounded mr-2" alt="..." /> */}
      <strong class="messageText">{props.message}</strong>
      <button
        type="button"
        className="ml-2 mb-1 custom_close close"
        data-dismiss="toast"
        aria-label="Close"
      >
        <span aria-hidden="true" onClick={closeButton}>
          &times;
        </span>
      </button>
    </div>
  );
}
/* <Dropdown
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
              /> */
