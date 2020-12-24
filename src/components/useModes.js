import { useState, useEffect } from "react";

export const useModes = () => {
  const [theme, setTheme] = useState("light");

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
    console.log("toggle mode");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localStorage) : setTheme("light");
    console.log("useModes useEffect");
  }, []);

  return [theme, themeToggler];
};
