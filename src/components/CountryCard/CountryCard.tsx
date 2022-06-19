import React, { FC } from "react";
import { numberWithCommas } from "../../util/Formatters";
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
  return (
    <div className="card-wrapper">
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
