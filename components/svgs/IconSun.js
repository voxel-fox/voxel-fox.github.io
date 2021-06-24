import React from "react";
import IconBase from "components/svgs/IconBase";

const IconSun = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </IconBase>
);

export default IconSun;
