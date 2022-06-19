import React, { useContext } from "react";
import "./BackButton.scss";
import { BsArrowLeftShort } from "react-icons/bs";
import { ThemeContext } from "../../contexts/ThemeContext";
import { IThemeContext } from "../../util/types";
const BackButton = () => {
  const { theme } = useContext(ThemeContext) as IThemeContext;
  return (
    <div className={`back-button back-button-${theme}`}>
      <BsArrowLeftShort />
      <span>Back</span>
    </div>
  );
};

export default BackButton;
