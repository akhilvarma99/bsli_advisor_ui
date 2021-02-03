import React from "react";

export default function Dropdown(props) {
  console.log(props);

  return (
    <div className="filterDropdown">
      <button
        className="filterDropdownButton collapsed"
        type=""
        id=""
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {props.options[1]}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
        {props.options.map((option, index) => (
          <React.Fragment key={index}>
            <li className="filterButton" type="button">
              {option}
            </li>
            {index + 1 < props.options.length ? (
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
