import React, { useContext } from "react";
import "./BackButton.scss";
import { BsArrowLeftShort } from "react-icons/bs";
import { ThemeContext } from "../../contexts/ThemeContext";
import { IThemeContext } from "../../util/types";
import { useNavigate } from "react-router-dom";
const BackButton = () => {
  const { theme } = useContext(ThemeContext) as IThemeContext;
  const navigate = useNavigate();
  return (
    <div
      className={`back-button back-button-${theme}`}
      onClick={() => navigate("/")}>
      <BsArrowLeftShort />
      <span>Back</span>
    </div>
  );
};

export default BackButton;
