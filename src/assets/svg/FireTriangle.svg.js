import React from "react";

const FireTriangleSvg = (props) => {
  return (
    <svg viewBox="0 0 500 400" {...props}>
      <path
        fill="none"
        stroke="#157dfa"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6"
        d="M249.68 18.87L18.06 380.33M481.92 380.28L249.86 19.11 133.87 199.6l115.95 181.15M482 380.18l-464 .95M133.87 199.6h231.9M362.08 199.6L249.82 380.75"
      />
      <text
        className="svg-text"
        fontWeight="Bold"
        transform="translate(208 160)"
        fontFamily="Verdana"
      >
        Heat
      </text>
      <text
        className="svg-text"
        fontWeight="Bold"
        transform="translate(98 339)"
        fontFamily="Verdana"
      >
        Fuel
      </text>
      <text
        className="svg-text"
        fontWeight="Bold"
        transform="translate(298 339)"
        fontFamily="Verdana"
      >
        Oxygen
      </text>
      <path
        d="M260.29 304.62c7.72-.89 16.86-6.24 21.63-12.81 6.91-9.52 8.17-19.79 3.92-30.78-1.95-5-4.25-10-3.83-15.92a.21.21 0 00-.36-.17c-.38.34-.66.58-.91.85a15.66 15.66 0 00-4.21 7.89c-.67 3.23-.92 6.54-1.44 9.81-.06.41-.46.77-.76 1.14a.22.22 0 01-.29 0c-.35-.25-.79-.48-.85-.79-1-4.89-3.65-9-6.35-13.1-1.58-2.37-3.14-4.76-4.5-7.25a18.35 18.35 0 01-1.12-16.23 94 94 0 014.4-8.59 9.75 9.75 0 01.76-1.17l-.42-.66c-2.32.39-4.66.69-6.93 1.27-21.52 5.5-35.72 26.71-33 49.17a3.58 3.58 0 01-.44 1.55.21.21 0 01-.28.13 4.07 4.07 0 01-1.36-.7 22.43 22.43 0 01-6.33-13.48 76.11 76.11 0 01-.05-8.42.22.22 0 00-.35-.18.05.05 0 000 0c-.19.33-.36.67-.53 1a54.4 54.4 0 00-5.29 26.33c.77 15.75 10.13 27.06 25.48 30.67.53.13 1.07.26 1.61.37l1.82.31a59 59 0 0019.98-.24z"
        fill="none"
        stroke="#157dfa"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6"
      />
      <path
        d="M236.09 267.31c.94 4.39 3.4 8 5.7 11.74.82 1.33 1.41 2.8 2.21 4.15.2.35.77.47 1.18.69.22-.4.69-.84.63-1.2-.79-4.94.45-9.52 2.33-14 .36-.86.71-1.72 1.07-2.59 1.78-4.24 3.16-8.54 1.45-13.21l.39-.26c2.14 1.89 4.44 3.64 6.39 5.71 6.57 7 10.07 15.28 9.89 24.91a26.78 26.78 0 01-1.41 8c-2.37 7.1-7.3 11.38-14.9 12-7 .55-11.92-3.1-15.44-8.74-4-6.38-4.16-13.33-2.25-20.41.62-2.32 1.55-4.55 2.35-6.82z"
        fill="none"
        stroke="#157dfa"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6"
      />
    </svg>
  );
};

export default FireTriangleSvg;
