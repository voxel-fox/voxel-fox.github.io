import React from "react";

const Avatar = ({ color, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    role={"img"}
  >
    <path
      fill={color}
      d="M85.2 20.2v-10h-5v-5h-5v-5h-65v4.9h-5V10h-5l.1 60.2h4.8V80h10v-4.8h5v-10h10V95h-4.8v5h9.8v-4.8h5v4.8h25v-4.8h-4.8v-10h-5v-20h9.9V75h5v5h5v-4.9h5v-4.9h5V75H90V20.2zm-64.9 10h4.8V40h-4.8zM50.1 70v5h-9.9v-5h-4.9v-5h9.9v5zm-10 5v5h-4.8v-5zm15 19.9h-9.8v-4.8h-10v-5h4.9v-5h5V85h5v5H55zm20-50h-4.9v10h-5v5h-40v-4.8h-10v-5h-4.9v-15h4.9V45h15V25.2h-5v-5h5v-5h5v-10h15v4.9h10v5h5v5h5v15H75z"
    ></path>
    <path
      fill={color}
      d="M50.3 45H65V25.3H50.3zm5-14.8H60V40h-4.8zM35.3 55h9.8v-4.8h-9.8z"
    ></path>
  </svg>
);

Avatar.defaultProps = {
  color: "currentColor",
};

export default Avatar;
