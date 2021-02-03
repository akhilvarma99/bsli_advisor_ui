import React from "react";
export default function Toasts(props) {
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
        className="ml-2 mb-1 close"
        data-dismiss="toast"
        aria-label="Close"
      >
        <span aria-hidden="true" onClick={props.closeButton}>
          &times;
        </span>
      </button>
    </div>
    /*     </div>
     */
  );
}
