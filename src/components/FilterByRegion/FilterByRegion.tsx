import React, { FC, useContext, useState } from "react";
import "./FilterByRegion.scss";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import useClickOutside from "../../hooks/useClickOutside";
import { ThemeContext } from "../../contexts/ThemeContext";
import { IThemeContext } from "../../util/types";

interface IFilter {
  value?: string;
  setValue: (value: string) => void;
}

const FilterByRegion: FC<IFilter> = ({ value, setValue }) => {
  const [open, setOpen] = useState(false);
  const selectRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  useClickOutside(selectRef, () => setOpen(false));

  const { theme, toggleTheme } = useContext(ThemeContext) as IThemeContext;

  const handleSetValue = (value: string) => {
    setValue(value);
    setOpen(false);
  };
  return (
    <div className={`filter filter-${theme}`} ref={selectRef}>
      <div className="filter-wrapper" onClick={() => setOpen(!open)}>
        <span>{value === "" ? "Filter by Region" : value}</span>
        {open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </div>
      <div
        className={`filter-options ${open ? "filter-open" : "filter-closed"}`}>
        <ul>
          <li onClick={() => handleSetValue("Africa")}>Africa</li>
          <li onClick={() => handleSetValue("America")}>America</li>
          <li onClick={() => handleSetValue("Asia")}>Asia</li>
          <li onClick={() => handleSetValue("Europe")}>Europe</li>
          <li onClick={() => handleSetValue("Oceania")}>Oceania</li>
        </ul>
      </div>
    </div>
  );
};

export default FilterByRegion;
