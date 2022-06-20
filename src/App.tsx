import { useContext } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./widgets/Header/Header";
import Home from "./pages/Home";
import { ThemeContext } from "./contexts/ThemeContext";
import { IThemeContext } from "./util/types";
import Country from "./pages/Country/Country";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext) as IThemeContext;
  return (
    <div className={`App background-${theme}`}>
      <Router>
        <Header />
        <Routes>
          <Route element={<Country />} path="/:country" />
          <Route element={<Home />} path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
