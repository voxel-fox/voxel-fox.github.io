import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import IconMoon from "components/svgs/IconMoon";
import IconSun from "components/svgs/IconSun";
import IconSunRise from "components/svgs/IconSunRise";
import IconSunSet from "components/svgs/IconSunSet";

import * as S from "styles/utils";

const DarkModeToggle = () => {
  const [hover, setHover] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const IconDark = hover ? IconSunRise : IconMoon;
  const IconLight = hover ? IconSunSet : IconSun;
  const IconMode = theme === "dark" ? IconDark : IconLight;

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      css={[S.baseBtn, S.absolute, S.top0, S.left0, S.p5, S.pointer]}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      title={`Switch to ${"dark" ? "Light" : "Dark"} Mode`}
    >
      <IconMode css={S.w30px} />
    </button>
  );
};

export default DarkModeToggle;
