import { useEffect, useState } from "react";

const modes = ["dark", "light"];

const getSavedColor = () => {
  if (typeof window === "undefined") {
    return undefined;
  }

  const savedPref = window.localStorage.getItem("color-mode");
  return typeof savedPref === "string" && modes.includes(savedPref)
    ? savedPref
    : undefined;
};

const useColorMode = () => {
  const colorPref = getSavedColor();
  const [colorMode, setColorMode] = useState(colorPref);

  useEffect(() => {
    console.log("new color!", colorMode);
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;
