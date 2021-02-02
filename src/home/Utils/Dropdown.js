import React from "react";

export default function Dropdown(props) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-s"
        type="button"
        id="dropdownMenu2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {props.title}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
        {props.items.map((item, index) => (
          <>
            <li
              className="iconButton"
              onClick={() => props.function}
              type="button"
            >
              <img src={item.logo} />
              {item.title}
            </li>
            {index + 1 < props.items.length ? (
              <div classNameName="line"></div>
            ) : (
              <></>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
