import React, { useContext } from "react";
import Container from "../../components/Container/Container";
import DarkToggle from "../../components/DarkToggle/DarkToggle";
import { ThemeContext } from "../../contexts/ThemeContext";
import { IThemeContext } from "../../util/types";
import "./Header.scss";
const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) as IThemeContext;

  return (
    <div className={`header-wrapper header-${theme}`}>
      <Container className={`header`}>
        <h1>Where in the world?</h1>
        <DarkToggle />
      </Container>
    </div>
  );
};

export default Header;
