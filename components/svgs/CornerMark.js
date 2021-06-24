import React from "react";

const CornerMark = ({ mid, out, inner, ...props }) => (
  <svg
    {...props}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 280 280"
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill={mid}
        stroke={out}
        strokeWidth="15"
        d="M280.707-270.115L550.47-.354 280.707 269.407 10.947-.353z"
      ></path>
      <path
        fill={inner}
        d="M299.27-261.1L541.1-19.268l-241.83 241.83L57.438-19.268z"
      ></path>
    </g>
  </svg>
);

CornerMark.defaultProps = {
  out: "#E46B29",
  mid: "#323435",
  inner: "#0A0B09",
};

export default CornerMark;
