import React, { FC, useContext } from "react";
import "./SearchCountry.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { ThemeContext } from "../../contexts/ThemeContext";
import { IThemeContext } from "../../util/types";
interface IFilter {
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchCountry: FC<IFilter> = ({
  type = "text",
  value = undefined,
  onChange,
}) => {
  const { theme, toggleTheme } = useContext(ThemeContext) as IThemeContext;
  return (
    <div className={`search-country search-${theme}`}>
      <AiOutlineSearch />
      <input
        placeholder="Search for a country..."
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchCountry;
