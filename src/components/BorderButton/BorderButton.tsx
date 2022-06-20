import React, { FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCountryByCode } from "../../util/Countries";
import { ICountry, IThemeContext } from "../../util/types";
import "./BorderButton.scss";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
interface IBorderButton {
  country: string;
}
const BorderButton: FC<IBorderButton> = ({ country }) => {
  const [borderCountry, setBorderCountry] = useState<ICountry>();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext) as IThemeContext;
  useEffect(() => {
    getCountryByCode(country).then((res) => setBorderCountry(res));
  }, []);

  return (
    <Link
      to={`/${borderCountry?.name.common}`}
      className={`border-button-wrapper border-button-${theme}`}>
      {borderCountry?.name.common}
    </Link>
  );
};

export default BorderButton;
