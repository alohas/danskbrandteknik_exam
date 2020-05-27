import React from "react";

const AlarmSvg = (props) => {
  return (
    <svg viewBox="0 0 500 500" {...props}>
      <g fill="none" stroke="#0074e1" stroke-width="19.234">
        <circle cx="250.89" cy="204.39" r="167.89" stroke-miterlimit="10" />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M157.19 109.59c62.07-48.7 123.8-49.47 185.2 0"
        />
        <circle
          cx="249.79"
          cy="204.39"
          r="43.14"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle
          cx="452.57"
          cy="274.18"
          r="18.41"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M452.85 317.87c-16.49 30.22-16.49 30.22-45.07 53.31M418.77 109.59c19.28 25.48 27 57.56 25.28 95.07M433.61 79.91C463 122.28 477 169.12 469.33 222.25M57.4 199.78c-5.24 31.51 2.79 63.52 21.75 95.94M30.48 180.38c-6.34 51.16 3 99.14 34.44 142.65M120.92 349.19V463.5h258.84V349.19c-60.99 73.55-211.02 66.81-258.84 0z"
        />
      </g>
    </svg>
  );
};

export default AlarmSvg;
