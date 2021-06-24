import React from "react";

const IconBase = ({ stroke, children, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    role={"img"}
  >
    {children}
  </svg>
);

IconBase.defaultProps = {
  stroke: "currentColor",
};

export default IconBase;
