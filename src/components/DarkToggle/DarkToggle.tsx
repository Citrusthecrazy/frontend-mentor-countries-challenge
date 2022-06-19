import React, { useContext, useEffect } from "react";
import "./DarkToggle.scss";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../../contexts/ThemeContext";
import { IThemeContext } from "../../util/types";
const DarkToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) as IThemeContext;

  return (
    <div className="dark-toggle" onClick={toggleTheme}>
      {theme === "light" ? <MdOutlineDarkMode /> : <MdDarkMode />}
      <span>Dark Mode</span>
    </div>
  );
};

export default DarkToggle;
