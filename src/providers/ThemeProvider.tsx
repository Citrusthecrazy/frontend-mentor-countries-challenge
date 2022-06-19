import { useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { IThemeContextProps } from "../util/types";

const ThemeProvider = ({ children }: IThemeContextProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
