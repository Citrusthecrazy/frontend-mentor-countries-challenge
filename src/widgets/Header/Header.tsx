import React from "react";
import Container from "../../components/Container/Container";
import DarkToggle from "../../components/DarkToggle/DarkToggle";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header-wrapper">
      <Container className="header">
        <h1>Where in the world?</h1>
        <DarkToggle />
      </Container>
    </div>
  );
};

export default Header;
