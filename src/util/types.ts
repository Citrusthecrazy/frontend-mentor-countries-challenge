export interface ICountry {
  name: {
    common: string;
    nativeName: any;
  };
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  region: string;
  subregion: string;
  languages: Array<object>;
  capital: Array<string>;
  tld: Array<string>;
  currencies: Array<object>;
  borders: Array<string>;
}

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
