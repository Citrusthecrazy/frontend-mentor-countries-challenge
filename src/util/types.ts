export interface IThemeContext {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export interface IThemeContextProps {
  children: JSX.Element | JSX.Element[] | string;
}
export interface ITheme {
  theme: "dark" | "light";
}
