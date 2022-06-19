import React, { FC } from "react";
import "./SearchCountry.scss";
import { AiOutlineSearch } from "react-icons/ai";
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
  return (
    <div className="search-country">
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
