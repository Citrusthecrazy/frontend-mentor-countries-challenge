import React, { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { numberWithCommas } from "../../util/Formatters";
import { IThemeContext } from "../../util/types";
import "./CountryCard.scss";

interface ICard {
  imageSrc?: string;
  countryName: string;
  population: number;
  region: string;
  capital: string;
}

const CountryCard: FC<ICard> = ({
  imageSrc,
  countryName,
  population,
  region,
  capital,
}) => {
  const { theme, toggleTheme } = useContext(ThemeContext) as IThemeContext;
  const navigate = useNavigate();
  return (
    <div
      className={`card-wrapper card-${theme}`}
      onClick={() => navigate(`/${countryName}`)}>
      <img src={imageSrc} alt={countryName} />
      <div className="card-info">
        <h1>{countryName}</h1>
        <p>
          Population: <span>{numberWithCommas(population)}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
