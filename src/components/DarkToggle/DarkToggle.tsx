import React from "react";
import "./DarkToggle.scss";
import { MdOutlineDarkMode } from "react-icons/md";
const DarkToggle = () => {
  return (
    <div className="dark-toggle">
      <MdOutlineDarkMode />
      <span>Dark Mode</span>
    </div>
  );
};

export default DarkToggle;
