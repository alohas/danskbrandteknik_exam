import React from "react";

const ExtSvg = (props) => {
  return (
    <svg viewBox="0 0 500 500" {...props}>
      <g fill="none" stroke="#0074e1" stroke-width="20.545">
        <path
          stroke-miterlimit="10"
          d="M362.16 473.5H241.43a22.68 22.68 0 01-22.68-22.68V178.5a75.24 75.24 0 0122-53.55c34.86-34.5 94.61-30.3 124.53 9.82A70.33 70.33 0 01379 176.83v279.83a16.84 16.84 0 01-16.84 16.84zM219.05 190.27H379.3M219.05 425.07H379.3M105.92 249.56h13a14.27 14.27 0 0114.17 12.56l17.69 147a14.27 14.27 0 01-14.17 16H86.25a14.27 14.27 0 01-14.14-16.16l19.66-147a14.28 14.28 0 0114.15-12.4z"
        />
        <circle cx="299.47" cy="62.31" r="35.81" stroke-miterlimit="10" />
        <path
          stroke-miterlimit="10"
          d="M264.83 53.5C169 58.82 121 128.25 111.63 249.56"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M334.1 53.5c38.84 7.65 72.23 29.72 93.92 82.77"
        />
      </g>
    </svg>
  );
};

export default ExtSvg;
