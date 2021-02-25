import React from "react";

export default function Dropdown(props) {
  console.log(props);

  return (
    <div className="dropdown ">
      <button
        className="btn btn-outline-s w-144"
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
          <React.Fragment key={index}>
            <li
              className="iconButton"
              onClick={() => item.anvesh(item.message)}
              type="button"
            >
              <img src={item.logo} />
              {item.title}
            </li>
            {index + 1 < props.items.length ? (
              <div className="line"></div>
            ) : (
              <></>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
