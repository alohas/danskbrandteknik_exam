import React from "react";

//Styles
import "./Loader.scss";

function Loader() {
  return (
    <div id="Loader">
      <svg viewBox="0 0 252.12 260.22" className="loader-icon">
        <path
          d="M58.72,117.68a96.84,96.84,0,0,1,182.56,0h34.78a130.15,130.15,0,0,0-252.12,0Z"
          transform="translate(-23.94 -19.89)"
        />
        <path
          d="M241.28,182.32a96.84,96.84,0,0,1-182.56,0H23.94a130.15,130.15,0,0,0,252.12,0Z"
          transform="translate(-23.94 -19.89)"
        />
        <circle cx="126.06" cy="130.11" r="21.09" />
      </svg>
    </div>
  );
}

export default Loader;
